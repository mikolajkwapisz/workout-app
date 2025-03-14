'use client'
import React, { useState } from 'react'
import { ExerciseInterface } from '@/app/types/types'
import { AppDispatch } from '@/app/state/store'
import { useDispatch, useSelector } from 'react-redux'
import { updateExercise } from '@/app/state/slices/exercisesSlice'



const Exercise = ({exercise}: {exercise: ExerciseInterface}) => {

  const [newExercise, setNewExercise] = useState<ExerciseInterface>(exercise)
  const dispatch = useDispatch<AppDispatch>()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, dataset } = e.target;
    setNewExercise((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClick = () => {
    dispatch(updateExercise({exerciseId: exercise.id, newData: newExercise}))
  }
  return (
    <div className="border p-2 flex flex-col gap-2">
      <div className="flex justify-between  *:w-[75px] *:text-center">
        <p>{exercise.id}</p>
        <p>{exercise.name}</p>
        <p>{exercise.reps.join(", ")}</p>
        <p>{exercise.rest}</p>
      </div>
      <div className="flex justify-between  *:w-[75px] *:text-center *:border">
        <input type="text" name="id" value={newExercise.id} onChange={(e) => handleChange(e)}/>
        <input type="text" name="name" value={newExercise.name} onChange={(e) => handleChange(e)}/>
        <input type="text" name="reps" value={newExercise.reps.join(", ")} onChange={(e) => handleChange(e)}/>
        <input type="text" name="rest" value={newExercise.rest} onChange={(e) => handleChange(e)}/>
      </div>
      <div className="text-center">
        <button className="border p-1" onClick={() => handleClick()}>Change</button>
      </div>
    </div>
  );
}

export default Exercise