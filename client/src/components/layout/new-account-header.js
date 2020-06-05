import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

// @import Assets
import Logo from '../../assets/img/bankera-logo.svg';

const NewAccountHeader = () => {
  return (
    <Navbar className="header-navbar shadow-sm" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top brand-logo"
          alt="Bankera Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-list">
          <Nav.Link href="#">Personal</Nav.Link>
          <Nav.Link className="ml-3" href="#">
            Business
          </Nav.Link>
          <Nav.Link className="ml-3" href="#">
            About Us
          </Nav.Link>
          <Nav.Link className="ml-3" href="#">
            ContactUs
          </Nav.Link>
          <Button className="ml-3 nav-button" variant="dark">
            Log Out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NewAccountHeader;
