import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, List, ThemeIcon, rem, Image, Grid, Paper, SimpleGrid} from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroVirgin from '../components/HeroVM';
import imageBackground from '../images/vm/vm_mob.jpg';
import imageSub from '../images/vm/vm_subheader.png';
import ImageFadeIn from '../inViewUI/FadeInImages';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/vm/vm_swim1.png';
import FlipImage2 from '../images/vm/hub.jpg';
import FlipImage3 from '../images/vm/sport.jpg';
import Next from '../components/Next';
import SubTitle from '../components/SubTitle';
import ContainerOne from '../components/ContainerOne';
import image1 from '../images/vm/components_mob.png';
import image2 from '../images/vm/components_desk.png';
import image3 from '../images/vm/blog1.jpg';
import image4 from '../images/vm/blog2.jpg';



function VirginMedia () {


return (

<>



<HeroVirgin />

<Container size="xl" mb= "md">

<Paper shadow="xl">
<Image src={imageSub} alt="Virgin Image" />
</Paper>



{/* Background Start */}


<ContainerOne>
<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }} >


<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>Virgin Media aimed to enhance its visibility on search engines through the development of numerous search engine-optimised articles.</p>
<p>These articles were intended for publication on a newly designed blog, strategically crafted to incorporate relevant keywords.</p>
<p>This approach was designed to not only boost the content's search ranking but also generate a substantial search volume, ultimately driving sales for their products.</p>

<SubTitle SubTitle="PROBLEM STATEMENT"></SubTitle>


<List
      
      pl={{ base: "", sm: "", lg: "md", xl: "md" }}
      spacing="sm"
      icon={
        <ThemeIcon color="cyan" size={32} radius="" mr={{ base: "sm", sm: "sm", lg: "md", xl: "md" }}>
          <IconChevronsRight style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
   >

<p>
      <List.Item>Sales are declining as a result of losing rankings on important keywords.</List.Item>
      </p>
</List>


</Grid.Col>

<Grid.Col span={{ base: 12, md: 5, lg: 5, xl: 5 }}>

<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageBackground} alt="Blog Image"
   h={{ base: 500, md: 700, lg: 700, xl: 700 }}
   fit="contain"
/>
</FadeInSection>


</Grid.Col>

</Grid>
</ContainerOne>

<Divider my="" />

{/* Background End*/}


<Space h="xl" />


{/* Solution */}


<ContainerOne>

<SubTitle SubTitle="Solution"></SubTitle>

<p>Collaborate with a strong team of copywriters, designers, editors, developers, and project managers to create a blog framework for hundreds of articles that would incorporate high-level keywords and increase organic traffic, impressions and click rate.</p>


</ContainerOne>


{/* Solution End */}


<Space h="xl" />


{/* Components */}

<ContainerOne>

<SubTitle SubTitle="Components for the Blog Framework"></SubTitle>

<p>I collaborated with another designer to start incorporating components from the design system that we believed would be most suitable for the article pages. We developed two distinct styles: one optimised for mobile devices and another for larger screens as Sketch files.</p>
<p>Engaging stakeholders in thorough discussions, we ultimately reached a satisfying compromise.</p>

<ImageFadeIn src1={image1} src2={image2} />

</ContainerOne>
<Divider my="" />

{/* Components End */}

<Space h="xl" />

{/* Article */}

<ContainerOne>

<SubTitle SubTitle="Article Creation Process"></SubTitle>

<p>We used a piece of software named Asana to manage the process. I worked as a designer and editor.</p>


<List
      
      pl={{ base: "", sm: "", lg: "md", xl: "md" }}
      spacing="sm"
      icon={
        <ThemeIcon color="cyan" size={32} radius="" mr={{ base: "sm", sm: "sm", lg: "md", xl: "md" }}>
          <IconChevronsRight style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
   >
<p>
      <List.Item>Copywriters would create SEO copy</List.Item>
      <List.Item>Designers would use copy to design pages in Sketch and upload to Zeplin</List.Item>
      <List.Item>Editors would get pages from Zeplin and develop them inside the CMS</List.Item>
      <List.Item>Product managers would check and sign off throughout the process.</List.Item>
      </p>
</List>


<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 32% 0' />

</ContainerOne>
<Divider my="" />


{/* Article End */}

<Space h="xl" />


{/* Visuals */}

<ContainerOne>
     

<SubTitle SubTitle="Article Visuals"></SubTitle>

<Space h="xl" />

<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 3, xl: 2 }}
spacing={{ base: 'md', sm: 'md', md: 'xl', lg: 'xl', xl: 'xl' }}
>

<Image src={image3} alt="VM Image" />


<Image src={image4} alt="VM Image" />


</SimpleGrid>

<Space h="xl" />

<Image src={FlipImage3} alt="VM Image" />


</ContainerOne>
<Divider my="" />


<Space h="xl" />


{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>After the SEO team initiated the measurement of article search metrics, the results were overwhelmingly positive. Significant improvements in keyword rankings coincided with a surge in product sales.</p>
<p>The successes underscored the effectiveness of the search engine optimisation strategies, validating the significance of everyone's efforts, including my role in enhancing both visibility and commercial outcomes.</p>

</ContainerOne>
<Divider my="" />

<Space h="xl" />


{/* Conclusion End */}
<SubTitle SubTitle="CASE STUDIES"></SubTitle>
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