import React from "react";
import Post from "./Post";

const PostFeed = () => {
  //todo infinite scrolling
  return (
    <div className="postfeed-container">
      <Post />
    </div>
  );
};

export default PostFeed;
