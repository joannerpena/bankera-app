import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';

// @import Assets
import RoundImage from '../assets/img/img-2-tiny.jpg';

const HomeJumbotronBottom = () => {
  return (
    <Jumbotron className="home-jumbotron-bottom">
      <Row>
        <Col className="jumbotron-info" lg={6}>
          <h2>Invest for your family future</h2>
          <p>
            When you’re on top of your money, life is good. We help you
            effortlessly manage your finances in one place.
          </p>
          <Link className="btn btn-dark btn-lg" to="/personal">
            Learn More
          </Link>
        </Col>
        <Col
          className="round-image-container d-flex justify-content-center"
          lg={6}
        >
          <Image src={RoundImage} roundedCircle />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default HomeJumbotronBottom;
