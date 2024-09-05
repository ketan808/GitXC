import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Text, Space } from '@mantine/core';
import classes from './ACSSlideButton.module.css';

function ArmySlide() {
  return (
    <Carousel slideSize="65%" height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Parents Dashboard</Text>
    <Space h="lg" />
    <Image src={require('../images/acs/parent.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Newsletter More Detail</Text>
    <Space h="lg" />
    <Image src={require('../images/acs/more.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">School HomePage</Text>
    <Space h="lg" />
    <Image src={require('../images/acs/school.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Staff Directory</Text>
    <Space h="lg" />
    <Image src={require('../images/acs/staff.png')}/>
    </Carousel.Slide>





    </Carousel>
  );
}


export default ArmySlide;