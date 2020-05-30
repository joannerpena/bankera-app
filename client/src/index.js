// @import modules
import React from 'react';
import ReactDOM from 'react-dom';

// @import Style
import './style/main.scss';

// COMPONENTS
import Home from './views/home';

const App = () => {
  return <Home />;
};

ReactDOM.render(<App />, document.getElementById('root'));
