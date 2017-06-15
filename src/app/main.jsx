import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/app-component.jsx';

const Root = () => (
  <Route path="/" render={() => <App appTitle="App Works!" />} />
);

ReactDOM.render(
  (
    <HashRouter>
      <Root />
    </HashRouter>
  ),
  document.getElementById('app')
);
