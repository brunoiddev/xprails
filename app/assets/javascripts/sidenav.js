function openNav() {
	if (document.getElementById("sidenav").offsetWidth =="0") {
		document.getElementById("sidenav").style.width = "250px";
		document.getElementById("seta").style.webkitTransform = 'rotate(-90deg)';
		document.getElementById("content").style.opacity = 1.5;
	} else {
		document.getElementById("sidenav").style.width = "0";
		document.getElementById("seta").style.webkitTransform = 'rotate(0deg)';
	}
	
}

function closeNav() {
	document.getElementById("sidenav").style.width = "0";
}

window.onload = function() {
    document.getElementById("content").onclick = function() {
        if (document.getElementById("sidenav").offsetWidth =="250") {
        	document.getElementById("sidenav").style.width = "0";
			document.getElementById("seta").style.webkitTransform = 'rotate(0deg)';
    	}
    }
}
