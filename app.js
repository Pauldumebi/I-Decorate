var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({defaults: {duration: 1}})
   tl.from(".landing-page-header", {y: -50, stagger: 0.6, opacity: 0})
      .to(rule, {duration: 1, cssRule: {scaleY:0}}, "-=1-5")
   tl.from(".caption", {y: -30, stagger: 0.6, opacity: 0})
      .to(rule, {duration: 1.8, cssRule: {scaleY:0}}, "-=1-5")
      .from(".phone-img", {backgroundPosition: '200px 0px', opacity: 0}, "-=1-5")
      .from(".form", {y: 10, opacity: 0}, "-=1")

      // document.getElementById('cta').addEventListener('click', function () {
      //   tl.reversed() ? tl.play() : tl.reverse() 
      // })