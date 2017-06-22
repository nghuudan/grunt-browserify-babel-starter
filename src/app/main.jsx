import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App.jsx';

const store = createStore(reducers, applyMiddleware(thunk));

render(
  (
    <Provider store={ store }>
      <HashRouter>
        <Route path="/" component={ App } />
      </HashRouter>
    </Provider>
  ),
  document.getElementById('app')
);
