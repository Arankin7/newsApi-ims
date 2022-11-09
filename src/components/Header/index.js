import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';

function Header() {

    return (
        
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NewsApi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={"/search"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Search</Link></Nav.Link>
                    <Nav.Link>Random?</Nav.Link>
                    <NavDropdown title="Sort" menuVariant="dark" drop="start">
                        <NavDropdown.Item>Alphabetically</NavDropdown.Item>
                        <NavDropdown.Item>Published Date</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;