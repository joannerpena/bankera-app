import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Header from '../components/header';
import ImageFluid from '../components/image-fluid';
import CardPersonal from '../components/card-personal-info';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="personal-page">
      <Container className="page-margin" fluid>
        <Header />
      </Container>
      <ImageFluid />
      <Container fluid>
        <CardPersonal />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
