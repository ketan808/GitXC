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
         size={180}
        sections={[{ value: 84, color: 'green.1' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            85%
          </Text>
        }
      />
</Center>
<Title fw={500} order={5} ta="center" c="dimmed">Sliders worked best when selecting more than one answer on a page.</Title>
</div>

<div>
<Center p={0} >
      <RingProgress
         size={180}
        sections={[{ value: 87, color: 'green.1' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            95%
          </Text>
        }
      />
</Center>
<Title fw={500} order={5} ta="center" c="dimmed">Circular slider worked best when selecting one answer at a time.</Title>
</div>

<div>
<Center p={0} >
      <RingProgress
         size={180}
        sections={[{ value: 96, color: 'green.1' }]}
        label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            70%
          </Text>
        }
      />
</Center>
<Title fw={500} order={5} ta="center" c="dimmed">Text areas worked best for answering questions requiring text input.</Title>
</div>

</SimpleGrid>



    </>
  );
}


export default RingsArmy;