import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Company from './components/company';
import Incorporate from './components/incorporate';
import Signup from './components/signup';
import Metamask from './components/metamask';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/company' component={Company} />
            <Route exact path='/incorporate' component={Incorporate} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/metamask' component={Metamask} />
          </Switch>

          <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/company'}>Company</Link>
            <Link to={'/incorporate'}>Incorporate</Link>
            <Link to={'/signup'}>Signup</Link>
            <Link to={'/metamask'}>Metamask</Link>
          </div>



        </div>
      </Router>
    );
  }
}

export default App;
