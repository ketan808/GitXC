import Gcards from '../inViewUI/Gcards';
import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, Grid, Image, Box } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import SubTitle from '../components/SubTitle';
import ContainerOne from '../components/ContainerOne';


const HomePage = () => {


return (

<>

<Hero />


<Container size="xl" mb= "md">

<ContainerOne>

<Grid columns={12} gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 3, lg: 3, xl: 3 }}>

<FadeInSection duration = {0.25} delay = {0}>

<Box lightHidden mt='5px' mb='5px'>
<Image className='imageAbout' style={{ backgroundColor:'white', border:'5px solid white', display: 'block', margin: 'auto', borderRadius: '5%'}}  src={require('../images/ketan.png')} /></Box >

<Box darkHidden mt='5px' mb='5px'>
<Image className='imageAbout' style={{ backgroundColor:'white', border:'5px solid #E1EEEF', display: 'block', margin: 'auto', borderRadius: '5%'}} src={require('../images/ketan.png')} /></Box >


</FadeInSection>


</Grid.Col>


<Grid.Col span={{ base: 12, md: 9, lg: 9, xl: 9 }}>
   
<SubTitle SubTitle="About"></SubTitle>
<p>My design journey truly began when I joined the amazing team at Clock, a leading design agency where I had the opportunity to work on exciting projects for high-profile clients like JD Wetherspoon and the BBC. It was an incredible experience that shaped my creative thinking and ignited a lasting passion for design.</p>
<p>Since then, I’ve continued to grow and refine my toolkit. I thrive on working across the full spectrum of product design—whether it's user research, stakeholder engagement, UI design, or implementation. What drives me most is creating meaningful, impactful work—like my recent contract with the British Army, where I was fortunate to contribute to projects that truly make a difference.</p>

</Grid.Col>

</Grid>
</ContainerOne>

<Divider my="" />

<Space h="xl" />

<ContainerOne>

<SubTitle SubTitle="CASE STUDIES"></SubTitle>

<Space h="xl" />

<Gcards />

</ContainerOne>

<Divider my="" />

<Space h="xl" />


<Testimonials initialSlide={3}  />
<Divider my="" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>







</>

);};
  
  export default HomePage;