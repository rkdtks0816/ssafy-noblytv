/*--- Detect to watch TV over time ---*/
const dates = getNewDates();
var detections = [];
var started = new Date();
var now = new Date();
var target = new Date();
var exist = false;
var detectability;

// Detect to watch TV over time
function detectOverTime() {
  now = new Date();
  target = `${now.getYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
  watchtime = now.getTime() - started.getTime();

  const nones = detections.reduce(
    (cnt, element) => cnt + ("None" === element),
    (cnt = 0)
  );
  const detecteds = detections.reduce(
    (cnt, element) => cnt + ("Detected" === element),
    (cnt = 0)
  );
  detectability = detecteds / (nones + detecteds);

  if (
    dates.includes(target) &&
    watchtime / 1000 >= 10 &&
    detectability >= 0.9
  ) {
    socket.emit("mode", "news");
    started = now;
    detections = [];
  }
}

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