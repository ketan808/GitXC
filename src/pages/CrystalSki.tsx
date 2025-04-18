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

<p>Crystal Ski aimed to roll out a brand refresh that seamlessly unified their online and offline marketing. The goal was to create visually striking interfaces across their websites and eCommerce platform, while delivering an engaging user experience that resonated with a wide range of audiences and supported key business goals.</p>

<p>The success of this initiative set the standard for other brands under the umbrella, including Thomson, who later transitioned to the newly developed platform.</p>

<SubTitle SubTitle="Approach"></SubTitle>


<p>Collaborating with a talented team of UX/UI designers, we kicked off the project with in-depth user research and hands-on usability testing. We dug deep into user behavior, uncovered key pain points, and identified what truly mattered to our audience. These insights shaped every design decision, ensuring our solutions were not only functional but genuinely user-focused from the ground up.</p>






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

 <p>We partnered closely with developers to bring our designs to life with precision and efficiency. To ensure visual and functional consistency across all digital touchpoints, we created robust design systems and detailed style guides that became the foundation for scalable, cohesive experiences.</p>

 <p>Collaboration extended beyond design and development. We worked hand-in-hand with marketing, data analytics, and other cross-functional teams to align our design strategy with business objectives, delivering user-centric solutions that not only looked great but drove measurable results.</p>
<CSSLide />


</ContainerOne>
<Divider my="" />

<Space h="xl" />


{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="CONCLUSION"></SubTitle>

<p>The redesigned interfaces led to a noticeable boost in user engagement, simplified navigation, and a clear rise in conversions across the eCommerce platforms. By embracing a consistent, user-centered design approach, we didn’t just improve the experience, we elevated the brand’s digital presence on a global scale, creating a more intuitive, trusted, and high-performing platform. The transformation positioned the business for long-term growth and set a new standard for future digital initiatives.


</p>

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