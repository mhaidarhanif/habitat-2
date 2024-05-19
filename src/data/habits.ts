export type Habit = {
  id: number;
  title: string;
  category: string;
  isDaily: boolean;
  timeStart?: Date;
  timeEnd?: Date;
};

export const dataHabits: Habit[] = [
  {
    id: 1,
    title: "Breakfast",
    category: "Food",
    isDaily: true,
    timeStart: new Date("2000-01-01 06:00"),
    timeEnd: new Date("2000-01-01 07:00"),
  },
  {
    id: 2,
    title: "Jogging",
    category: "Sport",
    isDaily: false,
  },
  {
    id: 3,
    title: "Lunch",
    category: "Food",
    isDaily: true,
  },
  {
    id: 4,
    title: "Dinner",
    category: "Food",
    isDaily: true,
    timeStart: new Date("2000-01-01 20:00"),
    timeEnd: new Date("2000-01-01 21:00"),
  },
  {
    id: 5,
    title: "Join community event",
    category: "Social",
    isDaily: false,
  },
];
