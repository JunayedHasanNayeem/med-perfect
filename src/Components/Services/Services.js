import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    /* const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./FakeData/services.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []) */

    const services  = useServices();

   
    return (
        <Container>
            <Row className="g-3">
                {
                    services.map(service =>
                        <Service service={service} key={service.id}></Service>
                   )
                }
                        
 
            </Row>

        </Container>
    );
};

export default Services;