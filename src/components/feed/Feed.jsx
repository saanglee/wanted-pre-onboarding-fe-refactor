import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlinePushpin,
} from 'react-icons/ai';
import CommentWrite from './comment/CommentWrite';
import CommentList from './comment/CommentList';
import LazyImg from './LazyImg';

const Feed = ({ feed }) => {
  // 이미지 로딩 상태
  const [loaded, setLoaded] = useState(false);

  // feedData.json파일 댓글
  const [comments, setComments] = useState(feed.comments);

  // 이미지 로딩 함수
  const onLoaded = () => {
    setLoaded(true);
  };

  return (
    <div className={'feed-item ' + (loaded && 'on')}>
      {loaded && (
        <div className="feed-info">
          <div className="user">
            <span></span>
            <strong>{feed.user_id}</strong>
          </div>
          <AiOutlineEllipsis />
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
                <button type="button">
                  <AiOutlineHeart />
                </button>
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
            <strong>좋아요 {feed.like}개</strong>

              <p>{feed.content}</p>
            </div>
            {/* 댓글 */}
            <CommentList comments={comments} />
          </div>
          <CommentWrite
            setComments={setComments}
            comments={comments}
          />
        </>
      )}
            
    </div>
  );
};

export default Feed;
