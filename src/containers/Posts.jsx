/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { fetchPosts } from '../actions/post';
import Profileimage from '../Images/icon.png';
import Item from '../components/Styled';
import Post from '../components/Post';

const Posts = ({ recentPosts }) => {
  const dispatch = useDispatch();

  const postsList = useSelector(state => state.postReducer.posts);

  const breakPoints = [
    { width: 59, itemsToShow: 1 },
    { width: 119, itemsToShow: 2 },
    { width: 178, itemsToShow: 3 },
    { width: 237, itemsToShow: 4 },
    { width: 297, itemsToShow: 5 },
    { width: 350, itemsToShow: 6 },
  ];

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="list-of-posts">
      <Carousel
        pagination={false}
        breakPoints={breakPoints}
        className="recent-posts-section"
      >
        {
        recentPosts.map(post => (
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
                { post.userName.length < 10 ? `${post.userName}`
                  : `${post.userName.substring(0, 10)}...` }
              </span>
            </div>
          </Item>
        ))
      }
      </Carousel>
      <div className="common-posts">
        {
          postsList.map(post => (
            <Post key={post.id} post={post} />
          ))
        }
      </div>
    </div>
  );
};

export default Posts;
