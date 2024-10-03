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


<Container size="1100px" mb= "md">

<div className='containerOver'>

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Introduction</Title>
<p>The Intranet and Virtual Learning (VLE) software serves as a central platform for sharing important information, including news and updates. The platforms are used across all four schools by multiple user groups:</p>

<p><b>Parents, Teacher, Students, Staff</b></p>

<p>Tens of thousands of pages existed on the Intranet and Virtual Learning (VLE). Auditing the sites revealed multiple usability and accessibility issues, including contrasting interfaces and styles.</p>
<Space h="md" />
<Title fw={500} order={2} c="yellow.1">What I Did</Title>
<p>I led user research and redesign of the software, which included a full content management system with multiple page templates and learning modules.</p>

<p>The core business objective was evident from stakeholder workshops:</p>
<p><i>to minimise user complaints, notably from parents, and alleviate pressure on teachers, staff and head office.</i></p>

<p>As a result, my initial focus was to redesign the parents’ intranet pages for one school. I knew that once I got that right, it would be able to win trust throughout the organisation.</p>

<p>With buy-in to the parents intranet and the lessons learned, I aimed to work on other site areas and schools more effectively.</p>

<Space h="md" />

<Divider my="md" />
</FadeInSection>
</div>

<Space h="md" />
<FadeInSection duration = {0.25} delay = {0}>
<RoleACS />
</FadeInSection>
<Space h="md" />

{/* <Image style={{ display: 'block', margin: 'auto'}} h={640} w="auto" src={require('../images/army/trainer_home.png')} /> */}


 <Divider my="md" />

 <Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Identifying User Needs</Title>
<p>With the aim of understanding user needs and pain points, I conducted interviews with parents and conducted surveys. Below are some of the findings I discovered.</p>
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
      <FadeInBoxesFindings1 />
      </div>

      <div>
      <Space h="sm" />
      <Title fw={500} order={3} c="dimmed">Impact on Development</Title>
      <Space h="md" />
      <FadeInBoxesImpact1 />
      </div>
      
 </SimpleGrid>


<Space h="xl" />

<Divider my="md" />

<Space h="md" />



<Title fw={500} order={2} c="yellow.1">The Design Process</Title>

<p>I started by organising the gathered information and created wireframes to display the essential features and functionalities required by parents' section interface.</p>
<p>I gathered feedback from all stakeholders, iterated on the designs, and refined them until reaching a satisfactory compromise.</p>
<Space h="md" />

<ACSSlide />

<Space h="md" />

<Divider my="md" />

<Space h="md" />



<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="yellow.1">Refining the Design and Gaining Momentum</Title>
<p>Afterwards, I crafted high-fidelity prototypes to demonstrate a more precise portrayal of the parents’ section interface. This enabled stakeholders to understand its appearance and functionality, while also pinpointing any potential issues prior to diving into the software development phase.</p>
<p>I also created visuals for all of the other schools to help gain momentum and enthusiasm from stakeholders.</p>
</FadeInSection>

<Space h="md" />


<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="md" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="md" />
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="md" />
<FlipInView image={FlipImage4} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />

     
<Space h="md" />

<Divider my="md" />

<Space h="md" />


<Title fw={500} order={2} c="yellow.1">Development, Testing and Launching</Title>
<p>I collaborated with developers to implement the designs because I had experience with content management systems, and we continued testing with parents at every stage and kept stakeholders informed before a successful launch.</p>

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<Title fw={500} order={2} c="yellow.1">Conclusion</Title>
<p>My work received widespread acclaim amongst staff and parents for the transformation of the Intranet and VLEs user experience. The work was set apart from other historical development, and as a result I accepted a full-time role with ACS. </p>
<p>Working with project managers and the executive team, I continued my design efforts across the intranet, including head office, finance, sports, and school divisions. I emphasized keeping the user at the forefront of the overall experience.</p>
<Space h="md" />
<Divider my="md" />

<Space h="md" />


<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />

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



</Container>

</>

)

}



export default ACS;