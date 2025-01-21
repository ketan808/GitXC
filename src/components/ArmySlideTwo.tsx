import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';
import SubTitleH3 from '../components/SubTitleH3';

function ArmySlide() {
  return (
    <Carousel
    

    
    slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '75%' }}
    
    height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Upload Course Performance"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/performance.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Overall Course Dashboard"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/dashboard.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="target model statistics"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/history.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Wellbeing Statistics"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/well.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Course Report Builder"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/builder.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Physical Fitness Scores"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/fitness.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Logo"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/logo.png')}/>
    </Carousel.Slide>




    </Carousel>
  );
}


export default ArmySlide;