import React, {useState, useContext} from "react";
import SortContext from "../../sortContext"; 
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from "moment";
import { apiKey } from "../../App";

function ArticleSearch() {

    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const {SortResults} = useContext(SortContext);

    // List of words for a random placeholder
    const inputPlaceholders = [
        'Star Wars',
        'Lord of The Rings',
        'Weather',
        'Gas Prices',
        'Best Tacos',
        'Yard Sales',
        'CNN',
        'Fox News',
        'The Verge',
        'Cryptocurrency',
        'Tesla',
        'Apple',
        'Microsoft'
    ];
    // Pulls a random index from list of placeholders
    const randomPlaceholder = inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length)];

    React.useEffect(() => {
        UserSearch(); 
    }, [SortResults]);

    const handleChange = event => {
        setUserInput(event.target.value);
        UserSearch(event.target.value);
    }

    const apiUrl = 'https://newsapi.org/v2/everything?q='+ userInput + '&apiKey=' + apiKey;

    function UserSearch(userInput){
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log('articles searched for: ', data);
                SortResults(data, setSearchResults);
            });
    }

    return (
        <div>
            <div className="titleContainer">
            <h2 className="titleText">Search for Articles</h2>
            <input type="text" placeholder={randomPlaceholder} value={userInput} onChange={handleChange}></input>
            <button className="searchBtn" onClick={UserSearch}>Search</button>
            </div>
            <Row>
            {searchResults && searchResults.map((article, index) => (
            <Col sm="auto">
            <Container key={index} className="articleContainer">
                <Card bg="light" style={{width: '22rem'}} className="boxShadow">                
                    <Card.Header>Source: {article.source.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                            <Card.Text>{article.description}</Card.Text>
                            <a href={article.url} rel="noreferrer" target="_blank"><button className="readMoreBtn">
                                Read More
                            </button></a>
                        </Card.Body>
                    <Card.Footer><i>{moment(article.publishedAt).utc().format('MMMM Do YYYY')}</i></Card.Footer>
                </Card>
            </Container>
            </Col>       
            ))}
            </Row>
        </div>
    )
}

export default ArticleSearch;