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
import Portal from '../Portal';

const Feed = ({ feed, id, onRemove }) => {
  const [loaded, setLoaded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
