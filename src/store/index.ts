import { configureStore } from "@reduxjs/toolkit";
import { userListReducer } from "../reducers/userList";
import { selectedUserReducer } from "../reducers/selectedUser";
import { modalReducer } from "../reducers/modal";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    selectedUser: selectedUserReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
