import { Divider, Space, NavLink } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { IconSofa, IconTank, IconSchool, IconAerialLift, IconBroadcast } from '@tabler/icons-react';



function MainMenu() {
  const location = useLocation();

  return (

    <div>
    <Space h="xl" />

 
      <NavLink
        component="a"
        href="/"
        label="Home"
        description="Welcome"
        leftSection={<IconSofa stroke={1} size={32} className='element'/>}
        active={location.pathname === '/'}
        variant="filled"
        color="cyan"
        className='navlink'

      />

<Divider size={2} my="md" label="CASE STUDIES" labelPosition="left" style={{ margin: '15px' }} />

      <NavLink
        component="a"
        href="/british-army"
        label="British Army"
        description='MyTraining Progress & Wellbeing App'
        leftSection={<IconTank stroke={1} size={32} className='theme0'/>}
        active={location.pathname === '/british-army'}
        variant="filled"
        color="rgba(0, 133, 58, 1)"
     
      />

      <NavLink
        component="a"
        href="/acs"
        label="ACS International Schools"
        description='Intranet and Virtual Learning Enviroment'
        leftSection={<IconSchool stroke={1} size={32} className='theme0'/>}
        active={location.pathname === '/acs'}
        variant="filled"
        color="yellow"

      />


      <NavLink
        component="a"
        href="/virgin-media"
        label="Virgin Media"
        description='Intranet Virtual Learning Enviroment'
        leftSection={<IconBroadcast stroke={1} size={32} className='theme0'/>}
        active={location.pathname === '/virgin-media'}
        variant="filled"
        color="red"
      />


      <NavLink
        component="a"
        href="/crystalski"
        label="Crystal Ski"
        description='User Interface and Visual Design'
        leftSection={<IconAerialLift stroke={1} size={32} className='theme0'/>}
        active={location.pathname === '/crystalski'}
        variant="filled"
        color="blue"
      />





    </div>

  );
}

export default MainMenu;
