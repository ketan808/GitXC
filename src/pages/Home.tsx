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

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />

<Container size="1100px" mt= "xl" mb= "xl">


<Divider my="xl" />
<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={3} c="dimmed">About</Title>
<Space h="md" />
<About/>
<Space h="md" />
</FadeInSection>
<Divider my="md" />

<Space h="xl" />



<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="xl" />


<Gcards />

<Space h="xl" />

<Divider my="md" />

<Space h="xl" />

<Title fw={500} order={3} c="dimmed">Testimonials</Title>
<Space h="xl" />


<Testimonials/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>







</>

);};
  
  export default HomePage;