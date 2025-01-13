import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './CSSlideButton.module.css';

function CSSlide() {
  return (
    <Carousel 
    
    slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '78%' }}
    
    height="80%" slideGap="xl" classNames={classes} loop>


<Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/cs4.jpg')}/>
    </Carousel.Slide>

<Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/cs6.jpg')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/cs3.jpg')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/cs5.jpg')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/cs2.jpg')}/>
    </Carousel.Slide>




    </Carousel>
  );
}


export default CSSlide;