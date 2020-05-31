import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Header from '../components/header';
import ImageFluid from '../components/image-fluid';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div className="personal-page">
      <Container>
        <Header />
      </Container>
      <ImageFluid />
      <Footer />
    </div>
  );
};

export default Home;
