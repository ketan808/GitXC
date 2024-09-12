import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider, List, ThemeIcon, rem} from '@mantine/core';
import { IconCircleCheck} from '@tabler/icons-react';
import HeroVirgin from '../components/HeroVirgin';
import RoleVirgin from '../components/RoleVirgin';
import VMImageFadeIn from '../inViewUI/FadeInImages';
import VMImageFadeIn2 from '../inViewUI/FadeInImages2';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/vm/vm_swim1.png';
import FlipImage2 from '../images/vm/music.jpg';
import FlipImage3 from '../images/vm/sport.jpg';
import Next from '../components/Next';



function VirginMedia () {


return (

<>

<HeroVirgin />



{/* <Hero Title1='BRITISH ARMY' Title2='MyTraining Performance and Wellbeing App' Title3='The British Army protects the United Kingdoms interests at home and abroad, providing a safe and secure environment.'/> */}

<Container size="1100px" mb= "xl">


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Overview</Title>
<p>Virgin Media aimed to improve its visibility on search engines by creating numerous search engine-optimised articles. They intended to publish these articles on a newly designed blog, strategically crafted to incorporate keywords.</p>

<Title fw={500} order={2} c="red.1">Problem </Title>
<p>Virgin Media was losing high ranking positions on search engines with relevant keywords, which are critical for gaining website exposure and making sales.</p>


<Title fw={500} order={2} c="red.1">Solution</Title>
<p>Design and develop a blog framework that facilitates the creation of article pages and improves search engine ranking.</p>


<Space h="xl" />

<Divider my="md" />
</FadeInSection>


<Space h="xl" />
<FadeInSection duration = {0.25} delay = {0}>
<RoleVirgin />
</FadeInSection>
<Space h="xl" />


 <Divider my="md" />

 <Space h="xl" />

<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Choosing Components for the Blog Framework</Title>
<p>I collaborated with another designer to start incorporating components from the design system that we believed would be most suitable for the article pages. We developed two distinct styles: one optimised for mobile devices and another for larger screens as Sketch files.</p>
<p>Engaging stakeholders in thorough discussions, we ultimately reached a satisfying compromise.</p>
</FadeInSection>

<Space h="md" />

 <VMImageFadeIn />

 <Space h="xl" />

 <Divider my="md" />

 <Space h="xl" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Development into the CMS and Testing</Title>
<p>We then provided the design specifications to the developers, who integrated the components into the content management system and oversaw the process to ensure alignment with the designs and address any technical constraints.</p>
<p>When ready, we tested the development with content editors to make sure they understood the process of adding and creating pages and to further receive feedback for changes. We created pages to conduct usability tests and determine how the blog would fit into the overall site structure.</p>
</FadeInSection>

<Space h="xl" />

<Divider my="md" />

<Space h="xl" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Article Creation Process</Title>
<p>We used a piece of software named Asana to manage the process. I worked as a designer and editor.</p>
</FadeInSection>

<Space h="md" />

<List
      spacing="sm"
      size="md"
      icon={
        <ThemeIcon color="red" size={32} radius="xl">
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
     
<Space h="xl" />

<Title fw={500} order={2} c="red.1">Article Creation Process</Title>

<Space h="xl" />

<VMImageFadeIn2 />

<Space h="xl" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 36% 0' />
<Space h="xl" />



<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 36% 0' />
<Space h="xl" />


<Divider my="md" />
     
<Space h="xl" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="red.1">Conclusion</Title>
<p>I collaborated with another designer to start incorporating components from the design system that we believed would be most suitable for the article pages. We developed two distinct styles: one optimised for mobile devices and another for larger screens as Sketch files.</p>
<p>Engaging stakeholders in thorough discussions, we ultimately reached a satisfying compromise.</p>
</FadeInSection>


<Space h="xl" />
<Divider my="md" />

<Space h="xl" />


<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="xl" />

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
<Space h="xl" />
<Space h="xl" />    

   

{/*     <FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0} />  */}


    </Container>

</>

)

}



export default VirginMedia;