import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import "./CreatePost.css";
import CreatePostOption from "./CreatePostOption";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
const CreatePost = () => {
  return (
    <div className="createpost-container">
      <div className="createpost-textpost">
        <img
          className="createpost-avatar"
          src="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          alt=""
        />
        <div className="createpost-input-wrap">
          <input
            placeholder="what is on your mind?"
            className="createpost-input"
          />
        </div>
      </div>
      <div className="createpost-divider"></div>
      <div className="createpost-options">
        {/* export to component */}
        <CreatePostOption
          Icon={BsFillCameraVideoFill}
          iconColor="red"
          iconText="Live video"
        />

        <CreatePostOption
          iconColor="green"
          iconText="Photo/Video"
          Icon={HiOutlinePhotograph}
        />
        <CreatePostOption
          Icon={CgSmileMouthOpen}
          iconText="Feeling/Activity"
          iconColor="yellow"
        />
      </div>
    </div>
  );
};

export default CreatePost;
