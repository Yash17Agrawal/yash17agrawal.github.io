import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Dashboard from './components/Dashboard';
import withHeaderFooter from './components/WithHeaderFooter';
import Books from './components/Books';

const routes = (
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path={'/books'} component={withHeaderFooter(Books)} />
        <Route path={'/'} component={withHeaderFooter(Dashboard)} />
      </Switch>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
