import React from "react";
import { useSelector } from "react-redux";
import ChatBox from "../ChatBox/ChatBox";
import "./ChatsContainer.css";
const ChatsContainer = () => {
  const chats = useSelector((state) => state.chat.chats);
  return (
    <div className="chats-container">
      {chats.map((chat: any, idx: number) => {
        return <ChatBox {...chat} key={idx} />;
      })}
    </div>
  );
};

export default ChatsContainer;
