import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid } from '@mantine/core';
import HeroArmy from '../components/HeroArmy';
import FadeInBoxesFindings from '../inViewUI/FadeInBoxesArmyFindings';
import FadeInBoxesImpact from '../inViewUI/FadeInBoxesArmyImpact';
import RoleArmy from '../components/RoleArmy';
import ArmySlideTwo from '../components/ArmySlideTwo';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../inViewUI/images/site.png';
import FlipImage2 from '../images/army/theme.png';
import FlipImage3 from '../images/army/wire.png';
import ImageAnimation from '../inViewUI/ThreeCard';
import Next from '../components/Next';


function BritishArmy () {


return (

<>

<HeroArmy />


<Container size="1100px" mb= "md">

<div className='containerOver'>
  
<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Introduction</Title>
<p>MyTraining is a performance data collection and wellbeing application used by army trainers and trainees.</p>

<p>Trainers can effectively monitor trainees by viewing inputted data, allowing them to know when to encourage positive performance and wellbeing or intervene at an early stage if trainees are having difficulties physically, emotionally, or mentally.</p>

<p>During the project, my responsibilities involved researching features, creating a design system, prototyping, and refining user interaction.</p>

<p><i>completion reports are created by trainers in a digital format, which contributes to sustainability goals by reducing paper usage.</i></p>
<Space h="md" />

<Divider my="md" />
</FadeInSection>
</div>

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<RoleArmy />
</FadeInSection>


<Space h="md" />


<Divider my="md" />


 <Space h="md" />

 
<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Research and Discovery</Title>
<p>Extensive research, affirming the necessity for this product had already been conducted and I was invited to multiple meetings with stakeholders and user groups to grasp requirements thoroughly. Below are some of the edge cases I discovered.</p>
</FadeInSection>

<Space h="md" />


<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <Title fw={500} order={3} c="dimmed">Research Findings</Title>
      <Space h="md" />
      <FadeInBoxesFindings />
      </div>

      <div>
      <Space h="sm" />
      <Title fw={500} order={3} c="dimmed">Impact on Development</Title>
      <Space h="md" />
      <FadeInBoxesImpact />
      </div>
      
 </SimpleGrid>


<Space h="xl" />

<Divider my="md" />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Defining Gathered Insights</Title>

<p>After user needs information had been gathered, I continued to work with product managers to flesh out features ready for feedback and started putting together a design system which included a colour palette, typography scale and components.</p>

</FadeInSection>

<Space h="md" />

<Title fw={500} order={3} c="dimmed">Images and Notes Attachment Feature</Title>
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 42% 0' />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 95% 0' />

<Divider my="md" />

<Space h="md" />



<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1"> Capture Trainees Wellbeing</Title>

<p>I started the process by crafting user flows, detailing how trainees could navigate the interface and complete tasks.  I then translated these flows into low-fidelity wireframes.
Through iterative cycles, I refined these wireframes based on stakeholder and user group feedback. Following this, I advanced to high-fidelity layouts and interactive prototypes.
</p>
<p>With a design system evolving, I was able to accelerate the design process by creating high-fidelity mockups and interactive prototypes.</p>



</FadeInSection>

<Space h="md" />

<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0} padding = '0 0 50% 0' />

<Space h="xl" />
<Space h="xl" />
<Title fw={500} order={3} c="dimmed">A user test clarified that the versions below scored best overall.</Title>
<Space h="xl" />
<ImageAnimation/>

<Space h="md" />

<Divider my="md" />

<Space h="md" />



<Title fw={500} order={2} c="green.1">High Fidelity Application Visuals</Title>
<Space h="md" />

<ArmySlideTwo />

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Smooth Handover to Developers</Title>

<p>I ensured a smooth handover to developers with high-fidelity mockups, interactive prototypes, and access to the design system, while also providing ongoing support to ensure the correct design of features.</p>
<p>In certain instances, I developed React components to assist developers with their tasks, which software testers then approved.</p>
</FadeInSection>

<Space h="md" />
<Divider my="md" />
<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Conclusion</Title>

<p>The introduction of the MyTraining application has digitised and revolutionised how course data is managed within the British Army. The Ministry of Defence also rolled out trials for the Royal Navy and Royal Air Force.</p>
<p>The Agile approach allowed us to continuously engage with users, adapt to their feedback, and make rapid improvements, ensuring that the product is both functional and intuitive.</p>
<p>The user interface design and interactive prototypes that I developed received high praise from senior leadership.  The prototypes played a significant role in steering the MyTraining app towards success.</p>
</FadeInSection>

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />
<Next 
colsgrid={1}
colDisplay="none"
textPrevious="" 
textNext="Intranet & Virtual Learning Enviroment"
linkPrevious="" 
linkNext="/acs"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default BritishArmy;