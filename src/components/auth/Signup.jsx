/* eslint-disable camelcase */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../actions/index';

const Signup = ({ history }) => {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setConfirmPassword] = useState('');
  const dispatch = useDispatch();

  const SignUser = e => {
    dispatch(signUpAction({
      name, email, password, password_confirmation,
    }, history));
    e.preventDefault();
  };
  return (
    <div className="signup-section card col-md-4 m-2 pt-2">
      <form onSubmit={SignUser}>
        <input
          value={name}
          onChange={e => setUsername(e.target.value)}
          type="text"
          className="name-section form-control mb-2"
          placeholder="Enter username"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          className="email-section form-control mb-2"
          placeholder="Enter email"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className="password-section form-control mb-2"
          placeholder="Enter Password"
        />
        <input
          value={password_confirmation}
          onChange={e => setConfirmPassword(e.target.value)}
          type="password"
          className="confirm-password form-control"
          placeholder="Confirm Password"
        />
        <button type="submit" className="btn btn-primary my-2">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
