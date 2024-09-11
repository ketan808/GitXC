import React from 'react';
import { Title, Container, SimpleGrid, Box} from '@mantine/core';
import TextReveal from '../inViewUI/TextReveal';
import People from './people';

interface TitlesProps {
  title1: string;
  title2: string;
  title3: string;
}

const Titles: React.FC<TitlesProps> = ({ title1, title2, title3 }) => {
  return (

<Container size={1100} >

<SimpleGrid
cols={{ base: 1, sm: 1, md: 2, lg: 2 }}
>


<Box
mt={{ base: '40px', sm: '40px', md: '60px', lg: '97px' }}
mb={{ base: '20px', sm: '30px', md: '40px', lg: '60px' }}
>   


<Title order={3}>{title1}</Title>


<Title
order={1}
className='theme0'
fw="700"
fz={{ base: 50, sm: 50, md: 60, lg: 60 }}
mt={{ base: 20, sm: 50, md: 30, lg: 30 }}
mb={{ base: 20, sm: 50, md: 30, lg: 30 }}
>
<TextReveal text={title2} />
</Title>


<Title order={3}>{title3}</Title>

</Box>



<Box
mt={{ base: '0px', sm: '0px', md: '170px', lg: '170px' }}
> 
<People />
</Box>



</SimpleGrid>


</Container>





  );
};

export default Titles;
