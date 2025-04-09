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
        sections={[{ value: 60, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            60%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Uplift  in user engagement.</Title>
</div>



<div>
<Center p={0} >
      <RingProgress
         size={260}
         thickness={30}
         roundCaps
        sections={[{ value: 88, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            88%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Finding key information improvement.</Title>
</div>



<div>
<Center p={0} >
      <RingProgress
         size={260}
         thickness={30}
         roundCaps
        sections={[{ value: 82, color: 'cyan' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            82%
          </Text>
        }
      />
</Center>
<Title fw={500} order={4} ta="center">Overall satisfaction.</Title>
</div>

</SimpleGrid>



    </>
  );
}


export default RingsArmy;