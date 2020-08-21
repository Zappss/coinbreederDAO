// According
function callAccordion() {
 	var acc = document.getElementsByClassName("fp_accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;

	    if (panel.style.maxHeight) {
	      	panel.style.maxHeight = null;
	      	panel.style.display = "none";
      		panel.style.marginTop = "0px";
      		panel.style.paddingTop = "0px";
      		panel.style.paddingBottom = "0px";

	    } else {
	    	panel.style.display = "block"; 
	    	setTimeout(function () {
	    		panel.style.maxHeight = panel.scrollHeight + 280 + "px";
		      	panel.style.marginTop = "20px";
		      	panel.style.paddingTop = "20px";
	    	}, 10)
		      	
	    }
	  });
	}
}

callAccordion();