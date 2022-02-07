document.querySelectorAll(".breakable").forEach((e) => {e.addEventListener("click", function(e) {e.remove(); var aud = new Audio("sbbr.mp3"); aud.play();})});
