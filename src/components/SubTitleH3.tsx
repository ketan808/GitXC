import {Title} from '@mantine/core';


interface TitleProps {
  SubTitleH3: string;
}



const SubTitleH3: React.FC<TitleProps> = ({ SubTitleH3 }) => {
  return (



    <Title className='theme0' fz={{ base: '17px', sm: '18px', md: '20px', lg: '20px' }} fw={500} ta="center" tt="uppercase">{SubTitleH3}</Title>


  );
}

export default SubTitleH3;

