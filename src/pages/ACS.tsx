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

<p>The Intranet and Virtual Learning platform served as a vital hub for parents, teachers, students, and staff across four schools, centralising communication, resources, and key update</p>
<p>Years of poor oversight had turned the system into a patchwork of clashing interfaces and inconsistent styles, creating a fragmented experience that made navigation frustrating and usability a daily challenge for its users.</p>


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
cols={{ base: 1, sm: 1, md: 1, lg: 2, xl: 2 }}
spacing="xl" 
>

<div>
<SubTitle SubTitle="SOLUTION"></SubTitle>
<p>Rebuilding the system was a massive undertaking, but I approached it the way I tackle any complex challenge by starting small, building a solid foundation, and scaling with purpose. </p>
<p>I chose to begin with the parents' area for a single school, knowing that delivering real value here could rebuild trust in a fragile organisation. Success in this high-impact area would create momentum and provide critical insights to guide the rollout across other schools and departments.</p>
<p>Collaborating closely with project managers and school leaders, I kept the user experience at the heart of every decision, ensuring that the solution wasn’t just functional, but meaningful to the people using it.</p>
</div>


<div>
<Image src={imageProb3} alt="Army Image"
height={600}
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

<p>I scheduled in-depth interviews with parents to uncover their pain points. Many of the issues were immediately clear just by reviewing the intranet, such as poor navigation, cluttered layouts, and outdated content. However, the real value came from speaking directly with users. These conversations helped identify the most pressing problems and allowed me to translate them into focused, actionable design tasks with the greatest potential for impact.</p>

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

<p>I began by organising the insights gathered from research and translated them into wireframes to define the core features and functionality needed for the parents' section. Each version of the design was shaped by feedback from key stakeholders, ensuring every voice was heard. Through continuous iteration and refinement, I arrived at a solution that struck the right balance between user needs, technical constraints, and organisational goals.</p>

<ACSSlide />

</ContainerOne>

<Divider my="" />

{/* Wireframes  End */}


<Space h="xl" />

 {/* Polished */}
 <ContainerOne>

<SubTitle SubTitle="Prototyping"></SubTitle>

<p>I created high-fidelity mockups to deliver a clear and accurate vision of the parents' area. This allowed stakeholders to fully understand its look and functionality, while also identifying potential issues early, before development began.</p>

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

<SubTitle SubTitle="Results"></SubTitle>


<ACSRings />

</ContainerOne>

<Divider my="" />

{/* Testing End */}



<Space h="xl" />

{/* Conclusion */}

<ContainerOne>
<SubTitle SubTitle="CONCLUSION"></SubTitle>


<p>My work was widely praised by both staff and parents for significantly transforming the user experience of the Intranet and Virtual Learning Environment. The design stood out from previous iterations, delivering clarity, consistency, and a far more intuitive interface. This recognition led to an offer for a full-time position with ACS, which I proudly accepted </p>
<p>In my new role, I continued collaborating closely with stakeholders to extend the design improvements across the entire intranet. I remained focused on user needs at every step, ensuring that each design decision enhanced usability, streamlined navigation, and supported the day-to-day tasks of the school community.</p>

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