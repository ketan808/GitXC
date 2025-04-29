import {SimpleGrid, Card, Title, Box, NavLink} from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

interface NextProps {
    textNext: string;
    textPrevious: string;
    linkNext: string;
    linkPrevious: string;
    colsgrid: number;
    colDisplay: string;
  }
  

const Next: React.FC<NextProps> = ({ textNext, textPrevious, linkNext, linkPrevious, colsgrid, colDisplay }) => {
   

return (
<SimpleGrid
      cols={{ base: 1, sm: 1, lg: colsgrid }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'sm', sm: 'sm' }}
>
    
<NavLink
  component={Link}
  to={linkPrevious}
  style={{ display: colDisplay }}
  label={
    <Card className='next cardNext' shadow="sm" padding="lg" radius="md" color="cyan" withBorder>
      <Box visibleFrom="sm" mt='-6px' className="iconLeft"><IconArrowLeft color="white" size="1.6rem" stroke={1.5} /></Box>
      <Title fw={700} order={4} c="white" ta="right" >PREVIOUS</Title>
      <Title fw={500} order={4} c="white" ta="right">{textPrevious}</Title>
    </Card>
  }
/>

<NavLink
  component={Link}
  to={linkNext}
  label={
    <Card className='next cardNext' shadow="sm" padding="lg" radius="md" withBorder>
      <Box visibleFrom="sm" mt='-6px' className="iconRight"><IconArrowRight color="white" size="1.6rem" stroke={1.5} /></Box>
      <Title fw={700} order={4} c="white" ta="left" >NEXT</Title>
      <Title fw={500} order={4} c="white" ta="left">{textNext}</Title>
    </Card>
  }
/>

</SimpleGrid>

 );
};

export default Next;