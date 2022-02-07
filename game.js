function BreakBlock(el) {
  el.style["pointer-events"] = "none";
  el.style.opacity = "0";
}
document.querySelectorAll(".breakable").forEach((el) => {el.addEventListener("click", function(e) {el.remove(); var aud = new Audio("sbbr.mp3"); aud.play();})});
