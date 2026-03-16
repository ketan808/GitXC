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


<div
  style={{
    position: "relative",
    width: "100%",
    paddingTop: "80%",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.25)"
  }}
>
  <iframe
      src="https://embed.figma.com/proto/CBLJtxpp1faiaHEbGe4gYy/Health?page-id=128%3A292&node-id=128-293&viewport=92%2C1305%2C0.29&scaling=scale-down&content-scaling=fixed&embed-host=share"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: 0
    }}
    allowFullScreen
  />
</div>

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