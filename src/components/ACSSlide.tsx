import { Carousel} from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space, Title } from '@mantine/core';
import classes from './ACSSlideButton.module.css';

function ArmySlide() {
  return (
    <Carousel slideSize="65%" height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Parents Dashboard</Title>
    <Space h="lg" />
    <Image src={require('../images/acs/parent.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Newsletter More Detail</Title>
    <Space h="lg" />
    <Image src={require('../images/acs/more.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">School Division HomePage</Title>
    <Space h="lg" />
    <Image src={require('../images/acs/school.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Staff Directory</Title>
    <Space h="lg" />
    <Image src={require('../images/acs/staff.png')}/>
    </Carousel.Slide>





    </Carousel>
  );
}


export default ArmySlide;