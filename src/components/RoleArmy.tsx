import { SimpleGrid, List, Title, Space } from '@mantine/core';


function RoleArmy() {
  return (

<SimpleGrid
      cols={{ base: 1, sm: 2, lg: 4 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      
      <div>

      <Title fw={500} order={3} c="dimmed">Role</Title>
      <Space h="md" />
      <List>
      <List.Item>UI Designer</List.Item>
      <List.Item>UX Designer</List.Item>
      <List.Item>Brand Designer</List.Item>
      <List.Item>Front End Developer</List.Item>
      <List.Item>Stakeholder Management</List.Item>
      
      </List>

      </div>


      <div>

      <Title fw={500} order={3} c="dimmed">Deliverables</Title>
      <Space h="md" />
      <List>
      <List.Item>Design System</List.Item>
      <List.Item>User Flows</List.Item>
      <List.Item>User Journeys</List.Item>
      <List.Item>Usability Tests</List.Item>
      <List.Item>Documentation</List.Item>
      <List.Item>Branding</List.Item>
      </List>

      </div>

      <div>

      <Title fw={500} order={3} c="dimmed">Team</Title>
      <Space h="md" />
      <List>
      <List.Item>1 UX UI Designer</List.Item>
      <List.Item>4 Developers</List.Item>
      <List.Item>2 Testers</List.Item>
      <List.Item>1 Product Manager</List.Item>
      <List.Item>1 Business Analyst</List.Item>
      </List>

      </div>


      <div>

      <Title fw={500} order={3} c="dimmed">Tools</Title>
      <Space h="md" />
      <List>
      <List.Item>Figma</List.Item>
      <List.Item>ProtoPie</List.Item>
      <List.Item>Adobe Photoshop</List.Item>
      <List.Item>Adobe Illustrator</List.Item>
      <List.Item>React MUI</List.Item>
      </List>

      </div>




</SimpleGrid>


  );
}

export default RoleArmy;
