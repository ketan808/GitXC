import { SimpleGrid, Title, Space } from '@mantine/core';


function SolutionArmy() {
  return (

<SimpleGrid
      cols={{ base: 1, sm: 1, lg: 3 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      
      <div>

      <Title fw={500} order={3} c="green">Problem</Title>
      <Space h="md" />
      <p>
      Trainers need a solution to encourage performance and intervene early if trainees are experiencing difficulties, as trainees frequently do not speak out about physical or mental health problems.
      </p>

      </div>


      <div>

      <Title fw={500} order={3} c="green">Buisness Objective</Title>
      <Space h="md" />
      <p>
      Create a minimal viable product that streamlines the communication between trainers and trainees, guaranteeing that both parties have the necessary resources to track outcomes.</p>
      </div>


      <div>

<Title fw={500} order={3} c="green">The Challenge</Title>
<Space h="md" />
<p>
Engage stakeholders and maintain their enthusiasm through discussions, rapid prototyping, and presentations for feedback and further iteration, with a focus on flexibility and collaboration.</p>
</div>




</SimpleGrid>


  );
}

export default SolutionArmy;
