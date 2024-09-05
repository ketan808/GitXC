import Gcards from '../inViewUI/Gcards';
// import ThreeCard from '../inViewUI/ThreeCard';
import { Container } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';



const HomePage = () => {


return (

<>

<Hero Title1='KETAN PATEL' Title2='Designs & Codes' Title3='User Interfaces'/>

     
{/* <Container size="1100px" mt= "xl" mb= "xl">
<ThreeCard />
</Container> */}


<Container size="1100px" mt= "xl" mb= "xl">
<Gcards />
</Container>


<Container size="1100px" mt= "xl" mb= "xl">
<Testimonials/>
</Container>







</>

);};
  
  export default HomePage;