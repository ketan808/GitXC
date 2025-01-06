import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Text, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';

function ArmySlide() {
  return (
    <Carousel slideSize="80%" height="80%" slideGap="xl" classNames={classes} loop>



    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Upload Performance</Text>
    <Space h="lg" />
    <Image src={require('../images/army/performance.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Physical Fitness Scores</Text>
    <Space h="lg" />
    <Image src={require('../images/army/fitness.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Overall Course Dashboard</Text>
    <Space h="lg" />
    <Image src={require('../images/army/dashboard.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Trainer, Trainee Scoring History</Text>
    <Space h="lg" />
    <Image src={require('../images/army/history.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Course Wellbeing Stats</Text>
    <Space h="lg" />
    <Image src={require('../images/army/well.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Text size="lg" fw={500} ta="center">Course Report Builder</Text>
    <Space h="lg" />
    <Image src={require('../images/army/builder.png')}/>
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