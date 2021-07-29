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
  const [postcontent, setPostcontent] = useState("");
  const [openNewPostModal, setOpenNewPostModal] = useState(true);
  async function savePostToDb(e: any) {
    //this works but needs the group stuff
    //todo get the id by the localstorage(+decryption)
    const data = {
      author_id: 4,
      content: postcontent,
      group_name: "emo goth grils",
    };
    console.log(postcontent);
    const jwtToken = localStorage.getItem("user") as string;
    console.log("my jwt", jwtToken);
    const auth = "Authorization";
    const response = await fetch("http://localhost:4000/posts/new", {
      method: "POST",
      headers: {
        Authorization: jwtToken,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.status);
    if (response.status === 201) {
      console.log(response.statusText, "all ok");
      setPostcontent("");
    } else {
      console.log("failed to create post ");
    }
  }
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
            onClick={(e) => setOpenNewPostModal(true)}
            placeholder="what is on your mind?"
            className="createpost-input"
            value={postcontent}
            onChange={(e) => setPostcontent(e.target.value)}
          />
          <FiUpload className="createpost-icon" onClick={savePostToDb} />
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
