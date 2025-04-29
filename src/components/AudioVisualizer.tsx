import { motion } from 'framer-motion';
import { useContext } from 'react';
import { VapiContext } from './VoiceAgent';

const AudioVisualizer = () => {
  const { isListening } = useContext(VapiContext);
  
  // Array of bar heights and colors
  const bars = Array.from({ length: 30 }, (_, i) => ({
    initialHeight: Math.random() * 20 + 10,
    color: 'var(--mantine-fontcolor-0)'
  }));

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: '4px',
      height: '50px',
      alignItems: 'center',
      marginTop: '20px'
    }}>
      {bars.map((bar, index) => (
        <motion.div
          key={index}
          initial={{ height: 4, opacity: 0 }}
          animate={
            isListening 
              ? {
                  height: [4, bar.initialHeight, 4],
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.05,
                      ease: "easeInOut"
                    }
                  }
                } 
              : {
                  height: 4,
                  opacity: [0, 1, 0],
                  transition: {
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.05,
                    }
                  }
                }
          }
          style={{
            width: '10px',
            backgroundColor: bar.color,
            borderRadius: '8px',
          }}
        />
      ))}
    </div>
  );
};

export default AudioVisualizer; 