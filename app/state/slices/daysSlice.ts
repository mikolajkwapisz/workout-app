import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DayInterface, ID } from "@/app/types/types";

interface DaysState {
  byId: Record<number, DayInterface>
  allIds: ID[]
}

const initialState: DaysState = {
  byId: {},
  allIds: []
}

const daysSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    addDay: (state, action: PayloadAction<DayInterface>) => {
      const newID = action.payload.id;
      state.byId[newID] = action.payload;
      state.allIds.push(newID)
    },
    updateDayWorkout: (state, action: PayloadAction<{dayId: ID; workoutId: number}>) => {
      if(state.byId[action.payload.dayId]) {
        state.byId[action.payload.dayId].workoutId = action.payload.workoutId;
      }
    },
    setActivity: (state, action: PayloadAction<{dayId: ID, active: boolean}>) => {
      if(state.byId[action.payload.dayId]){
        state.byId[action.payload.dayId].active = action.payload.active;
      }
    }
  }
})

export const {addDay, updateDayWorkout, setActivity} = daysSlice.actions;
export default daysSlice.reducer;
