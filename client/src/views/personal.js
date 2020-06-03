import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Header from '../components/layout/header';
import ImageFluid from '../components/image-fluid';
import CardPersonal from '../components/card-personal-info';
import PersonalAccountInfo from '../components/personal-account-info';
import Footer from '../components/layout/footer';

const Home = () => {
  return (
    <div className="personal-page">
      <Container className="page-margin" fluid>
        <Header />
      </Container>
      <ImageFluid />
      <Container className="page-margin" fluid>
        <CardPersonal />
        <PersonalAccountInfo />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
