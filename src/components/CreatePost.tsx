import React from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import "./CreatePost.css";
import CreatePostOption from "./CreatePostOption";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import NewPostModal from "./NewPostModal";
const CreatePost = () => {
  const [openNewPostModal, setOpenNewPostModal] = useState(false);

  return (
    <div className="createpost-container">
      <div className="createpost-textpost">
        <img
          className="createpost-avatar"
          src="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          alt="user's profile picture"
        />
        <div className="createpost-input-wrap">
          <input
            onClick={(e) => setOpenNewPostModal(true)}
            placeholder="what is on your mind?"
            className="createpost-input"
          />
        </div>
      </div>
      <div className="createpost-divider"></div>
      <div className="createpost-options">
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
      {openNewPostModal && (
        <NewPostModal onClose={() => setOpenNewPostModal(!openNewPostModal)} />
      )}
    </div>
  );
};

export default CreatePost;
