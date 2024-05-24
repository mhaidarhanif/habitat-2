import { type LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { getHabit } from "../storage/habits";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.habitId);
  const habit = await getHabit(id);
  return { habit };
}

export function HabitRoute() {
  const { habit } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!habit) {
    return (
      <div>
        <p>Habit not found.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">{habit.title}</h1>
      <h2>
        Category: <span className="font-bold">{habit.category}</span>
      </h2>
    </div>
  );
}
