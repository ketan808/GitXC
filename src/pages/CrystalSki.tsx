import { Container, Space, Divider, Image, Paper, Grid } from '@mantine/core';
import HeroCrystal from '../components/HeroCrystal';
import imageSub from '../images/cs/cs_subheader.jpg';
import Next from '../components/Next';
import CSSLide from '../components/CSSlide';
import ContainerOne from '../components/ContainerOne';
import SubTitle from '../components/SubTitle';
import imageBackground from '../images/cs/cs.png';
import FadeInSection from '../inViewUI/FadeInSection';
function CrystalSki () {


return (

<>

<Paper shadow="xl" hiddenFrom="sm" >
<Image src={imageSub} alt="CrystalSKi Image" />
</Paper>



<HeroCrystal />


<Container size="xl" mb= "md">


<Paper shadow="xl" visibleFrom="sm" >
<Image src={imageSub} alt="CrystalSKi Image" />
</Paper>





{/* Background Start */}


<ContainerOne>
<Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>

<Grid.Col span={{ base: 12, md: 7, lg: 7, xl: 7 }} >


<SubTitle SubTitle="BACKGROUND"></SubTitle>

<p>Crystal Ski wanted to integrate a brand refresh that would work across online and offline marketing, also visually appealing interfaces on their websites and eCommerce platform with an engaging user experience that catered to diverse audiences while aligning with business objectives.</p>

<p>Other brands including Thomson would follow suit moving onto the new platform.</p>

<SubTitle SubTitle="Approach"></SubTitle>


<p>Working with a strong team of UX/UI designers we began by conducting extensive user research and usability testing to gather insights into user behavior, preferences, and pain points. This research informed our design decisions and ensured that our solutions were user-centered.</p>

<p>Based on these insights, I helped create detailed wireframes, interactive prototypes, and high-fidelity mockups to effectively communicate design concepts to stakeholders and development teams.</p>





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

 <ContainerOne>

 <SubTitle SubTitle="Implementation"></SubTitle>

 <p>We worked closely with developers to ensure that our designs were implemented accurately and efficiently. To maintain visual and functional consistency across all digital touchpoints, we developed comprehensive design systems and style guides.</p>

 <p>We also collaborated with cross-functional teams—including marketing, design, and data analytics—to ensure our design efforts aligned with broader business goals and delivered measurable results.</p>
<CSSLide />


</ContainerOne>
<Divider my="" />

<Space h="xl" />


{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="CONCLUSION"></SubTitle>

<p>The redesigned interfaces significantly improved user engagement, streamlined navigation, and contributed to increased conversions across the eCommerce platforms. The consistent, user-centered design approach not only enhanced the overall user experience but also strengthened the brand’s digital presence globally.</p>

</ContainerOne>
<Divider my="" />

{/* Conclusion End */}



<Space h="xl" />

<SubTitle SubTitle="CASE STUDIES"></SubTitle>
<Space h="md" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="Blog for Search Engine Optimised Articles" 
textNext="MyTraining: Wellbeing & Performance App"
linkPrevious="/virgin-media" 
linkNext="/british-army"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default CrystalSki;