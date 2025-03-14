import {UserWorkoutPlan} from './components/workoutPlan/WorkoutPlan';


export default function Home() {
  return (
    <main className="min-h-dvh bg-custom-bg text-custom-text flex">
      <UserWorkoutPlan />
      <h1 className='text-4xl text-custom-primary'>Elo</h1>
      <h1 className='text-4xl text-custom-secondary'>Elo</h1>
      <h1 className='text-4xl text-custom-accent'>Elo</h1>
      <h1 className='text-4xl text-custom-text'>Elo</h1>
    </main>
  );
}
