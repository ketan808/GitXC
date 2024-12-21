import Gcards from '../inViewUI/Gcards';
import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, Grid, Image, Box } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import SubTitle from '../components/SubTitle';


const HomePage = () => {


return (

<>

<Hero />

<Container size="xl" mb= "md">


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
    <Image style={{ backgroundColor:'white', border:'5px solid white', display: 'block', margin: 'auto', borderRadius: '5%'}}  src={require('../images/ketan.png')} /></Box >

    <Box darkHidden mt='5px' mb='5px'>
    <Image style={{ backgroundColor:'white', border:'5px solid #e4e7ec', display: 'block', margin: 'auto', borderRadius: '5%'}} src={require('../images/ketan.png')} /></Box >
   


</FadeInSection>
</Grid.Col>


<Grid.Col span={{ base: 12, md: 9, lg: 9, xl: 9 }}>
   
<SubTitle SubTitle="About"></SubTitle>

<p>The British Army has a vast number of diverse courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions or supplying humanitarian aid they are training to be the best soldiers they can be.</p>
<p>Course data collection and final, report generation use various applications, databases and methods. Systematising these processes into a single application would simplify the user experience.</p>
</Grid.Col>

</Grid>

</Container>
<Divider my="" />


<Space h="md" />

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