import { motion } from 'framer-motion';
import BigTitle from './BigTitle';



const svgVariants = {

hidden: {},
visible: {}
}

const pathVariants = {
hidden: {
opacity: 0,
pathLength: 0
},
visible: {
opacity: 1,
filter: "blur(1px)",
pathLength: 1,
transition: {
duration: 0.8,
ease: "easeInOut"
}
}
}

        
const HeroVirgin = () => {


return (

    
<div className='VMBack'>
<div className='HeroHeaderSVGVM'>

<motion.svg viewBox="0 0 3698 963" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
initial='hidden'
animate='visible'>

<g clip-path="url(#clip0_6_254)">
<motion.path variants={pathVariants} d="M-34.7 679.3C159.4 365.4 650.8 -195.7 1063.4 70.7C1579.1 403.7 2002 966.8 2473.2 566.9C2850.2 247 3415 377.2 3585.7 510.5" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-49 891.2C67.2 714.4 447.8 314.8 886.4 393C1434.7 490.7 1431 1477 2068.8 604.2C2660.1 -205 3432.9 328.9 3698 461.3" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-22.4 671C166.3 478.6 640.4 137.4 1053 297.5C1568.8 497.7 2079.4 728.6 2558.6 455.7C2946.8 232.6 3400.8 365.4 3576.5 449.6" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-22.4 663C161.2 475.5 618.1 145.3 1031 298.3C1547 489.6 2023.4 750.2 2511.2 455.5C2911 210.3 3383.6 358.7 3564.2 443.2" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-22.4 655C155.9 472.2 595.6 153.2 1008.6 299.1C1524.9 481.5 1966.9 771.7 2462.9 455.5C2874.1 188.2 3365.1 352.1 3550.8 437.1" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-22.4 646C150.6 468 573.1 160.1 986.2 298.9C1502.7 472.3 1910.4 792.2 2414.6 454.3C2837.2 164.9 3346.7 344.3 3537.4 429.8" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants}d="M-22.4 638C145.4 464.7 550.7 168 964.1 299.7C1480.9 464.3 1854.3 813.7 2367 454.2C2801.2 142.8 3329.2 337.7 3525 423.5" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-22.4 630C140.1 461.6 528.2 176 941.8 300.6C1458.7 456.2 1798 835.3 2318.8 454.2C2764.3 120.8 3311 331.1 3511.7 417.4" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-21.3 634.5C135.9 470.5 506.8 195.6 920.5 313.1C1437.5 460.1 1742.4 869.5 2271.6 466.1C2728.5 109.9 3293.6 336.2 3499.3 423.2" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-20.3 641.6C131.7 482.3 485.6 218.4 899.5 328.9C1416.9 467 1687.6 906.2 2225 481C2693.5 102.6 3277.2 344.5 3488 431.9" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-19.3 647.7C127.5 493.2 464.3 240.3 878.4 343.7C1396.2 473 1632.6 942.1 2178.5 494.9C2658.5 94.3002 3260.9 351.9 3476.8 439.7" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-17.2 654.8C124.4 505 443.9 263.1 858.1 359.4C1376 479.8 1578.1 978.8 2132.3 509.8C2623.7 86.8998 3244.5 360.2 3465.4 448.4" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-16.2 661C120.1 516.2 422.4 286 836.8 375C1354.8 486.3 1522.7 1013.8 2085.1 524.2C2587.9 80.1001 3227.2 368.3 3453 456.8" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-14.1 667.9C116.9 527.4 402.1 307.8 816.6 389.9C1334.8 492.6 1468.4 1051.1 2039 538.6C2553.2 71.2998 3211 375.8 3441.8 464.9" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-13.1 674.2C112.6 538.8 380.7 330.6 795.6 405.5C1314.1 499.1 1413.4 1086.2 1992.5 552.9C2518.1 64.4001 3194.6 383.8 3430.4 473.3" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-11.1 681.1C109.4 550.2 360.2 352.5 775.2 420.5C1294 505.4 1358.9 1123.6 1946.2 567.4C2483.4 55.6999 3178.2 391.4 3419.1 481.5" stroke="#CE4538" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-10 687.4C105.3 561.4 339 375.3 754.2 436C1273.2 511.9 1304 1158.5 1899.7 581.8C2448.4 48.9 3161.9 399.5 3407.8 489.8" stroke="#CE4538" stroke-width="2"/>
</g>

</motion.svg>
</div>


<div className='HeroHeaderTitle'>
<BigTitle title1='VIRGIN MEDIA' title2='Blog for Search Engine Optimised Articles' title3='Virgin Media is a telecommunications company from England, founded in 2007, which provides telephone, television and internet services in the United Kingdom.' />
    
</div>
</div>
)


}


export default HeroVirgin;