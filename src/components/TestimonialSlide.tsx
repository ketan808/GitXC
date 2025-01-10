import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Card, Text, Image } from '@mantine/core';
import classes from './SlideButton.module.css';


interface Props {
  initialSlide?: number;
}


  const Testimonials: React.FC<Props> = ({ initialSlide }) => {


  return (
    <div>
    <Carousel initialSlide={initialSlide} classNames={{control: classes.controlHome}} h={{ base: '100%' }}  slideSize={{ base: '100%', sm: '100%', md: '100%', xl:'75%' }} orientation="horizontal" slideGap="xl" controlsOffset="xl" loop>

    <Carousel.Slide>

      <Card shadow="sm" padding="xl" radius="md"  className='theme90'>

      <Image style={{ display: 'block', margin: 'auto'}}

      radius="md"
      h={100}
      ta="center"
      w="100"
      fit="contain"
      src={require('../images/emma.jpg')}
    />
    
      <Text size="xl" fw={700} mt="sm" ta="center">
      Emma Greenwood
      </Text>

      <Text size="md" fw={500} mt="sm" ta="center">
      Critical Thinker & Transformation Leader - UK Ministry of Defence
      </Text>

      <Text size="md" mt="sm" c="dimmed" ta="center">
      Ketan brought the visual wow factor to our Army app. His design helped us to engage stakeholders and maintain their enthusiasm. Willing to go the extra mile to meet deadlines and fast balls, Ketan was a valued and well liked member of the team. I would recommend him.
      </Text>
   </Card>
   </Carousel.Slide>

   
   <Carousel.Slide>
    
   <Card shadow="sm" padding="xl" radius="md" className='theme90'>

<Image style={{ display: 'block', margin: 'auto'}}

      radius="md"
      h={100}
      ta="center"
      w="100"
      fit="contain"
      src={require('../images/stven1.jpeg')}
    />
    
      <Text size="xl" fw={700} mt="sm" ta="center">
 Steven Cliff
      </Text>

      <Text size="md" fw={500} mt="sm" ta="center">
      Head of IT - ACS International Schools Ltd
      </Text>

      <Text size="md" mt="sm" c="dimmed" ta="center">
      Ketan initially joined us in a contract role but quickly became a permanent member of the team. He was instrumental in refreshing our Intranet and Website. He developed strong relationships with key stakeholders and was always willing to go the extra mile.
      </Text>
   </Card>


   </Carousel.Slide>



   <Carousel.Slide>
    
   <Card shadow="sm" padding="xl" radius="md" className='theme90' >

<Image style={{ display: 'block', margin: 'auto'}}

      radius="md"
      h={100}
      ta="center"
      w="100"
      fit="contain"
      src={require('../images/nig.jpeg')}
    />
    
      <Text size="xl" fw={700} mt="sm" ta="center">
      Nigel Brittle
      </Text>

      <Text size="md" fw={500} mt="sm" ta="center">
      Director & Vice President - Combined Insurance (Aon)
      </Text>

      <Text size="md" mt="sm" c="dimmed" ta="center">
      Ketan is a highly skilled User Experience and User Interface designer. He will often work long hours to meet deadlines and is a great problem solver. He thrives when he has the opportunity to own and design the solution to a brief.
      </Text>
   </Card>


   </Carousel.Slide>



   <Carousel.Slide>
    
    <Card shadow="sm" padding="xl" radius="md" className='theme90'>
 
 <Image style={{ display: 'block', margin: 'auto'}}
 
       radius="md"
       h={100}
       ta="center"
       w="100"
       fit="contain"
       src={require('../images/dave.jpg')}
     />
     
       <Text size="xl" fw={700} mt="sm" ta="center">
       David de la Riviere
       </Text>
 
       <Text size="md" fw={500} mt="sm" ta="center">
       Senior Agile Business Analyst - UK Ministry of Defence
       </Text>
 
       <Text size="md" mt="sm" c="dimmed" ta="center">
       Ketan worked within the team delivering the MyTRAINING app for the MoD.
       His UX/UI skills were involved from early prototyping to shape the user interaction, look and feel and UX/UI best practice. 
       Ketan was professional & personable, always looking to improve the app.
       </Text>
    </Card>
 
 
    </Carousel.Slide>







    </Carousel>
    </div>
  );
}



export default Testimonials ;