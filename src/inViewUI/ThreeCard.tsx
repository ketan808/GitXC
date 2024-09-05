// Import necessary libraries
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/style.css'

// Import images (assuming you have these images in your project)
import image1 from '../inViewUI/images/well-mob.png';
import image2 from '../inViewUI/images/target-mob.png';
import image3 from '../inViewUI/images/ref-mob.png';


const ImageAnimation = () => {
  // Use the useInView hook to trigger animations when images are in view
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div className='ThreeCardContainer'>

      <motion.img
        ref={ref1}
        src={image1}
        alt="Image 1"
        initial={{ scale: 1.2, y:180  }}
        animate={{ scale: inView1 ? 1.2 : 1, y: inView1 ? 1 : 1}}
        transition={{ duration: 0.5, ease: 'easeInOut', }}
        className="imageOne imagePos"
      />

      <motion.img
        ref={ref2}
        src={image2}
        alt="Image 2"
        initial={{ scale: 1.1, x: 0, opacity: 0 }}
        animate={{ x: inView2 ? -365 : -100, opacity: inView2 ? 1 : 0 }}
        transition={{ duration: 0.5, delay:0.3, ease: 'easeInOut', }}
        className="imageTwo imagePos"
      />
      <motion.img
        ref={ref3}
        src={image3}
        alt="Image 3"
        initial={{ scale: 1.1, x: 0, opacity: 0 }}
        animate={{ x: inView3 ? 365 : 100, opacity: inView3 ? 1 : 0 }}
        transition={{ duration: 0.5, delay:0.3, ease: 'easeInOut', }}
        className="imageThree imagePos"
      />
    </div>
  );
};

export default ImageAnimation;
