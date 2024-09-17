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

        
const HeroACS = () => {


return (

<div>

<div className='HeroHeaderSVG'>

<motion.svg viewBox="0 0 3698 963" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
initial='hidden'
animate='visible'
>
    
<g clip-path="url(#clip0_4_3801)">
<motion.path variants={pathVariants} d="M198.3 153.9C471.7 484.6 1177.2 1022.5 1812.2 528C2605.9 -90.1 3337.5 -17.3 3490.3 33.2" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.5 407.5C300.5 455.8 1014.2 485.6 1460.5 249.4C2009.6 -47 2092 667.8 2505.7 327.6C2905.8 27.1 3323.7 12.5 3468.8 39.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-9 386.3C285.3 436.3 964.8 470.4 1399.5 254.1C1929.6 -18.3 2029.9 644.6 2437.3 319.2C2866.9 16.2 3306.7 2.5 3452.2 29.1" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.80005 387.9C272.8 439.7 918.1 478.2 1341.2 281.5C1852.4 33.1 1970.6 644.2 2371.6 333.5C2830.7 27.9 3292.4 15.3 3438.2 41" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.59998 389.6C260.3 443 871.4 486 1282.9 308.9C1775.1 84.6 1911.2 643.7 2305.9 347.7C2794.5 39.7 3278.1 27.9 3424.3 52.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.40002 391.2C247.9 446.3 824.7 493.7 1224.6 336.4C1697.9 136.1 1851.8 643.3 2240.3 362C2758.4 51.5 3263.9 40.6 3410.4 64.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.19995 392.8C235.4 449.6 778.1 501.3 1166.3 363.8C1620.6 187.5 1792.5 642.8 2174.6 376.4C2722.2 63.5 3249.6 53.5 3396.5 76.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8 394.5C222.9 453 731.4 509.2 1108.1 391.3C1543.5 239 1733.2 642.5 2109 390.7C2686.1 75.3 3235.4 66.2 3382.6 88.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.80005 396.1C210.4 456.3 684.7 516.9 1049.7 418.8C1466.1 290.6 1673.7 642.1 2043.2 405C2649.8 87.2 3221 78.9 3368.6 100.7" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.59998 397.7C197.9 459.6 638 524.6 991.5 446.2C1389 342 1614.4 641.6 1977.6 419.2C2613.7 99 3206.8 91.6 3354.7 112.7" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.40002 399.4C185.5 463 591.3 532.3 933.2 473.6C1311.7 393.3 1555.1 641.1 1911.9 433.6C2577.5 110.8 3192.5 104.4 3340.7 124.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.30005 401C172.9 466.3 544.5 540.1 874.8 501.1C1234.4 444.8 1495.6 640.8 1846.1 447.9C2541.2 122.7 3178.1 117.2 3326.7 136.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.09998 402.6C160.4 469.6 497.8 547.8 816.5 528.5C1157.1 496.3 1436.2 640.3 1780.4 462.1C2505 134.5 3163.8 129.8 3312.7 148.5" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.90002 404.3C147.9 473 451.2 555.6 758.2 556C1079.9 547.8 1376.8 639.9 1714.7 476.5C2468.8 146.4 3149.5 142.6 3298.8 160.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.69995 405.8C135.4 476.1 404.5 563.1 699.9 583.4C1002.6 599.2 1317.5 639.5 1649 490.8C2432.6 158.3 3135.2 155.4 3284.8 172.5" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.69995 553.5C300.4 620.5 1014.2 661.9 1460.6 334.1C2009.8 -77.3 2092.2 914.9 2506 442.7C2906.2 25.5 3324.2 5.19997 3469.3 43" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.80005 387.9C272.8 439.7 918.1 478.2 1341.2 281.5C1852.4 33.1 1970.6 644.2 2371.6 333.5C2830.7 27.9 3292.4 15.3 3438.2 41" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.59998 389.6C260.3 443 871.4 486 1282.9 308.9C1775.1 84.6 1911.2 643.7 2305.9 347.7C2794.5 39.7 3278.1 27.9 3424.3 52.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.40002 391.2C247.9 446.3 824.7 493.7 1224.6 336.4C1697.9 136.1 1851.8 643.3 2240.3 362C2758.4 51.5 3263.9 40.6 3410.4 64.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8.19995 392.8C235.4 449.6 778.1 501.3 1166.3 363.8C1620.6 187.5 1792.5 642.8 2174.6 376.4C2722.2 63.5 3249.6 53.5 3396.5 76.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-8 394.5C222.9 453 731.4 509.2 1108.1 391.3C1543.5 239 1733.2 642.5 2109 390.7C2686.1 75.3 3235.4 66.2 3382.6 88.8" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.80005 396.1C210.4 456.3 684.7 516.9 1049.7 418.8C1466.1 290.6 1673.7 642.1 2043.2 405C2649.8 87.2 3221 78.9 3368.6 100.7" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.59998 397.7C197.9 459.6 638 524.6 991.5 446.2C1389 342 1614.4 641.6 1977.6 419.2C2613.7 99 3206.8 91.6 3354.7 112.7" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.40002 399.4C185.5 463 591.3 532.3 933.2 473.6C1311.7 393.3 1555.1 641.1 1911.9 433.6C2577.5 110.8 3192.5 104.4 3340.7 124.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.30005 401C172.9 466.3 544.5 540.1 874.8 501.1C1234.4 444.8 1495.6 640.8 1846.1 447.9C2541.2 122.7 3178.1 117.2 3326.7 136.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants}d="M-7.09998 402.6C160.4 469.6 497.8 547.8 816.5 528.5C1157.1 496.3 1436.2 640.3 1780.4 462.1C2505 134.5 3163.8 129.8 3312.7 148.5" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.90002 404.3C147.9 473 451.2 555.6 758.2 556C1079.9 547.8 1376.8 639.9 1714.7 476.5C2468.8 146.4 3149.5 142.6 3298.8 160.6" stroke="#E1922E" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.69995 405.8C135.4 476.1 404.5 563.1 699.9 583.4C1002.6 599.2 1317.5 639.5 1649 490.8C2432.6 158.3 3135.2 155.4 3284.8 172.5" stroke="#E1922E" stroke-width="2"/>
</g>

</motion.svg>
</div>


<div className='HeroHeaderTitle'>
<BigTitle title1='ACS INTERNATIONAL SCHOOLS' title2='Intranet & Virtual Learning Enviroment' title3='ACS International Schools is a group of four independent schools catering for local and international families - three in England and one in Qatar.' />

</div>  
</div>
)


}


export default HeroACS;