import dayjs from "dayjs";

export function getTimeString(date: Date | undefined) {
  const timeString = date ? dayjs(date).format("HH:mm") : null;
  return timeString;
}
