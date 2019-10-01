import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { gimmeRoom } from './Blurbs.module.css'

const Blurbs = ({ children, blurbTitle }) => (
    <Row className={`justify-content-md-center ${gimmeRoom}`}>
        <Col sm={12} md={9}>
            <Card bg="ghost" variant="dark">
                <Card.Body>
                    <Card.Title>{ blurbTitle }</Card.Title>
                    <Card.Text>
                        { children }
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
)
export default Blurbs;