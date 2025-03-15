import WorkoutPlan from "./WorkoutPlan"


const page = () => {
  return (
    <main className="flex-grow flex flex-col justify-center items-start ">
      <div className="flex-grow w-screen pt-4  bg-custom-bg-light">
        <WorkoutPlan />
      </div>
    </main>
  )
}
export default page