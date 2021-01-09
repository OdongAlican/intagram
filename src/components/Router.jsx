import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import Home from './Home';
import Navbar from './Navbar';

const Router = () => (
  <div className="router-section">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/navbar" component={Navbar} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
