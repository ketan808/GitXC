import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Card, SimpleGrid, Box } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react';
import './css/style.css'

const FadeInBoxesFindings = () => {

  const texts = [
 

    'Course reports created in different formats',
    'WiFi not available at some course locations.',
    'Groups of between 20-30 trainees per dormitory.',
    'Trainess have free time at 6 a.m and from 8 p.m.',
    'Dormitories and some course locations have low light.'

  ];



const staggerVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.25,
    },
  }),
};

const Boxes = ({ index, text }) => (
  <InView triggerOnce>
    {({ inView, ref }) => (
      <motion.div
        ref={ref}
        custom={index}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={staggerVariants}

        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: '1fr'

        }}

      >

      <Card className='theme100' shadow="sm" padding="lg" radius="md" lightHidden withBorder ><div>{text}</div><Box visibleFrom="md"><div className="iconRight"><IconChevronRight color="cyan" size="1.5rem" stroke={2}/></div></Box></Card>
      <Card className='theme100' shadow="sm" padding="lg" radius="md" darkHidden withBorder ><div>{text}</div><Box visibleFrom="md"><div className="iconRight"><IconChevronRight color="black" size="1.5rem" stroke={2}/></div></Box></Card>


      </motion.div>
    )}
  </InView>
);



  return (
    <div>


<SimpleGrid
      cols={{ base: 1, sm: 1, lg: 1 }}
      spacing={{ base: 10, sm: 'sm' }}
      verticalSpacing={{ base: 'sm', sm: 'sm' }}
    >


      {texts.map((text, index) => (


<div style={{ display: 'grid'}}>

<Boxes key={index} index={index} text={text} />  
    

</div>

))}

</SimpleGrid>

    </div>
  );
};

export default FadeInBoxesFindings;
