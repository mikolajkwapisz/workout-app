'use client'

import { useSelector } from "react-redux"
import { selectWeeklyPlan } from "@/app/state/selectors/weeklyWorkoutSelector"
import Exercise from "./Exercise"

const WorkoutPlan = () => {
  const weeklyPlan = useSelector(selectWeeklyPlan)
  return (
    <div className="flex justify-evenly h-full gap-5 p-2 text-custom-primary">
      {weeklyPlan.map((dayData) => (
        <div 
          key={`weeklyPlan-id-${dayData.day.id}`}
          className="flex flex-col gap-4"
          >
            {/* Day Heading */}
          <div className="flex flex-col gap-2 pb-[0.35rem] border-b-2">
            <h2 className="text-xl">Day {dayData.day.id}</h2>
            <h3 className="text-custom-secondary">{dayData.workout.name}</h3>
          </div>
          <ul className="flex flex-col gap-4">
            {dayData.workout.exercises.map((exercise) => (
              <li 
                key={`weeklyPlan-id-${dayData.day.id}-exercise-id-${exercise.id}`}
                className="border-b border-custom-secondary"
                >
                <Exercise 
                  id = {exercise.id}
                  image = {exercise.image}
                  name = {exercise.name}
                  reps = {exercise.reps}
                  rest = {exercise.rest}
                  />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default WorkoutPlan