import React from 'react';
import { Nav, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { Link } from "gatsby"
import { footer } from './Footer.module.css';
import { MdEmail } from 'react-icons/md';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Icon from '../Icon/Icon'

const Footer = ({ className }) => (
    <footer className={`${className} ${footer} bg-ghost`}>
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Nav className="flex-row">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Work">Professional Work</Nav.Link>
                    <Nav.Link as={Link} to="/Art">Art Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                </Nav>
            </Row>
            <Row className="justify-content-md-center py-5">
                <Icon size="4em" className="mx-3" href="mailto:enochbradshaw@gmail.com">
                    <MdEmail />
                </Icon>
                <Icon size="4em" className="mx-3" href="https://twitter.com/bradshaw_enoch">
                    <FaTwitter />
                </Icon>
                <Icon size="4em" className="mx-3" href="https://www.instagram.com/nuckybradshaw">
                    <FaInstagram />
                </Icon>
                <Icon size="4em" className="mx-3" href="https://www.linkedin.com/in/enochbradshaw">
                    <FaLinkedinIn />
                </Icon>
                <Icon size="4em" className="mx-3" href="https://github.com/enoragon">
                    <FaGithub />
                </Icon>
            </Row>
        </Container>
    </footer>
);

export default Footer;
