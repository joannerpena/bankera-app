import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// @imports Redux
import { connect } from 'react-redux';

// @imports Components
import Header from '../components/layout/header';
import ImageContainer from '../components/image-container';
import CardInfoSection from '../components/card-info-section';
import HomeJumbotronBottom from '../components/home-jumbotron-bottom';
import Footer from '../components/layout/footer';

const Home = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home-page">
      <Container className="page-margin" fluid>
        <Header />
        <ImageContainer />
        <CardInfoSection />
        <HomeJumbotronBottom />
      </Container>
      <Footer />
    </div>
  );
};

Home.propsType = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Home);
