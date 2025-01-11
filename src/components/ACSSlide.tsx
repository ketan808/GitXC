import { Carousel} from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './ACSSlideButton.module.css';
import SubTitleH3 from '../components/SubTitleH3';

function ArmySlide() {
  return (


    <Carousel
    
    slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }}

    height="80%"
    slideGap="xl"
    classNames={classes} loop>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Parents Dashboard"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/acs/parent.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Newsletter More Detail"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/acs/more.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="School Division HomePage"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/acs/school.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <SubTitleH3 SubTitleH3="Staff Directory"></SubTitleH3>
    <Space h="lg" />
    <Image src={require('../images/acs/staff.png')}/>
    </Carousel.Slide>





    </Carousel>
  );
}


export default ArmySlide;