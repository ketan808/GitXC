import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './css/style.css'
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';



const cardData = [

  { id: 1,
  title1: 'British Army',
  title2: 'Mobile Tablet UI design and UX',
  title3: 'Course Performance and Wellbeing App',
  gradient: 'gradientGreen',
  image: require('../inViewUI/images/stats.png'),
  link: '/british-army'
},


  { id: 2,
  title1: 'ACS Schools',
  title2: 'Responsive Software, UX/UI Design',
  title3: 'Intranet and Virtual Learning Environment',
  gradient: 'gradientYellow',
  image: require('../inViewUI/images/egham_home.png')},

  { id: 3,
  title1: 'Virgin Media',
  title2: 'Responsive Website, UX/UI Design',
  title3: 'Blog Design for, Search Engine Optimised Articles',
  gradient: 'gradientRed',
  image: require('../inViewUI/images/hub-music.png')},

  { id: 4,
  title1: 'CrystalSki',
  title2: 'Frontend UI and Artwork Design',
  title3: 'Various Digital Touchpoints',
  gradient: 'gradientBlue',
  image: require('../inViewUI/images/cs.png')}

];

const containerVariants = {
  hidden: { opacity: 0, y: 20  },
  visible: {
    opacity: 1, y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1, y: 0,
},
};

const Card = ({ title1, title2, title3, image, gradient, link }) => (



<motion.div variants={containerVariants}>

<Link to={link}>
<motion.a id='card' className={gradient} whileHover={{ opacity: 0.8 }}  onHoverStart={e => {}} onHoverEnd={e => {}}>
<img src={image} alt={title1} className="card-image" />
</motion.a>
</Link>

<motion.div variants={childVariants}>

<motion.h1>{title1}</motion.h1>
<motion.h2 className={gradient} style={{background:'transparent'}}>{title2}</motion.h2>
<motion.p>{title3}</motion.p>

</motion.div>

</motion.div>



);



  const GradientCardMain = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
  
    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    
    return (
<div>
  <motion.div
    ref={ref}
    className="card-grid"
    variants={containerVariants}
    initial="hidden"
    animate={controls}
  >

    
    {cardData.map(card => (
      <Card key={card.id} title1={card.title1} title2={card.title2} title3={card.title3} image={card.image} gradient={card.gradient} link={card.link} />

    ))}

  </motion.div>
  </div>
  
);
};


export default GradientCardMain ;
