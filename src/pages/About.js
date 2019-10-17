import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LongCard from '../components/LongCard/LongCard';
// import CompanyPhoto from '../images/CompanyPhoto.png';
import Layout from '../components/layout';
import SEO from "../components/seo";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

class Home extends Component{
    render(){
        console.log(this.props.data);
        let noodle = this.props.data.noodle.childImageSharp.fluid;
        let human = this.props.data.human.childImageSharp.fluid;
        let coder = this.props.data.coder.childImageSharp.fluid;
        let artist = this.props.data.artist.childImageSharp.fluid;
        let gamer = this.props.data.gamer.childImageSharp.fluid;
        return (
            <Layout>
                <SEO title="About" />
                <Container>
                    <div>
                        <h1 className="text-center">Meet the team</h1>
                        <Row>
                            <Col md="4" className="offset-md-2">
                                <Row className="d-flex justify-content-center">
                                    <Img fluid={noodle} style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Noodle Expert</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Img fluid={human} style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Human</p>
                                </Row>
                            </Col>

                        </Row>
                        <Row>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Img fluid={coder} style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Developer</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Img fluid={artist} style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Artist</p>
                                </Row>
                            </Col>
                            <Col md="4">
                                <Row className="d-flex justify-content-center">
                                    <Img fluid={gamer} style={{borderRadius: "50%", width: "200px", height: "200px"}}/>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    <p>Game Designer</p>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    {/* <LongCard isImageOnLeft={true} image={CompanyPhoto} title={'Our Values'}>
                        We take our work very seriously and we pour our hearts into our projects. 
                        As you may have noticed, we do not take ourselves very seriously.
                        We like to laugh and crack jokes but what is most important to us is making cool shit.
                        We think of ourselves as painters on the canvas of life trying, through each creation, to leave our mark on society; 
                        to be immortalized as a single stroke in a collage of color.
                    </LongCard> */}
                </Container>
            </Layout>
        );
    }
}

export default Home;

export const query = graphql`
            query {
                noodle: file(relativePath: { eq: "assets/smallnood.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                human: file(relativePath: { eq: "assets/lizard.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                coder: file(relativePath: { eq: "assets/coder.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                gamer: file(relativePath: { eq: "assets/gamer.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                artist: file(relativePath: { eq: "assets/artist.png" }) {
                    childImageSharp {
                        fluid{
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `

                
              
                