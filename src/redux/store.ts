// import reducers
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // user:userReducer
  },
});

//state.counter{key} is changed by the reducer provided (value)
//dont mutate just return new objects with the changes
