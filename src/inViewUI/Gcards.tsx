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
<img src={image} alt={title1} className="card-image" />

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
      title1: 'British Army',
      title2: 'Mobile Tablet UI design and UX',
      title3: 'Course Performance and Wellbeing App',
      titleColor: 'green.1',
      gradient: 'gradientGreen',
      image: require('../inViewUI/images/stats.png'),
      link: '/british-army'
      },
    
      {
      title1: 'ACS Schools',
      title2: 'Responsive Software, UX/UI Design',
      title3: 'Intranet and Virtual Learning Environment',
      titleColor: 'yellow.1',
      gradient: 'gradientYellow',
      image: require('../inViewUI/images/egham_home.png'),
      link: '/acs'
      },
    
      { 
      title1: 'Virgin Media',
      title2: 'Responsive Website, UX/UI Design',
      title3: 'Blog Design for, Search Engine Optimised Articles',
      titleColor: 'red.1',
      gradient: 'gradientRed',
      image: require('../inViewUI/images/hub-music.png'),
      link: '/virgin-media'
      },
    
      {
      title1: 'CrystalSki',
      title2: 'Frontend UI and Artwork Design',
      title3: 'Various Digital Touchpoints',
      titleColor: 'blue.1',
      gradient: 'gradientBlue',
      image: require('../inViewUI/images/cs.png'),
      link: '/crystalski'
      }

  ];

  return (

<SimpleGrid
      cols={{ base: 1, sm: 1, md:2, lg: 2 }}
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
