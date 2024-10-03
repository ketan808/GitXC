import { motion } from 'framer-motion';
import BigTitle from './BigTitle';
import { Box } from '@mantine/core';


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



const HeroSVG = () => {


return (

<div className='ArmyBack'>

<div className='HeroHeaderSVG BackHero'>

<motion.svg viewBox="0 0 3698 963" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
initial='hidden'
animate='visible'>

<g clip-="url(#clip0_3_13)">
<motion.path variants={pathVariants} d="M1 246.5C99.6 357.3 376.2 577.3 693.9 570.5C1091 562 897.5 -21 1419.6 224C1941.8 469 1825.7 -181 2667.5 52.5C3341 239.3 3710.4 152.7 3811 86" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8 238.5C278.8 504 927 940.4 1225.6 562C1598.8 89 1431.3 -40.5 2130 137C2689 279 3244.7 124.8 3452.7 30" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-0.199951 241.9C96.4 354.6 353.9 570.8 646.8 572.7C1008.2 573.1 860.6 41.5 1322.8 249.1C1803.2 432.4 1689.6 -172.9 2471.9 55.8C3097.8 238.7 3461.4 146.3 3564.9 77.2" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-0.900024 237.7C99.2 352.2 353.3 564.7 639.8 575C988.6 583.9 874.4 101.4 1307.7 273.4C1776.6 397.7 1658.9 -164.8 2430.2 59.2999C3047.2 238.6 3425.2 140.6 3537.1 69.1999" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-1.59998 233.7C101.8 349.9 352.7 558.9 633.2 577.2C970.1 594.2 887.6 158.5 1293.4 296.5C1751.3 364.5 1629.8 -157.2 2390.5 62.4999C2999.1 238.3 3390.8 135 3510.6 61.3999" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-2.19995 230.1C104.4 348 352.3 553.7 626.9 579.5C952.4 604.2 900.1 213 1279.8 318.6C1727.2 333.2 1602.1 -149.8 2352.8 65.7C2953.3 238.1 3358.2 129.8 3485.5 54.1" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-2.80005 226.8C106.7 346.2 351.8 548.8 621 581.8C935.7 613.8 912.1 264.8 1266.9 339.8C1704.4 303.6 1575.9 -142.5 2317 69C2909.9 238.3 3327.2 125.2 3461.7 47.5" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-3.40002 223.9C109 344.8 351.3 544.4 615.3 584.2C919.8 623.1 923.3 314 1254.6 360C1682.7 275.9 1551 -135.5 2283.1 72.3C2868.8 238.6 3297.8 121 3439.1 41.4" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-3.90002 221.2C111.1 343.5 351 540.2 610 586.5C904.9 632 934 360.5 1243.1 379.1C1662.3 249.8 1527.6 -128.9 2251.2 75.4001C2830.1 238.8 3270.1 117 3417.8 35.6001" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-4.40002 218.9C113.1 342.5 350.6 536.6 605 588.9C890.9 640.5 943.9 404.3 1232.3 397.3C1643.2 225.5 1505.6 -122.3 2221.2 78.6C2793.7 239.4 3244.1 113.6 3397.8 30.5" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-4.90002 216.8C115 341.6 350.2 533.2 600.3 591.2C877.8 648.5 953.2 445.4 1222.1 414.3C1625.3 202.8 1484.9 -116.3 2193.1 81.6C2759.6 239.9 3219.8 110.3 3379.1 25.8" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-5.30005 215.1C116.7 341 349.9 530.4 596 593.5C865.6 656.1 962 483.8 1212.7 430.4C1608.6 182 1465.8 -110.3 2167 84.6999C2728 240.7 3197.2 107.7 3361.6 21.5999" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-5.69995 218.1C118.3 345 349.5 532.3 592 600.3C854.3 667.8 970 523.9 1204.1 449.9C1593.3 167.3 1448.2 -100.2 2143 92.1C2698.8 246 3176.4 109.7 3345.7 22.4" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.09998 221.5C119.8 349.4 349.2 534.7 588.3 607.2C843.9 679.3 977.4 561.5 1196 468.4C1579.1 154.3 1431.8 -90.4 2120.7 99.5C2671.8 251.4 3157.1 112.2 3330.8 23.6" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.5 224.6C121.1 353.4 348.9 536.9 584.9 613.4C834.5 689.6 984.1 595.7 1188.7 485.3C1566.2 142.5 1417 -81.3999 2100.5 106.3C2647.3 256.4 3139.6 114.5 3317.4 24.8" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.80005 227.3C122.3 356.9 348.7 538.8 581.8 619C825.8 699 990.1 626.6 1182 500.5C1554.4 131.8 1403.5 -73.3 2082.1 112.3C2625 260.8 3123.6 116.5 3305 25.7" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7 229.8C123.5 360.1 348.5 540.6 579.2 624.1C818.3 707.4 995.7 654.4 1176.3 514.2C1544.2 122.4 1391.7 -65.9999 2065.9 117.9C2605.3 265 3109.6 118.4 3294.3 26.8" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.30005 232C124.4 362.9 348.3 542.1 576.7 628.5C811.5 714.7 1000.4 678.7 1171 526.2C1534.9 114 1381 -59.6 2051.4 122.7C2587.7 268.5 3097 120 3284.6 27.6" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.5 233.9C125.2 365.3 348.1 543.5 574.6 632.4C805.6 721.2 1004.5 699.8 1166.4 536.7C1526.9 106.7 1371.8 -53.9999 2038.9 126.9C2572.6 271.6 3086.2 121.5 3276.3 28.3" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.69995 235.5C125.9 367.4 348 544.6 572.9 635.6C800.8 726.5 1008.1 717.6 1162.7 545.4C1520.2 100.6 1364.1 -49.3 2028.4 130.4C2559.8 274.2 3077.1 122.6 3269.3 28.9" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.80005 236.8C126.5 369.1 347.9 545.5 571.5 638.2C796.8 730.9 1011 732 1159.6 552.5C1514.7 95.6001 1357.8 -45.5 2019.8 133.2C2549.4 276.2 3069.6 123.5 3263.5 29.3" stroke="#388342" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.90002 237.8C127 370.3 347.8 546.2 570.4 640.3C793.7 734.3 1013.2 743.3 1157.2 558.1C1510.5 91.8 1352.9 -42.6 2013.2 135.5C2541.4 277.9 3063.9 124.4 3259.1 29.8" stroke="#388342" stroke-width="2"/>
</g>

</motion.svg>  

</div>

<div className='HeroHeaderTitle'>
<BigTitle title1='BRITISH ARMY' title2='MyTraining: Wellbeing & Performance App' title3='The British Army protects the United Kingdoms interests at home and abroad, providing a safe and secure environment.' />
</div>
</div> 


)


}


export default HeroSVG;