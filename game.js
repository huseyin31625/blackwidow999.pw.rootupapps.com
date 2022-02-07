document.querySelectorAll(".breakable").forEach((e) => {e.addEventListener("click", function(el) {el.remove(); var aud = new Audio("sbbr.mp3"); aud.play();})});
