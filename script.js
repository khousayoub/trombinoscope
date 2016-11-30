let flip = document.querySelectorAll(".flipper");
for (let i=0 ; i<flip.length; i++) {
	flip[i].addEventListener("click", function() {
		if (window.outerWidth <= "2000") {
			this.classList.toggle("flipped");
		}
		});
	}
/*let cont = document.querySelectorAll(".flip-container");
	for (let i=0 ; i < cont.length ; i++) {
		cont[i].addEventListener("click", function () {
			if (window.outerWidth <= "1024")  {
				this.classList.remove("flip-container");
				this.classList.add("flip-container-resp");
				}
		});
}*/



