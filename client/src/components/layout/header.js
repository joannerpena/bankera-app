import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

// @import Assets
import Logo from '../../assets/img/bankera-logo.svg';

class Header extends Component {
  render() {
    return (
      <Navbar className="header-navbar" expand="lg">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              src={Logo}
              className="d-inline-block align-top brand-logo"
              alt="Bankera Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-list">
            <Link className="nav-link" to="/personal">
              Personal
            </Link>
            <Nav.Link className="ml-3" href="#">
              Business
            </Nav.Link>
            <Nav.Link className="ml-3" href="#">
              About Us
            </Nav.Link>
            <Nav.Link className="ml-3" href="#">
              ContactUs
            </Nav.Link>
            <Link className="ml-3 nav-button btn btn-dark" to="/login">
              Log In
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
