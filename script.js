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
	const ALLTAGS=["welcome-to-ftc","our-classes", "class-schedule", "contact-us", "about-the-academy", "professor-marcelo-oliveira","private-classes","bjj-kids-teens"];
	const CLASSESSUBTAGS = ["private-classes","bjj-kids-teens"];
	
	let sectionTag = "";
	
	if (sectionName==='' || ALLTAGS.indexOf(sectionName)===-1)
		sectionTag= HOMEPAGETAG;
	else {
		if (CLASSESSUBTAGS.indexOf(sectionName)!= -1)
			sectionTag = "our-classes-section";
		else 
			sectionTag = sectionName + "-section";
		
	}

	let allSections = document.getElementsByClassName("section")

	for (i = 0; i < allSections.length; i++) { 
		var section = allSections[i]
		if (section.id === sectionTag)
			section.style.display='block';
		else 		
			section.style.display='none';
	}

	//Scroll to top if not subtags
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
displaySection(hash.substr(1));

window.onpopstate = function() {
	const hash = window.location.hash;
	displaySection(hash.substr(1));
}
