import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ExerciseInterface, ID } from "@/app/types/types";

interface ExercisesState {
  byId: Record<number, ExerciseInterface>
  allIds: number[]
}

const initialState: ExercisesState = {
  byId: {},
  allIds: []
}

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {
    addExercise: (state, action: PayloadAction<ExerciseInterface>) => {
      const newId = action.payload.id;
      if(!state.byId[newId]){
        state.byId[newId] = action.payload;
        state.allIds.push(newId);
      }
    },
    updateExercise: (state, action: PayloadAction<{exerciseId: number, newData: Partial<ExerciseInterface>}>) => {
      const { exerciseId, newData} = action.payload;
      if(state.byId[exerciseId]) {
        state.byId[exerciseId] = { ...state.byId[exerciseId], ...newData}
      }
    },
    deleteExercise: (state, action: PayloadAction<number>) => {
      if(state.byId[action.payload]) {
        delete state.byId[action.payload]
        state.allIds = state.allIds.filter((id) => id !== action.payload)
      }
    }
  }
})

export const {addExercise, updateExercise, deleteExercise} = exercisesSlice.actions;
export default exercisesSlice.reducer;