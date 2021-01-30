import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/post';
import Profileimage from '../Images/icon.png';
import Carousel from 'react-elastic-carousel';


const Posts = () => {
  const dispatch = useDispatch();

  const recentPosts = [
    {
      id: 1,
      userName: 'djjazzyjeff',
    },
    {
      id: 2,
      userName: 'marymajorin',
    },
    {
      id: 3,
      userName: 'fcbayern',
    },
    {
      id: 4,
      userName: 'okelloroba',
    },
    {
      id: 5,
      userName: 'nandi_global',
    },
    {
      id: 6,
      userName: 'acebooty9',
    },
    {
      id: 7,
      userName: 'pearlkagon',
    },
    {
      id: 8,
      userName: 'jesselingard',
    },
    {
      id: 9,
      userName: 'iambangalee',
    },
  ];

  useEffect(() => {
    dispatch(fetchPosts());
  });

  return (
    <div className="list-of-posts">
      <div className="recent-posts-section d-flex">
        {
          recentPosts.map(val => (
            <div
              className="top-recent-images-outer"
              key={val.id}
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
                { val.userName.length < 10 ? `${val.userName}`
                  : `${val.userName.substring(0, 10)}...` }
              </span>
            </div>
          ))
        }

      </div>
      <div className="common-posts">
        <p>List of posts</p>
      </div>
    </div>
  );
};

export default Posts;
