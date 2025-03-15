import Link from "next/link"

const page = () => {
  return (
    <main className="flex-grow flex flex-col bg-custom-bg text-custom-text">
      <div className="text-center">
        <h1 className="py-5 text-5xl font-bold">See your workout</h1>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="flex gap-10 text-3xl *:hover:text-custom-accent">
          <div>
            <Link href="/workouts/day">Day</Link>
          </div>
          <div>
            <Link href="/workouts/weekly">Week</Link>
          </div>
          <div>
            <Link href="/workouts/month">Month</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page