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
<p>My journey in design took off when I joined the incredible team at Clock, a leading design agency that gave me the chance to work on exciting projects for major organisations like JD Wetherspoon and the BBC. It was an invaluable experience that shaped my creative approach and deepened my passion for design.</p>
<p>Not long after, I found myself at Combined Insurance (AON). There, I was responsible for redesigning user experiences and interfaces across all their websites, and even ventured into some coding. This role was pivotal, it taught me the power of truly listening to users, understanding their needs, and creating designs that solve real problems.</p>
<p>The rest is history; since then, I've been designing and expanding my toolkit. I love working across the full spectrum of product design, from research through to UI and implementation, and get a ton of energy from working on seriously impactful work, such as in my last contract for the British Army.</p>

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