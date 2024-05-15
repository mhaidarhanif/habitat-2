import { dataHabits } from "./data/habits";

export function App() {
  const name = "M Haidar Hanif";

  return (
    <div className="m-10 flex justify-center">
      <main className="w-full max-w-3xl space-y-4">
        <h1 className="text-5xl">Habitat for {name}</h1>

        <hr />

        <section className="space-y-2">
          <h2 className="text-2xl">My Habits</h2>

          <div>
            <ul className="space-y-1">
              {dataHabits.map((habit) => (
                <li>
                  <p>{habit.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
