import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineEllipsis,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineSend,
  AiOutlinePushpin,
  AiOutlineSmile,
} from "react-icons/ai";

const Feed = ({ feed }) => {
  //이미지 로딩 상태
  const [loaded, setLoaded] = useState(false);
  //새로 추가한 댓글 comment 담는 곳
  const [comment, setComment] = useState();
  //feedData.json파일 댓글
  const [comments, setComments] = useState(feed.comments);

  //댓글 input ref
  const inputComment = useRef();

  //이미지 로딩 함수
  const onLoaded = () => {
    setLoaded(true);
  };

  //댓글 입력 이벤트
  const onChangeComment = (e) => {
    const { value } = e.target;

    setComment(value);
  };

  //댓글 게시 버튼 클릭 이벤트
  const onPostClickHandler = (e) => {
    setCommentFunc();
  };

  //엔터키 입력 이벤트
  const onPostPressHandler = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      setCommentFunc();
    }
  };

  //댓글추가 => 기존 데이터랑 합침
  function setCommentFunc() {
    //user 이름은 로컬스토리지에서 받아옴.
    setComments([
      ...comments,
      {
        user: localStorage.getItem("user"),
        content: comment,
      },
    ]);

    //input 초기화
    inputComment.current.value = "";
  }

  return (
    <div className={"feed-item " + (loaded && "on")}>
      {loaded && (
        <div className="feed-info">
          <div className="user">
            <span></span>
            <strong>{feed.user_id}</strong>
          </div>
          <AiOutlineEllipsis />
        </div>
      )}

      <div className="feed-img">
        <img src={feed.img} alt="" onLoad={onLoaded} />
      </div>

      {loaded && (
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
            <div className="feed-comment_list">
              <ul>
                {comments.map((v, idx) => (
                  <li key={idx}>
                    <p>
                      <strong>{v.user}</strong>
                      {v.content}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="feed-comment_input">
            <div className="input">
              <AiOutlineSmile />
              <input
                type="text"
                className="w100"
                ref={inputComment}
                onChange={onChangeComment}
                onKeyDown={onPostPressHandler}
              />
            </div>
            <button type="button" onClick={onPostClickHandler}>
              게시
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Feed;
