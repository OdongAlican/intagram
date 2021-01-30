import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  useParams, Link, Switch,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { fetchUser } from '../actions/user';
import Profileimage from '../Images/icon.png';
import Navbar from './Navbar';
import Post from './Post';
import Igtv from './Igtv';
import Saved from './Saved';
import Tagged from './Tagged';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="user-profile-section">
      <Navbar />
      <div className="upper-user-profile-section">
        <div className="user-profile-image-section">
          <div className="inner-user-profile-image-section">
            <img src={Profileimage} alt="Profile" />
          </div>
        </div>
        <div className="user-profile-info-section">
          <div className="user-name-settings-section">
            <div className="user-name-section">
              <div>{ userDetails.name }</div>
            </div>
            <div className="user-settings-section">
              <div className="settings-button-section">
                <button type="button">Edit Profile</button>
              </div>
              <div className="settings-icon-section">
                <svg
                  aria-label="Options"
                  className="_8-yf5 "
                  fill="#262626"
                  height="24"
                  viewBox="0 0 48 48"
                  width="24"
                >
                  <path clipRule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div className="post-followers-section">
            <div className="users-posts-section">
              <h6>
                174
                <span>posts</span>
              </h6>
            </div>
            <div className="users-followers-section">
              <h6>
                427
                <span>followers</span>
              </h6>
            </div>
            <div className="users-followings-section">
              <h6>
                1,475
                <span>following</span>
              </h6>
            </div>
          </div>
          <div className="lower-user-name-section">
            ALICAN
          </div>
          <div className="user-quote-section">
            I GUESS YOU CAN SAY THE HOOD DID IT
          </div>
        </div>
      </div>
      <div className="inner-navigation-section w-50 bg-info">
        <div className="d-flex p-2 bg-info w-75 mx-auto">
          <Link
            to={{
              pathname: `/user/${id}`,
            }}
            className="post-nav-section"
          >
            Post
          </Link>
          <Link
            to={{
              pathname: `/user/${id}/igtv`,
            }}
            className="igtv-nav-section"
          >
            IGTV
          </Link>
          <Link
            to={{
              pathname: `/user/${id}/saved`,
            }}
            className="saved-nav-section"
          >
            Saved
          </Link>
          <Link
            to={{
              pathname: `/user/${id}/tagged`,
            }}
            className="tagged"
          >
            Tagged
          </Link>
        </div>
        <div className="actual-pages-section">
          <Switch>
            <PrivateRoute exact path="/user/:id" component={Post} />
            <PrivateRoute exact path="/user/:id/igtv" component={Igtv} />
            <PrivateRoute exact path="/user/:id/saved" component={Saved} />
            <PrivateRoute exact path="/user/:id/tagged" component={Tagged} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Profile;
