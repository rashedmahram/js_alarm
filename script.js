getPremissins();
var startMints = parseInt(prompt("Add Alarm", ""));
let time = startMints * 60;
const countDownMints = document.getElementById("counter");
// sound
var x = document.getElementById("myAudio");
function playAudio() {
  x.play();
}
function pauseAudio() {
  x.pause();
}
setInterval(updateTime, 1000);
function updateTime() {
  const minuts = Math.floor(time / 60);
  let scond = time % 60;
  scond = scond < 10 ? "0" + scond : scond;
  countDownMints.innerHTML = `${minuts}:${scond}`;
  Control();
  return time--;
}

function Control() {
  if (time <= 1) {
    time = 0;
    countDownMints.innerHTML = `00:00`;
    ShowNotiification();
    playAudio();
  }
}

setInterval(getTime, 1000);

function getTime() {
  var today = new Date();

  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  const saat = document.getElementById("saat");

  saat.innerHTML = `${dateTime}`;
}


// Notiifications
function ShowNotiification() {
  const notification = new Notification("clear", {
    body: "Times Up.",
  });
}

function getPremissins(){
if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permision) => {
    if (Notification.permission === "granted") {

    }
  });
}
}