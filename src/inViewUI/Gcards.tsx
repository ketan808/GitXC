import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import { SimpleGrid, Title } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react';
import './css/style.css'



const Box = ({ index, title1, title2, title3, title4, title5, link, image, gradient, tabs, reverse }) => {


return (
<InView threshold={0} triggerOnce>
      {({ inView, ref }) => (
<div>

<Link to={link}>

  <motion.div>
    <motion.div id='card' className={`${gradient}${reverse ? ' card-reverse' : ''}`} 
      ref={ref}
      initial={{ opacity: 0, y:20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0.25 : 0.25 }}
      transition={{ 
        duration: 0.25, 
        delay: index * 0.25
      }}
      whileHover={{ 
        opacity: 0.6,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div id='cardText'>
        <motion.h1>
          <h1 className="theme0" dangerouslySetInnerHTML={{ __html: title1 }} />
        </motion.h1>

        <motion.h2>
          <h2 dangerouslySetInnerHTML={{ __html: title2 }} />
        </motion.h2>

        <motion.p>
          <h3 dangerouslySetInnerHTML={{ __html: title3 }} />
        </motion.p>

        <motion.p>
          <h4 dangerouslySetInnerHTML={{ __html: title4 }} />
        </motion.p>

        {tabs && tabs.length > 0 && (
          <div className="card-tabs">
            {tabs.map((tab, i) => (
              <span className="card-tab" key={i}>{tab}</span>
            ))}
          </div>
        )}

        {title5 && (
          <motion.div 
            className="case-study-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              border: '1px solid white',
              borderRadius: '20px',
              marginTop: '16px'
            }}
          >
            <span 
              style={{
                fontSize: '0.875rem',
                fontWeight: 500
              }}
              dangerouslySetInnerHTML={{ __html: title5 }} 
            />
            <IconExternalLink size={16} />
          </motion.div>
        )}
      </motion.div>
      
      <img src={image} alt={title1} className="card-image" style={{ opacity: 1 }} />
    </motion.div>

  </motion.div>

  

</Link>

</div>
        
 )}
</InView>
  );
};

const Boxes = () => {
  const gCardData = [

     { 
      title1: 'MOD',
      title2: "<strong style='font-size: 1.1rem'>Overview</strong><br><span style='opacity: 0.8'>Led end-to-end design, research, and analysis to drive a training strengthening opportunity from concept to scaled product, collaborating on key decisions.</span>",
      title3: "<strong style='font-size: 1.1rem'>Key Outcomes</strong><br><ul><li>Drove Data-Backed Product Decisions.</li><li>Activated Stakeholder Engagement.</li><li>Transformed Trainee Support Systems.</li><li>Enhanced Training Outcome Metrics.</li></ul>",
      title4: "",
      title5: "View Case Study",
      tabs: ['User Research', 'Design System', 'Prototyping', 'Developer Handoff', 'Usability Testing'],
      gradient: 'gradientGreen',
      image: require('../inViewUI/images/army.png'),
      link: '/british-army'
      },
    
      {
      title1: 'ACS',
      title2: "<strong style='font-size: 1.1rem'>Overview</strong><br><span style='opacity: 0.8'>Transformed a fragmented intranet and VLE across four schools into a seamless experience through UX strategy, research, and cross-functional collaboration.</span>",
      title3: "<strong style='font-size: 1.1rem'>Key Outcomes</strong><br><ul><li>Increased engagement metrics.</li><li>Elevated UX with intuitive UI.</li><li>70% reduction in support tickets.</li><li>Built scalable, future-ready platform.</li></ul>",
      title4: "",
      title5: "View Case Study",
           tabs: ['Product strategy', 'Content Design', 'Design System', 'CMS Development'],
      gradient: 'gradientYellow',
      image: require('../inViewUI/images/acs.png'),
      link: '/acs'
      },
    
      { 
      title1: 'VM',
      title2: "<strong style='font-size: 1.1rem'>Overview</strong><br><span style='opacity: 0.8'>Co-designed responsive, user-centered blog templates aligning closely with developers and content teams to deliver a scalable, high impact SEO platform.</span>",
      title3: "<strong style='font-size: 1.1rem'>Key Outcomes</strong><br><ul><li>SEO visibility significantly improved.</li><li>CTR and impressions increased.</li><li>Improved organic search rankings.</li><li>User engagement noticeably increased.</li></ul>",
      title4: "",
      title5: "View Case Study",
             tabs: ['Design Components Leveraged', 'Team Collaboration', 'User Experience'],
      gradient: 'gradientRed',
      image: require('../inViewUI/images/vm.jpg'),
      link: '/virgin-media'
      },
    
      {
      title1: 'TUI',
      title2: "<strong style='font-size: 1.1rem'>Overview</strong><br><span style='opacity: 0.8'>Worked in a cross-functional team to redesign Crystal Ski’s digital platforms aligning brand, UX, and business goals through research and collaboration.</span>",
      title3: "<strong style='font-size: 1.1rem'>Key Outcomes</strong><br><ul><li>Unified digital brand experience.</li><li>Aligned design with marketing.</li><li>Consistent UI across platforms.</li><li>Pain points successfully addressed.</li></ul>",
      title4: "",
      title5: "View Case Study",
              tabs: ['Team Collaboration', 'Scalable Design Approach', 'Content Design', 'User Research'],
      gradient: 'gradientBlue',
      image: require('../inViewUI/images/cs.jpg'),
      link: '/crystalski'
      }

  ];

  return (

<SimpleGrid
      cols={{ base: 1, sm: 1, md:1, lg: 1 }}
      spacing={{ base: 10, sm: 'xl', md:'xl',  lg: '60'}}
      verticalSpacing={{ base: 'xl', sm: 'xl', lg: '60' }}
    >
      {gCardData.map((gCard, index) => (
        <Box
          key={index}
          index={index}
          title1={gCard.title1}
          title2={gCard.title2}
          title3={gCard.title3}
          title4={gCard.title4}
          title5={gCard.title5}
          image={gCard.image}
          gradient={gCard.gradient}
          link={gCard.link}
          tabs={gCard.tabs}
          reverse={index % 2 === 1}
        />
      ))}

</SimpleGrid>

  );
};



export default Boxes;
