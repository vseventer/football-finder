// Package modules.
import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Local modules.
import App          from './App';
import Match        from './Match';
import PageNotFound from './PageNotFound';
import './favicon.ico';
import './reset.css';

// Render.
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/match/:matchId" component={Match} />
    <Route path="*" component={PageNotFound} />
  </Router>,
  document.getElementById('root')
);