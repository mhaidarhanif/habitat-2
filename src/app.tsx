import { HabitItem } from "./components/ui/habit-item";
import { dataHabits } from "./data/habits";

export function App() {
  const name = "M Haidar Hanif";

  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3xl space-y-4">
        <h1 className="text-5xl">Habitat for {name}</h1>

        <hr />

        <section className="space-y-2">
          <h2 className="text-2xl font-bold">My Habits</h2>

          <div>
            <ul className="flex flex-col gap-2 divide-y divide-solid">
              {dataHabits.map((habit) => (
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
