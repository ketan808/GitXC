import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Card, SimpleGrid } from '@mantine/core'

const FadeInBoxesImpact1 = () => {
  const texts = [
 
    'Create a helpful links area on dashboard.',
    'Online newsletter system which gets updated weekly.',
    'Centralised organisation calendar.',
    'Overhaul of login groups and permissions.',
    'Training for content editors and rewrite fixed copy.',
    'Take full responsibilty for fixes.',
    'Complete audit of current information.',
    'Keep access to all divisions on dashboard.',

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
        <Card className='theme100' shadow="sm" padding="lg" radius="md" withBorder>
        {text}
        </Card>

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

export default FadeInBoxesImpact1;
