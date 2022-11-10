import React, {useState, useContext} from "react";
import SortContext from "../../sortContext";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import moment from "moment/moment";

import { alphaAsc, alphaDes, pubAsc, pubDes } from "../Header"

function TopStories(){
    const [trendingArticles, setTrendingArticles] = useState(null);
    const apiSearch = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=17caf3e26a8d4ddb94101e3243f24804';

    const {SortResults} = useContext(SortContext);

    React.useEffect(() => {
        fetch(apiSearch)
            .then(res => res.json())
            .then(data => {
                SortResults(data, setTrendingArticles);
            })
    }, []);
    
    return (
        <div>
            <div>
                <h2>Trending Topics</h2>
                <Button variant="dark" onClick="window.location.reload()">Refresh</Button>
            </div>

            <Row className="justify-content-md-center">
            {trendingArticles && trendingArticles.map((article, index) => (
            <Col sm="auto">
                <Container key={index}>
                <Card bg="light" style={{width: '18rem'}}>                
                <Card.Header>Source: {article.source.name}</Card.Header>
                    <Card.Body>
                        
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                        <Card.Text>{article.description}</Card.Text>
                        <Card.Link variant="primary" href={article.url} target="_blank">
                            Read More
                        </Card.Link>
                    </Card.Body>
                    <Card.Footer><i>{moment(article.publishedAt).utc().format('MMMM Do YYYY')}</i></Card.Footer>
                </Card>
                </Container>
            </Col>
            ))}
            </Row>      
        </div>
    );
}

export default TopStories;