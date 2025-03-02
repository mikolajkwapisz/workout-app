import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ID, WorkoutInterface } from "@/app/types/types";

export interface WorkoutState {
  byId: Record<number, WorkoutInterface>;
  allIds: ID[];
}

const initialState: WorkoutState = {
  byId: {},
  allIds: [],
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    addWorkout: (state, action: PayloadAction<WorkoutInterface>) => {
      const newId = action.payload.id;
      if (!state.byId[newId]) {
        state.byId[newId] = action.payload;
        state.allIds.push(newId);
      }
    },
    addExerciseToWorkout: (
      state,
      action: PayloadAction<{ workoutID: number; exerciseId: number }>
    ) => {
      const newId = action.payload.workoutID;
      if (state.byId[newId]) {
        state.byId[newId].exerciseIds.push(action.payload.exerciseId);
      }
    },
  },
});

export const {addWorkout, addExerciseToWorkout} = workoutsSlice.actions;
export default workoutsSlice.reducer;
