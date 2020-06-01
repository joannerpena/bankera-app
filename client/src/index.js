// @import modules
import React from 'react';
import ReactDOM from 'react-dom';

// @import Style
import './style/main.scss';

// COMPONENTS
import Home from './views/home';
import PersonalPage from './views/personal';
import LogIn from './views/login';

const App = () => {
  return <LogIn />;
};

ReactDOM.render(<App />, document.getElementById('root'));
