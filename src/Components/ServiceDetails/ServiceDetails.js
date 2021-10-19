import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Spinner } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import useServices from '../../Hooks/useServices';


const ServiceDetails = () => {
    const { id } = useParams()
    const services = (useServices())
    if(!services.length){
        return <Spinner animation="border" variant="dark" />
    }
    let clickedService = services.find(service => service.id == id);
    return (
        <div>
            {/* Single service details once user cliks */}
            <Container className="my-5">
            <Col style={{maxWidth: "500px"}} className="m-auto">
                <Card className="text-center">
                    <Card.Body className="text-center">
                    <img src={clickedService.img} className="mb-3" style={{ width: '200px', height: '200px', objectFit: 'cover'}} />
                        <Card.Title>{clickedService.title}</Card.Title>
                        <Card.Text>
                            {clickedService.description}
                        </Card.Text>
                        <Link to="/appointment"><Button variant="primary">Make an Appointment</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
            </Container>
        </div>
    );
};

export default ServiceDetails;