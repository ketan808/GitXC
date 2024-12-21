import {Title} from '@mantine/core';


interface TitleProps {
  SubTitle: string;
}



const SubTitle: React.FC<TitleProps> = ({ SubTitle }) => {
  return (



<Title tt="uppercase" className='theme0' fz={{ base: '1.6rem' , sm: '1.6rem' , md: '2rem' , lg: '2rem' , xl: '2rem'  }} fw="500">{SubTitle}</Title>


  );
}

export default SubTitle;

