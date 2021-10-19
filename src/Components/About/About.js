import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import doctorImg1 from '../../Images/img-5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faAward, faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
            {/* About - Services start */}
            <Container>
                <Row>
                    <Col md={7} sm={12} className="d-flex align-items-center py-5">
                        <div>
                            <div>
                                <h1 className="">Medical Clinic that you can trust</h1>
                                <p className="my-5">Getting an accurate diagnosis can be one of the most impactful experiences that you can have — especially if you’ve been in search of that answer for a while. We can help you get there.</p>
                            </div>
                            <Row className="my-4">
                                <Col sm={2}>
                                    <div className="med-icon d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faHospital} className="fs-4" />
                                    </div>
                                </Col>
                                <Col sm={10}>
                                    <h5>24 Hour Healthcare Services</h5>
                                    <p>We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.</p>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col sm={2}>
                                    <div className="med-icon d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faAward} className="fs-4" />
                                    </div>
                                </Col>
                                <Col sm={10}>
                                    <h5>International Standards</h5>
                                    <p>We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.</p>
                                </Col>
                            </Row>
                            <Row className="my-4">
                                <Col sm={2}>
                                    <div className="med-icon d-flex align-items-center justify-content-center">
                                        <FontAwesomeIcon icon={faHandHoldingMedical} className="fs-4" />
                                    </div>
                                </Col>
                                <Col sm={10}>
                                    <h5>Center of Excellence</h5>
                                    <p>We are committed to your health and well-being, offering the very latest in comprehensive evidence-based care.</p>
                                </Col>
                            </Row>
                        </div>

                    </Col>
                    <Col md={5} sm={12} >
                        <img src={doctorImg1} alt="Doctors" className="w-100" />
                    </Col>
                </Row>
            </Container>
            {/* About - Services end*/}
        </main>

    );
};

export default About;