import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faUserMd, faStethoscope, faHistory, faClock, faTwitter } from '@fortawesome/free-solid-svg-icons';
import "./Home.css"
import bannerImg from '../../Images/img-6.png'
import doctorImg2 from '../../Images/img-4.jpg'

const Home = () => {
    return (
        <main>


            {/* Home top banner */}
            <div className="med-home-top-banner">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="d-flex align-items-center py-5">
                            <div>
                                <h1 className="bold-heading text-light">Find the right <br /> Medication for you</h1>
                                <p className="text-light my-4">Getting an accurate diagnosis can be one of the most impactful experiences. that you can have — especially if you’ve been in search of that answer for a while. We can help you get there.
                                </p>

                                <Link to="/about"><Button variant="light" className="px-4 py-2 me-2">About Us</Button></Link>
                                <Link to="/appointment"><Button variant="outline-light" className="px-4 py-2">Appointment</Button></Link>

                            </div>
                        </Col>
                        <Col md={6} sm={12} className="pt-5">
                            <img src={bannerImg} alt="Doctors" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Services area */}
            <Container className="my-5">
                <h2 className="text-center fs-1 mb-5">Our Services</h2>
                <Services ></Services>
            </Container>

            {/* Medication Section start */}
            <Container className="my-5">
                <Row>
                    <Col md={6} sm={12}>
                        <img src={doctorImg2} alt="Doctors" className="w-75 mb-3" />
                    </Col>
                    <Col md={6} sm={12} className="d-flex align-items-center">
                        <div>
                            <h1>Find the right Medication for you</h1>
                            <p className="mt-3 mb-5">Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there.</p>
                            <Link to="/appointment"><Button variant="primary" className="py-2 px-4">Book an Appointment</Button></Link>

                        </div>

                    </Col>
                </Row>
            </Container>
            {/* Medication Section end */}

            {/* Why Us - Area start*/}
            <Container className="my-5">
                <h2 className="text-center fs-1 mb-5">Why Us?</h2>
                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Card className="p-4 shadow-sm">
                                    <div className="med-icon d-flex align-items-center justify-content-center mb-3">
                                        <FontAwesomeIcon icon={faHospital} className="fs-4" />
                                    </div>
                                    <h5>Diagnostic Services</h5>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Card className="p-4 shadow-sm">
                                    <div className="med-icon d-flex align-items-center justify-content-center mb-3">
                                        <FontAwesomeIcon icon={faUserMd} className="fs-4" />
                                    </div>
                                    <h5>Doctor on Call</h5>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Card className="p-4 shadow-sm">
                                    <div className="med-icon d-flex align-items-center justify-content-center mb-3">
                                        <FontAwesomeIcon icon={faStethoscope} className="fs-4" />
                                    </div>
                                    <h5>Laboratory & Radiology</h5>
                                </Card>
                            </Col>
                            <Col md={6} className="mb-3">
                                <Card className="p-4 shadow-sm">
                                    <div className="med-icon d-flex align-items-center justify-content-center mb-3">
                                        <FontAwesomeIcon icon={faHistory} className="fs-4" />
                                    </div>
                                    <h5>24 Hour Healthcare Services</h5>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4} className="mb-3">
                        <Card className="p-4 shadow-sm appointment-card h-100 border-0">
                            <h4>Consult with us</h4>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <div className="d-flex justify-content-between py-1 border-bottom mb-3">
                                <h6>Mon-Fri</h6>
                                <h6><FontAwesomeIcon icon={faClock} className="me-2" />6am - 10pm</h6>
                            </div>
                            <div className="d-flex justify-content-between py-1 border-bottom mb-3">
                                <h6>Sat-Sun</h6>
                                <h6><FontAwesomeIcon icon={faClock} className="me-2" />6am - 8pm</h6>
                            </div>
                            <Link to="/appointment"><Button variant="primary" className="py-2 px-4 mt-3">Make an Appointment</Button></Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Why Us - Area end*/}
        </main>
    );
};

export default Home;