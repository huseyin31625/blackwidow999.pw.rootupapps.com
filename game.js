function BreakBlock(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
}
var brokenBlocks = 0;
document.querySelectorAll(".breakable").forEach((el) => {el.addEventListener("mousedown", function(e) {BreakBlock(el); var aud = new Audio("sbbr.mp3"); aud.play();})});
