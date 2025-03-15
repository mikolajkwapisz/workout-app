'use client'

import { useSelector } from "react-redux"
import { selectWeeklyPlan } from "@/app/state/selectors/weeklyWorkoutSelector"
import Exercise from "./Exercise"

const WorkoutPlan = () => {
  const weeklyPlan = useSelector(selectWeeklyPlan)

  return (
    <div className={`text-custom-primary flex justify-evenly flex-wrap gap-7 p-2`}>
      {weeklyPlan.map((dayData) => (
        <div 
          key={`weeklyPlan-id-${dayData.day.id}`}
          className=" flex flex-col gap-4 mb-10 min-w-[150px] "
        >
          {/* Day Heading */}
          <div className="flex flex-col gap-2 pl-2 pb-[0.35rem] border-b-2 border-custom-accent">
            <h2 className="text-2xl font-semibold">Day {dayData.day.id}</h2>
            <h3 className="text-custom-secondary text-lg">{dayData.workout.name}</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {dayData.workout.exercises.map((exercise) => (
              <li 
                key={`weeklyPlan-id-${dayData.day.id}-exercise-id-${exercise.id}`}
                className="border-b border-custom-secondary transition-colors hover:border-custom-accent hover:cursor-pointer"
              >
                <Exercise 
                  id={exercise.id}
                  image={exercise.image}
                  name={exercise.name}
                  reps={exercise.reps}
                  rest={exercise.rest}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;
