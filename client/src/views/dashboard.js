import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import DashboardHeader from '../components/dashboard-header';
import AccountWidget from '../components/account-info-dashboard';
import TransactionList from '../components/transaction-list';
import DashboardFooter from '../components/dashboard-footer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
      <Container className="page-margin" fluid>
        <AccountWidget />
        <TransactionList />
      </Container>
      <Container className="no-padding" fluid>
        <DashboardFooter />
      </Container>
    </div>
  );
};

export default Dashboard;
