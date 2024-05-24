import { Link, Outlet } from "react-router-dom";

export function RootRoute() {
  return (
    <div className="flex justify-center m-10">
      <div className="space-y-4 justify-center w-full max-w-3xl">
        <header className="flex justify-between items-center">
          <h1 className="text-5xl">
            <Link to="/" className="text-emerald-400">
              Habitat
            </Link>
          </h1>

          <nav>
            <ul>
              <li>
                <Link to="/about" className="text-emerald-400">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <hr />

        <main className="space-y-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
