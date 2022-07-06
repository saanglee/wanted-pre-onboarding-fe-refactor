import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlinePushpin,
  AiFillHeart,
} from 'react-icons/ai';
import CommentWrite from './comment/CommentWrite';
import CommentList from './comment/CommentList';
import LazyImg from './LazyImg';

const Feed = ({ feed }) => {
  const [loaded, setLoaded] = useState(false);
  const [comments, setComments] = useState(feed.comments);
  const [isLike, setIsLike] = useState(false);
  const [like, setLike] = useState(feed.like);

  const onLoaded = () => {
    setLoaded(true);
  };

  const onClickLike = () => {
    setIsLike(prev => !prev);
    if (isLike) setLike(prev => prev - 1);
    if (!isLike) setLike(prev => prev + 1);
  };

  return (
    <div className={'feed-item ' + (loaded && 'on')}>
      <div className="feed-info">
        <div className="user">
          <span></span>
          <strong>{feed.user_id}</strong>
        </div>
        <AiOutlineEllipsis />
      </div>

      <div className="feed-img">
        <LazyImg
          src={feed.img}
          alt="피드 이미지"
          onLoaed={onLoaded}
        />
      </div>

      <>
        <div className="feed-utils">
          <div className="feed-menu">
            <ul>
              <li>
                {isLike ? (
                  <button
                    className="like-btn"
                    type="button"
                    onClick={onClickLike}
                  >
                    <AiFillHeart />
                  </button>
                ) : (
                  <button
                    className="unLike-btn"
                    type="button"
                    onClick={onClickLike}
                  >
                    <AiOutlineHeart />
                  </button>
                )}
              </li>
              <li>
                <Link to="/">
                  <AiOutlineMessage />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiOutlineSend />
                </Link>
              </li>
            </ul>
            <button type="button">
              <AiOutlinePushpin />
            </button>
          </div>
          <div className="feed-content">
            <strong>좋아요 {like}개</strong>

            <p>{feed.content}</p>
          </div>
          <CommentList
            comments={comments}
            setComments={setComments}
            feed={feed}
          />
        </div>
        <CommentWrite setComments={setComments} comments={comments} />
      </>
    </div>
  );
};

export default Feed;
