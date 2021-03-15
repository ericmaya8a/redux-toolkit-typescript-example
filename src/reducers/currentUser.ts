import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './users'

interface State {
  value: User | null;
}

const initialState: State = {
  value: null
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload
    },
    clearCurrentUser: (state) => {
      state.value = null
    }
  }
})

export const { setCurrentUser, clearCurrentUser } = currentUserSlice.actions

export const currentUserReducer = currentUserSlice.reducer