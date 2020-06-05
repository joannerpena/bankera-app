import React from 'react';
import { Container } from 'react-bootstrap';

// @import Components
import DashboardHeader from '../components/dashboard-header';
import SettingsForm from '../components/settings-form';
import DashboardFooter from '../components/dashboard-footer';

function Settings() {
  return (
    <div className="settings-page">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
      <Container className="no-padding" fluid>
        <SettingsForm />
      </Container>
      <Container className="no-padding" fluid>
        <DashboardFooter />
      </Container>
    </div>
  );
}

export default Settings;
