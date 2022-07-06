const CommentList = props => {
  const deleteComment = event => {
    props.comments.splice(Number(event.target.id), 1);
    props.setComments([...props.comments]);
  };

  return (
    <div>
      <div className="feed-comment_list">
        <ul>
          {props.comments.map((comment, idx) => (
            <li key={comment.commentId}>
              <p>
                <strong>{comment.user}</strong>
                {comment.content}
              </p>

              <button onClick={deleteComment} id={idx}>
                {' '}
                x{' '}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentList;
