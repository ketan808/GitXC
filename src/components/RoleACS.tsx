import { SimpleGrid, List, Title, Space } from '@mantine/core';


function RoleACS() {
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
      <List.Item>Web Developer</List.Item>
      <List.Item>Project Management</List.Item>
      <List.Item>Stakeholder Management</List.Item>
      
      </List>

      </div>



      <div>

      <Title fw={500} order={3} c="dimmed">Deliverables</Title>
      <Space h="md" />
      <List>
      <List.Item>Redesign</List.Item>
      <List.Item>Prototypes</List.Item>
      <List.Item>User Journeys</List.Item>
      <List.Item>Usability Tests</List.Item>
      <List.Item>Documentation</List.Item>
      </List>

      </div>

      <div>

      <Title fw={500} order={3} c="dimmed">Team</Title>
      <Space h="md" />
      <List>
      <List.Item>1 UX UI Designer</List.Item>
      <List.Item>2 Developers</List.Item>
      <List.Item>1 Copy Writer</List.Item>
      <List.Item>2 Product Managers</List.Item>
      <List.Item>4 IT Integrationists</List.Item>
      </List>

      </div>


      <div>

      <Title fw={500} order={3} c="dimmed">Tools</Title>
      <Space h="md" />
      <List>
      <List.Item>Figma</List.Item>
      <List.Item>Adobe Photoshop</List.Item>
      <List.Item>Adobe Illustrator</List.Item>
      <List.Item>Content Management System</List.Item>

      </List>

      </div>




</SimpleGrid>


  );
}

export default RoleACS;
