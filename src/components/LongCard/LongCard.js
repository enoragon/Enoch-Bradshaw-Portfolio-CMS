import React from 'react';
import { Row, Col } from 'react-bootstrap';
import  { longcardRow } from './LongCard.module.css';
import Img from "gatsby-image";



const ImgCol = ({ image }) => (
    <Col md="6" xl="4">
        <Img fluid={image.childImageSharp.fluid}  style={{maxWidth: "350px"}}/>
    </Col>
);

const CardText = ({ children, title }) => (
    <Col md="6" xl="8">
        <h2>{title}</h2>
        <p>{children}</p>
    </Col>
);

const LongCard = ({ children, isImageOnLeft, image, title }) => (
    <Row className={longcardRow}>
        {isImageOnLeft ? (
            <>
                <ImgCol image={image} />
                <CardText title={title}>{ children }</CardText>
            </>
        ) : (
            <>
                <CardText title={title}>{ children }</CardText>
                <ImgCol image={image} />
            </>
        )}
    </Row>
)

export default LongCard;
