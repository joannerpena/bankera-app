// @import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';

// @import Style
import './style/main.scss';

// COMPONENTS
import Header from './components/header';
import ImageContainer from './components/image-container';
import CardInfoSection from './components/card-info-section';

const App = () => {
  return (
    <Container className="page-margin" fluid>
      <Header />
      <ImageContainer />
      <CardInfoSection />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
