import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Card, SimpleGrid } from '@mantine/core'

const FadeInBoxesImpact1 = () => {
  const texts = [
 

    'Trainers often forgot to capture key evidence due to lack of time or tools.',
    'Reporting was fragmented due to reliance on unsuitable apps and notes.',
    '80% said a structured tool would greatly cut admin time.',
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
        <Card className='theme100' shadow="sm"
        p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }}
        radius="md" withBorder >
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
