import React from "react";
import "./MessengerDropdown.css";
import { MdMoreHoriz } from "react-icons/md";
import { IconContext } from "react-icons";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BiVideoPlus, BiEdit, BiSearch } from "react-icons/bi";

// row
import Avatar from "../../utils/Avatar";
import { FaCircle } from "react-icons/fa";

const MessengerDropdown = () => {
  return (
    <div className="dropdown__container messenger-dropdown-container">
      <div className="messenger-dropdown-title-container">
        <h1 className="messenger-dropdown-title">Messenger</h1>
        <div className="messenger-dropdown-title-icons-container">
          <IconContext.Provider
            value={{ className: "messenger-dropdown-title-icons row" }}
          >
            <MdMoreHoriz />
            <AiOutlineFullscreen />
            <BiVideoPlus />
            <BiEdit />
          </IconContext.Provider>
        </div>
      </div>
      <SearchBox />
      <div className="messenger-dropdown-content">
        <Row
          avatarSrc="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          isRead={false}
          chatName="Guantanamo"
          lastMessage="Hello there"
        />
        <Row
          avatarSrc="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          isRead={false}
          chatName="Guantanamo"
          lastMessage="Hello there"
        />
        <Row
          avatarSrc="https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-attractive-smiling.jpg"
          isRead={true}
          chatName="Guantanamo"
          lastMessage="Hello there"
        />
        {/* db requests for user chats ,render component like notification row  */}
      </div>
    </div>
  );
};

const SearchBox: React.FC = () => {
  return (
    <div className="searchbox-container">
      <BiSearch className="searchbox-icon" />
      <input
        type="text"
        className="searchbox-input"
        placeholder="Search Messenger"
      />
    </div>
  );
};

interface RowProps {
  avatarSrc: string;
  isRead: boolean;
  lastMessage: string;
  chatName: string;
}

const Row: React.FC<RowProps> = ({
  avatarSrc,
  isRead,
  lastMessage,
  chatName,
}) => {
  return (
    <div className="messenger-dropdown-row-container row">
      <Avatar size={2.5} src={avatarSrc} />
      <div className="messenger-dropdown-row-content">
        <span className="messenger-dropdown-row-content-chatname">
          {chatName}
        </span>
        <span className="messenger-dropdown-row-content-lastMessageExcerpt">
          {/* add sender:{text} */}
          {lastMessage}
        </span>
      </div>
      <MdMoreHoriz className="messenger-dropdown-row-moreoptions" />
      {!isRead ? (
        <FaCircle className="messenger-dropdown-row-isReadCircle" />
      ) : (
        ""
      )}
    </div>
  );
};

export default MessengerDropdown;
