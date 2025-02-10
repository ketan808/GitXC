import React from 'react';
import { Title, Container, SimpleGrid, Box, Image} from '@mantine/core';
import TextReveal from '../inViewUI/TextRevealStop';
import image1 from '../images/cs/ex/family.png';

interface TitlesProps {
  title1: string;
  title2: string;
  title3: string;
}

const Titles: React.FC<TitlesProps> = ({ title1, title2, title3 }) => {
  return (

<div className=''>
<Container size="xl"
mb={{ base: '20px'}}

>

<SimpleGrid
cols={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
spacing="xl" 
>


<Box
mt={{ base: '40px' }}
mb={{ base: '0px', xl:'40px' }}
>   


<Title className='theme0' order={3} fw="600">{title1}</Title>


<Title className='theme0'

lh={{ base: 1.1 }}
fz={{ base: 50, sm: 50, md: 60, lg: 60, xl: 70  }}
mt={{ base: 20, sm: 20, md: 20, lg: 40 }}
mb={{ base: 20, sm: 20, md: 20, lg: 40 }}
>
<TextReveal text={title2} />
</Title>


<Title className='theme0' order={4} fw="500">{title3}</Title>

</Box>



<Box
mt={{ base: '0px', lg: '0px', xl: '60px' }}
mb={{ base: '0px', lg: '0px', xl: '40px' }}
> 
<Image src={image1} alt="ACS Image" />

</Box>



</SimpleGrid>


</Container>

</div>




  );
};

export default Titles;
