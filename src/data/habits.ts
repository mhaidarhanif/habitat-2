export type Habit = {
  id: number;
  text: string;
  category: string;
  isDaily: boolean;
  timeStart?: Date;
  timeEnd?: Date;
};

export const dataHabits: Habit[] = [
  {
    id: 1,
    text: "Breakfast",
    category: "Food",
    isDaily: true,
    timeStart: new Date("2000-01-01 06:00"),
    timeEnd: new Date("2000-01-01 07:00"),
  },
  {
    id: 2,
    text: "Jogging",
    category: "Sport",
    isDaily: false,
  },
  {
    id: 3,
    text: "Lunch",
    category: "Food",
    isDaily: true,
  },
  {
    id: 4,
    text: "Dinner",
    category: "Food",
    isDaily: true,
    timeStart: new Date("2000-01-01 20:00"),
    timeEnd: new Date("2000-01-01 21:00"),
  },
  {
    id: 5,
    text: "Join community event",
    category: "Social",
    isDaily: false,
  },
];
