import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Space, Divider, SimpleGrid, List, Image, Grid, Paper, ThemeIcon, rem} from '@mantine/core';
import { IconChevronsRight} from '@tabler/icons-react';
import HeroACS from '../components/HeroACS';
import imageSub from '../images/acs/acs_subheader1.jpg';
import SubTitle from '../components/SubTitle';
import SubTitleH3 from '../components/SubTitleH3';
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
import ACSRings from '../components/ACSRings';
import ContainerOne from '../components/ContainerOne';
import Testimonials from '../components/TestimonialSlide';




function ACS () {


return (

<>


<Paper shadow="xl" hiddenFrom="sm">
<Image src={imageSub} alt="ACS Image" />
</Paper>

<HeroACS />

<Container size="xl" mb= "md">

<Paper shadow="xl" visibleFrom="sm">
<Image src={imageSub} alt="ACS Image" />
</Paper>


{/* Background Start */}


<ContainerOne>
<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }} >


<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>The Intranet/Virtual Learning software is used across four schools by parents, teachers, students and staff and serves as a centralised platform for sharing important information, news, and updates within the organisation.</p>
<p>Inadequate management over time had created an unimaginable disorder featuring contrasting interfaces and styles, and this situation posed usability issues for the users.</p>


<SubTitle SubTitle="PROBLEM STATEMENTS"></SubTitle>


<List
      
      pl={{ base: "", sm: "", lg: "md", xl: "md" }}
      spacing="sm"
      icon={
        <ThemeIcon color="cyan" size={32} radius="" mr={{ base: "sm", sm: "sm", lg: "md", xl: "md" }}>
          <IconChevronsRight style={{ width: rem(18), height: rem(18) }} />
        </ThemeIcon>
      }
      
   >

<p><List.Item>Huge pressure on staff and stakeholders to make the intranet usable accross four schools.</List.Item>
      <List.Item>Stressful to find useful information such as calendars, latest news, payment systems, staff directories.</List.Item>
      <List.Item>Lots of complaints, notably from parents.</List.Item>
 </p>
</List>




</Grid.Col>

<Grid.Col span={{ base: 12, md: 5, lg: 5, xl: 5 }}>

<FadeInSection duration = {0.25} delay = {0}>
<Image src={imageBackground} alt="Army Image"
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

{/* Solution Start*/}
<ContainerOne>


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

</ContainerOne>

<Divider my="" />

{/* Solution End*/}


 <Space h="xl" />



 {/* Research */}
 <ContainerOne>

<SubTitle SubTitle="Research"></SubTitle>

<p>I scheduled interviews with parents, and here are some examples of my findings. It wasn't difficult to see what the issues were just by looking at the intranet, and there were so many, but the meetings were useful in narrowing down pressing problems and helping to create design tasks.</p>

<SimpleGrid
      cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
      spacing={{ base: 10, sm: 'md' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Research Findings"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesFindings1 />
      </div>

      <div>
      <Space h="sm" />
      <SubTitleH3 SubTitleH3="Impact on Development"></SubTitleH3>
      <Space h="md" />
      <FadeInBoxesImpact1 />
      </div>
      
 </SimpleGrid>

</ContainerOne>

<Divider my="" />

{/* Research  End */}



<Space h="xl" />


 {/* Wireframes */}
 <ContainerOne>

<SubTitle SubTitle="Design Process"></SubTitle>

<p>I started organising the gathered information and proceeded to create wireframes to identify the essential features and functionalities required for the parents' section interface. I collected feedback from all stakeholders, iterated on the designs, and refined them until reaching a satisfactory compromise.</p>

<ACSSlide />

</ContainerOne>

<Divider my="" />

{/* Wireframes  End */}


<Space h="xl" />

 {/* Polished */}
 <ContainerOne>

<SubTitle SubTitle="Prototyping"></SubTitle>

<p>Afterwards, I crafted high-fidelity mock-ups to offer a more precise portrayal of the parents area. This enabled everyone involved to grasp its appearance and functionality better, while also pinpointing any potential issues prior to diving into the software development phase.</p>

<SubTitleH3 SubTitleH3="Cobham"></SubTitleH3>
<Space h="sm" />
<FlipInView image={FlipImage1} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<SubTitleH3 SubTitleH3="Hillingdon"></SubTitleH3>
<Space h="sm" />
<FlipInView image={FlipImage2} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<SubTitleH3 SubTitleH3="Egham"></SubTitleH3>
<Space h="sm" />
<FlipInView image={FlipImage3} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />
<Space h="xl" />

<SubTitleH3 SubTitleH3="Doha"></SubTitleH3>
<Space h="sm" />
<FlipInView image={FlipImage4} duration = {0.25} ease ='easeInOut' rotate={25} delay={0.25} padding = '0 0 63% 0' />

</ContainerOne>

<Divider my="" />

{/* Polished End */}

<Space h="xl" />

{/* Testing */}
<ContainerOne>

<SubTitle SubTitle="TESTING"></SubTitle>


<ACSRings />

</ContainerOne>

<Divider my="" />

{/* Testing End */}



<Space h="xl" />

{/* Conclusion */}

<ContainerOne>
<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>My work received widespread acclaim amongst staff and parents for the transformation of the Intranet and VLEs user experience. The work was set apart from other historical development, and as a result I accepted a full-time role with ACS. </p>
<p>Working with stakeholders, I continued my design efforts across the intranet and prioritised keeping the user at the forefront of the overall experience.</p>

</ContainerOne>

<Divider my="" />

{/* Conclusion End */}

<Space h="xl" />

<Testimonials initialSlide={1}  />


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