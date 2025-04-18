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


<motion.h1><Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">{title1}</Title></motion.h1>


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
      title2: 'Progressive Web App UX/UI Design',
      title3: 'Empowering Wellbeing, Accelerating Course Performance',
      titleColor: 'green.1',
      gradient: 'gradientGreen',
      image: require('../inViewUI/images/stats.png'),
      link: '/british-army'
      },
    
      {
      title1: 'ACS Schools',
      title2: 'Responsive Software, UX/UI Design',
      title3: 'Centralised platform for sharing Information',
      titleColor: 'yellow.1',
      gradient: 'gradientYellow',
      image: require('../inViewUI/images/egham_home.png'),
      link: '/acs'
      },
    
      { 
      title1: 'Virgin Media',
      title2: 'Blog Framework, UX/UI Design',
      title3: 'Boosting SEO Visibility and Keyword Dominance',
      titleColor: 'red.1',
      gradient: 'gradientRed',
      image: require('../inViewUI/images/hub-music.png'),
      link: '/virgin-media'
      },
    
      {
      title1: 'CrystalSki',
      title2: 'Brand Refresh, UI Design',
      title3: 'Transformative redesign across online and offline channels',
      titleColor: 'blue.1',
      gradient: 'gradientBlue',
      image: require('../inViewUI/images/homecard.png'),
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
