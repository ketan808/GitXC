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

<p>The intranet and virtual learning environment served four international schools, connecting parents, students, teachers, and administrative staff across a shared digital platform.</p>
<p>Years without consistent design governance had left the system fragmented: clashing interfaces, inconsistent patterns, and a navigation structure that no longer reflected how people actually worked.</p>


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

<p><List.Item>No consistent design system across four schools, creating a fragmented and confusing experience for all user groups.</List.Item>
      <List.Item>Critical information, including calendars, news, payment systems, and staff directories, was buried and difficult to access.</List.Item>
      <List.Item>Parent dissatisfaction had escalated to school leadership, adding pressure on administrative staff to resolve issues manually.</List.Item>
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
<p>Rather than attempting a full platform overhaul at once, I proposed a phased approach, starting with the parents’ portal at one school. A contained scope allowed us to move quickly, test assumptions, and prove value before scaling across all four sites.</p>
<p>Beginning with the parents’ area was a deliberate strategic choice. It was the highest-pressure touchpoint, and success here would rebuild trust with the wider organisation and generate momentum for the rollout ahead.</p>
<p>Working alongside project managers and school leadership, I kept every decision grounded in user needs, not just technical convenience or organisational preference.</p>
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

<p>I ran structured interviews with parents to understand their mental models and map where the experience was breaking down. A basic audit had already surfaced obvious issues such as poor navigation, cluttered layouts, and outdated content, but direct conversations revealed the reasoning behind the frustration and helped me prioritise what would deliver the greatest impact.</p>

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

<p>Research insights fed directly into a wireframing phase, where I mapped the core structure of the parents' section and defined the key interactions. Designs were reviewed iteratively with stakeholders across school leadership and operations, ensuring alignment on priorities and constraints before moving into higher fidelity. Each round of feedback sharpened the solution, balancing user needs with technical feasibility and what the organisation could realistically support.</p>

<ACSSlide />

</ContainerOne>

<Divider my="" />

{/* Wireframes  End */}


<Space h="xl" />

 {/* Polished */}
 <ContainerOne>

<SubTitle SubTitle="Prototyping"></SubTitle>

<p>I produced high-fidelity prototypes for each school's parents' portal across all four sites. These weren't just visual sign-offs; they gave stakeholders a realistic view of real interactions, surfaced edge cases early, and significantly reduced the risk of costly changes once development was underway.</p>

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


<p>The redesign received strong recognition from both staff and parents, praised for bringing clarity, consistency, and a genuinely improved day-to-day experience to the platform. The work stood apart from previous attempts, and the outcome was direct: I was offered a full-time role at ACS, which I accepted.</p>
<p>In that role, I continued working with stakeholders to extend the design system across the wider intranet, scaling the approach from one school to all four and keeping user needs central as scope and complexity grew.</p>

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