import React, {useState, useContext} from "react";
import SortContext from "../../sortContext";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import moment from "moment/moment";
import { apiKey } from "../../App";

function TopStories(){
    const [trendingArticles, setTrendingArticles] = useState(null);
    const apiSearch = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;

    const {SortResults} = useContext(SortContext);

    React.useEffect(() => {
        TrendingStories();
    },[SortResults]);

    function TrendingStories() {
        fetch (apiSearch)
            .then(res => res.json())
            .then(data => {
                SortResults(data, setTrendingArticles);
            });
    }
    
    return (
        <div>
            <Row className="titleContainer">
                <Col>
                    <h2 className="titleText">Trending Articles</h2>
                </Col>
            </Row>

            <Row>
            {trendingArticles && trendingArticles.map((article, index) => (
            <Col>
                <Container key={index} className="articleContainer">
                <Card bg="light" style={{width: '22rem'}} className="boxShadow">                
                <Card.Header>Source: {article.source.name}</Card.Header>
                    <Card.Body>
                        
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Img variant="top" src={article.urlToImage}></Card.Img>
                        <Card.Text>{article.description}</Card.Text>
                        <a href={article.url} rel="noreferrer" target="_blank"><button className="readMoreBtn" >
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
    );
}

export default TopStories;