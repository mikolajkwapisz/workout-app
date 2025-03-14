'use client'

import { ExerciseInterface } from "@/app/types/types"

const Exercise = ({image, name, reps, rest}: ExerciseInterface) => {
  return (
    <div className="flex flex-col p-2">
      <div>
        <p>{name}</p>
      </div>
      <div className="flex flex-row gap-2">
        <p>Reps: {reps.join(",") }</p>
        <p>Rest: {rest}</p>
      </div>
    </div>
  )
}

export default Exercise