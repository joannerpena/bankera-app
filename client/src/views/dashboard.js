import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import DashboardHeader from '../components/dashboard-header';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
    </div>
  );
};

export default Dashboard;
