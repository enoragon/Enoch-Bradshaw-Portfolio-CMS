import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import LongCard from '../components/LongCard/LongCard';
import Noodle from '../Images/smallnood.png';
import Human from '../Images/lizard.png';
import Coder from '../Images/Coder.png';
import Gamer from '../Images/Gamer.png';
import Artist from '../Images/Artist.png';
import CompanyPhoto from '../Images/CompanyPhoto.png';
import Layout from '../components/layout';
import SEO from "../components/seo"

class Home extends Component{
    render(){
        return (
            <Layout>
                <SEO title="About" />
                <Container>
                    <div>
                        <h1 className="text-center">Meet the team</h1>
                        <Row>
                            <Col md="4" className="offset-md-2">
                                <Row className="d-flex justify-content-center">
                                    <Image src={Noodle} roundedCircle style={{maxWidth: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Noodle Expert</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Image src={Human} roundedCircle style={{maxWidth: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Human</p>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Image src={Coder} roundedCircle style={{maxWidth: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Developer</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Image src={Artist} roundedCircle style={{maxWidth: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Artist</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Image src={Gamer} roundedCircle style={{maxHeight: "200px", maxWidth: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Game Designer</p>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <LongCard isImageOnLeft={true} image={CompanyPhoto} title={'Our Values'}>
                        Our work we take very seriously and we pour our hearts into our projects. 
                        As you may have noticed, we do not take ourselves very seriously.
                        We like to laugh and crack jokes but what is most important to us is making cool shit.
                        We think of ourselves as painters on the canvas of life trying, through each creation, to leave our mark on society; 
                        to be immortalized as a single stroke in a collage of color.
                    </LongCard>
                </Container>
            </Layout>
        );
    }
}

export default Home;