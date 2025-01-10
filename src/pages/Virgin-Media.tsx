import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, List, ThemeIcon, rem, Image, Grid, Card} from '@mantine/core';
import { IconCircleCheck} from '@tabler/icons-react';
import HeroVirgin from '../components/HeroVM';
import imageBackground from '../images/vm/vm_mob.jpg';
import imageSub from '../images/vm/vm_subheader.png';
import ImageFadeIn from '../inViewUI/FadeInImages';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/vm/vm_swim1.png';
import FlipImage2 from '../images/vm/music.jpg';
import FlipImage3 from '../images/vm/sport.jpg';
import Next from '../components/Next';
import SubTitle from '../components/SubTitle';

import image1 from '../images/vm/components_mob.png';
import image2 from '../images/vm/components_desk.png';

import image3 from '../images/vm/blog1.jpg';
import image4 from '../images/vm/blog2.jpg';



function VirginMedia () {


return (

<>

<HeroVirgin />

<Container size="xl" mb= "md">

<Image src={imageSub} alt="Virgin Image" />



{/* Background Start */}
<Card shadow="xl" padding="" radius="">
<Container
size="xl"
className='theme90'
p={{ base: '20px', sm: '40px', md: '40px', lg: '40px' }}
pt={{ base: '20px', sm: '40px', md: '50px', lg: '60px' }}
>
<Grid columns={12}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }}>
   
<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>The British Army has a vast number of diverse courses ranging from combat and tactical skills to medical training, if there not on peacekeeping missions they are training to be the best soldiers they can be.</p>
<p>MyTraining is an application for collecting course performance data and tracking well-being. Trainers can effectively monitor trainees by viewing their inputted data, adding scores, and creating final reports.</p>

<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>



<List size="xl" withPadding>
      <p><List.Item>30% of trainees leave during basic training, but that figure can fluctuate from year to year.</List.Item>
      <List.Item>Course data is spread across multiple applications and sources, posing a challenge to use effectively.</List.Item>
      <List.Item>The process of collecting course data and creating final reports consumes an excessive amount of paper.</List.Item>
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

{/* Background End*/}


<Space h="md" />


 <Divider my="md" />

 <Space h="md" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Choosing Components for the Blog Framework</Title>
<p>I collaborated with another designer to start incorporating components from the design system that we believed would be most suitable for the article pages. We developed two distinct styles: one optimised for mobile devices and another for larger screens as Sketch files.</p>
<p>Engaging stakeholders in thorough discussions, we ultimately reached a satisfying compromise.</p>
</FadeInSection>

<Space h="md" />

<ImageFadeIn src1={image1} src2={image2} />

 <Space h="md" />

 <Divider my="md" />

 <Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Development into the CMS and Testing</Title>
<p>We then provided the design specifications to the developers, who integrated the components into the content management system and oversaw the process to ensure alignment with the designs and address any technical constraints.</p>
<p>When ready, we tested the development with content editors to make sure they understood the process of adding and creating pages and to further receive feedback for changes. We created pages to conduct usability tests and determine how the blog would fit into the overall site structure.</p>
</FadeInSection>

<Space h="md" />

<Divider my="md" />

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Article Creation Process</Title>
<p>We used a piece of software named Asana to manage the process. I worked as a designer and editor.</p>
</FadeInSection>

<Space h="md" />

<List
      spacing="sm"
      size="md"
      icon={
        <ThemeIcon color="red" size={32} radius="md">
          <IconCircleCheck style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
   >

      <List.Item>Copywriters would create SEO copy</List.Item>
      <List.Item>Designers would use copy to design pages in Sketch and upload to Zeplin</List.Item>
      <List.Item>Editors would get pages from Zeplin and develop them inside the CMS</List.Item>
      <List.Item>Product managers would check and sign off throughout the process.</List.Item>

</List>


<Space h="md" />



<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 32% 0' />


<Divider my="md" />
     
<Space h="md" />

<Title fw={500} order={2} c="red.1">Article Visuals</Title>

<Space h="md" />

<ImageFadeIn src1={image3} src2={image4} />

<Space h="md" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 36% 0' />
<Space h="md" />



<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 36% 0' />
<Space h="md" />


<Divider my="md" />
     
<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Conclusion</Title>
<p>After the SEO team initiated the measurement of article search metrics, the results were overwhelmingly positive. Significant improvements in keyword rankings coincided with a surge in product sales.</p>
<p>The successes underscored the effectiveness of the search engine optimisation strategies, validating the significance of everyone's efforts, including my role in enhancing both visibility and commercial outcomes.</p>
</FadeInSection>


<Space h="md" />
<Divider my="md" />

<Space h="md" />


<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="Intranet & Virtual Learning Enviroment" 
textNext="UI & Visual Design for a Brand Refresh"
linkPrevious="/acs" 
linkNext="/crystalski"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default VirginMedia;