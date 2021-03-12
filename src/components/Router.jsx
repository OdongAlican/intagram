import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Signin from './auth/Signin';
import Signout from './auth/Signout';
import Signup from './auth/Signup';
import Home from './Home';
import Profile from './Profile';
import ConversationsList from './ConversationsList';

const Router = () => (
  <div className="router-section">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signout" component={Signout} />
        <Route exact path="/conversations" component={ConversationsList} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute path="/user/:id" component={Profile} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
