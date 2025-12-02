function setAlarm() {
  // fist need to get the input from the id=alarmset
  const setTimeSeconds = document.getElementById("alarmSet").value;
  console.log(setTimeSeconds);
  const minutes = Math.trunc(setTimeSeconds/60);
  const seconds = setTimeSeconds%60;
  console.log(minutes);
  // then update time remaining whith the value of alarm set
  const upDate = document.getElementById("timeRemaining");
  // Time Remaining: 00:00
  upDate.innerHTML = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });
// need tomake the functon counting donw seconds by one until get 00:00

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
