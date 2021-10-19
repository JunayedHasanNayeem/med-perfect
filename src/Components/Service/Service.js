import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, title, description, img } = props.service
    const serviceURL = `/service-details/${id}`
    return (
        // Single service item in card
        <Col lg={4} sm={12} md={6}>
            <Card>
                <div className="text-center pt-3">
                    <Card.Img variant="top" src={img} style={{width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%'}} />
                </div>
                <Card.Body className="text-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={serviceURL}><Button variant="primary" className="px-3">View Service</Button></Link>  
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

