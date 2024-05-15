export type Habit = {
  id: number;
  text: string;
  category: string;
};

export const dataHabits: Habit[] = [
  {
    id: 1,
    text: "Breakfast",
    category: "Food",
  },
  {
    id: 2,
    text: "Jogging",
    category: "Sport",
  },
  {
    id: 3,
    text: "Lunch",
    category: "Food",
  },
];
