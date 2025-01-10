import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid, List, Image, Grid, Card, Text} from '@mantine/core';
import HeroACS from '../components/HeroACS';
import imageSub from '../images/acs/acs_subheader.jpg';
import SubTitle from '../components/SubTitle';
import imageProb3 from '../images/acs/basket.jpg';
import FadeInBoxesFindings1 from '../inViewUI/FadeInBoxesACSFindings';
import FadeInBoxesImpact1 from '../inViewUI/FadeInBoxesACSImpact';
import imageBackground from '../images/acs/doha_mob.png';
import ACSSlide from '../components/ACSSlide';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/acs/cobham.png';
import FlipImage2 from '../images/acs/hillingdon.png';
import FlipImage3 from '../images/acs/egham.png';
import FlipImage4 from '../images/acs/doha.png';
import Next from '../components/Next';
import ArmyRings from '../components/ArmyRings';



function ACS () {


return (

<>

<HeroACS />

<Container size="xl" mb= "md">

  {/* Background Start */}
<Card shadow="xl" padding="" radius="">
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

<p>The Intranet/Virtual Learning software is used across four schools by parents, teachers, students and staff and serves as a centralised platform for sharing important information, news, and updates within the organisation.</p>
<p>Inadequate management over time had created an unimaginable disorder featuring contrasting interfaces and styles, and this situation posed usability issues for the users.</p>

<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>



<List size="xl" withPadding>
      <p><List.Item>Huge pressure on staff and stakeholders to make the intranet usable accross four schools.</List.Item>
      <List.Item>Stressful to find useful information such as calendars, latest news, payment systems, staff directories.</List.Item>
      <List.Item>Lots of complaints, notably from parents.</List.Item>
      </p>
</List>
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
</Card>
<Divider my="" />
{/* Background End */}

<Space h="xl" />

{/* Solution Start*/}
<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>


<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 2 }}
spacing="xl" 
>

<div>
<SubTitle SubTitle="SOLUTION"></SubTitle>
<p>The rebuild would be a huge project, but like any problem, start small, build a foundation and work your way up.</p>
<p>Work with project managers and school leaders, keeping the user at the forefront of the overall experience.</p>
<p>I decided to start with the parents area for just one school, because once I got that right, this would win trust throughout the organisation, which was fragile, and, with the lessons learnt, I could move to other areas and schools more effectively.</p>

</div>


<div>
<Image src={imageProb3} alt="Army Image"
height={500}
/>
</div>

</SimpleGrid>

<Space h="md" />

</Container>
</Card>
<Divider my="" />

{/* Solution End*/}


 <Space h="xl" />



 {/* Research */}
<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="Research"></SubTitle>

<p>I scheduled interviews with parents, and here are some examples of my findings. It wasn't difficult to see what the issues were just by looking at the intranet, and there were so many, but the meetings were useful in narrowing down pressing problems and helping to create design tasks.</p>

<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <Title tt="uppercase" fw={500} order={3} c="">Research Findings</Title>
      <Space h="md" />
      <FadeInBoxesFindings1 />
      </div>

      <div>
      <Space h="sm" />
      <Title tt="uppercase" fw={500} order={3} c="">Impact on Development</Title>
      <Space h="md" />
      <FadeInBoxesImpact1 />
      </div>
      
 </SimpleGrid>

</Container>
</Card>
<Divider my="" />

{/* Research  End */}



<Space h="xl" />


 {/* Wireframes */}
 <Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="Design Process"></SubTitle>

<p>I started organising the gathered information and proceeded to create wireframes to identify the essential features and functionalities required for the parents' section interface. I collected feedback from all stakeholders, iterated on the designs, and refined them until reaching a satisfactory compromise.</p>

<ACSSlide />

</Container>
</Card>
<Divider my="" />

{/* Wireframes  End */}


<Space h="xl" />

 {/* Polished */}
 <Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '100px' }}
>

<SubTitle SubTitle="Prototyping"></SubTitle>

<p>Afterwards, I crafted high-fidelity mock-ups to offer a more precise portrayal of the parents area. This enabled everyone involved to grasp its appearance and functionality better, while also pinpointing any potential issues prior to diving into the software development phase.</p>

<Title order={3} fw={500} ta="center" tt="uppercase">Cobham</Title>
<Space h="sm" />
<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<Title order={3} fw={500} ta="center" tt="uppercase">Hillingdon</Title>
<Space h="sm" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<Title order={3} fw={500} ta="center" tt="uppercase">Egham</Title>
<Space h="sm" />
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<Title order={3} fw={500} ta="center" tt="uppercase">Doha</Title>
<Space h="sm" />
<FlipInView image={FlipImage4} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />

</Container>
</Card>
<Divider my="" />

{/* Polished End */}

<Space h="xl" />

{/* Testing */}
<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="TESTING"></SubTitle>


<ArmyRings />

</Container>
</Card>
<Divider my="" />

{/* Testing End */}



<Space h="xl" />

{/* Conclusion */}

<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
pb={{ base: '20px', sm: '40px', md: '50px', lg: '40px' }}
>

<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>The introduction of the MyTraining application has digitised and revolutionised how course data is managed within the British Army. The Ministry of Defence also rolled out trials for the Royal Navy and Royal Air Force.</p>
<p>The Agile approach allowed us to continuously engage with users, adapt to their feedback, and make rapid improvements, ensuring that the product is both functional and intuitive.</p>

</Container>
</Card>
<Divider my="" />

{/* Conclusion End */}

<Space h="xl" />

{/* Testimonial*/}

<Card shadow="xl" padding="xl" radius=""  className='theme90'>

<Image style={{ display: 'block', margin: 'auto'}}

radius="md"
h={100}
ta="center"
w="100"
fit="contain"
src={require('../images/stven1.jpeg')}
/>
<Space h="md" />
<Title order={3} fw={500} ta="center" tt="uppercase">Steven Cliff</Title>
<Space h="md" />
<Title order={4} fw={500} ta="center">  Head of IT - ACS International Schools Ltd</Title>



<Text size="xl" mt="sm" c="dimmed" ta="center">
Ketan initially joined us in a contract role but quickly became a permanent member of the team. He was instrumental in refreshing our Intranet and Website. He developed strong relationships with key stakeholders and was always willing to go the extra mile.
</Text>
</Card>
<Divider my="" />

{/* Testimonial End*/}




<Space h="xl" />


<SubTitle SubTitle="CASE STUDIES"></SubTitle>
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