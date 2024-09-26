import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid, List, ThemeIcon, rem } from '@mantine/core';
import HeroArmy from '../components/HeroArmy';
import FadeInBoxesFindings from '../inViewUI/FadeInBoxesArmyFindings';
import FadeInBoxesImpact from '../inViewUI/FadeInBoxesArmyImpact';
import RoleArmy from '../components/RoleArmy';
import ArmySlideTwo from '../components/ArmySlideTwo';
import ArmyRings from '../components/ArmyRings';
import { IconCircleCheck} from '@tabler/icons-react';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../inViewUI/images/site.png';
import FlipImage2 from '../images/colors.png';
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
<Title fw={500} order={2} c="green.1">Overview</Title>
<p>The British Army required a software application to monitor the physical and mental health of its trainees during courses. This application included a system that allowed trainers to score elements during the course and include proof in the form of notes and photographs, which would aid in the creation of final course reports.</p>
{/* <p>This would help to achieve sustainability goals by minimising paper usage.</p> */}

<Title fw={500} order={2} c="green.1">Challenge</Title>
<p>Trainers require a tool to help encourage performance and intervene early if trainees are facing difficulties, as trainees rarely speak out about physical or mental health issues.</p>


<Title fw={500} order={2} c="green.1">Solution</Title>
<p>Create a minimal viable product that streamlines the communication between trainers and trainees during courses, guaranteeing that both parties have the necessary resources to track outcomes.</p>


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
<Title fw={500} order={2} c="green.1">Observing Trainees and Trainers in Action</Title>
<p>On my first visit to the Army Headquarters, I was able to meet trainers and trainees, which was exciting. It provided me with an excellent opportunity to engage by asking questions and see firsthand how they work and live on a daily basis, which will aid in future design decisions.</p>
<p>Below are a few examples of findings and how they influenced decisions:</p>
{/* <p>The trainers were less enthusiastic about change and technology, and they scored and created course reports in lots of different formats. Showing how the application was going to make their lives easier would be a challenge, one I was looking forward to. </p> */}
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


<Space h="md" />

<Divider my="md" />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Defining the Gathered Insights</Title>

<p>I documented the findings which included user's goals, challenges, frustrations, and behavioral patterns.</p>

<p>Scenarios accompanied these stories, exploring specific contexts in which users might interact with the product. By defining these scenarios, we were able to anticipate diverse use cases and ensure that our design would cater to a broad range of user situations.</p>

<p>I then began mapping the product's content and functionality into a logical structure by creating user flows and sitemaps.</p>

</FadeInSection>

<Space h="md" />

<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0} padding = '0 0 50% 0' />

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Brainstorming the Design</Title>
<p>We began by brainstorming a wide range of ideas and solutions for the product's design. I then sketched these ideas into concepts and wireframed them to establish the product's layout and structure, and we continued in this manner to flesh out product features.</p>
<p>Then I made low-fidelity mockups  and interactive prototypes to get feedback, make changes, and also help engage stakeholders and maintain their enthusiasm.</p>
</FadeInSection>

<Space h="md" />


<Title fw={500} order={3} c="dimmed">Evidence Gathering</Title>
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 42% 0' />

<Space h="md" />

<Divider my="md" />

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1"> Structuring the Design Foundation</Title>

<p>In the background, I worked on a design system and created reusable user interface elements such as buttons, forms, and cards. to maintain consistency throughout the app. To establish the brand's identity, I used Army fonts and selected an earthy colour scheme.</p>
<p>By documenting these elements, I provided a single source of truth for the developers, ensuring that the product maintains a unified look and feel as it evolves.</p>

<p>With a robust design system evolving, we were able to accelerate the design process using high fidelty mockups and interactive prototypes.</p>

</FadeInSection>

<Title fw={200} order={2}>Text contrast AA compliant</Title>

<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 12% 0' />

<Space h="md" />

<Divider my="md" />

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="green.1">Testing Trainee Input Variations</Title>
<Space h="md" />



<List
      spacing="sm"
      size="md"
      icon={
        <ThemeIcon color="green" size={32} radius="md">
          <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
      lightHidden>

      <List.Item>Tool Used: Protopie.</List.Item>
      <List.Item>Test Duration: 1 week, split evenly across two different variations.</List.Item>
      <List.Item>Audience: 20 Trainees</List.Item>

</List>



<List
      spacing="sm"
      size="md"
      icon={
        <ThemeIcon color="#0f8122" size={32} radius="md">
          <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
      darkHidden>

      <List.Item>Tool Used: Protopie.</List.Item>
      <List.Item>Test Duration: 1 week, split evenly across two different variations.</List.Item>
      <List.Item>Audience: 20 Trainees</List.Item>

</List>








<Space h="md" />

<p>Trainers would never force trainees to use the application, but would nurture them to do so for their own benefit. We wanted to make sure that adding input was as optimal as possible and identify any issues with regular data input.</p>
<p>A survey at the end of the test clarified that the versions below scored best overall.</p>

<ArmyRings />

</FadeInSection>

<Space h="md" />

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

<p>The minimum viable product for MyTraining validated its need and exceeded expectations within the British Army. The Ministry of Defence rolled out trials for the Royal Navy and Royal Air Force.</p>
<p>The Agile approach allowed us to continuously engage with users, adapt to their feedback, and make rapid improvements, ensuring that the product is both functional and intuitive.</p>
<p>I did feel we should slow down in some cases because unforeseen problems occurred during development, most notably with external and internal databases, but I, as the designer, really enjoyed working at a rapid pace and seeing development and testing done quickly.</p>
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