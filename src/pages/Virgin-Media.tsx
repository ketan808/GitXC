import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, List, ThemeIcon, rem, Image, Grid, Paper, SimpleGrid} from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroVirgin from '../components/HeroVM';
import imageBackground from '../images/vm/vm_mob.jpg';
import imageSub from '../images/vm/vm_subheader.png';
import ImageFadeIn from '../inViewUI/FadeInImages';
import FlipInView from '../inViewUI/Flip';
import FlipImage1 from '../images/vm/vm_swim1.png';
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

<Paper shadow="xl" hiddenFrom="sm" >
<Image src={imageSub} alt="Virgin Image" />
</Paper>


<HeroVirgin />

<Container size="xl" mb= "md">

<Paper shadow="xl" visibleFrom="sm" >
<Image src={imageSub} alt="Virgin Image" />
</Paper>



{/* Background Start */}


<ContainerOne>
<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }} >


<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>Virgin Media set out to significantly increase its search engine visibility by producing a high volume of SEO-driven articles.</p>
<p>These articles were published on a newly designed blog, purpose-built to strategically integrate high-performing keywords and attract organic traffic. </p>
<p>The goal was clear: climb the search rankings, capture audience attention at scale, and convert that visibility into measurable product sales.</p>

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
      <List.Item>Sales have been steadily declining, driven in large part by a significant drop in search engine rankings for high-value keywords. This shift highlights an urgent need to re-evaluate and strengthen the SEO strategy to regain lost ground and restore organic growth.

</List.Item>
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

<p>Worked alongside a powerhouse team of copywriters, designers, editors, developers, and project managers to build a scalable blog framework designed for impact. Our goal was clear, craft a system capable of hosting hundreds of articles, strategically infused with high-value keywords to boost organic traffic, drive impressions, and elevate click-through rates. The result was a content engine built for performance and growth.

</p>


</ContainerOne>


{/* Solution End */}


<Space h="xl" />


{/* Components */}

<ContainerOne>

<SubTitle SubTitle="Components for the Blog Framework"></SubTitle>

<p>Working closely with another designer, I applied design thinking principles to identify which components from the design system would best support the goals of the article pages. We approached the challenge with a user-first mindset, developing two distinct design styles, one optimised for mobile responsiveness and the other tailored for desktop viewing. Both versions were delivered as detailed Sketch files, ensuring a smooth handoff to developers.</p>

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
      <List.Item>Copywriters would create SEO copy.</List.Item>
      <List.Item>Designers would use copy to design pages in Sketch and upload to Zeplin.</List.Item>
      <List.Item>Editors would get pages from Zeplin and develop them inside the CMS.</List.Item>
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


<p>Once the SEO team began tracking article performance, the results spoke for themselves—keyword rankings improved dramatically, and search visibility surged across key topics. These outcomes clearly demonstrated the success of our SEO strategy and highlighted the tangible impact of our collective efforts.</p>
<p>My contributions played a direct role in driving this momentum, helping to elevate the brand’s visibility while also delivering meaningful commercial results. The data not only validated the approach but reinforced the value of design and content working hand-in-hand to achieve strategic goals.</p>

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