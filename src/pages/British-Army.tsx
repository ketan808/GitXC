import { Box, Container, Title, Space, Divider, Image, Grid, SimpleGrid, List, Card, Paper, ThemeIcon, rem } from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroArmy from '../components/HeroArmy';
import FadeInSection from '../inViewUI/FadeInSection';
import imageSub from '../images/army/sub_header.jpg';
import team from '../images/army/team.png';
import teamLight from '../images/army/teamLight.png';
import imageProb3 from '../images/army/problem1.jpg';
import imageProb4 from '../inViewUI/images/well-mob.png';
import imageBackground from '../images/army/fitness_mob.png';
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
import apple from '../images/army/apple.png';
import retest from '../images/army/re_test.png';
import FadeInBoxesFindings from '../inViewUI/FadeInBoxesArmyFindings';
import FadeInBoxesImpact from '../inViewUI/FadeInBoxesArmyImpact';
import ArmySlideTwo from '../components/ArmySlideTwo';
import ArmyRings from '../components/ArmyRings';
import ContainerOne from '../components/ContainerOne';
import Testimonials from '../components/TestimonialSlide';
import ImageAnimation from '../inViewUI/ThreeCard';




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

<p>The British Army has a vast number of courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions they are training to be the best soldiers they can be.</p>
<p>MyTraining is an application for collecting course performance and well-being data. Course trainers can effectively monitor course trainees by viewing their inputted data, further adding scores, and creating final reports.</p>


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
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 2 }}
spacing={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl', xl: 'xl' }}
>

<div>
<SubTitle SubTitle="SOLUTION"></SubTitle>
<p>MyTraining tracks trainees' progress during courses, which enables course trainers to know when to intervene if trainees are facing difficulties thereby helping to cut the dropout rate.</p>
<p>Combining course information into a single application provides the Army with valuable data to help enhance their training methods.</p>
<p>The application digitised the Army's process of creating their final course reports, which ultimately led to the achievement of their sustainability goals.</p>

</div>


<div>
<Image src={imageProb3} alt="Army Image"
   h={{ base: 300, md: 500, lg: 500, xl: 500 }}
/>
</div>

</SimpleGrid>

<Space h="md" />

</ContainerOne>

<Divider my="" />

{/* Solution End*/}

<Space h="xl" />

{/* My Role Start*/}

<Card shadow="xl" padding="" radius="">
<ContainerOne>

<SubTitle SubTitle="MY ROLE"></SubTitle>

<p>We operated within an agile development environment, ensuring rapid progress while working towards a minimum viable product. I decided to involve the whole team in the UX process, and this created a wonderful team atmosphere.</p>
<p>My role would be to research and design features into prototypes, working with various groups of stakeholders, and then collaborate with developers to help implement them.</p>
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


{/* Research */}

<ContainerOne>

<SubTitle SubTitle="Observational Research"></SubTitle>

<p>Extensive research, affirming the necessity for this product, had already been conducted, and I was invited to multiple meetings with stakeholders and user groups to grasp requirements thoroughly. Below are some of the edge cases I discovered while on a visit to a training location.</p>

<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Research Findings"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesFindings />
      </div>

      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Impact on Development"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesImpact />
      </div>
      
</SimpleGrid>

<Space h={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl' }} />

</ContainerOne>
<Divider my="" />

{/* Research  End */}


<Space h="xl" />

{/* Course Evidence Start*/}
<ContainerOne>

<SubTitle SubTitle="COURSE EVIDENCE FEATURE"></SubTitle>

<p>Trainers can upload images and notes for trainees to view inside their own control panels; trainers could use the evidence later to create final course reports, which were being done using methods such as paper, clipboard, Excel sheets, and various apps.</p>
<p>I started the process by crafting low-fidelity wireframes; through iterative cycles, I refined these wireframes based on stakeholder and user group feedback, and following this, I advanced to high-fidelity layouts and interactive prototypes.</p>


<Container
size="xl"
pr={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pl={{ base: '0px', sm: '40px', md: '40px', lg: '120px' }}
pt={{ base: '10px', sm: '10px', md: '30px', lg: '40px' }}
pb={{ base: '10px', sm: '10px', md: '30px', lg: '40px' }}

>

<VidComp src="video/trainer_dash.mp4" />
</Container>

<p>Presenting prototypes to the wider Army sparked enthusiasm, as trainers could see how this feature would be a valuable tool to help create final course reports and keep trainees motivated during courses.</p>


</ContainerOne>

<Divider my="" />

{/* Course Evidence End*/}



{/* Testing */}
<ContainerOne>

<SubTitle SubTitle="Lean UX Testing"></SubTitle>

<p>A usability test was conducted for the purpose of finding improvements, testing the concept, and revealing friction points for the course evidence feature. 10 user participants (trainers) were recruited, and the majority understood why the feature was needed.</p>

<ArmyRings />

</ContainerOne>
<Divider my="" />

{/* Testing End */}

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
      <Title ta="center" fw={500} order={4} c="">User Journey's, User Flows, Site Maps</Title>

</div>

<div>
      <SubTitleH3 SubTitleH3="Ideate"></SubTitleH3>
      <Space h="md" />
      <Image src={ideate} alt="ideate" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Exploring, Brainstorming, Identify Problems</Title>

</div>

<div>
      <SubTitleH3 SubTitleH3="Design"></SubTitleH3>
      <Space h="md" />
      <Image src={design} alt="design" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Wireframing,  Mockups, Prototypes</Title>

</div>

<div>
      <SubTitleH3 SubTitleH3="test"></SubTitleH3>
      <Space h="md" />
      <Image src={test} alt="test" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Feedback,  Adjustments, Future Concepts</Title>

</div>

<div>
      <SubTitleH3 SubTitleH3="Development"></SubTitleH3>
      <Space h="md" />
      <Image src={dev} alt="development" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Handoff,  Discuss, Oversee</Title>

</div>

<div>
      <SubTitleH3 SubTitleH3="re-test"></SubTitleH3>
      <Space h="md" />
      <Image src={retest} alt="retest" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Feedback,  Improve, Identify Issues</Title>

</div>


</SimpleGrid>

</ContainerOne>

<Divider my="" /> 
{/* Design Process End*/}




<Space h="xl" />

{/*TRAINEE WELLBEING DATA*/}


<ContainerOne className="cardGrey">

<SubTitle SubTitle="GATHERING TRAINEE WELLBEING DATA"></SubTitle>

<p>Trainees can input wellbeing data during courses, and this would help trainers see how they are progressing so they could encourage or intervene if help is needed.</p>
{/* <p>With constant feedback and iterations from stakeholders, features such as syndicates, behaviours, bulk evidence upload, adding notes to images, and voice recording on notes were implemented.</p> */}



<Box visibleFrom="md">
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

<Space h="xl" />

<ContainerOne>

<Image src={apple} alt="apple watch"/>

</ContainerOne>
<Divider my="" />



{/* TRAINEE WELLBEING DATA End*/}

<Space h="xl" />

{/* Design System Start*/}
<ContainerOne>

<SubTitle SubTitle="EVOLVING DESIGN SYSTEM"></SubTitle>

<p>In the background I worked on a documented design system that continued to evolve during the project. Some course locations and barracks would have low light conditions, so I designed a dark theme, as this would reduce eye strain and improve readability and usability.</p>

<p>The design system helped accelerate the design process and enabled me to rapidly create prototypes and mockups.</p>

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

{/* Other */}
<ContainerOne>

<SubTitle SubTitle="VARIOUS VISUALS"></SubTitle>

<Space h="md" />

<ArmySlideTwo />

</ContainerOne>

<Divider my="" />

{/* Other End */}





<Space h="xl" />

{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>The introduction of the MyTraining application has digitised how course data is managed within the British Army. The Ministry of Defence also rolled out successful trials for the Royal Navy and Royal Air Force.</p>
<p>The Agile approach allowed us to continuously engage with users, adapt to their feedback, and make rapid improvements, ensuring that the product is both functional and intuitive.</p>

</ContainerOne>
<Divider my="" />

{/* Conclusion End */}

<Space h="xl" />


<Testimonials initialSlide={4}  />


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