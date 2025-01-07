import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space, Title } from '@mantine/core';
import classes from './ArmySlideButton.module.css';

function ArmySlide() {
  return (
    <Carousel slideSize="80%" height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Upload Course Performance</Title>
    <Space h="lg" />
    <Image src={require('../images/army/performance.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Physical Fitness Scores</Title>
    <Space h="lg" />
    <Image src={require('../images/army/fitness.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Overall Course Dashboard</Title>

    <Space h="lg" />
    <Image src={require('../images/army/dashboard.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">target model statistics</Title>
    <Space h="lg" />
    <Image src={require('../images/army/history.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Wellbeing Staistics</Title>
    <Space h="lg" />
    <Image src={require('../images/army/well.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Course Report Builder</Title>
    <Space h="lg" />
    <Image src={require('../images/army/builder.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Title order={3} fw={500} ta="center" tt="uppercase">Logo</Title>
    <Space h="lg" />
    <Image src={require('../images/army/logo.png')}/>
    </Carousel.Slide>




    </Carousel>
  );
}


export default ArmySlide;