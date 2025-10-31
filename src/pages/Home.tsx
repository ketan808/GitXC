import Gcards from '../inViewUI/Gcards';
import { Container, Space, Divider } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import SubTitle from '../components/SubTitle';
import ContainerOne from '../components/ContainerOne';


const HomePage = () => {


return (

<>

<Hero />


<Container size="xl" mb= "md">


<Divider my="" />

<Space h="xl" />

<ContainerOne>

<SubTitle SubTitle="SHOWCASE"></SubTitle>

<Space h="xl" />

<Gcards />

</ContainerOne>

<Divider my="" />

<Space h="xl" />


<Testimonials initialSlide={4}  />
<Divider my="" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>







</>

);};
  
  export default HomePage;