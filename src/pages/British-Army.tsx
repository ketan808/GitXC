import { Container, Title, Space, Divider, Image, Grid, SimpleGrid, List } from '@mantine/core';
import HeroArmy from '../components/HeroArmy';
import FadeInSection from '../inViewUI/FadeInSection';
import imageSub from '../images/army/sub_header.jpg';
import team from '../images/army/team.png';
import teamLight from '../images/army/teamLight.png';
import imageProb3 from '../images/army/problem1.jpg';
import imageBackground from '../images/army/fitness_mob.png';
import VidComp from '../components/Video';
import SubTitle from '../components/SubTitle';
import define from '../images/army/define.png';
import ideate from '../images/army/Ideate.png';
import design from '../images/army/design.png';
import test from '../images/army/test.png';
import dev from '../images/army/dev.png';
import designSystem from '../images/army/designSystem.png';
import designSystemLight from '../images/army/designSystemLight.png';
import apple from '../images/army/apple.png';
import retest from '../images/army/re_test.png';
import FadeInBoxesFindings from '../inViewUI/FadeInBoxesArmyFindings';
import FadeInBoxesImpact from '../inViewUI/FadeInBoxesArmyImpact';
import ArmySlideTwo from '../components/ArmySlideTwo';
import ArmyRings from '../components/ArmyRings';




import Next from '../components/Next';


function BritishArmy () {


return (

<>

<HeroArmy />

<Container size="xl" mb= "md">

<Image src={imageSub} alt="Army Image" />



{/* Background Start */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>
<Grid columns={12}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }}>
   
<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>The British Army has a vast number of diverse courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions they are training to be the best soldiers they can be.</p>
<p>MyTraining is an application for collecting course performance data and tracking well-being. Trainers can effectively monitor trainees by viewing their inputted data, adding scores, and creating final reports.</p>

<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>



<List size="xl" withPadding>
      <p><List.Item>30% of trainees leave during basic training, but that figure can fluctuate from year to year.</List.Item>
      <List.Item>Course data is spread across multiple applications and sources, posing a challenge to use effectively.</List.Item>
      <List.Item>The process of collecting course data and creating final reports consumes an excessive amount of paper.</List.Item>
      </p>
</List>

</Grid.Col>

<Grid.Col span={{ base: 12, md: 5, lg: 5, xl: 5 }}>
<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageBackground} alt="Army Image"
   mx="auto" 
   h={700}
   w="auto"
   fit="contain"
/>
</FadeInSection>
</Grid.Col>

</Grid>
</Container>

<Divider my="" />

{/* Background End*/}


<Space h="md" />


{/* Problem Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>




<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 2 }}
spacing="xl" 
>

<div>
<SubTitle SubTitle="SOLUTION"></SubTitle>
<p>MyTraining tracked trainees' progress during courses, which enabled course trainers to know when to intervene if trainees were facing difficulties thereby helping to cut the dropout rate.</p>
<p>Combining course information into a single application provided the Army with valuable data to help enhance their training methods.</p>
<p>The application digitized the Army's process of creating their final course reports, which ultimately led to the achievement of their sustainability goals.</p>

</div>


<div>
<Image src={imageProb3} alt="Army Image"
height={500}
/>
</div>

</SimpleGrid>

<Space h="md" />


</Container>
<Divider my="" />

{/* Problem End*/}

<Space h="xl" />

{/* My Role Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="MY ROLE"></SubTitle>

<p>We will be operating within an agile development environment, ensuring rapid progress and working towards a minimum viable product. I decided to involve the whole team in the UX process, and this created a wonderful team atmosphere.</p>
<p>My role would be to research and design features into prototypes, working with various groups of stakeholders, and then collaborate with developers to help implement them.</p>
<Space h="xl" />


<Container
size="xl"
className='theme90'
pl={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pr={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
>

<Image src={team} alt="Team"lightHidden/>
<Image src={teamLight} alt="Team" darkHidden/>


</Container>

</Container>
<Divider my="" />

{/* My Role End*/}

<Space h="xl" />


{/* Research */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="Observational Research"></SubTitle>

<p>Extensive research, affirming the necessity for this product, had already been conducted, and I was invited to multiple meetings with stakeholders and user groups to grasp requirements thoroughly. Below are some of the edge cases I discovered while on a visit to a training location.</p>

<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <Title tt="uppercase" fw={500} order={3} c="">Research Findings</Title>
      <Space h="md" />
      <FadeInBoxesFindings />
      </div>

      <div>
      <Space h="sm" />
      <Title tt="uppercase" fw={500} order={3} c="">Impact on Development</Title>
      <Space h="md" />
      <FadeInBoxesImpact />
      </div>
      
 </SimpleGrid>

</Container>
<Divider my="" />

{/* Research  */}



<Space h="xl" />

{/* Course Evidence Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="COURSE EVIDENCE FEATURE"></SubTitle>

<p>Trainers can upload images and notes for trainees to view during courses inside their own control panels. Later, trainers could use the evidence to create final reports.</p>
{/* <p>With constant feedback and iterations from stakeholders, features such as syndicates, behaviours, bulk evidence upload, adding notes to images, and voice recording on notes were implemented.</p> */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<Space h="xl" />
<VidComp src="video/evidence.mp4" />
</Container>

<p>Presenting prototypes to the wider Army sparked enthusiasm, as trainers could see how this feature would be a valuable tool to help create final course reports and keep trainees motivated during courses.</p>


{/* <Container size="600px"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>
<VidComp src="video/trainee_course.mp4" />
</Container> */}


</Container>
<Divider my="" />

{/* Course Evidence End*/}


<Space h="xl" />

{/* Process Start */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="Project Design Process"></SubTitle>
<Space h="xl" />
<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 3 }}
spacing="xl"
verticalSpacing="xl"
>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">Define</Title>
      <Space h="md" />
      <Image src={define} alt="define" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">User Journey's, User Flows, Site Maps</Title>

</div>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">Ideate</Title>
      <Space h="md" />
      <Image src={ideate} alt="ideate" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Exploring, Brainstorming, Identify Problems</Title>

</div>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">Design</Title>
      <Space h="md" />
      <Image src={design} alt="design" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Wireframing,  Mockups, Prototypes</Title>

</div>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">test</Title>
      <Space h="md" />
      <Image src={test} alt="test" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Feedback,  Adjustments, Future Concepts</Title>

</div>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">Development</Title>
      <Space h="md" />
      <Image src={dev} alt="development" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Handoff,  Discuss, Oversee</Title>

</div>

<div>
      <Title tt="uppercase" ta="center" fw={500} order={3} c="">re-test</Title>
      <Space h="md" />
      <Image src={retest} alt="retest" />
      <Space h="xl" />
      <Title ta="center" fw={500} order={4} c="">Feedback,  Improve, Identify Issues</Title>

</div>


</SimpleGrid>

</Container>
<Divider my="" /> 
{/* Process End*/}


<Space h="xl" />

{/*TRAINEE WELLBEING DATA*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="GATHERING TRAINEE WELLBEING DATA"></SubTitle>

<p>Trainees would input wellbeing data during courses, and this would help trainers see how they are progressing so they could encourage or intervene if help is needed.</p>
{/* <p>With constant feedback and iterations from stakeholders, features such as syndicates, behaviours, bulk evidence upload, adding notes to images, and voice recording on notes were implemented.</p> */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<Space h="xl" />



<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div><VidComp src="video/wellbeing.mp4" /></div>
      <div><VidComp src="video/target.mp4" /></div>


    </SimpleGrid>
    </Container>

    <Space h="xl" />

    <Image src={apple} alt="apple watch"/>

</Container>



{/* <Container size="600px"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>
<VidComp src="video/trainee_course.mp4" />
</Container> */}


</Container>
<Divider my="" />

{/* TRAINEE WELLBEING DATA End*/}






<Space h="xl" />

{/* Design System Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="EVOLVING DESIGN SYSTEM"></SubTitle>

<p>In the background I worked on a documented design system that continued to evolve during the project. Some course locations and barracks would have low light conditions, so I designed a dark theme, as this would reduce eye strain and improve readability and usability.</p>

<p>The design system helped accelerate the design process and enabled me to rapidly create prototypes and mockups.</p>

<Space h="xl" />


<Image src={designSystem} alt="Design System"lightHidden/>
<Image src={designSystemLight} alt="Design System" darkHidden/>


</Container>
<Divider my="" />

{/* Design System End*/}

<Space h="xl" />

{/* Scroll */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="UI FOR BIG DATA"></SubTitle>

<p>I had to interface big data sets when live data was called into production versions of the application. Below is a prototype where categories could sometimes reach over a hundred.</p>

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<Space h="xl" />
<VidComp src="video/scroll.mp4" />
</Container>


</Container>
<Divider my="" />

{/* Scroll End */}

<Space h="xl" />

{/* Other */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="VARIOUS VISUALS"></SubTitle>

<Space h="md" />

<ArmySlideTwo />

</Container>
<Divider my="" />

{/* Other End */}


<Space h="xl" />

{/* Rings */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="TESTING"></SubTitle>


<ArmyRings />

</Container>
<Divider my="" />

{/* Rings End */}



<Space h="xl" />

{/* Conclusion */}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>The introduction of the MyTraining application has digitised and revolutionised how course data is managed within the British Army. The Ministry of Defence also rolled out trials for the Royal Navy and Royal Air Force.</p>
<p>The Agile approach allowed us to continuously engage with users, adapt to their feedback, and make rapid improvements, ensuring that the product is both functional and intuitive.</p>

</Container>
<Divider my="" />

{/* Conclusion */}





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