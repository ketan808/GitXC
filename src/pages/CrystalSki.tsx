import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, Image, Grid} from '@mantine/core';
import HeroCrystal from '../components/HeroCrystal';
import imageSub from '../images/cs/cs_subheader.jpg';
import imageBackground from '../images/army/fitness_mob.png';
import Next from '../components/Next';
import CSSLide from '../components/CSSlide';


function CrystalSki () {


return (

<>

<Image src={imageSub} alt="Army Image" />

<HeroCrystal />


<Container size="xl" mb= "md">




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


<Space h="md" />


 <Divider my="md" />

 <Space h="md" />


<CSSLide />

<Space h="md" />
<Divider my="md" />

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="blue.1">Conclusion</Title>

<p>Shortly after the Thomson brand followed suit moving onto the new platform. This was a case of applying the Thomson branding to the templates, again working up the key screens as visuals and seeking sign off from key stakeholders.</p>
</FadeInSection>

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="Blog for Search Engine Optimised Articles" 
textNext="A Mix of Personal & Employed Projects"
linkPrevious="/virgin-media" 
linkNext="/misc"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default CrystalSki;