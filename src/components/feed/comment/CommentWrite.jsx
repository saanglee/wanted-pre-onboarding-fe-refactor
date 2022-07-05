import { AiOutlineSmile } from 'react-icons/ai';
import React, { useRef, useState } from 'react';

const CommentWrite = props => {
  //새로 추가한 댓글 comment 담는 곳
  const [comment, setComment] = useState();

  //댓글 input ref
  const inputComment = useRef();

  //댓글 입력 이벤트
  const onChangeComment = e => {
    const { value } = e.target;

    setComment(value);
  };

  //엔터키 입력 이벤트
  const onPostPressHandler = e => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      setCommentFunc();
    }
  };

  //댓글 게시 버튼 클릭 이벤트
  const onPostClickHandler = e => {
    setCommentFunc();
  };

  //댓글추가 => 기존 데이터랑 합침
  function setCommentFunc() {
    //user 이름은 로컬스토리지에서 받아옴.
    props.setComments([
      ...props.comments,
      {
        user: localStorage.getItem('user'),
        content: comment,
      },
    ]);

    //input 초기화
    inputComment.current.value = '';
  }

  return (
    <div>
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
    </div>
  );
};

export default CommentWrite;
