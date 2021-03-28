import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface User {
  avatar: string;
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
}

interface State {
  data: User[],
  filteredData: User[],
  loading: boolean;
}

const initialState: State = {
  data: [],
  filteredData: [],
  loading: false,
}

export const userListSlice = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    getUsersList: (state, action: PayloadAction<User[]>) => {
      state.data = action.payload
    },
    startLoading: (state) => {
      state.loading = true;
    },
    clearLoading: (state) => {
      state.loading = false
    },
    clearUserList: (state) => {
      state.data = []
    },
    filterUserList: (state, action: PayloadAction<User[]>) => {
      state.filteredData = action.payload;
    }
  }
})

export const { getUsersList, clearUserList, startLoading, clearLoading, filterUserList } = userListSlice.actions

export const userListReducer = userListSlice.reducer
