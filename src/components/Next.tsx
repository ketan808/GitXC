import {SimpleGrid, Card, Anchor, Title} from '@mantine/core';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

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
    
<Anchor href={linkPrevious} underline="never" style={{  display: colDisplay }}>
<Card className='theme90 cardNext' shadow="sm" padding="lg" radius="md" withBorder>
<div className="iconLeft"><IconArrowLeft className='theme0' size="2rem" stroke={1.5} /></div>
<Title fw={500} order={4} c="" ta="right" >Previous</Title>
<Title fw={500} order={5} c="dimmed" ta="right">{textPrevious}</Title>
</Card>
</Anchor>


<Anchor  href={linkNext} underline="never">
<Card className='theme90 cardNext' shadow="sm" padding="lg" radius="md" withBorder>
<div className="iconRight"><IconArrowRight className='theme0' size="2rem" stroke={1.5} /></div>
<Title fw={500} order={4} c="" ta="left" >Next</Title>
<Title fw={500} order={5} c="dimmed" ta="left">{textNext}</Title>
</Card>
</Anchor>


</SimpleGrid>

 );
};

export default Next;