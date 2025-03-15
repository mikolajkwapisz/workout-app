import RefreshButton from "../userDataLoader/RefreshDataButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-custom-bg text-custom-text">
      
      <div>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-xl hover:text-custom-accent">Home</Link>
          </li>
          <li>
            <Link href="/workouts" className="text-xl hover:text-custom-accent">Workouts</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Workout app</h1>
      </div> 

      {/* Refresh Button */}
      <div>
        <div className="bg-transparent"><RefreshButton/></div>
      </div>
      
    </nav>
  )
}

export default Navbar