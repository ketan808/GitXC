import { SimpleGrid, List, Title, Space } from '@mantine/core';


function RoleCrystal() {
  return (

<SimpleGrid
      cols={{ base: 2, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      
      <div>

      <Title fw={500} order={3} c="dimmed">Role</Title>
      <Space h="md" />
      <List>
      <List.Item>UI Designer</List.Item>
      <List.Item>UX Designer</List.Item>
      <List.Item>Visual Designer</List.Item>
      <List.Item>Content Architecture</List.Item>
      </List>

      </div>



      <div>

      <Title fw={500} order={3} c="dimmed">Deliverables</Title>
      <Space h="md" />
      <List>
      <List.Item>Visual Designs</List.Item>
      <List.Item>User Flows</List.Item>
      <List.Item>User Journeys</List.Item>
      <List.Item>Branding</List.Item>
      </List>

      </div>

      <div>

      <Title fw={500} order={3} c="dimmed">Team</Title>
      <Space h="md" />
      <List>
      <List.Item>4 UX UI Designers</List.Item>
      <List.Item>2 Copy Writers</List.Item>
      <List.Item>2 Product Managers</List.Item>
      <List.Item>4 Developers</List.Item>

      </List>

      </div>


      <div>

      <Title fw={500} order={3} c="dimmed">Tools</Title>
      <Space h="md" />
      <List>
      <List.Item>Photoshnop</List.Item>
      <List.Item>Adobe Illustrator</List.Item>
      </List>

      </div>




</SimpleGrid>


  );
}

export default RoleCrystal;
