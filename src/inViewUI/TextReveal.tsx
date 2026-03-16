import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
}

const TextReveal = ({ text }: TextRevealProps) => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0,
        staggerChildren: 0.02,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
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
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariant}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;