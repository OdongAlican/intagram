import React from 'react';
import Navbar from './Navbar';
import Posts from '../containers/Posts';
import Profileimage from '../Images/icon.png';

const Home = () => {
  console.log(localStorage.userId);
  console.log(localStorage.token, 'token inner');

  const listToFollow = [
    {
      id: 1,
      name: 'wilsonkulemujungu',
      type: 'Suggested for you',
    }, {
      id: 2,
      name: 'fredoketa',
      type: 'New to Instagram',
    }, {
      id: 3,
      name: 'musundigilbertbruno',
      type: 'Suggested for you',
    }, {
      id: 4,
      name: 'fontesfoundationug',
      type: 'Follows you',
    }, {
      id: 5,
      name: 'mandelaeds',
      type: 'Followed by agneskirabo',
    },
  ];

  return (
    <div className="home-section">
      <Navbar />
      <div className="main-inner-home-section">
        <div className="home-main-photo-section">
          <Posts />
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
            listToFollow.map(userdetail => (
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
                  <span className="lower-follow-name-section-second">{ userdetail.type }</span>
                </div>
                <div className="follow-switch-section">
                  <span>Follow</span>
                </div>
              </div>
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
