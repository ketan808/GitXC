import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";



interface Props {
  duration: number;
  ease: string;
  delay: number;
  rotate: number;
  padding: string;
  image: string;
}


  function FlipInView (props: Props) {


  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of element is in view
  });


React.useEffect(() => {
    if (inView) {
      controls.start({ rotateX: 0, opacity:1 });
    }
  }, [controls, inView]);



return (


<div style={{  display: 'flex', flexWrap: 'inherit',  perspective: '1000px', alignItems: 'center'}}>



      <motion.div
        ref={ref}
        initial={{ rotateX: props.rotate }}
        animate={controls}
        transition={{
        duration: props.duration,
        ease: props.ease,
        delay: props.delay

        }}
        style={{
        padding: props.padding,
        width: '100%',
        height: 'auto',
        background: `url(${props.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat" ,
        backgroundPosition: 'center center',
        
        
          
        }}
      >

      </motion.div>



      </div>
    
  );
};

export default FlipInView;
