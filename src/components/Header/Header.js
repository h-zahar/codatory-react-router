import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
        <div style={{ position:"sticky", top:"0", zIndex:"1" }}>
            <nav>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="px-5 py-3">
                        <LinkContainer exact to="/">
                            <Navbar.Brand className="ms-5">Codatory</Navbar.Brand>
                        </LinkContainer>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto me-5">
                            <LinkContainer exact to="/">
                                <Nav.Link className="me-3">Home</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/services">
                                <Nav.Link className="me-3">Services</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link className="me-3">About</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                            
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    )
}

export default Header;