import { type Habit } from "../../data/habits";
import { getTimeString } from "../../utils/datetime";

export function HabitItem({ habit }: { habit: Habit }) {
  const timeStart = getTimeString(habit.timeStart);
  const timeEnd = getTimeString(habit.timeEnd);

  return (
    <div className="flex justify-between py-2">
      <div className="inline-flex gap-4">
        <p className="text-xl">{habit.text}</p>
        {timeStart && timeEnd && (
          <p>
            <time dateTime={timeStart}>{timeStart}</time>
            <span>-</span>
            <time dateTime={timeEnd}>{timeEnd}</time>
          </p>
        )}
      </div>

      <div className="inline-flex gap-4">
        {habit.isDaily && <p className="text-lg">↻</p>}
        <p className="text-slate-600 dark:text-slate-400">{habit.category}</p>
      </div>
    </div>
  );
}
