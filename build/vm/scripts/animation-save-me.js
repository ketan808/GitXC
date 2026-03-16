
// Bars

gsap.timeline()

.fromTo("#VM", {x:-1140}, {duration:1, x:0, ease: "power1.out"})
.fromTo(".VMCountMe", {x:-1140}, {duration:1, x:0, ease: "power1.out"}, "<")

.fromTo("#BT", {x:-1140}, {duration:1, x:-230, ease: "power1.out"}, "-=0.8")
.fromTo(".BTCountMe", {x:-910}, {duration:1, x:0, ease: "power1.out"}, "<")

.fromTo("#Vodafone", {x:-1140}, {duration:1, x:-240, ease: "power1.out"}, "-=0.8")
.fromTo(".VodaCountMe", {x:-910}, {duration:1, x:0, ease: "power1.out"}, "<")

.fromTo("#Talk", {x:-1140}, {duration:1, x:-240, ease: "power1.out"}, "-=0.8")
.fromTo(".TalkCountMe", {x:-910}, {duration:1, x:0, ease: "power1.out"}, "<")

.fromTo("#EE", {x:-1140}, {duration:1, x:-560, ease: "power1.out"}, "-=0.8")

.fromTo("#Sky", {x:-1140}, {duration:1, x:-580, ease: "power1.out"}, "-=0.8")

.fromTo("#Plusnet", {x:-1140}, {duration:1, x:-700, ease: "power1.out"}, "-=0.8")

;

gsap.registerEffect({
  name: "counter",
  innerText:5

});

gsap.to("#VMCount", { innerText: 1140, duration: 1.1, 
  snap: {
    innerText:5
  } 
  })

gsap.to("#BTCount", { innerText: 910, duration: 1.3, 
    snap: {
      innerText:5
    } 
    })

gsap.to("#VodaCount", { innerText: 900, duration: 1.5, 
      snap: {
        innerText:5
      } 
      })

gsap.to("#TalkCount", { innerText: 900, duration: 1.7, 
      snap: {
        innerText:5
      } 
      })

    
    ;





