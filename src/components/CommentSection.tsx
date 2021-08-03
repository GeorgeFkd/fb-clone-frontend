import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./CommentSection.css";
import { useEffect } from "react";
import { useRef } from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
const CommentSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitComment = function (comment: string | undefined, postId: number) {
    if (comment) {
      //todo api request
    }
  };

  useEffect(() => {
    const handleInputEnter = function (ev: KeyboardEvent) {
      console.log(ev.key);
      if (ev.key === "Enter") {
        // probably async
        submitComment(inputRef.current?.value, 5);
        inputRef.current!.value = "";
      }
    };
    inputRef.current?.addEventListener("keypress", handleInputEnter);
    return () => {
      inputRef.current?.removeEventListener("keypress", handleInputEnter);
    };
  }, []);
  return (
    <div className="commentsection-container">
      <div className="commentsection-toprow">
        <span className="commentsection-toprow-text">Top Comments</span>
        <MdArrowDropDown className="commentsection-toprow-icon" />
      </div>
      {/* extract to component to use for reply */}
      <CommentInput />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentSection;
