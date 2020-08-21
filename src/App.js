import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import Simplecalculator from './simple/Simplecalculator';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Simplecalculator} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
