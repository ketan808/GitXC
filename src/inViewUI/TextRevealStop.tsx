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

  // Function to check if a character is part of an HTML tag
  const isHTMLTag = (text, index) => {
    let inTag = false;
    for (let i = 0; i <= index; i++) {
      if (text[i] === '<') inTag = true;
      if (text[i] === '>') inTag = false;
    }
    return inTag;
  };

  return (
    <motion.div
      variants={sentence}
      initial="hidden"
      animate="visible"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default TextReveal;
