import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './userList'

interface State {
  data: User | null;
}

const initialState: State = {
  data: null,
}

export const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState,
  reducers: {
    getSelectedUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload
    },
    clearSelectedUser: (state) => {
      state.data = null
    }
  }
})
export const { getSelectedUser, clearSelectedUser } = selectedUserSlice.actions

export const selectedUserReducer = selectedUserSlice.reducer
