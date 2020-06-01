// @import modules
import React from 'react';
import ReactDOM from 'react-dom';

// @import Style
import './style/main.scss';
import RegisterPage from './views/register';

// COMPONENTS
// import Home from './views/home';
// import PersonalPage from './views/personal';
// import LogIn from './views/login';
// import Dashboard from './views/dashboard';

const App = () => {
  return <RegisterPage />;
};

ReactDOM.render(<App />, document.getElementById('root'));
