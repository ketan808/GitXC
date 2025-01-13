import { Container, Space, Divider, Image, Paper} from '@mantine/core';
import HeroCrystal from '../components/HeroCrystal';
import imageSub from '../images/cs/cs_subheader.jpg';
import Next from '../components/Next';
import CSSLide from '../components/CSSlide';
import ContainerOne from '../components/ContainerOne';
import SubTitle from '../components/SubTitle';
function CrystalSki () {


return (

<>

<Paper shadow="xl" hiddenFrom="sm" >
<Image src={imageSub} alt="Army Image" />
</Paper>



<HeroCrystal />


<Container size="xl" mb= "md">


<Paper shadow="xl" visibleFrom="sm" >
<Image src={imageSub} alt="Army Image" />
</Paper>



<ContainerOne>

<SubTitle SubTitle="Background"></SubTitle>

<p>Crystal Ski was one of the brands I worked on for the TUI group. </p>


<p>I worked across front end, UI design and marketing campaign design for the eCommerce website, social media, digital display and email campaigns.</p>
<p>I also collaborated with UX designers to design A/B variations of promotions, checkout system components and transactional user journeys ready for A/B performance testing. </p>

</ContainerOne>
<Divider my="" />

 <Space h="xl" />

 <ContainerOne>

 <SubTitle SubTitle="Brand Refresh"></SubTitle>

 <p>Crystal Ski wanted to integrate a brand refresh that would work across online and offline marketing. The result was a design framework that served the platform for many years.</p>

 <p>Collbarating with a team of designers we worked up the UX into a suite of visual designs to be handed over to the development team.</p>
<CSSLide />


</ContainerOne>
<Divider my="" />

<Space h="xl" />


{/* Conclusion */}

<ContainerOne>

<SubTitle SubTitle="CONCLUSION"></SubTitle>

<p>Shortly after the Thomson brand followed suit moving onto the new platform. This was a case of applying the Thomson branding to the templates, again working up the key screens as visuals and seeking sign off from key stakeholders.</p>

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