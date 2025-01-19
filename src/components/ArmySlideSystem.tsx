import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';
import SubTitleH3 from '../components/SubTitleH3';

function ArmySlideSystem() {
  return (
    <Carousel
    

    
    slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '75%' }}
    
    height="80%" slideGap="xl" classNames={classes} loop>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Task Header Component"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/task.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Button Component"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/button.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Typography"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/type.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Colour Palette"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/army/fill.png')}/>
    </Carousel.Slide>






    </Carousel>
  );
}


export default ArmySlideSystem;