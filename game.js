var brokenBlockslvl1 = 0;
var brokenBlockslvl2 = 0;
var brokenBlockslvl3 = 0;
var lvl = 1;
var seconds = 60;

function Won() {
  var element = document.createElement("div");
  element.className = "modal-container";
  var element2 = document.createElement("div");
  var info = document.createElement("div");
  info.innerHTML = "<h2>YOU WON!</h2><br><a href=\"prize.exe\">Download Prize</a>";
  var ok = document.createElement("button");
  ok.innerHTML = "OK";
  ok.onclick = function() {element.remove();};
  element2.appendChild(info);
  element2.appendChild(ok);
  element.appendChild(element2);
  document.body.appendChild(element);
}
function Completed() {
  var element = document.createElement("div");
  element.className = "modal-container";
  var element2 = document.createElement("div");
  element2.className = "modal-body";
  var info = document.createElement("div");
  info.innerHTML = "Completed!";
  var ok = document.createElement("button");
  ok.innerHTML = "OK";
  ok.onclick = function() {element.remove();Won();};
  element2.appendChild(info);
  element2.appendChild(ok);
  element.appendChild(element2);
  document.body.appendChild(element);
}
function TimesUp() {
  var element = document.createElement("div");
  element.className = "modal-container";
  var element2 = document.createElement("div");
  element2.className = "modal-body";
  var info = document.createElement("div");
  info.innerHTML = "Time's up!";
  var ok = document.createElement("button");
  ok.innerHTML = "Replay";
  ok.onclick = function() {window.location.href = window.location.href;};
  element2.appendChild(info);
  element2.appendChild(ok);
  element.appendChild(element2);
  document.body.appendChild(element);
}
function BreakBlockLv1(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
  brokenBlockslvl1++;
}
function BreakBlockLv2(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
  brokenBlockslvl2++;
}
function BreakBlockLv3(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
  brokenBlockslvl3++;
}
function display (seconds) {
  const format = val => `0${Math.floor(val)}`.slice(-2)
  const minutes = (seconds % 3600) / 60

  return [minutes, seconds % 60].map(format).join(':')
}
var timer = setInterval(function() {if (seconds == 0) {TimesUp(); clearInterval(timer); return;}seconds--; document.getElementById("timer").innerHTML = display(seconds);}, 1000);
document.querySelectorAll(".breakable").forEach((el) => {el.addEventListener("click", function(e) {if (lvl == 1) {if (brokenBlockslvl1 != 5) {BreakBlockLv1(el); var aud = new Audio("sbbr.mp3"); aud.play();} if (brokenBlockslvl1 == 5) {lvl++; document.getElementById("lvl1").style.display = "none"; document.getElementById("lvl2").style.display = null;} return;} if (lvl == 2) {if (brokenBlockslvl2 != 10) {BreakBlockLv2(el); var aud = new Audio("sbbr.mp3"); aud.play();} if (brokenBlockslvl2 == 10) {lvl++; document.getElementById("lvl2").style.display = "none"; document.getElementById("lvl3").style.display = null;} return;} if (lvl == 3) {if (brokenBlockslvl3 != 15) {BreakBlockLv3(el); var aud = new Audio("sbbr.mp3"); aud.play();} if (brokenBlockslvl3 == 15) {Completed();}}});});
