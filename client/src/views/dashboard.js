import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// @import Redux
import { connect } from 'react-redux';
import { getCurrentAccount } from '../actions/account';
import setAuthToken from '../utils/setAuthToken';

// Components
import DashboardHeader from '../components/dashboard-header';
import AccountWidget from '../components/account-info-dashboard';
import TransactionList from '../components/transaction-list';
import DashboardFooter from '../components/dashboard-footer';
import { Redirect } from 'react-router-dom';

const Dashboard = ({
  getCurrentAccount,
  auth: { isAuthenticated, user },
  account: { hasAccount, account },
}) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    getCurrentAccount();
  }, []);

  if (!hasAccount && isAuthenticated) {
    return <Redirect to="/account/register" />;
  }

  // @props account info
  const amount = account != null ? account.amount_in_account : 0;
  const accountNumber = user != null ? user.account_number : '0000000000';

  return (
    <div className="dashboard">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
      <Container className="page-margin" fluid>
        <AccountWidget amount={amount} accountNumber={accountNumber} />
        <TransactionList />
      </Container>
      <Container className="no-padding" fluid>
        <DashboardFooter />
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  account: state.account,
});

export default connect(mapStateToProps, { getCurrentAccount })(Dashboard);
