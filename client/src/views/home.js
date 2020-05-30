import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Header from '../components/header';
import ImageContainer from '../components/image-container';
import CardInfoSection from '../components/card-info-section';
import HomeJumbotronBottom from '../components/home-jumbotron-bottom';

const Home = () => {
  return (
    <Container className="page-margin" fluid>
      <Header />
      <ImageContainer />
      <CardInfoSection />
      <HomeJumbotronBottom />
    </Container>
  );
};

export default Home;
