'use client';
import Link from "next/link"
import RefreshButton from "../../userDataLoader/RefreshDataButton"

const DesktopMenu = () => {
  return (
    <div className="flex justify-between items-center px-5 h-full">
      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-xl md:text-2xl hover:text-custom-accent">
              Home
            </Link>
          </li>
          <li>
            <Link href="/workouts" className="text-xl md:text-2xl hover:text-custom-accent">
              Workouts
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Workout App</h1>
      </div>

      {/* Refresh Button */}
      <div className="bg-transparent flex justify-center items-center">
        <RefreshButton />
      </div>
    </div>
  )
}

export default DesktopMenu