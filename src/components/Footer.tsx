import { AppShell, Grid, Image } from '@mantine/core';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down - hide footer
        setIsVisible(false);
      } else {
        // Scrolling up - show footer
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <AppShell.Footer 
        className='theme110' 
        style={{ 
          paddingTop: '15px', 
          paddingBottom: '15px',  
          paddingLeft: '20px', 
          paddingRight: '20px',
          transition: 'transform 0.3s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <Grid justify="flex-end" align="stretch">
          <Grid.Col span="content">
            <a href="https://react.dev/" target="blank">
              <Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="45" src={require('../images/react.png')} />
            </a>
          </Grid.Col>
          <Grid.Col span="content">
            <a href="https://mantine.dev/" target="blank">
              <Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="40" src={require('../images/mantine.png')} />
            </a>
          </Grid.Col>
          <Grid.Col span="content">
            <a href="https://www.framer.com/motion/" target="blank">
              <Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="40" src={require('../images/motion.png')} />
            </a>
          </Grid.Col>
        </Grid>
      </AppShell.Footer>
    </div>
  );
};

export default Footer;