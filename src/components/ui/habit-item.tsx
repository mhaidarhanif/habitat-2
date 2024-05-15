import { type Habit } from "../../data/habits";

export function HabitItem({ habit }: { habit: Habit }) {
  return (
    <div>
      <p>{habit.text}</p>
    </div>
  );
}
