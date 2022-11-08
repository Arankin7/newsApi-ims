import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function TopStories(){

    return (
        <div>
        <h2>Trending Topics</h2>
        
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
        </div>
    );
}

export default TopStories;