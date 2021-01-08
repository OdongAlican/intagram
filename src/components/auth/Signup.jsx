/* eslint-disable camelcase */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../actions/index';
import Instalogo from '../../Images/intagram-logo.png';
import Firstimage from '../../Images/lower-image.png';
import Secondimage from '../../Images/lower-two.png';
import Footer from '../Footer';

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
    <div className="sign-up-outer-section">
      <div className="signup-section">
        <div className="instagram-logo-section">
          <img src={Instalogo} alt="Intagram" />
        </div>
        <div className="signup-see-photos">
          Sign up to see photos and videos from your friends.
        </div>
        <div className="facbook-middle-section with-facebook-login-two">
          <div className="real-logo d-flex align-items-center">
            <i className="fab fa-facebook-square" />
          </div>
          <div className="with-facebook-login">
            <div>Log in with Facebook </div>
          </div>
        </div>
        <div className="upper-or-section">
          <div className="empty-left-div" />
          <div className="or-center-div">
            <div className="or-center-div-span">OR</div>
          </div>
          <div className="empty-right-div" />
        </div>
        <form onSubmit={SignUser}>
          <input
            value={name}
            onChange={e => setUsername(e.target.value)}
            type="text"
            className="name-section form-control-input mb-2"
            placeholder="Enter username"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            className="email-section form-control-input mb-2"
            placeholder="Enter email"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="password-section form-control-input mb-2"
            placeholder="Enter Password"
          />
          <input
            value={password_confirmation}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            className="confirm-password form-control-input"
            placeholder="Confirm Password"
          />
          <button type="submit" className="login-button w-75 d-block mx-auto my-2">Sign up</button>
        </form>
        <div className="privacy-policy">
          <div className="terms-data">
            By signing up, you agree to our
            {' '}
            <span>Terms</span>
            ,
            {' '}
            <span>Data</span>
          </div>
          <div className="cookies-policy">
            <span>Policy</span>
            {' '}
            and
            <span> Cookies Policy</span>
            .
          </div>
        </div>
      </div>
      <div className="no-account-section no-account-section-signup">
        <h6>
          Have an account?
          <Link
            to={{
              pathname: '/',
            }}
            className="ml-2 have-no-account"
          >
            Log in
          </Link>
        </h6>
      </div>

      <div className="get-the-app">
        Get the app.
      </div>
      <div className="images-section mb-4">
        <div className="first-image-section">
          <img src={Firstimage} alt="First" />
        </div>
        <div className="second-image-section">
          <img src={Secondimage} alt="Second" />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Signup;
