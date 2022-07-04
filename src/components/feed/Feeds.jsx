import React from "react";

import Feed from "./Feed";

const Feeds = (props) => {
  return (
    <>
      {props.data &&
        props.data.feeds.map((feed, idx) => <Feed key={idx} feed={feed} />)}
    </>
  );
};

export default Feeds;
