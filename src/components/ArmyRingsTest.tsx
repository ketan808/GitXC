import { RingProgress, Text, SimpleGrid, Center, Title} from '@mantine/core';

function RingsArmy() {
  return (
    <>

<SimpleGrid
      cols={{ base: 1, sm: 3, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >

<div>
<Center p={0} >
      <RingProgress
         size={260}
         thickness={30}
         roundCaps
        sections={[{ value: 92, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            92%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Identify course trainee progress and issues improvement.</Title>
</div>



<div>
<Center p={0} >
      <RingProgress
         size={260}
         thickness={30}
         roundCaps
        sections={[{ value: 89, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            89%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Final course report creation process improvement.</Title>
</div>



<div>
<Center p={0} >
      <RingProgress
         size={260}
         thickness={30}
         roundCaps
        sections={[{ value: 86, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            86%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Course trainers time saving and efficiency improvement.</Title>
</div>

</SimpleGrid>



    </>
  );
}


export default RingsArmy;