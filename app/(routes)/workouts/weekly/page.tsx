import WorkoutPlan from "./WorkoutPlan"


const page = () => {
  return (
    <main className="w-screen flex flex-col justify-center items-start min-h-dvh bg-custom-bg">
      <div className="flex justify-center min-w-full p-6 bg-custom-bg text-custom-text">
        <h1 className="w-full text-center text-2xl">WORKOUT PLAN</h1>
      </div>
      <div className="grow min-w-full bg-custom-bg-light">
        <WorkoutPlan />
      </div>
    </main>
  )
}

export default page