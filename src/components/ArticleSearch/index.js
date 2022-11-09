import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moment from "moment";

function ArticleSearch() {

    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState('');

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
        'Cryptocurrency'
    ];
    // Pulls a random index from list of placeholders
    const randomPlaceholder = inputPlaceholders[Math.floor(Math.random() * inputPlaceholders.length)];

    const handleChange = event => {
        setUserInput(event.target.value);
        console.log('searching for: ', event.target.value);

        UserSearch(event.target.value);
    }

    // const userInput = document.getElementById("userInput").value;
    const apiUrl = 'https://newsapi.org/v2/everything?q='+ userInput + '&apiKey=2b7c3079f57b4775b9829a555f91c54d';

    function UserSearch(userInput){
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log('articles searched for: ', data);
                setSearchResults(data.articles);
            });
    }

    return (
        <div>
            <h1>Search for Articles</h1>
            <input type="text" placeholder={randomPlaceholder} value={userInput} onChange={handleChange}></input>
            <Button variant="primary" onClick={UserSearch}>Search</Button>

            <Row className="justify-content-md-center">
            {searchResults && searchResults.map((article, index) => (
            <Col sm="auto">
            <Container key={index}>
                <Card style={{width: '18rem'}}>                
                    <Card.Header>Source: {article.source.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                            <Card.Text>{article.description}</Card.Text>
                            <Button variant="primary" href={article.url} target="_blank">
                                Read More
                            </Button>
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