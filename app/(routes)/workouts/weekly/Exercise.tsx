'use client'

import { ExerciseInterface } from "@/app/types/types"
import { useMediaQuery } from "react-responsive"

const Exercise = ({image, name, reps, rest}: ExerciseInterface) => {
  const isLayoutUnderBreakpoint = useMediaQuery({query: '(max-width: 1600px)'})
  return (
    <div className="flex flex-col gap-1 text-custom-primary ">
      <div className="flex">
        <h3 className="text-lg [text-shadow:0.25px_0.25px_0.5px_var(--color-custom-secondary)]">{name}</h3>
      </div>

      {/* Responsive design */}
      {isLayoutUnderBreakpoint ? 
        // For smaller devices
      (
        <div className="flex flex-row gap-2 text-custom-secondary">
          <div>
            <p>Reps:</p>
            <p>{reps.join(",")}</p>
          </div>
          <span className="border-r-[0.25px] border-custom-secondary"></span>
          <div className="">
            <p>Rest</p>
            <p>{rest}</p>
          </div>
      </div>
      ) 
        // For larger devices
      : (
        
        <div className="flex flex-row gap-2 text-custom-secondary">
        <p>Rep: {reps.join(",") }</p>
        <p>Rest: {rest}</p>
      </div>
      )}
    </div>
  )
}

export default Exercise