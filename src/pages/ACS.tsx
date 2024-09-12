import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid} from '@mantine/core';
import HeroACS from '../components/HeroACS';
import RoleACS from '../components/RoleACS';
import FadeInBoxesFindings1 from '../inViewUI/FadeInBoxesACSFindings';
import FadeInBoxesImpact1 from '../inViewUI/FadeInBoxesACSImpact';
import ACSSlide from '../components/ACSSlide';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/acs/cobham.png';
import FlipImage2 from '../images/acs/hillingdon.png';
import FlipImage3 from '../images/acs/egham.png';
import FlipImage4 from '../images/acs/doha.png';
import Next from '../components/Next';



function ACS () {


return (

<>

<HeroACS />



{/* <Hero Title1='BRITISH ARMY' Title2='MyTraining Performance and Wellbeing App' Title3='The British Army protects the United Kingdoms interests at home and abroad, providing a safe and secure environment.'/> */}

<Container size="1100px" mb= "xl">


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Overview</Title>
<p>Parents, teachers, students, and staff use the Intranet/Virtual Learning software across four schools as a centralised platform for sharing important information, news, and updates within the organisation.</p>
{/* <p>This would help to achieve sustainability goals by minimising paper usage.</p> */}

<Title fw={500} order={2} c="yellow.1">Problem </Title>
<p>Over time, inadequate management led to the creation of thousands of pages with contrasting interfaces and styles. This situation posed usability issues for users and created pressure on staff due to complaints from parents.</p>


<Title fw={500} order={2} c="yellow.1">Solution</Title>
<p>Redesign the user interface and architecture information throughout the entire application for four schools and the head office, while also adding additional necessary product features for all user groups.</p>


{/* <Title fw={500} order={2} c="yellow.1">The Challenge</Title>
<p>Engage stakeholders and maintain their enthusiasm through discussions, rapid prototyping, and presentations ready for feedback and further iteration, with a focus on flexibility and collaboration.</p>
 */}

<Space h="xl" />

<Divider my="md" />
</FadeInSection>


<Space h="xl" />
<FadeInSection duration = {0.25} delay = {0}>
<RoleACS />
</FadeInSection>
<Space h="xl" />

{/* <Image style={{ display: 'block', margin: 'auto'}} h={640} w="auto" src={require('../images/army/trainer_home.png')} /> */}


 <Divider my="md" />

 <Space h="xl" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Identifying the Problems from Parents</Title>
<p>Due to the enormity of the project, my wish to minimise overload, and my idea that excelling in one area would promote trust throughout the organisation, I started with the parents section for a single school. With lessons learned, I would more effectively move on to other sections and schools.</p>
<p>With the assistance of a project manager, we conducted parent interviews. Here are some examples of patterns in our findings and how we used the information to influence decisions:</p>
</FadeInSection>

<Space h="md" />

<SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>
      <Title fw={500} order={3} c="dimmed">Research Findings</Title>
      <Space h="md" />
      <FadeInBoxesFindings1 />
      </div>

      <div>
      <Title fw={500} order={3} c="dimmed">Impact on Development</Title>
      <Space h="md" />
      <FadeInBoxesImpact1 />
      </div>
      
 </SimpleGrid>


<Space h="xl" />

<Divider my="md" />

<Space h="xl" />



<Title fw={500} order={2} c="yellow.1">Framing and Testing Findings</Title>

<p>I started designing our findings into user flows, low-fidelity wireframes and mockups , subsequently sharing them with all stakeholders to facilitate further changes and identify more features.</p>
<p>We discussed and agreed on the frequency of updates and training arrangements for the proposed newsletter system with teachers and editors from all divisions.</p>
<Space h="md" />

<ACSSlide />

<Space h="xl" />

<Divider my="md" />

<Space h="xl" />



<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Refining the Design and Gaining Momentum</Title>
<p>As the design process progressed, I created high-fidelity mockups and interactive prototypes, and with testing, we gathered more feedback and made changes until everyone was happy, but my focus was always on the parents.</p>
<p>At this point, I had also created visuals for all of the other schools to help gain momentum and enthusiasm from stakeholders.</p>
</FadeInSection>

<Space h="xl" />


<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />
<FlipInView image={FlipImage4} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />

     
<Space h="xl" />

<Divider my="md" />

<Space h="xl" />


<Title fw={500} order={2} c="yellow.1">Development, Testing and Launching</Title>
<p>I collaborated with developers to implement the designs because I had experience with content management systems, and we continued testing with parents at every stage and kept stakeholders informed before a successful launch.</p>

<Space h="xl" />

<Divider my="md" />

<Space h="xl" />

<Title fw={500} order={2} c="yellow.1">Conclusion</Title>
<p>Transformation of the Intranet/Virtual Learning Environment user experience received a lot of praise across the organisation, setting it apart from previous unsuccessful attempts and, I accepted a full-time role as I was contracted.</p>
<p>I continued my efforts across sectors such as head office, health, finance, sports, and schools divisions and prioritised keeping users at the forefront of the overall experience.</p>
<p>When I first arrived, there were a variety of opinions, and maintaining a focus on the scale of the project was vital. I also played a crucial role in fostering a strong relationship between the head office and the teachers around the project. By effectively implementing the gathered requirements, we created a new atmosphere in which I thrived.</p>
<Space h="xl" />
<Divider my="md" />

<Space h="xl" />


<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="xl" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="MyTraining: Wellbeing & Performance App" 
textNext="Blog for Search Engine Optimised Articles"
linkPrevious="/british-army" 
linkNext="/virgin-media"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />
<Space h="xl" />    



</Container>

</>

)

}



export default ACS;