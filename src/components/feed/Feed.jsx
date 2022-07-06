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
import Portal from '../Portal';

const Feed = ({ feed, id, onRemove }) => {
  // 이미지 로딩 상태
  const [loaded, setLoaded] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  // feedData.json파일 댓글
  const [comments, setComments] = useState(feed.comments);

  // 이미지 로딩 함수
  const onLoaded = () => {
    setLoaded(true);
  };

  const openClickHandler = e => {
    setOpenModal(true);
  };

  const closeClickHandler = e => {
    setOpenModal(false);
  };

  return (
    <div className={'feed-item ' + (loaded && 'on')}>
      <div className="feed-info">
        <div className="user">
          <span></span>
          <strong>{feed.user_id}</strong>
        </div>
        <button type="button" onClick={openClickHandler}>
          <AiOutlineEllipsis />
        </button>
      </div>
      <div className="feed-img">
        <LazyImg
          src={feed.img}
          alt="피드 이미지"
          onLoaded={onLoaded}
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
        <CommentWrite setComments={setComments} comments={comments} />
      </>

      {openModal && (
        <Portal>
          <div className="modal-container">
            <div className="modal-body modal-list">
              <ul>
                <li>
                  <button type="button" onClick={() => onRemove(id)}>
                    삭제
                  </button>
                </li>
                <li>
                  <button type="button">수정</button>
                </li>
                <li>
                  <button type="button" onClick={closeClickHandler}>
                    취소
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Feed;
