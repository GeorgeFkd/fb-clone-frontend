import React from "react";
import PostHeader from "../PostHeader/PostHeader";
import "./Post.css";
import PostControls from "../PostControls/PostControls";
interface PostType {
  //change to:
  name: string; //authorName
  post_id: number;
  group_name: string;
  group_id: number;
  content: string;
  createdAt: string;
}
const Post: React.FC<PostType> = ({
  group_name,
  group_id,
  name,
  content,
  createdAt,
  post_id,
}) => {
  console.log(group_name, content, "in post");
  return (
    <div className="post-container">
      <PostHeader
        authorAvatar="https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"
        authorName={name}
        createdAt="8m"
        //createdAt
        group_name={group_name}
      />
      <p className="post-content">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, in!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        accusamus unde odit deserunt fugiat soluta commodi perspiciatis
        laboriosam sit sapiente. Obcaecati? */}
        {content}
      </p>
      <PostControls post_id={post_id} />
    </div>
  );
};

export default Post;
