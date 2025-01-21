import { RingProgress, Text, Grid, Center, SimpleGrid, Title} from '@mantine/core';

function RingsArmy() {
  return (
    <>

<SimpleGrid
      cols={{ base: 1, sm: 1, lg: 2 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'md' }}
    >
  
<div>
<Grid >


<Grid.Col span="content">


      <RingProgress
         size={160}
         thickness={10}
         roundCaps
         sections={[{ value: 70, color: 'cyan' }]}
         label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            70%
          </Text>
        }
      />


</Grid.Col>

<Grid.Col span="auto">
<Title fw={500} order={4} ta="left" pt={50}>Were able to complete all tasks.</Title>
</Grid.Col>


</Grid>

</div>

{/* -------------------------------------------- */}

<div>

<Grid >
<Grid.Col span="content">


      <RingProgress
         size={160}
         thickness={10}
         roundCaps
         sections={[{ value: 30, color: 'cyan' }]}
         label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            30%
          </Text>
        }
      />


</Grid.Col>

<Grid.Col span="auto">
<Title fw={500} order={4} ta="left" pt={50}>Completed all tasks with some guidance.</Title>
</Grid.Col>

</Grid>

</div>

{/* -------------------------------------------- */}


<div>

<Grid >
<Grid.Col span="content">


      <RingProgress
         size={160}
         thickness={10}
         roundCaps
         sections={[{ value: 100, color: 'cyan' }]}
         label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            100%
          </Text>
        }
      />


</Grid.Col>

<Grid.Col span="auto">
<Title fw={500} order={4} ta="left" pt={50}>Approved the concept.</Title>
</Grid.Col>

</Grid>

</div>


{/* -------------------------------------------- */}


<div>

<Grid >
<Grid.Col span="content">


      <RingProgress
         size={160}
         thickness={10}
         roundCaps
         sections={[{ value: 90, color: 'cyan' }]}
         label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            90%
          </Text>
        }
      />


</Grid.Col>

<Grid.Col span="auto">
<Title fw={500} order={4} ta="left" pt={50}>Would use the feature.</Title>
</Grid.Col>

</Grid>

</div>


</SimpleGrid>










    </>
  );
}


export default RingsArmy;