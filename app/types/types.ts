export type ID = number;

export interface ExerciseInterface {
  id: ID;
  name: string;
  reps: number[];
  rest: number; // in seconds
  image?: string
}

export interface WorkoutInterface {
  id: ID;
  name: string
  exerciseIds: number[]; // Rreferences exercises by id
}

export interface DayInterface {
  id: ID;
  active: boolean;
  workoutId: ID; // Store only the workout id
}

export interface UserInterface {
  id: ID;
  dayIds: ID[]; // Store only day ids
}