import { configureStore } from '@reduxjs/toolkit'
import { userListReducer } from '../reducers/userList'
import { selectedUserReducer } from '../reducers/selectedUser'

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    selectedUser: selectedUserReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch