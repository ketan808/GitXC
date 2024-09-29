import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { SimpleGrid, Title } from '@mantine/core'
import './css/style.css'



const Box = ({ index, title1, title2, title3, link, image, gradient, titleColor }) => {


return (
<InView threshold={0} triggerOnce>
      {({ inView, ref }) => (
<div>

<Link to={link}>

<motion.div whileHover={{ opacity: 0.8 }}  onHoverStart={e => {}} onHoverEnd={e => {}}>
<motion.div id='card' className={gradient} 

          ref={ref}
          initial={{ opacity: 0, y:20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0.25 : 0.25 }}
          transition={{ duration: 0.25, delay: index * 0.25 }}
          
        >
<img src={image} alt={title1} className="card-imageMisc" />

</motion.div>
</motion.div>


</Link>

<motion.div>
<motion.h1>{title1}</motion.h1>

<motion.h2><Title fw={500} order={3} c={titleColor}>{title2}</Title></motion.h2>

<motion.p><p>{title3}</p></motion.p>
</motion.div>

</div>
        
 )}
</InView>
  );
};

const Boxes = () => {
  const gCardData = [



      {
        title1: 'Miscellaneous',
        title2: 'Animations, Video, Landing Pages',
        title3: 'A Mix of Personal & Employed Projects',
        titleColor: 'grape',
        gradient: 'gradientGrape',
        image: require('../inViewUI/images/apple.png'),
        link: '/misc'
        }

  ];

  return (

<SimpleGrid
      cols={{ base: 1, sm: 1, md:1, lg: 1 }}
      spacing={{ base: 10, sm: 'xl', md:'xl',  lg: '60'}}
      verticalSpacing={{ base: '10', sm: 'xl', lg: '60' }}
    >
      {gCardData.map((gCard, index) => (
        <Box key={index} index={index} title1={gCard.title1} title2={gCard.title2} titleColor={gCard.titleColor} title3={gCard.title3} image={gCard.image}  gradient={gCard.gradient} link={gCard.link}/>
      ))}

</SimpleGrid>

  );
};



export default Boxes;
