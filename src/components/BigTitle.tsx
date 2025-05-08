import React from 'react';
import { Title, Container} from '@mantine/core';
import TextReveal from '../inViewUI/TextReveal';
import bgImage from '../images/flare/cyan.png';

interface TitlesProps {
  title1: string;
  title2: string;
  title3: string;
}

const Titles: React.FC<TitlesProps> = ({ title1, title2, title3 }) => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
<Container size={1400} >
<Title order={3}>{title1}</Title>
<Title
order={1}
className='theme0'
fw="700"
fz={{ base: 45, sm: 50, md: 60, lg: 65 }}
mt={{ base: 20, sm: 50, md: 30, lg: 30 }}
mb={{ base: 20, sm: 50, md: 30, lg: 30 }}
>
<TextReveal text={title2} />
</Title>
<Title order={3}>{title3}</Title>
</Container>
    </div>
  );
};

export default Titles;
