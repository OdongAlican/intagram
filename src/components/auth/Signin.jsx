/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInAction } from '../../actions';

const Signin = props => {
  const { history } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(state => state.authReducer.error);

  const LogIn = e => {
    dispatch(signInAction({ email, password }, history));
    e.preventDefault();
  };
  return (
    <div className="signin-section">
      <p>Sign In</p>
      <div className="card col-md-3 mt-2 p-2">
        <form onSubmit={LogIn}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            type="email"
            className="form-control mb-2"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter Password"
            type="password"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary mt-2"> Submit </button>
        </form>
      </div>
    </div>
  );
};
export default Signin;
