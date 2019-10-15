import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { Link } from 'react-router-dom';
import { Link } from "gatsby"
import PropTypes from "prop-types"


const Header = ({ siteTitle }) => (
    <header>
        <Navbar collapseOnSelect expand="lg" bg="dark-blue" variant="dark">
            <Navbar.Brand as={Link} to="/">Enoch Bradshaw</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Work">Professional Work</Nav.Link>
                    <Nav.Link as={Link} to="/Art">Art Gallery</Nav.Link>
                    <Nav.Link as={Link} to="/About">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>

//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
