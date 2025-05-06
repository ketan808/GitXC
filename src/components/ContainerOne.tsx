import {Paper, Container} from '@mantine/core';


interface ContainerProps {
  children: React.ReactNode;
  className?: string;

}



const ContainerOne: React.FC<ContainerProps> = ({ children, className}) => {
return (


<Paper shadow="xl">
<Container 
size="xl"
className='theme90'
p={{ base: '10px', sm: '20px', md: '30px', lg: '40px' }}
pt={{ base: '10px', sm: '20px', md: '30px', lg: '60px' }}
>

{children}


</Container>
</Paper>

      );
    };


export default ContainerOne;

