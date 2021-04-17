/* eslint-disable react/prop-types */

import React from 'react';
import Carousel from 'react-elastic-carousel';
import Profileimage from '../Images/icon.png';
import Item from '../components/Styled';
import Post from '../components/Post';

const Posts = ({ postsList, displayModal }) => {
  const breakPoints = [
    { width: 59, itemsToShow: 1 },
    { width: 119, itemsToShow: 2 },
    { width: 178, itemsToShow: 3 },
    { width: 237, itemsToShow: 4 },
    { width: 297, itemsToShow: 5 },
    { width: 350, itemsToShow: 6 },
  ];

  return (
    <div className="list-of-posts">
      <Carousel
        pagination={false}
        breakPoints={breakPoints}
        className="recent-posts-section"
      >
        {
        postsList.map(post => (
          <Item key={post.id}>
            <div
              className="top-recent-images-outer"
            >
              <div className="top-recent-images">
                <img
                  className="top-recent-images-inner"
                  src={Profileimage}
                  alt="profile"
                />
              </div>
              <span className="top-recent-images-inner-name">
                {' '}
                { post.user.name.length < 10 ? `${post.user.name}`
                  : `${post.user.name.substring(0, 10)}...` }
              </span>
            </div>
          </Item>
        ))
      }
      </Carousel>
      <div className="common-posts">
        {
          postsList.map(post => (
            <Post key={post.id} post={post} displayModal={displayModal} />
          ))
        }
      </div>
    </div>
  );
};

export default Posts;
