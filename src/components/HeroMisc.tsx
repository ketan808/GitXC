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

    
<div className='MiscBack'>
<div className='HeroHeaderSVG'>

<motion.svg viewBox="0 0 3698 963" fill="none" xmlns="http://www.w3.org/2000/svg"
variants={svgVariants}
initial='hidden'
animate='visible'>

<g clip-path="url(#clip0_6_254)">

   <motion.path variants={pathVariants} d="M.8,647.4C111.7,498.8,474.9,163,893.5,228.7c523.3,82.1,519.7,911,1128.4,177.5,564.3-680.1,1301.9-231.4,1554.9-120.1" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.7,415.8C306.8,223.5,759.2-117.6,1153,42.5c492.2,200.1,979.5,430.9,1436.9,158.1,370.5-223,803.8-90.3,971.4-6.1" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.6,407.6C301.8,220.1,737.7-110,1131.7,43c492.4,191.3,947,451.8,1412.4,157.2,381.5-245.1,832.4-96.8,1004.8-12.3" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.5,399.3C296.6,216.5,716.2-102.5,1110.3,43.4c492.7,182.4,914.5,472.6,1387.8,156.4,392.4-267.3,861-103.4,1038.2-18.4" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.4,391.1C291.5,213,694.7-95,1089,43.9c492.9,173.5,882,493.5,1363.2,155.5,403.3-289.5,889.6-110,1071.6-24.5" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.3,382.9C286.4,209.5,673.2-87.4,1067.7,44.4c493.1,164.7,849.5,514.4,1338.7,154.6,414.3-311.6,918.2-116.6,1105-30.7" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M126.3,374.7C281.4,206.1,651.8-79.8,1046.5,44.9c493.3,155.8,817.1,535.3,1314.1,153.8,425.2-333.8,946.9-123.2,1138.4-36.8" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M127,379.1C277.1,215.2,631.1-59.6,1026,57.9c493.5,146.9,784.5,556.1,1289.6,152.9,436.1-356,975.5-129.8,1171.8-42.9" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M128.4,385.8C273.5,226.6,611.2-37.1,1006.2,73.3c493.8,138,752.1,577,1265,152,447.1-378.2,1004.1-136.4,1205.3-49.1" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M129.9,392.4C270,238,591.3-14.7,986.4,88.6c494,129.2,719.6,597.9,1240.4,151.1,458-400.3,1032.7-142.9,1238.7-55.2" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M131.3,399.1C266.4,249.4,571.3,7.8,966.6,104c494.2,120.3,687.1,618.8,1215.9,150.3,468.9-422.5,1061.3-149.5,1272.1-61.3" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M132.7,405.7C262.8,260.7,551.3,30.2,946.8,119.3c494.4,111.4,654.6,639.6,1191.3,149.4,479.9-444.7,1090-156.1,1305.5-67.5" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M134.1,412.3c125-140.3,397.2-359.7,792.9-277.7,494.6,102.6,622.1,660.5,1166.7,148.5,490.8-466.8,1118.6-162.6,1338.9-73.6" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M135.6,419C255.6,283.5,511.4,75,907.3,150c494.8,93.7,589.6,681.4,1142.2,147.6,501.6-489,1147.1-169.3,1372.2-79.7" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M137,425.6C252,294.8,491.4,97.4,887.4,165.3c495.1,84.8,557.1,702.3,1117.6,146.7,512.7-511.1,1175.8-175.8,1405.7-85.8" stroke="#9c36b5" stroke-width="2"/>
   <motion.path variants={pathVariants} d="M138.4,432.3c110-126.1,333-312.4,729.2-251.6,495.3,76,524.6,723.1,1093.1,145.9,523.6-533.4,1204.4-182.5,1439.1-92.1" stroke="#9c36b5" stroke-width="2"/>

</g>

</motion.svg>
</div>


<div className='HeroHeaderTitle'>
<BigTitle title1='Miscellaneous' title2='A Mix of Personal & Employed Projects' title3='Personal projects are a great way to challenge myself to explore and learn new techniques.' />
    
</div>
</div>
)


}


export default HeroVirgin;