import Gcards from '../inViewUI/Gcards';
import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import About from '../components/About';


const HomePage = () => {


return (

<>

<Hero />

<Container size="1100px" mt= "xl" mb= "xl">
<Divider my="md" />


<Space h="sm" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={3} c="dimmed">About</Title>
<Space h="md" />
<About/>
<Space h="md" />
</FadeInSection>
<Divider my="md" />

<Space h="md" />

<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />


<Gcards />

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<Title fw={500} order={2} c="dimmed">Testimonials</Title>
<Space h="md" />


<Testimonials initialSlide={0}  />

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>







</>

);};
  
  export default HomePage;