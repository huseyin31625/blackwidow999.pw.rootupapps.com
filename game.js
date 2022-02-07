document.querySelectorAll(".breakable").forEach((el) => {el.addEventListener("click", function(e) {el.remove(); var aud = new Audio("sbbr.mp3"); aud.play();})});
