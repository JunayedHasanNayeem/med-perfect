import React from 'react';
import { Button, Container, Image, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import medLogo from '../../../Images/med-perfect.png'
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" className="med-header" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/"><Image className="med-logo" src={medLogo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>

                        </Nav>
                        <Nav>

                            {
                                user.email ?
                                    <div className="d-flex align-items-center">
                                        <Nav>Welcome, {user.displayName}</Nav>
                                        <Nav.Link onClick={logOut}><Button variant="dark" className="px-3 ms-2">Sign Out</Button></Nav.Link>
                                    </div>
                                    :
                                    <div className="d-flex align-items-center">
                                        <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                                        <Nav.Link as={Link} to="/sign-in"><Button variant="primary" className="px-3 ms-2">Sign In</Button></Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    );
};

export default Header;