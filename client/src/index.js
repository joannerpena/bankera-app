// @import modules
import React from 'react';
import ReactDOM from 'react-dom';

// @import Style
import './style/main.scss';

// COMPONENTS
// import Home from './views/home';
// import PersonalPage from './views/personal';
// import LogIn from './views/login';
// import RegisterPage from './views/register';
// import Dashboard from './views/dashboard';
// import NewAccountSelection from './views/new-account-selection';
// import AccountRegistrationForm from './views/account-registration';
import Setting from './views/settings';

const App = () => {
  return <Setting />;
};

ReactDOM.render(<App />, document.getElementById('root'));
