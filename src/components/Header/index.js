import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NewsApi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Search</Nav.Link>
                    <Nav.Link>Random?</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;