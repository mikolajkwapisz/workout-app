import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserInterface, ID, DayInterface, ExerciseInterface, WorkoutInterface } from "@/app/types/types";
import { AppDispatch } from "../store";
import { addExercise } from "./exercisesSlice";
import { addWorkout } from "./workoutsSlice";
import { addDay } from "./daysSlice";
import { RootState } from "../store";

interface UserState{
  id: ID | null
  dayIds: ID[]
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  id: null,
  dayIds: [],
  loading: false,
  error: null,
}

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/data");

      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Fetched Data:", data);

      // Dispatch user details
      dispatch(setUser({ id: data.user.id, dayIds: data.user.dayIds }));

      // Dispatch related data
      data.days.forEach((day: DayInterface) => dispatch(addDay(day)));
      data.workouts.forEach((workout: WorkoutInterface) => dispatch(addWorkout(workout)));
      data.exercises.forEach((exercise: ExerciseInterface) => dispatch(addExercise(exercise)));

      return data.user; // Return user info for success case
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: number; dayIds: number[] }>) => {
      state.id = action.payload.id;
      state.dayIds = action.payload.dayIds;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.dayIds = action.payload.dayIds;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;

