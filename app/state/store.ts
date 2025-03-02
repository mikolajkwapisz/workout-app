import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import daysReducer from './slices/daysSlice'
import workoutsReducer from './slices/workoutsSlice'
import exercisesReducer from './slices/exercisesSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    days: daysReducer,
    workouts: workoutsReducer,
    exercises: exercisesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch