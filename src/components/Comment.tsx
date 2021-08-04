import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import "./Comment.css";
import Avatar from "./utils/Avatar";
interface Props {
  authorName: string;
  createdAt: string;
  author_id: number;
  replies_to: number | null;
  content: string;
  comment_id: string;
}
const Comment: React.FC<Props> = ({
  createdAt,
  author_id,
  replies_to,
  content,
  comment_id,
  authorName,
}) => {
  // the ids will be used for db requests for replies to the comment and for the user profile

  return (
    <div className="comment-container">
      <Avatar
        src={
          "https://i.pinimg.com/originals/a5/41/02/a541024b0989ea9b0bd470fcfc89dcb1.jpg"
        }
        size={2}
      />
      <div className="comment-box-wrap">
        <div className="comment-box">
          <span className="comment-author">{authorName}</span>
          <span className="comment-content">{content}</span>
        </div>
        <div className="comment-controls">
          <span className="comment-control">Like</span>
          <span className="comment-control">Reply</span>
          <span className="comment-control">Share</span>
          <span className="comment-date">{createdAt}</span>
        </div>
      </div>
      {/* */}
      <MdMoreHoriz className="comment-moreoptions" />
    </div>
  );
};

export default Comment;
