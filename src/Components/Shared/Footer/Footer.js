import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Image, Nav, Row } from 'react-bootstrap';
import medLogo from '../../../Images/med-perfect.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer>
            <Container className="my-5 pt-5">
                <Row>
                    <Col lg={5} md={6} sm={12} className="mb-3">
                        <h5>Make an Appointment</h5>
                        <div className="mt-3">
                            <Image className="med-logo mb-2" src={medLogo} />
                            <p>Getting an accurate diagnosis can be one of the most impactful experiences that you can have.</p>
                            <Link to="/appointment"><Button variant="primary" className="px-4 ">Make an Appointment</Button></Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="mb-3">
                        <h5>Contact Info</h5>
                        <div className="flex-column mt-3">
                            <p className="fs-6"><FontAwesomeIcon icon={faLocationArrow} className="text-primary me-2" /> Jl. Niti Mandala, Birminghum, AL</p>
                            <p className="fs-6"><FontAwesomeIcon icon={faPhone} className="text-primary me-2" /> +1 9543 436 2355</p>
                            <p className="fs-6"><FontAwesomeIcon icon={faEnvelope} className="text-primary me-2" /> contact@med-perfect.web.app</p>
                        </div>
                    </Col>
                    <Col lg={2} md={6} sm={12} className="mb-3">
                        <h5>Quick Links</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/appointment">Book an Appointment</Nav.Link>
                        </Nav>
                    </Col>
                    <Col lg={2} md={6} sm={12} className="mb-3">
                        <h5>Others</h5>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/sign-up">Create an Account</Nav.Link>
                            <Nav.Link target="_blank" href="https://www.who.int/">WHO</Nav.Link>
                            <Nav.Link target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines">Covid-19</Nav.Link>

                        </Nav>
                    </Col>
                </Row>
            </Container>
            <Container className="border-top border-secondary pt-3">
                <p className="text-secondary text-center">&copy;2022 MedPerfect | All rights reserved</p>
            </Container>
        </footer>
    );
};

export default Footer;