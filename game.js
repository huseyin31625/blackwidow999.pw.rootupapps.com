var brokenBlocks = 0;
function BreakBlock(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
  brokenBlocks++;
}
document.querySelectorAll(".breakable").forEach((el) => {if (brokenBlocks < 5) {el.addEventListener("mousedown", function(e) {BreakBlock(el); var aud = new Audio("sbbr.mp3"); aud.play();})} else {document.getElementById("lvl1").style.display = "none"; document.getElementById("lvl2").style.display = null;} if (brokenBlocks < 15) {el.addEventListener("mousedown", function(e) {BreakBlock(el); var aud = new Audio("sbbr.mp3"); aud.play();})} else {alert("Completed!");}});
