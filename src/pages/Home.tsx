import Gcards from '../inViewUI/Gcards';
import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, Grid, Image, Box, Card } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import SubTitle from '../components/SubTitle';


const HomePage = () => {


return (

<>

<Hero />


<Container size="xl" mb= "md">

<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>
<Grid columns={12} gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 3, lg: 3, xl: 3 }}>

<FadeInSection duration = {0.25} delay = {0}>

<Box lightHidden mt='5px' mb='5px'>
<Image className='imageAbout' style={{ backgroundColor:'white', border:'5px solid white', display: 'block', margin: 'auto', borderRadius: '5%'}}  src={require('../images/ketan.png')} /></Box >

<Box darkHidden mt='5px' mb='5px'>
<Image style={{ backgroundColor:'white', border:'5px solid #e4e7ec', display: 'block', margin: 'auto', borderRadius: '5%'}} src={require('../images/ketan.png')} /></Box >


</FadeInSection>
</Grid.Col>


<Grid.Col span={{ base: 12, md: 9, lg: 9, xl: 9 }}>
   
<SubTitle SubTitle="About"></SubTitle>
<p>I've been designing and expanding my toolkit for over 20 years with a passion for creating visually appealing interfaces. Over the years, it has evolved into a comprehensive understanding of user behavior.</p>
<p>I love working across the full spectrum of product design, from research through to UI and implementation, and get a tonne of energy from working on seriously impactful work.</p>
</Grid.Col>

</Grid>
</Container>
</Card>

<Divider my="" />

<Space h="xl" />

<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>

<SubTitle SubTitle="CASE STUDIES"></SubTitle>

<Space h="xl" />

<Gcards />

</Container>
</Card>
<Divider my="" />

<Space h={{ base: "sm", lg: "xl" }}/>


<SubTitle SubTitle="TESTIMONIALS"></SubTitle>


<Space h="xl" />


<Testimonials initialSlide={0}  />

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>







</>

);};
  
  export default HomePage;