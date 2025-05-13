import { RingProgress, Text, Grid, Box, SimpleGrid } from '@mantine/core';

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
         sections={[{ value: 90, color: 'cyan' }]}
         label={
          <Text fw={300} ta="center" size="32" className='theme0'>
            90%
          </Text>
        }
      />


</Grid.Col>




<Grid.Col span="auto">
<Box pt={40} ></Box><p>Reduction in end-of-day reporting time.</p>
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
<Box pt={40} ></Box><p>Said they’d prefer this over their current workflow.</p>
</Grid.Col>

</Grid>

</div>

{/* -------------------------------------------- */}




{/* -------------------------------------------- */}





</SimpleGrid>










    </>
  );
}


export default RingsArmy;