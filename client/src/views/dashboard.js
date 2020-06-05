import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';

// @import Redux
import { connect } from 'react-redux';
import { getCurrentAccount } from '../actions/account';
import { getTransactions } from '../actions/transactions';
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
  transactions: { transactions },
}) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    getCurrentAccount();
    getTransactions();
  }, []);

  if (!hasAccount && isAuthenticated) {
    return <Redirect to="/account/register" />;
  }

  let amountSpent = 0;

  transactions.map((transaction) => {
    amountSpent = amountSpent + transaction.transaction_amount;
  });

  // @props account info
  const amount = account != null ? account.amount_in_account : 0;
  const accountNumber = user != null ? user.account_number : '0000000000';

  return (
    <div className="dashboard">
      <Container className="no-padding" fluid>
        <DashboardHeader />
      </Container>
      <Container className="page-margin" fluid>
        <AccountWidget
          amount={amount}
          amountSpent={amountSpent}
          accountNumber={accountNumber}
        />
        <TransactionList />
      </Container>
      <Container className="no-padding" fluid>
        <DashboardFooter />
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  getTransactions: PropTypes.func.isRequired,
  getCurrentAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  account: PropTypes.object.isRequired,
  transactions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  account: state.account,
  transactions: state.transaction,
});

export default connect(mapStateToProps, { getCurrentAccount, getTransactions })(
  Dashboard
);
