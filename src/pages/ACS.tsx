import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid, Image, Grid} from '@mantine/core';
import HeroACS from '../components/HeroACS';
import imageSub from '../images/acs/acs_subheader.jpg';
import FadeInBoxesFindings1 from '../inViewUI/FadeInBoxesACSFindings';
import FadeInBoxesImpact1 from '../inViewUI/FadeInBoxesACSImpact';
import imageBackground from '../images/acs/doha_mob.png';
import ACSSlide from '../components/ACSSlide';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/acs/egham.png';
import FlipImage2 from '../images/acs/hillingdon.png';
import FlipImage3 from '../images/acs/egham.png';
import FlipImage4 from '../images/acs/doha.png';
import Next from '../components/Next';



function ACS () {


return (

<>

<HeroACS />




<Container size="xl" mb= "md">

<Image src={imageSub} alt="ACS Image" />


<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>
<Grid columns={12}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }}>
   
<Title className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">BACKGROUND</Title>

<p>The British Army has a vast number of diverse courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions or supplying humanitarian aid they are training to be the best soldiers they can be.</p>
<p>Course data collection and final, report generation use various applications, databases and methods. Systematising these processes into a single application would simplify the user experience.</p>
<p>Course attendees rarely speak up when having difficulties and this can be because of the expectation to push through or peer pressure, so a way to track their progress during courses would allow course trainers to know when to intervene.</p>
</Grid.Col>

<Grid.Col span={{ base: 12, md: 5, lg: 5, xl: 5 }}>
<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageBackground} alt="Army Image"
   mx="auto" 
   h={700}
   w="auto"
   fit="contain"
/>
</FadeInSection>
</Grid.Col>

</Grid>
</Container>

<Divider my="" />


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