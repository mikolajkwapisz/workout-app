import {UserWorkoutPlan} from './components/workoutPlan/WorkoutPlan';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex-grow flex gap-8 bg-custom-bg text-custom-text">
      <div>
        <UserWorkoutPlan />
      </div>
      <div>
        <h1 className='text-4xl text-custom-primary'>Test</h1>
        <h1 className='text-4xl text-custom-secondary'>Test</h1>
        <h1 className='text-4xl text-custom-accent'>Test</h1>
        <h1 className='text-4xl text-custom-text'>Test</h1>
      </div>
      <div className=''>
        <Link href="/workouts/weekly" className='text-3xl hover:text-custom-accent'>Weekly</Link>
      </div>
    </main>
  );
}
