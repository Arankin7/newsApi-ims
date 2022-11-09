import React, {useState} from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TopStories(){
    const [trendingArticles, setTrendingArticles] = useState(null);
    const apiSearch = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2b7c3079f57b4775b9829a555f91c54d';

    function TrendingSearch() {
        fetch(apiSearch)
            .then(res => res.json())
            .then(data => {
                console.log('Trending now: ',data.articles);
                setTrendingArticles(data.articles);
            })
    }

    return (
        <div>

            <div>
                <h2>Trending Topics</h2>
                <Button onClick={TrendingSearch}>Search</Button>
            </div>

            {trendingArticles && trendingArticles.map((article, index) => (
                <Container key={index}>
                <Card style={{width: '18rem'}}>                
                <Card.Header>Source: {article.source.name}</Card.Header>
                    <Card.Body>
                        <div><i>{article.publishedAt}</i></div>
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
    );
}

export default TopStories;