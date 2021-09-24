import { createSlice } from "@reduxjs/toolkit";

export const chatBoxSlice = createSlice({
  name: "chatboxes",
  initialState: {
    chats: [
      {
        id: 1,
        chatName: "Guantanamo",
        messages: [
          {
            author: "Geon",
            content: "Hello guys",
          },
        ],
      },
      {
        id: 2,
        chatName: "Guantanamo",
        messages: [
          {
            author: "Geon",
            content: "Hello guys",
          },
        ],
      },
    ],
  },
  reducers: {
    openChatBox: (state, action: { payload: any }) => {
      state.chats.push(action.payload);
      //todo implement only 3-4 chats in the window
    },
    closeChatBox: (state, action: { payload: any }) => {
      state.chats = state.chats.filter(
        (chat: any) => chat.id !== action.payload
      );
    },
  },
});

export const { openChatBox, closeChatBox } = chatBoxSlice.actions;

export const selectOpenChatBoxes = (state: any) => state.chatboxes.chats;

export default chatBoxSlice.reducer;
