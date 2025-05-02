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

<div className=''>
<Container size="xl"
mb={{ base: '20px'}}

>

<SimpleGrid
cols={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
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
mt={{ base: '10px', md: '60px', lg: '40px', xl: '120px' }}
mb={{ base: '10px', md: '40px', lg: '40px', xl: '40px' }}
> 


<People />


</Box>



</SimpleGrid>


</Container>

</div>




  );
};

export default Titles;