var brokenBlockslvl1 = 0;
var brokenBlockslvl2 = 0;
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
document.querySelectorAll(".breakable").forEach((el) => {el.addEventListener("mousedown", function(e) {if (brokenBlockslvl1 != 5) {BreakBlockLv1(el); var aud = new Audio("sbbr.mp3"); aud.play();} else {lvl++; document.getElementById("lvl1").style.display = "none"; document.getElementById("lvl2").style.display = null;} if (brokenBlockslvl2 != 10) {BreakBlockLv2(el); var aud = new Audio("sbbr.mp3"); aud.play();} else {alert("Completed!");}});});
