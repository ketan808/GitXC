import { RingProgress, Text, SimpleGrid, Center, Title} from '@mantine/core';

function RingsArmy() {
  return (
    <>

<SimpleGrid
      cols={{ base: 1, sm: 3, lg: 3 }}
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
<Title fw={500} order={4} ta="center">Course trainee intervention much easier through the application.</Title>
</div>



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
<Title fw={500} order={4} ta="center">Final course report creation process imnprovement.</Title>
</div>



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
<Title fw={500} order={4} ta="center">Course trainee intervention much easier through the application.</Title>
</div>

</SimpleGrid>



    </>
  );
}


export default RingsArmy;