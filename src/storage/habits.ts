import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

import { type Habit } from "../data/habits";

export async function getHabits(query?: string) {
  await fakeNetwork(`getHabits:${query}`);
  let habits = (await localforage.getItem("habits")) as Habit[];
  if (!habits) habits = [];
  if (query) {
    habits = matchSorter(habits, query, { keys: ["title"] });
  }
  return habits.sort(sortBy("last", "createdAt"));
}

export async function createHabit() {
  await fakeNetwork(``);
  const habit = {
    id: Math.random() * 100,
    title: "Breakfast",
    category: "Food",
    isDaily: true,
    timeStart: new Date("2000-01-01 06:00"),
    timeEnd: new Date("2000-01-01 07:00"),
    createdAt: Date.now(),
  };

  const habits = await getHabits();
  habits.unshift(habit);
  await set(habits);
  return habit;
}

export async function getHabit(id: number) {
  await fakeNetwork(`habit:${id}`);
  const habits = (await localforage.getItem("habits")) as Habit[];
  const habit = habits.find((habit) => habit.id === id);
  return habit ?? null;
}

export async function updateHabit(id: number, updates: Habit) {
  await fakeNetwork(``);
  const habits = (await localforage.getItem("habits")) as Habit[];
  const habit = habits.find((habit) => habit.id === id);
  if (!habit) throw new Error("No habit found for");
  Object.assign(habit, updates);
  await set(habits);
  return habit;
}

export async function deleteHabit(id: number) {
  const habits = (await localforage.getItem("habits")) as Habit[];
  const index = habits.findIndex((habit) => habit.id === id);
  if (index > -1) {
    habits.splice(index, 1);
    await set(habits);
    return true;
  }
  return false;
}

function set(habits: Habit[]) {
  return localforage.setItem("habits", habits);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key: string) {
  if (!key) {
    fakeCache = {};
  }

  // @ts-expect-error Later
  if (fakeCache[key]) {
    return;
  }

  // @ts-expect-error Later
  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
