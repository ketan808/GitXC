import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
  threshold?: number;
  delay?: number;
  duration?: number;
  textAlign?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({

  threshold = 0.4,
  delay = 0,
  duration = 0,
  children,

}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{
      duration, ease: 'easeOut', delay,
      }}


    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
