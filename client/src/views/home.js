import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Header from '../components/layout/header';
import ImageContainer from '../components/image-container';
import CardInfoSection from '../components/card-info-section';
import HomeJumbotronBottom from '../components/home-jumbotron-bottom';
import Footer from '../components/layout/footer';

const Home = () => {
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

export default Home;
