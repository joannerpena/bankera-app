import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

// @import Assets
import LightLogo from '../assets/img/bankera-light-logo.svg';

class DashboardHeader extends Component {
  render() {
    return (
      <Navbar className="dashboard-header" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={LightLogo}
            className="d-inline-block align-top dashboard-logo"
            alt="Bankera Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-list">
            <Nav.Link href="#">Account</Nav.Link>
            <Nav.Link className="ml-3" href="#">
              Savings
            </Nav.Link>
            <Nav.Link className="ml-3" href="#">
              Transfer
            </Nav.Link>
            <Nav.Link className="ml-3" href="#">
              Settings
            </Nav.Link>
            <Button className="ml-3 nav-button" variant="dark">
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default DashboardHeader;
