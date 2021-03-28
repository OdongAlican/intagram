/* eslint-disable  react/prop-types */
import React from 'react';
import Profileimage from '../Images/icon.png';

const PeopleToFollow = ({ userdetail }) => (
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
      <span>Follow</span>
    </div>
  </div>
);

export default PeopleToFollow;
