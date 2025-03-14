"use client";
import { RootState, AppDispatch } from "@/app/state/store";
import { useSelector } from "react-redux";
import Exercise from "./Exercise";
import Link from "next/link"

const page = () => {
  const exercises = useSelector((state: RootState) => state.exercises);

  return (
    <main className="min-h-dvh bg-slate-900 text-white flex justify-center items-center">
      <ul>
        <li className="border p-2">
          <div className="flex justify-between *:w-[75px] *:text-center">
            <h2>Id</h2>
            <h2>Name</h2>
            <h2>Reps</h2>
            <h2>Rest</h2>
          </div>
        </li>
        {exercises.allIds.map((id) => {
          const exercise = exercises.byId[id];

          return (
            <li key={`Exercise:${exercise.id}`}>
              <Exercise 
                exercise = {exercise}
                />
            </li>
          )
        })}
      </ul>
      <Link href="/">HOME</Link>
    </main>
  );
};

export default page;
