import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import DashboardHeader from '../components/dashboard-header';
import AccountWidget from '../components/account-info-dashboard';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
      <Container className="page-margin" fluid>
        <AccountWidget />
      </Container>
    </div>
  );
};

export default Dashboard;
