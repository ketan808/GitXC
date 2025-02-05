import { motion } from 'framer-motion';

const TextReveal = ({ text }) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div

      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;
