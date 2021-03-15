import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
  nat: string;
}

interface UserState {
  values: User[]
}

const initialState: UserState = {
  values: []
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.values = action.payload
    },
    clearUsers: (state) => {
      state.values = []
    }
  }
})

export const { clearUsers, setUsers } = userSlice.actions

export const usersReducer = userSlice.reducer