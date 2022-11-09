import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import moment from "moment/moment";

function RandomArticle () {
    const [randomArticle, setRandomArticle] = useState(null);
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c87e1b0769754cf8b8d9d87b5f2da311';

    React.useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                let index = Math.floor(Math.random() * data.articles.length);
                setRandomArticle(data.articles[index]);
                console.log('Random Article: ',data.articles[index]);
            })
    }, []);

    return (
        <div>
            <div>
                <h2>Trending Topics</h2>
                <Button variant="dark" onClick="window.location.reload()">Refresh</Button>
            </div>

            <Row className="justify-content-md-center">
            <Col sm="auto">
                <Container key={randomArticle.name}>
                <Card bg="light" style={{width: '18rem'}}>                
                <Card.Header>Source: {randomArticle.source.name}</Card.Header>
                    <Card.Body>
                        
                        <Card.Title>{randomArticle.title}</Card.Title>
                        <Card.Img variant="top" src={randomArticle.urlToImage}></Card.Img>
                        <Card.Text>{randomArticle.description}</Card.Text>
                        <Card.Link variant="primary" href={randomArticle.url} target="_blank">
                            Read More
                        </Card.Link>
                    </Card.Body>
                    <Card.Footer><i>{moment(randomArticle.publishedAt).utc().format('MMMM Do YYYY')}</i></Card.Footer>
                </Card>
                </Container>
            </Col>
            </Row>      
        </div>
    );
}

export default RandomArticle;