// @import modules
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// @import Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { connect } from 'react-redux';

// @import Style
import './style/main.scss';

// COMPONENTS
import Home from './views/home';
import PersonalPage from './views/personal';
import LogIn from './views/login';
import RegisterPage from './views/register';
import Dashboard from './views/dashboard';
import NewAccountSelection from './views/new-account-selection';
import AccountRegistrationForm from './views/account-registration';
import Setting from './views/settings';
import Alert from './components/layout/alert';
import PrivateRoute from './components/routing/private-route';
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Alert />
        <Switch>
          <Route exact path="/personal" component={PersonalPage} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute
            exact
            path="/account/register"
            component={AccountRegistrationForm}
          />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
