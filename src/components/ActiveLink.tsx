import { Divider, Space, NavLink, Button } from '@mantine/core';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { IconSofa, IconTank, IconSchool, IconAerialLift, IconBroadcast, IconBrandLinkedin, IconMail, 
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Title } from '@mantine/core';
import ContactForm from '../components/ContactForm';
import { IconXboxX } from '@tabler/icons-react';

interface MainMenuProps {
  closeMenu: () => void;
}

function MainMenu({ closeMenu }: MainMenuProps) {
  const location = useLocation();
  const [opened,  { open, close }] = useDisclosure(false);

  const handleLinkClick = () => {
    closeMenu();
  };

  return (
    <div>
      <Modal
        closeButtonProps={{
          icon: <IconXboxX size={60} stroke={1.5} />,
        }}
        shadow="sm" padding="xl" radius="md"  className='theme90' opened={opened} onClose={close} >
        <Title fw={500} order={2} c="cyan">Reach Out</Title>
        <Space h="md" />
        <ContactForm/>
      </Modal>

      <Space h="xl" />

      <NavLink
        component={Link}
        to="/"
        label="Home"
        description="Welcome"
        leftSection={<IconSofa stroke={1} size={32} className='element' />}
        active={location.pathname === '/'}
        variant="filled"
        color="cyan"
        onClick={handleLinkClick}
      />

      <Divider size={2} my="md" label="CASE STUDIES" labelPosition="left" style={{ margin: '15px' }} />

      <NavLink
        component={Link}
        to="/british-army"
        label="British Army"
        description='MyTraining: Wellbeing & Performance App'
        leftSection={<IconTank stroke={1} size={32} className='element'/>}
        active={location.pathname === '/british-army'}
        variant="filled"
        color="cyan"
        onClick={handleLinkClick}
      />

      <NavLink
        component={Link}
        to="/acs"
        label="ACS International Schools"
        description='Intranet & Virtual Learning Enviroment'
        leftSection={<IconSchool stroke={1} size={32} className='element'/>}
        active={location.pathname === '/acs'}
        variant="filled"
        color="cyan"
        onClick={handleLinkClick}
      />

      <NavLink
        component={Link}
        to="/virgin-media"
        label="Virgin Media"
        description='Blog for Search Engine Optimised Articles'
        leftSection={<IconBroadcast stroke={1} size={32} className='element'/>}
        active={location.pathname === '/virgin-media'}
        variant="filled"
        color="cyan"
        onClick={handleLinkClick}
      />

      <NavLink
        component={Link}
        to="/crystalski"
        label="Crystal Ski"
        description='UI & Visual Design for a Brand Refresh'
        leftSection={<IconAerialLift stroke={1} size={32} className='element'/>}
        active={location.pathname === '/crystalski'}
        variant="filled"
        color="cyan"
        onClick={handleLinkClick}
      />

      <Divider size={2} my="md" label="REACH OUT" labelPosition="left" style={{ margin: '15px' }} />

      <NavLink
        component="a"
        href="https://www.linkedin.com/in/kp-info/"
        label="LinkedIn"
        leftSection={<IconBrandLinkedin stroke={1} size={32} className='element'/>}
        active={location.pathname === 'https://www.linkedin.com/in/kp-info/'}
        variant="filled"
        color="cyan"
        className='navlink'
        target="_blank" 
        onClick={handleLinkClick}
      />

      <NavLink
        component="a"
        label="Contact"
        leftSection={<IconMail stroke={1} size={32} className='element'/>}
        variant="filled"
        color="cyan"
        className='navlink'
        target="_blank"
        onClick={() => {
          handleLinkClick();
          open();
        }}
      />
    </div>
  );
}

export default MainMenu;
