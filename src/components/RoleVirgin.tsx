import { SimpleGrid, List, Title, Space } from '@mantine/core';


function RoleVirgin() {
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
      <List.Item>Graphic Designer</List.Item>
      <List.Item>Stakeholder Management</List.Item>
      </List>

      </div>



      <div>

      <Title fw={500} order={3} c="dimmed">Deliverables</Title>
      <Space h="md" />
      <List>
      <List.Item>UI Framework</List.Item>
      <List.Item>Artwork</List.Item>
      <List.Item>SEO optimisation</List.Item>
      <List.Item>Admin Training</List.Item>
      <List.Item>Branding</List.Item>
      </List>

      </div>

      <div>

      <Title fw={500} order={3} c="dimmed">Team</Title>
      <Space h="md" />
      <List>
      <List.Item>2 UX UI Designers</List.Item>
      <List.Item>10 SEO Copywriters</List.Item>
      <List.Item>2 Content Editors</List.Item>
      <List.Item>2 Developer</List.Item>
      <List.Item>2 Product Manager</List.Item>

      </List>

      </div>


      <div>

      <Title fw={500} order={3} c="dimmed">Tools</Title>
      <Space h="md" />
      <List>
      <List.Item>Sketch</List.Item>
      <List.Item>Zeplin</List.Item>
      <List.Item>Adobe Photoshop</List.Item>
      <List.Item>Adobe Illustrator</List.Item>
      </List>

      </div>




</SimpleGrid>


  );
}

export default RoleVirgin;
