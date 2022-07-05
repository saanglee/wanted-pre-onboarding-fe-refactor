const CommentList = (props) => {
  return (
    <div>
      <div className="feed-comment_list">
        <ul>
          {props.comments.map((v, idx) => (
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
  );
};

export default CommentList;
