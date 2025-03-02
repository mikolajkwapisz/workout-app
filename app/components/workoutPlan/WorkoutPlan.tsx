'use client'
import { useSelector } from "react-redux";
import { RootState } from "@/app/state/store";

export const UserWorkoutPlan = () => {
  const user = useSelector((state: RootState) => state.user);
  const days = useSelector((state: RootState) => state.days);
  const workouts = useSelector((state: RootState) => state.workouts);
  const exercises = useSelector((state: RootState) => state.exercises);

  if (!user.id) return <p>No user data available</p>;

  return (
    <div className="text-white">
      <h2 className="text-2xl mb-2">Workouts</h2>
      <ul className="mb-12">
        {workouts.allIds.map((id) => {
          const workout = workouts.byId[id]
          return (
            <li key={`Workout:${id}`}>
              {workout.name}
            </li>
          )
        })}
      </ul>
      <h2 className="text-2xl mb-2 ">Exercises</h2>
      <ul>
        {exercises.allIds.map((id) => {
          const exercise = exercises.byId[id]
          return (
            <li key={id} className="mb-4">
              <h3>{exercise.name}</h3>
              <p>Reps: {exercise.reps.join(", ")}</p>
              <p>Rest: {exercise.rest}</p>
              <p></p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};