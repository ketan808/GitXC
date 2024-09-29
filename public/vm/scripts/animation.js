gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

console.clear();
gsap.config({ trialWarn: false });
const max = 1140;
const targets = gsap.utils.toArray(".Meter");
const counts = [1140, 910, 900, 900, 300, 285, 66];
const dur = 4;

targets.forEach((obj, i) => {
  let tl = gsap.timeline({
    defaults: { duration: dur },
    scrollTrigger: {
      trigger: ".work",
      markers: false,
      start:"top 50%",
      end:"bottom top",
      toggleActions:"restart none none reset"
    }
  });

  let mask = obj.querySelector("mask path");
  let text = obj.querySelector(".dial-needle");
  let needle = obj.querySelector(".dial-count");
  let needleMax = counts[i];
  let counter = { value: 0 };
  let targetPercentage = needleMax / max;
  let newRotation = targetPercentage * 180;
  let drawTarget = DrawSVGPlugin.getLength(mask) * targetPercentage;

  tl.fromTo(mask, { drawSVG: 0 }, { drawSVG: drawTarget });
  tl.to(needle, { rotation: newRotation, svgOrigin: "225 200" }, 0);
  tl.to(
    counter,
    {
      value: needleMax,
      roundProps: "value",
      onUpdate: () => (text.textContent = counter.value)
    },
    0
  );
});







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