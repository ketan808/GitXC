import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Text, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';

function ArmySlide() {
  return (
    <Carousel slideSize="80%" height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Courses Home</Text>
    <Space h="lg" />
    <Image src={require('../images/army/courses_home.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Trainee Home</Text>
    <Space h="lg" />
    <Image src={require('../images/army/trainee_home.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Trainer Home</Text>
    <Space h="lg" />
    <Image src={require('../images/army/trainer_home.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Branding</Text>
    <Space h="lg" />
    <Image src={require('../images/army/logo.png')}/>
    </Carousel.Slide>





    </Carousel>
  );
}


export default ArmySlide;