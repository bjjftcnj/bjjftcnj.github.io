
var element = document.getElementById("slideshow");
var duration = 500; /* fade duration in millisecond */
var hidtime = 200; /* time to stay hidden */
var showtime = 2500; /* time to stay visible */

var running = 0 /* Used to check if fade is running */
var iEcount = 1 /* Element Counter */

var slideshowImages = element.getElementsByTagName('div');
var iTotalE = slideshowImages.length;

function SetOpa(Opa) {
  element.style.opacity = Opa;
  element.style.MozOpacity = Opa;
  element.style.KhtmlOpacity = Opa;
  element.style.filter = 'alpha(opacity=' + (Opa * 100) + ');';
}
function StartFade() {
  if (running != 1) {
   running = 1
   fadeOut()
  }
}
function fadeOut() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + (1 - i) +")", i * duration);
  }
   setTimeout("FadeIn()", (duration + hidtime));
}
function FadeIn() {
  for (i = 0; i <= 1; i += 0.01) {
    setTimeout("SetOpa(" + i +")", i * duration);
  }

  if (iEcount == iTotalE) {
    iEcount = 1;  //reset
    slideshowImages[0].style.display = "block";
    slideshowImages[iTotalE-1].style.display = "none";
  } 
  else {

    slideshowImages[iEcount].style.display = "block";
    slideshowImages[iEcount-1].style.display = "none";
    
    iEcount = iEcount+1;
  }

   setTimeout("fadeOut()", (duration + showtime));
}

setTimeout("StartFade()", (showtime));

