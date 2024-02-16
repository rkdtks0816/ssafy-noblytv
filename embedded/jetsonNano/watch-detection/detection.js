/*--- Detect to watch TV over time ---*/
const dates = getNewDates();
const plays = ["gymnastic", "diary", "quiz", "community"];
var detections = [];
var started = new Date();
var now = new Date();
var target = new Date();
var exist = false;
var detectability;

// Return detection value
function getDetections() {
  return detections;
}

// Return exist value
function isExist() {
  return exist;
}

// Set exist as value
function setExist(val) {
  exist = val;
}

// Count number of target class in detection array
function countClass(target) {
  return detections.reduce(
    (cnt, element) => cnt + (target === element),
    (cnt = 0)
  );
}

// Detect to watch TV over time
function detectOverTime() {
  now = new Date();
  target = `${now.getYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
  watchtime = now.getTime() - started.getTime();

  const nones = countClass("None");
  const detecteds = countClass("Detected");
  detectability = detecteds / (nones + detecteds);

  console.log(detectability);

  if (
    dates.includes(target) &&
    watchtime / 1000 >= 10 &&
    detectability >= 0.9
  ) {
    const random = Math.floor(Math.random() * 100);
    socket.emit("mode", plays[random % 4]);
    started = now;
    detections = [];
  }
}
