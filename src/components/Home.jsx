/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Navbar from './Navbar';
import Posts from '../containers/Posts';
import Profileimage from '../Images/icon.png';
import PeopleToFollow from './PeopleToFollow';
import { fetchPosts } from '../actions/post';

const Home = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState('hide-modal');
  const history = useHistory();

  const displayModal = id => {
    setOpenModal('modal-class');
    console.log(id);
  };

  const hideModal = () => {
    setOpenModal('hide-modal');
    history.push('/home');
  };
  useEffect(() => {
    dispatch(fetchPosts(localStorage.token));
  }, []);

  const postsList = useSelector(state => state.postReducer.posts);
  const followeesList = useSelector(state => state.postReducer.followeeList);

  return (
    <div className="home-section">
      <div className={`${openModal}`}>
        <div style={{
          background: '#fff',
          width: '55em',
          height: '30em',
        }}
        >
          <i
            onClick={hideModal}
            className="fas fa-times border p-2"
          />
        </div>
      </div>
      <Navbar />
      <div className="main-inner-home-section">
        <div className="home-main-photo-section">
          <Posts postsList={postsList} displayModal={displayModal} />
        </div>
        <div className="follow-suggestion-section">
          <div className="inner-follow-suggestion-section pb-2">
            <div className="follow-profile-image-div">
              <img
                className="follow-profile-image"
                src={Profileimage}
                alt="Profile"
              />
            </div>
            <div className="follow-name-section">
              <div className="follow-name-section-first">alican</div>
              <div className="follow-name-section-second">AMULLA</div>
            </div>
            <div className="follow-switch-section">
              <span>Switch</span>
            </div>
          </div>
          <div className="follow-middle-suggestion-section">
            <div className="follow-middle-suggestion-first">
              Suggestions For You
            </div>
            <div className="follow-middle-suggestion-second">
              <span>See All</span>
            </div>
          </div>
          {
            followeesList.slice(0, 5).map(userdetail => (
              <PeopleToFollow key={userdetail.id} userdetail={userdetail} />
            ))
          }
          <div className="side-footer-section">
            <div className="side-footer-section-top">
              <div>About - </div>
              <div className="ml-1">Help - </div>
              <div className="ml-1">Press - </div>
              <div className="ml-1">API - </div>
              <div className="ml-1">Jobs - </div>
              <div className="ml-1">Privacy - </div>
              <div className="ml-1">Terms</div>
            </div>
            <div className="side-footer-section-bottom">
              <div>Locations - </div>
              <div className="ml-1">Top Accounts - </div>
              <div className="ml-1">Hashtags - </div>
              <div className="ml-1">Language</div>
            </div>
          </div>
          <div className="instagram-footer-follow-section">
            &copy; 2021 INSTAGRAM FROM ALICAN
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
