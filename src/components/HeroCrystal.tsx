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
    pathLength: 0.9,
    transition: {
    duration: 0.8,
    ease: "easeInOut"
    }
    }
    }

        
const HeroCrystal = () => {


return (

<div>

<div className='HeroHeaderSVGCS'>
  

<motion.svg viewBox="0 0 3698 963" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
initial='hidden'
animate='visible'>


<g clip-path="url(#clip0_3_26790)">
<motion.path variants={pathVariants} d="M211 476C495.2 299 1170 -42.9 1595.7 5.70003C2127.8 66.4 2412.3 646.8 2944.4 326.2C3370.1 69.8 3698.8 119.2 3810 176" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-23 472.8C179.9 309.7 654.4 -12.7 929.3 1.49995C1272.9 19.2 1209.9 689.6 1864.6 447.4C2519.3 205.2 2845.9 74.7999 3451.1 302" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-3 634.9C279.3 432 949.4 40.0001 1371.6 94.7001C1899.3 163.1 2175.7 832.3 2710.6 466.6C3141.5 172.5 3470.2 223.9 3592.7 294.2" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-3.5 634.2C276.5 431.1 940.9 38.3 1358.8 92C1881.1 159.1 2147.8 834.1 2686 469.8C3123.4 175.2 3452 220.2 3588.5 297" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-4.19995 633.4C273.1 430 930.8 36.3001 1343.6 88.7001C1859.6 154.2 2114.6 836.1 2657 473.6C3102.1 178.3 3430.6 215.7 3583.7 300.2" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-5 632.4C269.1 428.7 919 33.9 1326 84.9C1834.7 148.6 2076.1 838.5 2623.3 478C3077.2 181.9 3405.7 210.5 3578 304" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-5.90002 631.3C264.7 427.2 905.7 31.3 1306 80.6C1806.3 142.3 2032.5 841.1 2585.1 483C3049.1 186 3377.5 204.7 3571.6 308.2" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-6.80005 630.1C259.7 425.5 890.9 28.3 1283.7 75.8C1774.7 135.2 1983.8 844.1 2542.4 488.6C3017.7 190.6 3346 198.2 3564.4 313" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-7.90002 628.8C254.1 423.8 874.4 25.0999 1259 70.5999C1739.8 127.5 1929.8 847.6 2495.1 495C2982.9 195.9 3311 191.1 3556.5 318.5" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-9.09998 627.3C248.1 421.8 856.3 21.5001 1231.9 64.8001C1701.4 118.9 1870.6 851.2 2443.2 501.8C2944.7 201.4 3272.7 183.2 3547.7 324.3" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-10.4 625.8C241.5 419.7 836.7 17.7001 1202.4 58.5001C1659.6 109.5 1806.2 855.2 2386.8 509.2C2903.2 207.5 3231.1 174.6 3538.2 330.7" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-11.8 624.2C234.3 417.4 815.4 13.6 1170.6 51.8C1614.5 99.6 1736.7 859.6 2325.9 517.4C2858.5 214.3 3186.1 165.5 3528.1 337.7" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-13.4 622.4C226.7 415 792.6 9.19998 1136.3 44.6C1566 88.9 1661.8 864.4 2260.3 526.2C2810.2 221.5 3137.7 155.6 3517 345.2" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-15 620.6C218.5 412.5 768.2 4.50006 1099.7 36.9001C1514.1 77.4001 1581.9 869.5 2190.3 535.5C2758.7 229.2 3086 145 3505.2 353.2" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-16.7 618.7C209.7 409.9 742.2 -0.49998 1060.7 28.7C1458.9 65.2 1496.7 874.9 2115.6 545.5C2703.7 237.4 3030.9 133.9 3492.6 361.8" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-18.5 616.7C200.5 407.1 714.6 -5.70006 1019.4 20.0999C1400.3 52.2999 1406.4 880.7 2036.5 556.2C2645.5 246.3 2972.5 122.1 3479.4 371" stroke="#3C6FBD" stroke-width="2"/>
<motion.path variants={pathVariants} d="M-20.5 614.6C190.7 404.2 685.5 -11.2 975.6 11C1338.3 38.7 1310.7 886.9 1952.8 567.5C2584 255.6 2910.7 109.6 3465.4 380.7" stroke="#3C6FBD" stroke-width="2"/>
</g>

</motion.svg>
</div>

<div className='HeroHeaderTitle'>
<BigTitle title1='CRYSTAL SKI' title2='UI & Visual Design for a Brand Refresh' title3='Crystal ski holidays have over 100 resorts across Europe and North America and have long been established as one of the UKs leading tour operators.' />
    
</div>
</div>
)


}


export default HeroCrystal;