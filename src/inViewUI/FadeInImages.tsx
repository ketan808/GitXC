import React from 'react';
import { SimpleGrid} from '@mantine/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from '../images/vm/components_mob.png';
import image2 from '../images/vm/components_desk.png';

const VMImageFadeIn: React.FC = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, transition: { duration: 0.25, delay: 0.25  } });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, transition: { duration: 0.25, delay: 0.5 } });
    }
  }, [controls2, inView2]);

  return (
<SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >


      <motion.img
        ref={ref1}
        src={image1}
        alt="Image 1"
        initial={{ opacity: 0 }}
        animate={controls1}
        style={{ width: '100%', height: 'auto' }}
      />


      <motion.img
        ref={ref2}
        src={image2}
        alt="Image 2"
        initial={{ opacity: 0 }}
        animate={controls2}
        style={{ width: '100%', height: 'auto' }}
      />

</SimpleGrid>



  );
};

export default VMImageFadeIn;
