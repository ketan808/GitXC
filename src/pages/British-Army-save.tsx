import { Container, Title, Space, Divider, Image, Grid, SimpleGrid, List  } from '@mantine/core';
import HeroArmy from '../components/HeroArmy';
import FadeInSection from '../inViewUI/FadeInSection';
import imageSub from '../images/army/sub_header.jpg';
import imageProb1 from '../images/army/problem1.jpg';
import team from '../images/army/team.png';
import imageProb3 from '../images/army/problem3.jpg';
import imageBackground from '../images/army/fitness_mob.png';
import VidComp from '../components/Video';
import SubTitle from '../components/SubTitle';


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

<p>The British Army has a vast number of diverse courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions or supplying humanitarian aid they are training to be the best soldiers they can be.</p>
<p>Army trainers and trainees use MyTraining, an application for collecting course performance data and promoting well-being. Trainers can effectively monitor trainees by viewing their inputted data, adding scores, and creating final reports.</p>

<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>



<List type="ordered" size="xl">
      <p><List.Item>30% of Trainees leave during basic training but that.</List.Item>
      <List.Item>Course data in too many diffrent applications and sources.</List.Item>
      <List.Item>Course data collection and final reports using too much paper.</List.Item>
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

<Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">PROBLEM STATEMENTS</Title>
<Space h="xl" />

<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 2 }}
spacing="lg" 
>

<div>
<Image src={imageProb1} alt="Army Image"
height={250}
fit="cover"
/>
<p>Trainees need to feel more comfortable when expressing difficulties; 25% leave during basic training.</p>
</div>


<div>
<Image src={imageProb3} alt="Army Image"
height={250}
fit="cover"
/>
<p>Course trainers need help to know when intervention is needed to help stop the dropout rate. </p>
</div>

</SimpleGrid>

<Space h="md" />


<Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">SOLUTION</Title>


<p>MyTraining tracked trainees' progress during courses, which enabled course trainers to know when to intervene if trainees were facing difficulties, thereby helping to cut the dropout rate by 10%. </p>
<p>The application digitized the Army's process of creating their final course reports, which ultimately led to the achievement of their sustainability goals.</p>
<p>Combining courses into a single application provided the Army with valuable data to enhance their training methods.</p>
</Container>
<Divider my="" />

{/* Problem End*/}

<Space h="xl" />

{/* Team Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">MY ROLE</Title>

<p>We would be working in an agile development environment so UX processes would be a challenge. I decided to the involve the whole team from the start of the project and this created a great team atmosphere.</p>
<p>My role would be to research and design features into prototypes and then work with developers to implement them.</p>
<Space h="xl" />


<Container
size="xl"
className='theme90'
pl={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pr={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
>

<Image src={team} alt="Team"/>
</Container>

</Container>
<Divider my="" />

{/* Team End*/}

<Space h="xl" />

{/* Course Evidence Start*/}

<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">COURSE EVIDENCE FEATURE</Title>

<p>My role would be to research and design features into prototypes and then work with developers to implement them.</p>


<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '100px' }}
pt={{ base: '20px', sm: '0px', md: '0px', lg: '0px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>
<VidComp src="video/course.mp4" />
</Container>
</Container>
<Divider my="" />

{/* Course Evidence End*/}

<Space h="xl" />

<Title fw={500} order={3} c="dimmed">Case Studies</Title>
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