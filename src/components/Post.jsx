/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch } from 'react-redux';
import { addCommentToPost } from '../actions/comment';
import {
  likeToPost, dislikeToPost,
  bookmarkToPost,
  disbookmarkToPost,
} from '../actions/like';
import Profileimage from '../Images/icon.png';
import NikeOne from '../Images/nike1.jpg';
import NikeTwo from '../Images/nike2.jpg';
import NikeThree from '../Images/nike3.jpg';
import LastSeen from './LastSeen';

const Post = ({ post, displayModal }) => {
  const images = [NikeOne, NikeTwo, NikeThree];
  const likesArray = [];
  const bookmarksArray = [];
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const addComment = e => {
    const { token } = localStorage;
    e.preventDefault();
    dispatch(addCommentToPost(content, post.id, token));
    setContent('');
  };

  const likePost = e => {
    const { token } = localStorage;
    e.preventDefault();
    dispatch(likeToPost(post.id, token));
  };

  const bookmarkPost = e => {
    const { token } = localStorage;
    e.preventDefault();
    dispatch(bookmarkToPost(post.id, token));
  };

  const dislikePost = e => {
    const { token } = localStorage;
    e.preventDefault();
    post.likes.forEach(like => {
      if (like.post_id === post.id
        && like.user_id === parseInt(localStorage.userId, 10)) {
        dispatch(dislikeToPost(like.id, token));
      }
    });
  };

  const disBookmarkPost = e => {
    const { token } = localStorage;
    e.preventDefault();
    post.bookmarks.forEach(bookmark => {
      if (bookmark.post_id === post.id
        && bookmark.user_id === parseInt(localStorage.userId, 10)) {
        dispatch(disbookmarkToPost(bookmark.id, token));
      }
    });
  };

  post.likes.forEach(post => {
    likesArray.push(post.user_id);
  });

  post.bookmarks.forEach(post => {
    bookmarksArray.push(post.user_id);
  });

  return (
    <div className="single-post-section">
      <div className="top-username-image-section">
        <div className="top-image-section">
          <img
            className="top-image-section-image"
            src={Profileimage}
            alt="profile"
          />
        </div>
        <div className="top-username-svg-section">
          <div className="top-username-section">{ post.user.name }</div>
          <div className="top-svg-section">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
      </div>
      <div className="image-carousel-section">
        <Carousel
          indicators={false}
          className="main-image-carousel"
        >
          {
         images.map(image => (
           <Carousel.Item
             className="main-image-carousel-inner"
             key={image}
           >
             <img src={image} alt="first" />
           </Carousel.Item>
         ))
        }
        </Carousel>
      </div>
      <div className="lower-svg-section">
        <div className="like-and-comment-section">
          {
            !likesArray.includes(parseInt(localStorage.userId, 10)) ? (
              <svg
                onClick={likePost}
                aria-label="Like"
                className="_8-yf5 first-post-svg"
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
              </svg>
            ) : (
              <svg
                onClick={dislikePost}
                aria-label="Like"
                className="_8-yf5 first-post-svg"
                height="24"
                fill="red"
                viewBox="0 0 48 48"
                width="24"
              >
                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
              </svg>
            )
          }
          <svg
            aria-label="Comment"
            className="_8-yf5 second-post-svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
          >
            <path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd" />
          </svg>
          <svg
            aria-label="Share Post"
            className="_8-yf5 third-post-svg"
            fill="#262626"
            height="24"
            viewBox="0 0 48 48"
            width="24"
            onClick={() => displayModal(post.id)}
          >
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
          </svg>
          {
          !bookmarksArray.includes(parseInt(localStorage.userId, 10)) ? (
            <svg
              aria-label="Save"
              onClick={bookmarkPost}
              className="_8-yf5 last-pos-svg"
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z" />
            </svg>
          ) : (
            <svg
              aria-label="Save"
              onClick={disBookmarkPost}
              className="_8-yf5 last-pos-svg"
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 28.9 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1z" />
            </svg>
          )
          }
        </div>
        <div className="total-likes-section">
          { (post.likes.length)}
          {' '}
          Likes
        </div>
        <div className="main-post-text-section">
          <h6>
            { post.user.name }
            {' '}
            <span>
              { post.content < 100 ? `${post.content}`
                : `${post.content.substring(0, 101)}...` }
            </span>
          </h6>
        </div>
        <div className="view-comments-section">
          View all
          {' '}
          { (post.comments.length)}
          {' '}
          comments
        </div>
        <div className="commentors-and-comments-sections">
          {
          post.comments.slice(0, 2).map(comment => (
            <h6 key={comment.id}>
              {comment.user.name}
              {' '}
              <span>
                {comment.content}
              </span>
            </h6>
          ))
        }
        </div>
        <div className="last-posted-time">
          <LastSeen date={post.created_at} />
        </div>
        <div className="comment-input-section">
          <div className="comment-input-section-svg">
            <svg
              aria-label="Emoji"
              className="_8-yf5 "
              fill="#262626"
              height="24"
              viewBox="0 0 48 48"
              width="24"
            >
              <path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z" />
              <path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z" />
            </svg>
          </div>
          <form
            onSubmit={addComment}
            className="comment-input-section-form"
          >
            <input
              className="comment-input-section-input"
              type="text"
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="Add a comment..."
            />
            <input
              className="comment-input-section-post"
              type="submit"
              value="Post"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
