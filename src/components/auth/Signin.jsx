/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInAction } from '../../actions';
import BootstrapCarousel from './Carousel';
import Footer from '../Footer';
import Firstimage from '../../Images/lower-image.png';
import Secondimage from '../../Images/lower-two.png';
import Instalogo from '../../Images/intagram-logo.png';

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
    <div className="sign-in-outer-section">
      <div className="signin-section d-flex">
        <div className="left-carousel-section col-md-6">
          <BootstrapCarousel />
        </div>
        <div className="right-carousel-section mt-2 px-0">
          <div className="left-signin-section py-4">
            <div className="instagram-logo-section">
              <img src={Instalogo} alt="Intagram" />
            </div>
            <form
              className=""
              onSubmit={LogIn}
            >
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter email"
                type="email"
                className="form-control-input my-2"
              />
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                type="password"
                className="form-control-input my-2"
              />
              <button type="submit" className="login-button w-75 d-block mx-auto my-2"> Log In </button>
            </form>
            <div className="facbook-login-section">
              <div className="upper-or-section">
                <div className="empty-left-div" />
                <div className="or-center-div">
                  <div className="or-center-div-span">OR</div>
                </div>
                <div className="empty-right-div" />
              </div>
              <div className="facbook-middle-section">
                <div className="real-logo d-flex align-items-center">
                  <i className="fab fa-facebook-square" />
                </div>
                <div className="with-facebook-login">
                  <div>Log in with Facebook </div>
                </div>
              </div>
              <div className="facebook-lower-section">
                <Link
                  to={{
                    pathname: '/password',
                  }}
                  className="forgot-password"
                >
                  Forgot password?
                </Link>
                <div />
              </div>
            </div>
          </div>
          <div className="no-account-section">
            <h6>
              Don&apos;t have an account?
              <Link
                to={{
                  pathname: '/signup',
                }}
                className="ml-2 have-no-account"
              >
                Sign up
              </Link>
            </h6>
          </div>
          <div className="get-the-app">
            Get the app.
          </div>
          <div className="images-section">
            <div className="first-image-section">
              <img src={Firstimage} alt="First" />
            </div>
            <div className="second-image-section">
              <img src={Secondimage} alt="Second" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Signin;
