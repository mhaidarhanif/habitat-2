import { useState } from "react";

import { HabitItem } from "./components/ui/habit-item";
import { type Habit, dataHabits } from "./data/habits";

export function App() {
  const [habits] = useState(dataHabits);

  const submitNewHabit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newHabit: Habit = {
      id: 100,
      title: formData.get("title")?.toString() || "Untitled",
      category: formData.get("category")?.toString() || "Uncategorized",
      isDaily: false,
    };

    console.log({ newHabit });
  };

  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3xl space-y-4">
        <h1 className="text-5xl">Habitat</h1>

        <hr />

        <form method="post" onSubmit={submitNewHabit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              placeholder="New habit title..."
              required
              className="p-1 border border-solid border-emerald-400"
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              placeholder="Category name"
              required
              className="p-1 border border-solid border-emerald-400"
            />
          </div>
          <button type="submit" className="p-2 bg-emerald-500 rounded-sm">
            Add New Habit
          </button>
        </form>

        <hr />

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">My Habits</h2>

          <div>
            <ul className="flex flex-col gap-2 divide-y divide-solid">
              {habits.map((habit) => (
                <li key={habit.id}>
                  <HabitItem habit={habit} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
