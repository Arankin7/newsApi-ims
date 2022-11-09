import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import moment from "moment";

function ArticleSearch() {

    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const handleChange = event => {
        setUserInput(event.target.value);

        console.log('searching for: ', event.target.value);
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
            <input type="text" placeholder="Yummy Tacos" value={userInput} onChange={handleChange}></input>
            <Button variant="primary" onClick={UserSearch}>Search</Button>

            {searchResults && searchResults.map((article, index) => (
                <Container key={index}>
                <Card style={{width: '18rem'}}>                
                <Card.Header>Source: {article.source.name}</Card.Header>
                    <Card.Body>
                        <div><i>{moment(article.publishedAt).utc().format('MMMM Do YYYY')}</i></div>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                        <Card.Text>{article.description}</Card.Text>
                        <Button variant="primary" href={article.url} target="_blank">
                            Read More
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            ))}
        </div>
    )
}

export default ArticleSearch;