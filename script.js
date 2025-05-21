function displayMenu() {
	var menu = document.getElementById("header-menu");
	var closeIcon = document.getElementById('menu-close-icon');
	var openIcon = document.getElementById('menu-open-icon');

	menu.style.transition = '0.5s';
	menu.style.width = "200px";
	openIcon.style.display="none";
	closeIcon.style.display="inline-block";
}

function hideMenu() {
	var menu = document.getElementById("header-menu");
	var closeIcon = document.getElementById('menu-close-icon');
	var openIcon = document.getElementById('menu-open-icon');

	menu.style.transition = '0.5s';
	menu.style.width = "0px";
	openIcon.style.display="inline-block";
	closeIcon.style.display="none";	    
}


function displaySection(sectionName) {

	const HOMEPAGETAG="welcome-to-ftc-section";
	const ALLTAGS=["welcome-to-ftc", "professor-john-toribio", "class-schedule", "contact-us", "about-the-academy", "professor-marcelo-oliveira","our-classes","private-classes","bjj-kids-teens", "secaucus-schedule"];
	const CLASSESSUBTAGS = ["our-classes","private-classes","bjj-kids-teens"];
  const SCHEDULESUBTAGS = ["secaucus-schedule"]
	
	let sectionTag = "";
	
	// Validate if section is valid. If not, default to home page.
	// This will eliminate any display errors in bad URLs
	if (sectionName==='' || ALLTAGS.indexOf(sectionName)===-1) {
		sectionTag= HOMEPAGETAG;
	}
	else {
		if (CLASSESSUBTAGS.indexOf(sectionName)!= -1) 
			sectionTag = "about-the-academy-section";
    else if (SCHEDULESUBTAGS.indexOf(sectionName) != -1)
      sectionTag = "class-schedule-section"
		else 
			sectionTag = sectionName + "-section";
	}

	// Display only the section that was selected. Hide all others.
	let allSections = document.getElementsByClassName("section")
	for (i = 0; i < allSections.length; i++) { 
		var section = allSections[i]
		if (section.id === sectionTag)
			section.style.display='block';
		else 		
			section.style.display='none';
	}

	// Scroll to top if not subsection. 
	// This is necessary because we are using hidden divs
	// and the browser will stay in the location of the 
	// last div even if the div is hidden.
	if (CLASSESSUBTAGS.indexOf(sectionName)=== -1) {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

}

/******************************
Closes slide menu when blurred
on smaller or mobile devices
*******************************/
document.onclick = function(event) { 

	if(event.target.id==="")
	{ 
	    hideMenu();
  	}
}

/******************************
Upon window resizing, the menu 
transition is removed so it
does not "fly accross" screen 
when growing past 750px
******************************/
window.onresize = function(event) {
	var w = window.innerWidth;
    var menu = document.getElementById("header-menu");

	if (w >= 750) {
		menu.style.transition = '0s';
	}
	else {
		menu.style.transition = '0s';
		menu.style.width = "0px";
	}

};

/******************************
In case the sections are linked
externally, pre-load section
******************************/
const hash = window.location.hash;
displaySection(hash.substring(1));

window.onpopstate = function() {
	const hash = window.location.hash;
	displaySection(hash.substring(1));
}

function openSecaucus() {
  if (!navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
    window.location.href = 'https://www.google.com/maps/search/?api=1&query=North Bergen, NJ';
    return false; // Prevent default link behavior
  }
}