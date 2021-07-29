import React from "react";
import "./NewPostModal.css";
import { ImCross } from "react-icons/im";
import Avatar from "./utils/Avatar";
import {
  MdGroup,
  MdArrowDropDown,
  MdPhotoLibrary,
  MdTagFaces,
} from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { GiMicrophone } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
  onClose: () => void;
}
const NewPostModal: React.FC<Props> = ({ onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const [postContent, setPostContent] = useState("");

  function handleChange(e: any) {
    setPostContent(e.target.value);
  }
  function submitPost() {
    //todo save post to db request
  }
  function focusOnInput(e: any) {
    inputRef.current?.focus();
  }
  useEffect(() => {
    submitBtnRef.current!.disabled = !!postContent ? false : true;
  }, [postContent]);
  return (
    <div className="postmodal-container-wrap">
      <div className="postmodal-container">
        <div className="postmodal-title-container row">
          {/* find a way to center the title */}
          <h3 className="postmodal-title">Create Post</h3>
          <ImCross className="postmodal-title-icon" onClick={onClose} />
        </div>
        <div className="divider"></div>
        <div className="postmodal-main-header">
          <Avatar
            src="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
            size={2.5}
          />
          <div className="postmodal-main-details">
            <span className="postmodal-main-username">Geon Fkd</span>
            {
              //todo add the tooltip}
            }
            <div className="postmodal-main-selectgroup">
              <MdGroup className="postmodal-main-selectgroup-icon" />
              <span>friends</span>
              <MdArrowDropDown className="postmodal-main-selectgroup-icon" />
            </div>
          </div>
        </div>
        <div className="postmodal-main-inputarea" onClick={focusOnInput}>
          <input
            ref={inputRef}
            value={postContent}
            onChange={handleChange}
            type="text"
            placeholder="What is on your mind?"
            className="postmodal-main-input"
          />
        </div>
        <div className="postmodal-addextra">
          <span className="postmodal-addextra-prompt">Add to your post</span>
          <div className="postmodal-addextra-icons">
            <IconContext.Provider
              value={{ className: "postmodal-addextra-icon" }}
            >
              <MdPhotoLibrary style={{ color: "green" }} />

              <MdTagFaces style={{ color: "yellow" }} />

              <FiMapPin style={{ color: "orange" }} />

              <GiMicrophone style={{ color: "red" }} />

              {/* <IconContext.Provider value={{ color: "" }}>
                <MdPhotoLibrary />
              </IconContext.Provider> */}
            </IconContext.Provider>
          </div>
        </div>
        {/* disable it properly with js */}
        <button
          className="postmodal-submit"
          onClick={submitPost}
          ref={submitBtnRef}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPostModal;
