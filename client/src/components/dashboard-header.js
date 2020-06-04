import React from 'react';
import { Redirect } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

// @import Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

// @import Assets
import LightLogo from '../assets/img/bankera-light-logo.svg';

const DashboardHeader = ({ auth: { isAuthenticated }, logout }) => {
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
          <Button className="ml-3 nav-button" variant="dark" onClick={logout}>
            Log Out
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

DashboardHeader.PropsTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(DashboardHeader);
