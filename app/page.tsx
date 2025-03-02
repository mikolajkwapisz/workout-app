
import { UserDataLoader } from './components/userDataLoader/UserDataLoader';
import {UserWorkoutPlan} from './components/workoutPlan/WorkoutPlan';


export default function Home() {
  return (
    <main className="min-h-dvh bg-slate-900">
      <UserDataLoader/>
      <UserWorkoutPlan />
    </main>
  );
}
