import { useRef } from 'react';
import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package


gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(useGSAP);

export default function Meter() {

    const container = useRef();

    useGSAP(
        () => {



          gsap.timeline({
            defaults: { duration: 4, ease: "none" },
            yoyo: true,
            repeat: -1,
            repeatDelay: 1
          })
          .from("#maskRing", {duration: 4, drawSVG: 0 })
          .to("#needle", {duration: 4, rotation: 180, svgOrigin: "225 200" }, 0);
          
          



          
        },
        { scope: container }
    ); // <-- scope for selector text (optional)

    return (


    <svg id="Meter" xmlns="http://www.w3.org/2000/svg" width="450" height="250" viewBox="0 0 450 250">
        <defs>
          <mask id="meterMask" maskUnits="userSpaceOnUse">
            <path id="maskRing" d="M75,200c0-82.29,67.71-150,150-150s150,67.71,150,150" fill="none" stroke="#fff" stroke-miterlimit="0" stroke-width="54" />
          </mask>
        </defs>
        <rect id="background" width="450" height="250" fill="#fff" />

        <path id="baseRing" d="M75,200c0-82.29,67.71-150,150-150s150,67.71,150,150" fill="none" stroke="#ccc" stroke-miterlimit="0" stroke-width="54" />
        <g mask="url(#meterMask)">
          <path id="colorRing" d="M75,200c0-82.29,67.71-150,150-150s150,67.71,150,150" fill="none" stroke="#ed0000" stroke-miterlimit="0" stroke-width="54" />
        </g>
        <path id="needle" class="dial-count" d="M209.44,191,67,200l142.44,9a18,18,0,1,0,0-18Z" />
        <circle r="4" fill="red" cx="225" cy="200" />

            <text id="count-speed" x="30" y="0" text-anchor="middle" class="dial-count" transform="translate(190.29 137.61)">
            <tspan id="manage" class="dial-needle">0</tspan>
    </text>
    <text class="dial-mpbs" x="0" y="30"  transform="translate(190.29 137.61)"> Mpbs</text>
      </svg>


    );
}


