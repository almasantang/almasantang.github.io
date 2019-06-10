(function() {
	
	var preload = document.getElementById("preload");
	var loading = 0;
	var id = setInterval(frame, 64);

	function frame () {
		if(loading == 100) {
			clearInterval(id);
			window.open("main-page.html", "_self");
		} 
		else {
			loading +=  1;
			if(loading == 90) {
				preload.style.animation = "fadeOut 1s ease";
			}
		}
	}

})();