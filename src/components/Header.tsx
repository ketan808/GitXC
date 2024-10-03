import { Grid, Box, Burger, Button, Image, useMantineColorScheme, useComputedColorScheme, AppShell } from '@mantine/core';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({toggle, opened}: any) => {


  
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (

<AppShell.Header className='theme80' style={{ paddingTop: '15px', paddingLeft: '15px', paddingRight: '15px'}}>

<Grid grow>

<Grid.Col span="content">
<Box lightHidden><Image style={{ display: 'block', marginRight: 'auto'}} h={52} w="180" src={require('../images/logoDark.png')} /></Box >
<Box darkHidden><Image style={{ display: 'block', marginRight: 'auto'}} h={52} w="180" src={require('../images/logoLight.png')} darkHidden/></Box >
</Grid.Col>

<Grid.Col span="content">
<Button style={{ display: 'block', marginLeft: 'auto', marginTop: '5px'}} size="sm" variant="link" onClick={toggleColorScheme}> {computedColorScheme === 'dark' ? <FaSun /> : <FaMoon />}</Button>
</Grid.Col>

<div><Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="md" mt="15px" mr="5px" ml="15px" /></div>

</Grid>

 </AppShell.Header>
  );
};

export default Header;
