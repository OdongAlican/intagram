/* eslint-disable  react/prop-types */
/* eslint-disable  jsx-a11y/click-events-have-key-events */
/* eslint-disable  jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { followAnotherUser } from '../actions/follow';
import Profileimage from '../Images/icon.png';

const PeopleToFollow = ({ userdetail }) => {
  const dispatch = useDispatch();
  const followIndividual = () => {
    dispatch(followAnotherUser(userdetail.id));
  };
  return (
    <div
      key={userdetail.id}
      className="follow-lower-suggestion-section"
    >
      <div className="lower-suggestion-image">
        <img
          className="lower-profile-image"
          src={Profileimage}
          alt="profile"
        />
      </div>
      <div className="lower-follow-name-section">
        <span className="lower-follow-name-section-first">{ userdetail.name }</span>
        <span className="lower-follow-name-section-second"> Suggested for you </span>
      </div>
      <div className="follow-switch-section">
        <span
          onClick={followIndividual}
        >
          Follow
        </span>
      </div>
    </div>
  );
};

export default PeopleToFollow;
