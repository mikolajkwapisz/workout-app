import { createSelector } from "reselect";
import { RootState } from "../store";

// Select data

const selectUserDays = (state: RootState) => state.user.dayIds;

const selectDaysById = (state: RootState) => state.days.byId;

const selectWorkoutsById = (state: RootState) => state.workouts.byId;

const selectExercisesById = (state: RootState) => state.exercises.byId;

// Selector for weekly plan data
export const selectWeeklyPlan = createSelector(
  [selectUserDays, selectDaysById, selectWorkoutsById, selectExercisesById],
  (userDayIds, daysById, workoutsById, exercisesById) => {
    return userDayIds.map((dayId) => {
      const day = daysById[dayId];
      const workout = workoutsById[day.workoutId];

      const exercises = workout.exerciseIds.map((exerciseId) => exercisesById[exerciseId]);
      return {day: day, workout: { ...workout, exercises}}
    })
  }
)

