import React from "react";

import Feed from "./Feed";

const Feeds = (props) => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  return (
    <>
      {props.data &&
        shuffle(props.data.feeds.map((feed, idx) => <Feed key={idx} feed={feed} />))}
    </>
  );
};

export default Feeds;
