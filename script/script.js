let flip = document.querySelectorAll(".flipper");
for (let i=0 ; i<flip.length; i++) {
	flip[i].addEventListener("click", function() {
		if (window.outerWidth <= "2000") {
			this.classList.toggle("flipped");
		}
		});
	}
document.querySelector(".collapse").addEventListener("click", function() {
	document.querySelector(".nav").classList.toggle("nav_vert");
});




