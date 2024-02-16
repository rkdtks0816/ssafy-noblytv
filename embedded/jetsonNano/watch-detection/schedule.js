/*--- Broadcast schedule ---*/
const schedule = [
  new Date("2024-02-16 10:26"),
  new Date("2024-02-16 02:30"),
  new Date("2024-02-16 04:30"),
  new Date("2024-02-16 06:30"),
  new Date("2024-02-16 09:00"),
  new Date("2024-02-16 12:00"),
  new Date("2024-02-16 13:30"),
  new Date("2024-02-16 17:53"),
];
// Times to do gymnastic
const playtimes = schedule.map((date) => new Date(date - 1000 * 60 * 5));
const newdates = playtimes.map((playtime) => {
  return `${playtime.getYear()}-${playtime.getMonth()}-${playtime.getDate()} ${playtime.getHours()}:${playtime.getMinutes()}`;
});

function getNewDates() {
  return newdates;
}
