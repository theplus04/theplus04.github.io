import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TopNav extends Component {
    render() {
        return (
            <>
            <Navbar variant="dark" expand="lg" fixed="top" style={{ background: '#272341'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#ayush">About</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </>
        )
    }
}

export default TopNav;