import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TopStories(){

    const apiSearch = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=2b7c3079f57b4775b9829a555f91c54d';

    function TrendingSearch() {
        fetch(apiSearch)
            .then(res => res.json())
            .then(data => {
                console.log('Trending now: ',data);
            })
    }

    return (
        <div>
            <div>
                <h2>Trending Topics</h2>
            </div>

            <Button onClick={TrendingSearch}>Search</Button>

            <Container>
                <Card style={{width: '18rem'}}>
                <Card.Header>Source: Date:</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <h3>Article Title</h3>
                        </Card.Title>
                        <Card.Text>Article Description</Card.Text>
                        <Button variant="primary">
                            Go to article site
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        
        </div>
    );
}

export default TopStories;