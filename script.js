const countDownMints = document.getElementById("counter");
const x = document.getElementById("myAudio");

var startMints = parseInt(prompt("Add Alarm", ""));
let time = startMints * 60;
var isActive = false;

// Oclock Reel Time
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


function updateTime() {
  const minuts = Math.floor(time / 60);
  let scond = time % 60;
  scond = scond < 10 ? "0" + scond : scond;
  countDownMints.innerHTML = `${minuts}:${scond}`;
  // alarm on:
   isActive=true; 
  // 1- set time text 00:00
  restText();
  // play sound
  playAudio();
  // send Notification
  ShowNotiification();
  // update the alarm
  setTimeout(updateTime,1000);
  return time--;
}

function restText(){
  if (time <= 1) {
    countDownMints.innerHTML = `00:00`;
  }
}

// sound
function playAudio() {
  x.play();
}
function pauseAudio() {
  x.pause();
}


getPremissins();
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