var index = 0;
show();
function show() {
  var i;
  var slides=document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for(i=0;i<slides.length;i++) {
    slides[i].style.display="none"
  }
  index=index+1;
  if(index>slides.length) {
    index=1;
  };
  for (i=0;i<dots.length;i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display="block";
  dots[index-1].className += " active";
  setTimeout(show,2500);
}
var index = 0;
show();
function show() {
  var i;
  var slides=document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");
  for(i=0;i<slides.length;i++) {
    slides[i].style.display="none"
  }
  index=index+1;
  if(index>slides.length) {
    index=1;
  };
  for (i=0;i<dots.length;i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display="block";
  dots[index-1].className += " active";
  setTimeout(show,2500);
}
var index = 0;
show();
function show() {
  var i;
  var slides=document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot");
  for(i=0;i<slides.length;i++) {
    slides[i].style.display="none"
  }
  index=index+1;
  if(index>slides.length) {
    index=1;
  };
  for (i=0;i<dots.length;i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display="block";
  dots[index-1].className += " active";
  setTimeout(show,2500);
}