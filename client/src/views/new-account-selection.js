import React from 'react';
import { Container } from 'react-bootstrap';

// @import Components
import NewAccountHeader from '../components/layout/new-account-header';
import AccountTypeSelection from '../components/account-type-selection';
import Footer from '../components/layout/footer';

const NewAccountSelection = () => {
  return (
    <div className="account-selection">
      <Container className="no-padding" fluid>
        <NewAccountHeader />
      </Container>
      <Container className="page-margin" fluid>
        <AccountTypeSelection />
      </Container>
      <Footer />
    </div>
  );
};

export default NewAccountSelection;
