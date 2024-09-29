gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

// Dial Counter Code

let tspan = document.querySelectorAll("#manage")

gsap.registerEffect({
  name:"counter",
  extendTimeline:true,
  defaults:{
    end:0,
    duration:1.5,
    ease:"power1.out",
    increment:1,
  },
  effect: (targets, config) => {
  let tl = gsap.timeline()


  
  tl.to(targets, {duration:config.duration, 
             innerText:config.end, 
             //snap:{innerText:config.increment},
             modifiers:{
               innerText:function(innerText){
                 return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");

               }
             },
             ease:config.ease}, 0)
  
  return tl
}
})



// Bars


gsap.timeline({scrollTrigger:{
  trigger:".vertical-bars",
  start:"top 50%",
  end:"bottom top",
  toggleActions:"restart none none reset"
}})

.fromTo("#VM", {x:-1140}, {duration:1, x:0, ease: "power1.out"})
.fromTo("#BT", {x:-1140}, {duration:1, x:-230, ease: "power1.out"}, "-=0.8")
.fromTo("#Vodafone", {x:-1140}, {duration:1, x:-240, ease: "power1.out"}, "-=0.8")
.fromTo("#Talk", {x:-1140}, {duration:1, x:-240, ease: "power1.out"}, "-=0.8")
.fromTo("#EE", {x:-1140}, {duration:1, x:-560, ease: "power1.out"}, "-=0.8")
.fromTo("#Sky", {x:-1140}, {duration:1, x:-580, ease: "power1.out"}, "-=0.8")
.fromTo("#Plusnet", {x:-1140}, {duration:1, x:-650, ease: "power1.out"}, "-=0.8")



// Dial Counter

ScrollTrigger.create({
  trigger: fastdial,
  onEnter: counternumber,

});


function counternumber () {

const target = document.querySelector("#manage");
const count = 1140;
const dur = 4;

const tween = gsap
  .to({}, { duration: count, onUpdate: changeNumber})
  .timeScale(count / dur);

function changeNumber() {
  target.textContent = tween.time().toFixed();
}

}

// Dial Needle

  gsap.timeline({scrollTrigger:{
    trigger:"#fastdial",
    toggleActions:"restart none none reset"
  }})
  
  .from("#maskRing", {duration: 4, drawSVG: 0 })
  .to("#needle", {duration: 4, rotation: 180, svgOrigin: "225 200" }, 0);



