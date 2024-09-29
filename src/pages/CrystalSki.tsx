import FadeInSection from '../inViewUI/FadeInSection';
import { Container, Title, Space, Divider} from '@mantine/core';
import HeroCrystal from '../components/HeroCrystal';
import Next from '../components/Next';
import RoleCrystal from '../components/RoleCrystal';
import CSSLide from '../components/CSSlide';


function CrystalSki () {


return (

<>

<HeroCrystal />


<Container size="1100px" mb= "md">

<div className='containerOver'>
<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="blue.1">Overview</Title>
<p>Crystal Ski wanted to integrate a brand refresh that would work across online and offline marketing. The result was a design framework that served the platform for many years.</p>

<Title fw={500} order={2} c="blue.1">Solution</Title>
<p>Work up the UX into a suite of visual designs to be handed over to the development team.</p>



<Space h="md" />

<Divider my="md" />
</FadeInSection>
</div>

<Space h="md" />
<RoleCrystal />


<Space h="md" />


 <Divider my="md" />

 <Space h="md" />


<CSSLide />

<Space h="md" />
<Divider my="md" />

<Space h="md" />


<FadeInSection duration = {0.25} delay = {0}>
<Title fw={500} order={2} c="blue.1">Conclusion</Title>

<p>Shortly after the Thomson brand followed suit moving onto the new platform. This was a case of applying the Thomson branding to the templates, again working up the key screens as visuals and seeking sign off from key stakeholders.</p>
</FadeInSection>

<Space h="md" />

<Divider my="md" />

<Space h="md" />

<Title fw={500} order={3} c="dimmed">Case Studies</Title>
<Space h="md" />

<Next 
colsgrid={2}
colDisplay=""
textPrevious="Blog for Search Engine Optimised Articles" 
textNext="A Mix of Personal & Employed Projects"
linkPrevious="/virgin-media" 
linkNext="/misc"
/>

<Space h="xl" />
<Space h="xl" />
<Space h="xl" />


</Container>

</>

)

}



export default CrystalSki;