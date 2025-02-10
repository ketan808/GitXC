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
    <Image src={require('../images/cs/ex/rate.png')}/>
    </Carousel.Slide>

<Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/ex/select.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/ex/book1.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/ex/blocks.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Space h="lg" />
    <Image src={require('../images/cs/ex/last.png')}/>
    </Carousel.Slide>




    </Carousel>
  );
}


export default CSSlide;