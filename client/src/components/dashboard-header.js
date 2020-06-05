import React from 'react';
import { Redirect, Link } from 'react-router-dom';
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
      <Link to="/dashboard">
        <img
          src={LightLogo}
          className="d-inline-block align-top dashboard-logo"
          alt="Bankera Logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto nav-list">
          <Link to="/dashboard" class="nav-link">
            Account
          </Link>
          <Nav.Link className="ml-3" href="#">
            Savings
          </Nav.Link>
          <Nav.Link className="ml-3" href="#">
            Transfer
          </Nav.Link>
          <Link className="ml-3 nav-link" to="/account/settings">
            Settings
          </Link>
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
