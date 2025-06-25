import { Container, Text, Space, Divider, Image, Grid, SimpleGrid, List, Card, Paper, ThemeIcon, rem } from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroArmy from '../components/HeroArmy';
import FadeInSection from '../inViewUI/FadeInSection';
import imageSub from '../images/army/sub_header.jpg';
import team from '../images/army/team.png';
import teamLight from '../images/army/teamLight.png';
import imageProb3 from '../images/army/sold.png';
import imageBackground from '../images/army/fitness_mob.png';
import VidComp from '../components/Video';
import SubTitle from '../components/SubTitle';
import SubTitleH3 from '../components/SubTitleH3';
import SubTitleH3Left from '../components/SubTitleH3Left';
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
import ArmyRings from '../components/ArmyRings';




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


<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>The British Army runs an extensive range of courses from combat and tactical operations to advanced medical training. When soldiers aren't on peacekeeping missions, they're sharpening their skills to be the best in the field.</p>
<p>MyTraining is a powerful application designed to capture both performance and well-being data throughout these intensive courses. It gives trainers a clear, real-time view of each trainee's progress, allowing them to input scores, monitor development, and generate detailed final reports all in one streamlined platform.</p>


<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>


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
      <List.Item>30% of trainees leave during basic training, but that figure can fluctuate from year to year.</List.Item>
      <List.Item>Course data is spread across multiple applications and sources, posing a challenge to use effectively.</List.Item>
      <List.Item>The process of collecting course data and creating final reports consumes an excessive amount of paper.</List.Item>
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
<p>MyTraining empowers course trainers with real-time insights into both trainee progress and well-being, enabling timely interventions when individuals face challenges ultimately reducing dropout rates.</p>
<p>By consolidating all course data into a single, unified platform, the app unlocked valuable insights to refine and improve training methods across the board.</p>
<p>It also replaced a traditionally paper-heavy reporting process with a fully digital workflow, directly supporting the Army’s sustainability goals while saving time and resources.</p>

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

<SubTitle SubTitle="COURSE EVIDENCE FEATURE"></SubTitle>

{/* <p>I kicked off the process with low-fidelity wireframes, quickly turning ideas into tangible visuals. Through fast-paced, iterative feedback loops with stakeholders and user groups, I refined the designs shaping them into polished, high-fidelity layouts and fully interactive prototypes that brought the vision to life.</p> */}
<p>During our discovery phase, we identified a critical inefficiency in how military trainers captured course evidence. Trainers were manually collecting photos, notes, and observations after sessions, often relying on personal devices or handwritten notes. This led to inconsistent data, lost insights, and time-consuming report creation at the end of each training cycle.</p>


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

<SubTitleH3 SubTitleH3="Polished UI mockups "></SubTitleH3>

<Space h="md" />

<ArmySlideOne />

<Space h="xl" />


</ContainerOne>

<Divider my="" />

{/* Course Evidence End*/}

<Space h="xl" />


{/* Design Process Start */}
<ContainerOne>

<SubTitle SubTitle="Project Design Process"></SubTitle>
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
      <Text size="lg" ta="center" fw={500} >User Journey's, User Flows, Site Maps</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Ideate"></SubTitleH3>
      <Space h="md" />
      <Image src={ideate} alt="ideate" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Exploring, Brainstorming, Identify Problems</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Design"></SubTitleH3>
      <Space h="md" />
      <Image src={design} alt="design" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Wireframing,  Mockups, Prototypes</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="test"></SubTitleH3>
      <Space h="md" />
      <Image src={test} alt="test" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Feedback,  Adjustments, Future Concepts</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="Development"></SubTitleH3>
      <Space h="md" />
      <Image src={dev} alt="development" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Handoff,  Discuss, Oversee</Text>

</div>

<div>
      <SubTitleH3 SubTitleH3="re-test"></SubTitleH3>
      <Space h="md" />
      <Image src={retest} alt="retest" />
      <Space h="xl" />
      <Text size="lg" ta="center" fw={500} >Feedback, Improve, Identify Issues</Text>

</div>


</SimpleGrid>

</ContainerOne>

<Divider my="" /> 
{/* Design Process End*/}



<Space h="xl" />









{/*TRAINEE WELLBEING DATA*/}


<ContainerOne className="cardGrey">

<SubTitle SubTitle="TRAINEE ACTIONS PANEL"></SubTitle>

<p>When trainees input and track their wellbeing during the course, it becomes more than just data, it’s a reflection of their growth. Trainers can spot moments of progress to celebrate and step in with guidance or motivation when it’s needed most, helping each individual stay on track and thrive.</p>
{/* <p>With constant feedback and iterations from stakeholders, features such as syndicates, behaviours, bulk evidence upload, adding notes to images, and voice recording on notes were implemented.</p> */}



<SimpleGrid
      cols={{ base: 1, sm: 1, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >


      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="Course DashBoard"></SubTitleH3>
      </Card>
      <Space h="lg" />   
      <Image src={imageMob1} alt="Team"/>
      </div>


      <div>
      <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'sm', md: 'sm', lg: 'sm' }} radius="md" withBorder >
      <SubTitleH3 SubTitleH3="wellbeing tracking"></SubTitleH3>
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

<SubTitle SubTitle="MY ROLE"></SubTitle>

<p>As the Product Designer, I led the end-to-end design process, translating research into intuitive prototypes, aligning vision across diverse stakeholders, and partnering closely with developers to bring each feature to life.</p>
<p>We thrived in an agile development environment, driving fast-paced progress toward a high-impact minimum viable product.</p>
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

<SubTitle SubTitle="EVOLVING DESIGN SYSTEM"></SubTitle>

<p>Behind the scenes, I built and continuously refined a documented design system that evolved alongside the project. Knowing that some course locations and barracks operated in low-light environments, I introduced a dark theme to reduce eye strain and improve readability and usability in real-world conditions.</p>

<p>The design system became a powerful accelerator. It streamlined the design process, enabled rapid prototyping, and allowed me to deliver high-fidelity mockups with consistency and clarity.</p>

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

<SubTitle SubTitle="UI FOR BIG DATA"></SubTitle>

<p>I had to interface big data sets when live data was called into production versions of the application. Below is a prototype where categories could sometimes reach over a hundred.</p>

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

<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>The launch of the MyTraining application marked a major leap forward in how course data is managed within the British Army. It replaced outdated, manual systems with a streamlined and fully digital solution. Its success quickly gained attention across the armed forces, leading the Ministry of Defence to conduct successful trials with both the Royal Navy and Royal Air Force.</p>
<p>Using an Agile approach, we maintained a strong connection with users throughout the development process. Regular engagement allowed us to adapt quickly, act on feedback, and refine the product continuously. The result is a system that is not only highly functional but also intuitive and designed around the real needs of its users.</p>

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