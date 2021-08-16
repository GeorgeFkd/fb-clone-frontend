import { createSlice } from "@reduxjs/toolkit";
//todo types
const notificationsSlice = createSlice({
  name: "notifications",
  initialState: {
    number: 0,
    notificationsArr: [""],
  },
  reducers: {
    deleteNotification: (state, action) => {
      state.number -= 1;
      state.notificationsArr = state.notificationsArr.filter(
        (notification: any) => notification.id != action.payload.id
      );
    },
    addNotification: (state, action: { payload: any }) => {
      state.notificationsArr.push(action.payload);
    },
  },
});

export const { deleteNotification, addNotification } =
  notificationsSlice.actions;

export const selectNotificationsCount = (state: any) =>
  state.notifications.number;
export const selectNotifications = (state: any) =>
  state.notifications.notificationsArr;
export default notificationsSlice.reducer;
