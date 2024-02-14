/*--- Detect to watch TV over time ---*/
const dates = getNewDates();
var detections = [];
var started = new Date();
var now = new Date();
var target = new Date();
var exist = false;
var detectability;

//
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

  console.log(detectability);

  if (
    dates.includes(target) &&
    watchtime / 1000 >= 10 &&
    detectability >= 0.9
  ) {
    console.log("hi");
    socket.emit("mode", "news");
    started = now;
    detections = [];
    console.log("detections : ", detections);
  }
}

function getDetections(){
  return detections;
}

function isExist(){
  return exist;
}

function setExist(val){
  exist = val;
}