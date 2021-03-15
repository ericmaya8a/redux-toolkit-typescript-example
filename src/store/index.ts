import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from '../reducers/users'
import { currentUserReducer } from '../reducers/currentUser'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch