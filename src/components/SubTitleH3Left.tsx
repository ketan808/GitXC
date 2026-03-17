import {Title} from '@mantine/core';


interface TitleProps {
  SubTitleH3Left: string;
}



const SubTitleH3Left: React.FC<TitleProps> = ({ SubTitleH3Left }) => {
  return (



    <Title className='theme0' fz={{ base: '17px', sm: '18px', md: '20px', lg: '20px' }} fw={500} ta="left" tt="">{SubTitleH3Left}</Title>


  );
}

export default SubTitleH3Left;


