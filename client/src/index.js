// @import modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// @import Style
import './style/main.scss';

// COMPONENTS
import Home from './views/home';
import PersonalPage from './views/personal';
import LogIn from './views/login';
import RegisterPage from './views/register';
// import Dashboard from './views/dashboard';
// import NewAccountSelection from './views/new-account-selection';
// import AccountRegistrationForm from './views/account-registration';
import Setting from './views/settings';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Switch>
      <Route exact path="/personal" component={PersonalPage} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
