import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  threshold?: number;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({
  threshold = 0.4,
  delay = 0,
  duration = 0.5,
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration,
        ease: 'easeOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 