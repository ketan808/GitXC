import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';
import SubTitleH3 from '../components/SubTitleH3';
import { Text, Card } from '@mantine/core';

function ArmySlide() {
  return (
    <Carousel slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '70%' }} height="80%" slideGap="xl" classNames={classes} loop>

<Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Report Building with Evidence and Scoring"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Generate structured course reports with flexible templates and modules.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/builder.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3=" Performance Tracking and Assessment"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Record evidence, update statuses, and assign scores across modular assessments.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/performance.png')}/>
    </Carousel.Slide>




    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Fitness Insights with Performance Breakdown"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Visual breakdown of physical tasks for tracking weekly and monthly fitness progress.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/fitness.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Data-Driven Overview of Course and Attendee Performance"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Visual charts, helping trainers identify trends and performance across key skills.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/dashboard.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Performance Alignment Through Visual Score History"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Trainer and trainee scores, helping identify alignment or gaps in performance over time </Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/history.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Wellbeing and Performance at a Glance"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Performance metrics, making it easy to track trends, spot imbalances, and support reflective development.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/well.png')}/>
    </Carousel.Slide>


 






    </Carousel>
  );
}


export default ArmySlide;