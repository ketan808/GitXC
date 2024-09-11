import React from 'react';
import { Title, Container, Box} from '@mantine/core';
import TextReveal from '../inViewUI/TextReveal';

interface TitlesProps {
  title1: string;
  title2: string;
  title3: string;
}

const Titles: React.FC<TitlesProps> = ({ title1, title2, title3 }) => {
  return (



<Container size={1100} >
      
<Box
pos="relative"
top={{ base: '-417px', sm: '-417px', md: '-397px', lg: '-360px' }}
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

</Container>



  );
};

export default Titles;
