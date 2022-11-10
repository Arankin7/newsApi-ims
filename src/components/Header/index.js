import React, {useContext} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';
import SortContext from "../../sortContext";

export const alphaAsc = 'AlphabetAscending';
export const alphaDes = 'AlphabetDescending';

export const pubAsc = 'PublishedAscending';
export const pubDes = 'PublishedDescending';

function Header() {

    const {ChooseSort} = useContext(SortContext);

    return (
        
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>NewsApi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link to={"/"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></Nav.Link>
                    <Nav.Link><Link to={"/search"} style={{ color: 'inherit', textDecoration: 'inherit'}}>Search</Link></Nav.Link>
                    <NavDropdown title="Sort" menuVariant="dark" drop="start" onSelect={(selectedKey => ChooseSort(selectedKey))}>
                        <NavDropdown.Item eventKey={alphaAsc}>Alphabetically Ascending</NavDropdown.Item>
                        <NavDropdown.Item eventKey={alphaDes}>Alphabetically Descending</NavDropdown.Item>
                        <NavDropdown.Item eventKey={pubAsc}>Published Date: Newest First</NavDropdown.Item>
                        <NavDropdown.Item eventKey={pubDes}>Published Date: Oldest First</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;