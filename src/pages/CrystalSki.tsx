import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Image, Divider} from '@mantine/core';
import FadeInBoxes from '../inViewUI/FadeInBoxesArmyFindings';
import RoleArmy from '../components/RoleArmy';
import HeroCrystal from '../components/HeroCrystal';


function CrystalSki () {


return (

<>

<HeroCrystal />



{/* <Hero Title1='BRITISH ARMY' Title2='MyTraining Performance and Wellbeing App' Title3='The British Army protects the United Kingdoms interests at home and abroad, providing a safe and secure environment.'/> */}

<Container size="1100px" mb= "xl">


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="blue.1">Overview</Title>
<p>The British Army sought a system to monitor its trainees' physical and mental health during courses and provide access to their data in a single application. They also wanted a mechanism for trainers to score elements during courses and include proof in the form of notes and photographs, which would aid in the creation of final reports and the achievement of sustainability goals by reducing paper usage.</p>
{/* <p>This would help to achieve sustainability goals by minimising paper usage.</p> */}

<Title fw={500} order={2} c="blue.1">Problem </Title>
<p>Trainers require a solution to help encourage performance and intervene early if trainees are facing difficulties, as trainees rarely speak out about physical or mental health issues.</p>


<Title fw={500} order={2} c="blue.1">Buisness Objective</Title>
<p>Create a minimal viable product that streamlines the communication between trainers and trainees during courses, guaranteeing that both parties have the necessary resources to track outcomes.</p>


<Title fw={500} order={2} c="blue.1">The Challenge</Title>
<p>Engage stakeholders and maintain their enthusiasm through discussions, rapid prototyping, and presentations ready for feedback and further iteration, with a focus on flexibility and collaboration.</p>


<Space h="xl" />

<Divider my="md" />
</FadeInSection>


<Space h="xl" />
<RoleArmy />



<Space h="xl" />

{/* <Image style={{ display: 'block', margin: 'auto'}} h={640} w="auto" src={require('../images/army/trainer_home.png')} /> */}


 <Divider my="md" />

 <Space h="xl" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2}>Research and Discovery</Title>
<p>I attended multiple meetings with stakeholders and user groups to grasp user needs and preferences also ask key questions. Below are some of the findings and patterns I discovered.</p>
</FadeInSection>

<Space h="md" />

<FadeInBoxes />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<p>I attended multiple meetings with stakeholders and user groups to grasp user needs and preferences also ask key questions. Below are some of the findings and patterns I discovered.</p>
</FadeInSection>

<Space h="xl" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2}>Getting Started</Title>
<p>I started putting together a design system which included a colour palette, typography scale and some base components also a sitemap using information gathered.</p>
</FadeInSection>

<Space h="xl" />


<FadeInSection duration = {0.25} delay = {0}>
<Image
      radius="md"
      src={require('../inViewUI/images/site.png')}
    />
</FadeInSection>

     
<Space h="xl" />


    <Space h="xl" />
    <Space h="xl" />
    <Space h="xl" />        








   

   

{/*     <FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0} />  */}


    </Container>

</>

)

}



export default CrystalSki;