// @import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';

// @import Style
import './style/main.scss';

// COMPONENTS
import Header from './components/header';

const App = () => {
  return (
    <Container className="page-margin" fluid>
      <Header />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
