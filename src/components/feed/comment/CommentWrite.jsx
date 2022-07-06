import { AiOutlineSmile } from 'react-icons/ai';
import React, { useRef, useState } from 'react';

const CommentWrite = props => {
  const [comments, setComments] = useState();
  const [commentId, setCommentId] = useState(1);

  const inputComment = useRef();

  const onChangeComment = e => {
    const { value } = e.target;
    setComments(value);
  };

  const createComment = () => {
    props.setComments([
      ...props.comments,
      {
        user: localStorage.getItem('user'),
        content: comments,
        commentId: commentId,
      },
    ]);

    setCommentId(prev => prev + 1);

    inputComment.current.value = '';
  };

  const onPostPressHandler = e => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      createComment();
    }
  };

  const onPostClickHandler = () => {
    createComment();
  };

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
