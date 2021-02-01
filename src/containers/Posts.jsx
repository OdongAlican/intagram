import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import { fetchPosts } from '../actions/post';
import Profileimage from '../Images/icon.png';
import Item from '../components/Styled';

const Posts = () => {
  const dispatch = useDispatch();

  const breakPoints = [
    { width: 59, itemsToShow: 1 },
    { width: 119, itemsToShow: 2 },
    { width: 178, itemsToShow: 3 },
    { width: 237, itemsToShow: 4 },
    { width: 297, itemsToShow: 5 },
    { width: 350, itemsToShow: 6 },
  ];

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

  // const listOfPosts = [
  //   {
  //     likedLast: "fusemvni",
  //     totalLiked: 1234567,
  //     username: "therock",
  //     postText: `Midnight oil burners and training hard/dialing in my conditioning for BLACK ADAM⚡️
  //     Always be grateful for the grind and remember to have some fun along the way.`,
  //     comments: 71245,
  //     commentors : [
  //       {
  //       person: "wol4sk8tes",
  //       quotes: "Stay strong my man"
  //       },
  //       {
  //       person: "wol4sk8tes",
  //       quotes: "Stay strong my man"
  //       },
  //       {
  //       person: "wol4sk8tes",
  //       quotes: "Stay strong my man"
  //       },
  //       {
  //       person: "wol4sk8tes",
  //       quotes: "Stay strong my man"
  //       },
  //     ]
  //   }
  // ]
  useEffect(() => {
    dispatch(fetchPosts());
  });

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

        }
      </div>
    </div>
  );
};

export default Posts;
