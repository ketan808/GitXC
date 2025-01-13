import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Text, Image, Space, Title } from '@mantine/core';
import classes from './SlideButton.module.css';
import ContainerOne from '../components/ContainerOne';
import SubTitle from '../components/SubTitle';
import SubTitleH3 from '../components/SubTitleH3';


interface Props {
  initialSlide?: number;
}


  const Testimonials: React.FC<Props> = ({ initialSlide }) => {


  return (


    <ContainerOne>



    <SubTitle SubTitle="TESTIMONIALS"></SubTitle>


    <Space h="xl" />

    <Carousel initialSlide={initialSlide} classNames={{control: classes.controlHome}} h={{ base: '100%' }}  slideSize={{ base: '100%', sm: '100%', md: '100%', xl:'100%' }} orientation="horizontal" slideGap="xl" controlsOffset="" loop>

<Carousel.Slide>



      <Image style={{ display: 'block', margin: 'auto'}}

      radius="md"
      h={100}
      ta="center"
      w="100"
      fit="contain"
      src={require('../images/emma.jpg')}
    />
    
      <Space h="md" />
      <SubTitleH3 SubTitleH3="Emma Greenwood"></SubTitleH3>
      <Space h="md" />

      <Title order={4} fw={500} ta="center">Critical Thinker & Transformation Leader - UK Ministry of Defence</Title>
      <Text ta="center">
      <p>Ketan brought the visual wow factor to our Army app. His design helped us to engage stakeholders and maintain their enthusiasm. Willing to go the extra mile to meet deadlines and fast balls, Ketan was a valued and well liked member of the team. I would recommend him.</p>
      </Text>


</Carousel.Slide>



<Carousel.Slide>



<Image style={{ display: 'block', margin: 'auto'}}

radius="md"
h={100}
ta="center"
w="100"
fit="contain"
src={require('../images/stven1.jpeg')}
/>

<Space h="md" />
<SubTitleH3 SubTitleH3="Steven Cliff"></SubTitleH3>
<Space h="md" />

<Title order={4} fw={500} ta="center">Head of IT - ACS International Schools Ltd</Title>
<Text ta="center">
<p>Ketan initially joined us in a contract role but quickly became a permanent member of the team. He was instrumental in refreshing our Intranet and Website. He developed strong relationships with key stakeholders and was always willing to go the extra mile.</p>
</Text>


</Carousel.Slide>



<Carousel.Slide>



<Image style={{ display: 'block', margin: 'auto'}}

radius="md"
h={100}
ta="center"
w="100"
fit="contain"
src={require('../images/nig.jpeg')}
/>

<Space h="md" />
<SubTitleH3 SubTitleH3="Nigel Brittle"></SubTitleH3>
<Space h="md" />

<Title order={4} fw={500} ta="center">Director & Vice President - Combined Insurance (Aon)</Title>
<Text ta="center">
<p> Ketan is a highly skilled User Experience and User Interface designer. He will often work long hours to meet deadlines and is a great problem solver. He thrives when he has the opportunity to own and design the solution to a brief.</p>
</Text>


</Carousel.Slide>



<Carousel.Slide>


<Image style={{ display: 'block', margin: 'auto'}}

radius="md"
h={100}
ta="center"
w="100"
fit="contain"
src={require('../images/dave.jpg')}
/>

<Space h="md" />
<SubTitleH3 SubTitleH3="David de la Riviere"></SubTitleH3>
<Space h="md" />

<Title order={4} fw={500} ta="center">Senior Agile Business Analyst - UK Ministry of Defence</Title>
<Text ta="center">
<p>Ketan worked within the team delivering the MyTRAINING app for the MoD. His UX/UI skills were involved from early prototyping to shape the user interaction, look and feel and UX/UI best practice. Ketan was professional & personable, always looking to improve the app.</p>
</Text>


</Carousel.Slide>


    </Carousel>
    </ContainerOne>
    
  );
}



export default Testimonials ;