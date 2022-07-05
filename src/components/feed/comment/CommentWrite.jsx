import { AiOutlineSmile } from 'react-icons/ai';
import React, { useRef, useState } from 'react';

const CommentWrite = props => {
  const [comment, setComment] = useState();

  const inputComment = useRef();

  const onChangeComment = e => {
    const { value } = e.target;

    setComment(value);
  };

  const onPostPressHandler = e => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      setCommentFunc();
    }
  };

  const onPostClickHandler = e => {
    setCommentFunc();
  };

  function setCommentFunc() {
    props.setComments([
      ...props.comments,
      {
        user: localStorage.getItem('user'),
        content: comment,
      },
    ]);

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
