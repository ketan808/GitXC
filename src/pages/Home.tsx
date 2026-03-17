import Gcards from '../inViewUI/Gcards';
import { Container, Space, Divider } from '@mantine/core';
import Hero from '../components/Hero';
import Testimonials from '../components/TestimonialSlide';
import SubTitle from '../components/SubTitle';
import SubTitleH3Left from '../components/SubTitleH3Left';
import ContainerOne from '../components/ContainerOne';


const HomePage = () => {


return (

<>

<Hero />


<Container size="xl" mb= "md">


<Divider my="" />

<Space h="xl" />

<SubTitle SubTitle="AI Wellbeing Product Exploration"></SubTitle>
<Space h="md" />
<SubTitleH3Left SubTitleH3Left="Reimagining workplace wellbeing through AI, behavioural design and everyday habits."></SubTitleH3Left>

<p>This prototype explores how AI and behavioural nudges could help people build healthier habits at work. It combines wellbeing areas like balance, focus, movement, nutrition and financial health with workplace features such as recognition, shared stories and team engagement.</p>



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
  title="Health App Figma Prototype"
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
<Space h="xl" />

<Divider my="" />

<Space h="xl" />
<Space h="xl" />

<SubTitle SubTitle="Touch Control Interface for Crestron Panels"></SubTitle>
<Space h="md" />
<SubTitleH3Left SubTitleH3Left="A UI prototype designed for Crestron TS-1070 touch panels, focused on fast preset control."></SubTitleH3Left>

<p>A touch-optimised interface for the Crestron TS-1070 (10.1") designed for meeting rooms where users need quick control of lighting, audio and room presets. The layout prioritises large tap targets and clear feedback, with Quick Mode for fast preset selection and Advanced Mode for precise control using sliders, dials and toggles.</p>


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
  src="https://embed.figma.com/proto/Mg5gYVLmVBzyvlCEGA17Gh/Crestron?page-id=0%3A1&node-id=47-919&viewport=109%2C207%2C0.23&scaling=contain&content-scaling=fixed&embed-host=share"
  title="Touch Control Figma Prototype"
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
<Space h="xl" />
<Divider my="" />

<Space h="xl" />

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