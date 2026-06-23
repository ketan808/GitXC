import { Container, Text, Space, Divider, Image, Grid, SimpleGrid, List, Card, Paper, ThemeIcon, rem } from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroArmy from '../components/HeroArmy';
import FadeInSection from '../inViewUI/FadeInSection';
import imageSub from '../images/army/sub_header.jpg';
import team from '../images/army/team.png';
import teamLight from '../images/army/teamLight.png';
import imageProb3 from '../images/army/sold.png';
import imageBackground from '../images/army/mob/login.png';
import VidComp from '../components/Video';
import SubTitle from '../components/SubTitle';
import SubTitleH3 from '../components/SubTitleH3';
import designSystem from '../images/army/designSystem.png';
import designSystemLight from '../images/army/designSystemLight.png';
import define from '../images/army/define.png';
import ideate from '../images/army/Ideate.png';
import design from '../images/army/design.png';
import test from '../images/army/test.png';
import dev from '../images/army/dev.png';
import retest from '../images/army/re_test.png';
import FadeInBoxesFindings from '../inViewUI/FadeInBoxesArmyFindings';
import FadeInBoxesImpact from '../inViewUI/FadeInBoxesArmyImpact';
import ArmySlideTwo from '../components/ArmySlideTwo';
import ArmySlideOne from '../components/ArmySlideOne';
import ContainerOne from '../components/ContainerOne';
import Testimonials from '../components/TestimonialSlide';
import imageMob1 from '../images/army/mob/home.png';
import imageMob2 from '../images/army/mob/wellbeing.png';
import imageMob7 from '../images/army/mob/target_trainer.png';
import imageMob8 from '../images/army/mob/image.png';

import Next from '../components/Next';




function BritishArmy () {


return (

<>

<Paper shadow="xl" hiddenFrom="sm" >
<Image src={imageSub} alt="Army Image" />
</Paper>


<HeroArmy />


<Container size="xl" mb= "md">


<Paper shadow="xl" visibleFrom="sm" >
<Image src={imageSub} alt="Army Image" />
</Paper>



{/* Background Start */}


<ContainerOne>
<Grid gutter={{ base: 5, sm: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }} >


<SubTitle SubTitle="PROJECT OVERVIEW"></SubTitle>

<p>The British Army runs hundreds of courses each year, from combat and medical training to leadership and tactical development. Between deployments, soldiers train continuously to maintain operational readiness.</p>
<p>MyTraining is a digital platform built to capture trainee performance and wellbeing data across these intensive courses. It gives trainers a real-time view of each individual's progress, supports timely interventions, and consolidates final course reporting, all within one system.</p>


<SubTitle SubTitle="THE CHALLENGE"></SubTitle>


<List
      
      pl={{ base: "", sm: "", lg: "md", xl: "md" }}
      spacing="sm"
      icon={
        <ThemeIcon color="cyan" size={32} radius="" mr={{ base: "sm", sm: "sm", lg: "md", xl: "md" }}>
          <IconChevronsRight style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
   >

<p>
      <List.Item>Drop-out rates during basic training sat at 30%, with limited data to understand root causes or identify at-risk trainees early.</List.Item>
      <List.Item>Course data was spread across multiple disconnected systems, making it difficult for trainers to act on meaningful insights in real time.</List.Item>
      <List.Item>Report generation was paper-heavy, time-consuming, and inconsistent across courses and locations.</List.Item>
      </p>
</List>



</Grid.Col>



<Grid.Col span={{ base: 12, md: 5, lg: 5, xl: 5 }}>

<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageBackground} alt="Army Image"
   h={{ base: 500, md: 700, lg: 700, xl: 700 }}
   fit="contain"
/>
</FadeInSection>


</Grid.Col>

</Grid>
</ContainerOne>

<Divider my="" />

{/* Background End*/}


<Space h="xl" />


{/* Solution Start*/}

<ContainerOne>

<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
spacing={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl', xl: 'xl' }}
>

<div>
<SubTitle SubTitle="SOLUTION"></SubTitle>
<p>MyTraining consolidates all training and wellbeing data into a single platform, giving trainers the visibility they need to intervene early and support trainees more effectively.</p>
<p>Centralising course data surfaced patterns that helped refine training methods and better allocate support across cohorts.</p>
<p>Digitising the reporting workflow removed the dependency on paper entirely, delivering a process that is faster, more consistent, and more sustainable at scale.</p>

</div>



<div>
<SubTitle SubTitle="TARGET AUDIENCE"></SubTitle>
<Space h="xl" />
<Image src={imageProb3} alt="Army Image"/>
</div>

</SimpleGrid>

<Space h="md" />

</ContainerOne>

<Divider my="" /> 

{/* Solution End*/}



<Space h="xl" />

{/* Course Evidence Start*/}
<ContainerOne>

<SubTitle SubTitle="RESEARCH & EVIDENCE WORKFLOW"></SubTitle>

<p>During discovery, we identified a critical inefficiency in how trainers captured course evidence. They were relying on personal devices, handwritten notes, and post-session recall, creating data gaps, inconsistencies, and time-consuming manual reports at the end of each cycle. We mapped the existing workflow end-to-end and ran contextual interviews with trainers across different course types to understand the real friction points before designing a solution.</p>


<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Research Methods Used"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesFindings/>
      </div>

      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Key Findings"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesImpact/>
      </div>
      
</SimpleGrid>

<Space h="xl" />
<Space h="md" />

<SubTitleH3 SubTitleH3="High-Fidelity Mockups"></SubTitleH3>

<Space h="md" />

<ArmySlideOne />

<Space h="xl" />


</ContainerOne>

<Divider my="" />

{/* Course Evidence End*/}

<Space h="xl" />


{/* Design Process Start */}
<ContainerOne>

<SubTitle SubTitle="MY ROLE & APPROACH"></SubTitle>
<Space h="xl" />
<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 3 }}
spacing="xl"
verticalSpacing="xl"
>

<div>
      <SubTitleH3 SubTitleH3="Define"></SubTitleH3>
      <Space h="md" />
      <Image src={define} alt="define" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >User Journeys, Flows & Site Maps</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Ideate"></SubTitleH3>
      <Space h="md" />
      <Image src={ideate} alt="ideate" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Exploring, Brainstorming & Problem Framing</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Design"></SubTitleH3>
      <Space h="md" />
      <Image src={design} alt="design" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Wireframing, Mockups & Prototypes</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Test"></SubTitleH3>
      <Space h="md" />
      <Image src={test} alt="test" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Feedback, Iteration & Future Concepts</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Development"></SubTitleH3>
      <Space h="md" />
      <Image src={dev} alt="development" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Handoff, Collaboration & Oversight</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Re-test"></SubTitleH3>
      <Space h="md" />
      <Image src={retest} alt="retest" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Feedback, Improvement & Issue Resolution</Text>

</div>


</SimpleGrid>

</ContainerOne>

<Divider my="" /> 
{/* Design Process End*/}



<Space h="xl" />









{/*TRAINEE WELLBEING DATA*/}


<ContainerOne className="cardGrey">

<SubTitle SubTitle="TRAINEE ACTIONS PANEL"></SubTitle>

<p>When trainees track their own wellbeing throughout a course, it creates more than a data record. It gives trainers the visibility to act. Moments of progress can be recognised and reinforced, and signs of struggle can be identified early, before they escalate into dropout. This human layer of the platform was central to reducing attrition and building a more supportive training environment.</p>
{/* <p>With constant feedback and iterations from stakeholders, features such as syndicates, behaviours, bulk evidence upload, adding notes to images, and voice recording on notes were implemented.</p> */}



<SimpleGrid
      cols={{ base: 1, sm: 1, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >


      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Course Dashboard"></SubTitleH3>
      </Card>
      <Space h="lg" />   
      <Image src={imageMob1} alt="Team"/>
      </div>


      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Wellbeing Tracking"></SubTitleH3>
      </Card>
      <Space h="lg" />   
      <Image src={imageMob2} alt="Team"/>
      </div>


      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Trainer/Trainee Score"></SubTitleH3>
      </Card>
      <Space h="lg" />    
      <Image src={imageMob7} alt="Team"/>
      </div>



{/*       <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="wellbeing stats"></SubTitleH3>
      </Card>
      <Space h="lg" />
      <Image src={imageMob4} alt="Team"/>
      </div> */}

      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Course Evidence Images"></SubTitleH3>
      </Card>
      <Space h="lg" />
      <Image src={imageMob8} alt="Team"/>
      </div>


</SimpleGrid>

<Space h="xl" />

{/* <SimpleGrid
      cols={{ base: 1, sm: 1, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Target Model QS"></SubTitleH3>
      </Card>
      <Space h="lg" />
      <Image src={imageMob6} alt="Team"/>
      </div>





      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Course Evidence Notes"></SubTitleH3>
      </Card>
      <Space h="lg" />
      <Image src={imageMob9} alt="Team"/>
      </div>


</SimpleGrid> */}




{/* <Box visibleFrom="md">
<ImageAnimation />
</Box>


<Box hiddenFrom="md">
<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageProb4} alt="Wellbeing Image"
   h={{ base: 500 }}
   fit="contain"
/>
</FadeInSection>
</Box>
 */}

{/* <Container
size="xl"
className='theme90'

pr={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pl={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pb={{ base: '40px', sm: '40px', md: '40px', lg: '40px' }}
>

<SimpleGrid
      cols={{ base: 2, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div><VidComp src="video/wellbeing.mp4" /></div>
      <div><VidComp src="video/target.mp4" /></div>


    </SimpleGrid>
</Container> */}



</ContainerOne>
<Divider my="" />

{/* <Space h="xl" />

<ContainerOne>

<Image src={apple} alt="apple watch"/>

</ContainerOne>
<Divider my="" /> */}



{/* TRAINEE WELLBEING DATA End*/}




<Space h="xl" />




{/* My Role Start*/}

<Card shadow="xl" padding="" radius="">
<ContainerOne>

<SubTitle SubTitle="COLLABORATION & TEAM"></SubTitle>

<p>As the lead Product Designer, I owned the end-to-end design process, from initial discovery and stakeholder alignment through to high-fidelity delivery and developer handoff.</p>
<p>Working in an agile environment, I collaborated closely with Army subject matter experts, Ministry of Defence stakeholders, and the development team to ship a focused, high-impact MVP.</p>
<Space h="md" />


<Container
size="xl"
className='theme90'
pl={{ base: '10px', sm: '40px', md: '40px', lg: '100px' }}
pr={{ base: '10px', sm: '40px', md: '40px', lg: '100px' }}
pb={{ base: '20px', sm: '40px', md: '40px', lg: '50px' }}
>

<Image src={team} alt="Team"lightHidden/>
<Image src={teamLight} alt="Team" darkHidden/>



</Container>
</ContainerOne>
</Card>
<Divider my="" />

{/* My Role End*/}

<Space h="xl" />



{/* Other */}
<ContainerOne>

<SubTitle SubTitle="VARIOUS FEATURE VISUALS"></SubTitle>

<Space h="xl" />

<ArmySlideTwo />

</ContainerOne>

<Divider my="" />

{/* Other End */}






<Space h="xl" />

{/* Design System Start*/}
<ContainerOne>

<SubTitle SubTitle="DESIGN SYSTEM & DELIVERY"></SubTitle>

<p>I built and continuously refined a documented design system throughout the project. Knowing that many course locations and barracks operated in low-light conditions, I introduced a dark theme to improve readability and reduce eye strain in operational environments.</p>

<p>The system became a key delivery accelerator, enabling rapid prototyping, maintaining visual consistency across features, and reducing friction during developer handoff.</p>

<Space h="md" />


<Image src={designSystem} alt="Design System" lightHidden/>
<Image src={designSystemLight} alt="Design System" darkHidden/>




<Space h="md" />

</ContainerOne>

<Divider my="" />

{/* Design System End*/}

<Space h="xl" />

{/* Scroll */}
<ContainerOne>

<SubTitle SubTitle="SCALING FOR REAL DATA"></SubTitle>

<p>When live production data was integrated, some category lists exceeded a hundred items. I designed a scalable, scrollable UI pattern to maintain usability at scale without compromising the layout or the overall experience.</p>

<Container
size="xl"
pr={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pl={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pt={{ base: '0px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '10px', sm: '10px', md: '30px', lg: '40px' }}
>


<VidComp src="video/scroll.mp4" />
</Container>

</ContainerOne>

<Divider my="" />

{/* Scroll End */}

<Space h="xl" />


{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="OUTCOME & IMPACT"></SubTitle>


<p>The launch of MyTraining marked a significant step forward in how the British Army manages training data. It replaced fragmented, paper-heavy processes with a fully digital system, giving trainers real-time insight and supporting more informed decisions around trainee welfare.</p>
<p>The impact extended beyond the Army. The Ministry of Defence ran successful trials with both the Royal Navy and Royal Air Force, validating the platform's scalability across the armed forces. Regular user engagement and agile delivery throughout the project kept the product grounded in real operational needs, and the result reflects that.</p>

</ContainerOne>
<Divider my="" />

{/* Conclusion End */}

<Space h="xl" />


<Testimonials initialSlide={3}  />


<Space h="xl" />

<SubTitle SubTitle="CASE STUDIES"></SubTitle>
<Space h="md" />
<Next 
colsgrid={1}
colDisplay="none"
textPrevious="" 
textNext="Intranet & Virtual Learning Enviroment"
linkPrevious="" 
linkNext="/acs"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default BritishArmy;