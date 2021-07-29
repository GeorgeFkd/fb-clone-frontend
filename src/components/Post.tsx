import React from "react";
import PostHeader from "./PostHeader";
import "./Post.css";
import PostControls from "./PostControls";
const Post = () => {
  return (
    <div className="post-container">
      <PostHeader
        authorAvatar="https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"
        authorName="Geon Daddy Fkd"
        createdAt="8m"
      />
      <p className="post-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        accusamus unde odit deserunt fugiat soluta commodi perspiciatis
        laboriosam sit sapiente. Obcaecati?
      </p>
      <PostControls />
    </div>
  );
};

export default Post;
