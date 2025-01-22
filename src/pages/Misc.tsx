import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, SimpleGrid, Button} from '@mantine/core';
import HeroMisc from '../components/HeroMisc';
import ImageFadeIn from '../inViewUI/FadeInImages';
import Next from '../components/Next';
import VidComp from '../components/Video';
import image1 from '../images/misc/nv1.jpg';
import image2 from '../images/misc/nv2.jpg';
import image3 from '../images/misc/fight.jpg';
import image4 from '../images/misc/ce.jpg';
import image5 from '../images/misc/acs.jpg';
import image6 from '../images/misc/free1.png';
import image7 from '../images/posterMob.jpg';



function Misc () {


return (

<>

<HeroMisc />

<Container size="1100px" mb= "md">

<div className='containerOver'></div>



<SimpleGrid
      cols={{ base: 1, sm: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >

      <div>
      <Title fw={500} order={2} c="grape">Cinema 4d</Title>
      <p>3D models with embedded animations.</p>
      <Space h="md" />
      <VidComp src="video/mob.mp4" />
      </div>


      <div>
      <Title fw={500} order={2} c="grape">After Effects</Title>
      <p>Animation using the puppet pin tool.</p>
      <Space h="md" />
      <VidComp src="video/dashAfter.mp4" />
       </div>
       
</SimpleGrid>




<Space h="xl" />

<Divider my="md" />

<Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="grape">Landing Pages</Title>
<p>Landing pages used for google adwords marketing.</p>
</FadeInSection>


<Space h="md" />

<ImageFadeIn src1={image3} src2={image4} />

<Space h="xl" />
<Divider my="md" />
<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="grape">Greensock GSAP Animations</Title>
<p>Virgin Media broadband speed, scroll trigger animations</p>
<Space h="md" />


<Button
 component="a"
 href="vm/index.html"
 target="_blank"
 size="xl" variant="light" color="grape"
 fullWidth>
View
</Button>

</FadeInSection>

<Space h="xl" />
<Divider my="md" />
<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="grape">Wordpress Theme for NueValue</Title>
<p>Designed the layout in figma then developed a wordpress theme with custom fields for content management.</p>
</FadeInSection>

<Space h="md" />

<ImageFadeIn src1={image1} src2={image2} />

<Space h="xl" />
<Divider my="md" />
<Space h="md" />


{/* <Title fw={500} order={2} c="grape">Premiere Pro</Title>
<p>A fun editing using stock videos synced to audio.</p>
<Space h="md" />
<VidComp src="video/xc.mp4" posterThumb={image9} />

<Space h="xl" />
<Divider my="md" />
<Space h="md" /> */}


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="grape">Photoshop and Illustrator</Title>
<p>Posters designed for Crystal Ski and ACS International Schools.</p>
<Space h="md" />
<ImageFadeIn src1={image6} src2={image5} />
</FadeInSection>

<Space h="xl" />
<Divider my="md" />
<Space h="md" />


<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="UI & Visual Design for a Brand Refresh" 
textNext="MyTraining: Wellbeing & Performance App"
linkPrevious="/crystalski" 
linkNext="/british-army"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default Misc;