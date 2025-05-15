import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image, Space } from '@mantine/core';
import classes from './ArmySlideButton.module.css';
import SubTitleH3 from '../components/SubTitleH3';
import { Text, Card } from '@mantine/core';

function ArmySlideOne() {
  return (
    <Carousel slideSize={{ base: '100%', sm: '100%', md: '100%', lg: '70%' }} height="80%" slideGap="xl" classNames={classes} loop>




    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Quick-Scan Course Cards with Visual Cues"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Trainers can quickly scan cards with bold titles and course-relevant images.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/progress.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Trainer Course Attendees Panel"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500}>Quick access to attendee options, including their stats, wellbeing, and performance.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/trainer_home.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Bulk evidence uploads"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Bulk evidence uploads through clear filters and intuitive checkboxes.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/bulk_select.png')}/>
    </Carousel.Slide>


    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Image evidence upload"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Tag images with behaviours and upload them into panel with date and timestamp included.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/upload_images.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Edit individual images"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Edit behaviour tag and add individual image note using keyboard or voice input.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/image_note1.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Image Selection ready for publishing"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Select images using checkboxes ready for publishing to chosen attendees.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/upload_images2.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Notes evidence upload"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Tag notes with behaviours and create using keyboard or voice input then select ready for publishing.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/upload_note2.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Publish Evidence to course Attendee Panels"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Course evidence is published directly to attendees’ private control panels.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/published.png')}/>
    </Carousel.Slide>

    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Instant Access to Attendee Insights"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Trainees can access detailed attendee data from the main list.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/slide/list_info.png')}/>
    </Carousel.Slide>



    <Carousel.Slide>
    <Card className='theme90' shadow="sm" p={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }} radius="md" withBorder >
    <SubTitleH3 SubTitleH3="Report Building with Evidence and Scoring"></SubTitleH3>
    <Text mt='6px' size="md" ta="center" fw={500} >Generate structured course reports with flexible templates and modules.</Text>
    </Card>
    <Space h="lg" />
    <Image src={require('../images/army/builder.png')}/>
    </Carousel.Slide>




    </Carousel>
  );
}


export default ArmySlideOne;