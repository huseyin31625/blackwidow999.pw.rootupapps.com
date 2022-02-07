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
document.querySelectorAll(".breakable").forEach((el) => {if (brokenBlockslvl1 != 5) {el.addEventListener("mousedown", function(e) {BreakBlockLv1(el); var aud = new Audio("sbbr.mp3"); aud.play();}); return;} if (brokenBlockslvl1 == 5) {document.getElementById("lvl1").style.display = "none"; document.getElementById("lvl2").style.display = null;} if (brokenBlockslvl2 != 10) {el.addEventListener("mousedown", function(e) {BreakBlockLv2(el); var aud = new Audio("sbbr.mp3"); aud.play();})} if (brokenBlockslvl2 == 10) {alert("Completed!");}});
