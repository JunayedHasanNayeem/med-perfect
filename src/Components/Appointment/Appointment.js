import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

const Appointment = () => {
    return (
        <div>
            {/* Appointment form start */}
            <Container className="my-5">
                <h1 className="text-center mb-5">Make an Appointment</h1>
                <Form className="m-auto" style={{ maxWidth: "700px" }}>
                    <Row>
                        <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                            <FloatingLabel label="First Name">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                            <FloatingLabel label="Last Name">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                            <FloatingLabel label="Email Address">
                                <Form.Control type="email" placeholder="Email Address" />
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col} lg={6} sm={12} className="mb-3">
                            <FloatingLabel label="Phone Number">
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </FloatingLabel>
                        </Form.Group>

                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3" >
                            <FloatingLabel label="Subject">
                                <Form.Control type="text" placeholder="Subject" />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}  className="mb-3">
                            <FloatingLabel controlId="floatingTextarea2" label="Describe your problem...">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" className="py-3 w-100">
                        Get Consultation
                    </Button>
                </Form>
            </Container>

            {/* Appointment form start */}
        </div>
    );
};

export default Appointment;