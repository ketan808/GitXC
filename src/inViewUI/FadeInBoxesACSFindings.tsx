import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Card, SimpleGrid, Box } from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react';
import './css/style.css'

const FadeInBoxesFindings1 = () => {

  const texts = [
 
    'Important information difficult to find.',
    'To many newsletter emails sent from all over the school.',
    'Calendars in lots of different locations.',
    'Log in issues, getting diverted to wrong school.',
    'Content designed and written for children not adults.',
    'No one fixes anything, teachers or IT',
    'Too much old information including staff directory.',
    'Have children in more than one division.',

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
      <Card className='theme100' shadow="sm" padding="lg" radius="md" withBorder lightHidden><div>{text}</div><Box visibleFrom="md"><div className="iconRight"><IconChevronRight color="#fab005" size="1.5rem" stroke={2}/></div></Box></Card>
      <Card className='theme100' shadow="sm" padding="lg" radius="md" withBorder darkHidden><div>{text}</div><Box visibleFrom="md"><div className="iconRight"><IconChevronRight color="#c35423" size="1.5rem" stroke={2}/></div></Box></Card>

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

export default FadeInBoxesFindings1;
