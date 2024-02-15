/*--- Broadcast schedule ---*/
const schedule = [
  new Date("2024-02-14 11:35"),
  new Date("2024-02-14 02:30"),
  new Date("2024-02-14 04:30"),
  new Date("2024-02-14 06:30"),
  new Date("2024-02-14 09:00"),
  new Date("2024-02-14 12:00"),
  new Date("2024-02-14 13:30"),
  new Date("2024-02-14 18:05"),
];

// Times to do gymnastic
const playtimes = schedule.map((date) => new Date(date - 1000 * 60 * 5));
const newdates = playtimes.map((playtime) => {
  return `${playtime.getYear()}-${playtime.getMonth()}-${playtime.getDate()} ${playtime.getHours()}:${playtime.getMinutes()}`;
});

function getNewDates() {
  return newdates;
}
