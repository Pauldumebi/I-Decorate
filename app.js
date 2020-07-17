var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({defaults: {duration: 1}})
   tl.from(".landing-page-header", {y: -50, stagger: 0.6, opacity: 0})
      .to(rule, {duration: 1, cssRule: {scaleY:0}}, "-=1-5")
   tl.from(".caption", {y: -30, stagger: 0.6, opacity: 0})
      .to(rule, {duration: 1.8, cssRule: {scaleY:0}}, "-=1-5")
      .from(".phone-img", {backgroundPosition: '200px 0px', opacity: 0}, "-=1-5")
      .from(".form", {y: 10, opacity: 0}, "-=1")
    //   .from(".phone-img", {y: 0, opacity: 0}, "-=1")

     
var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".sec1-dmush1"); //element

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});