import { AppShell, Grid, Image } from '@mantine/core';

const Footer = () => {


  return (


 <div>

<AppShell.Footer className='theme80' style={{ paddingTop: '15px', paddingBottom: '15px',  paddingLeft: '20px', paddingRight: '20px'}} >



<Grid justify="flex-end" align="stretch">

<Grid.Col span="content">
<a href="https://react.dev/" target="blank">
<Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="45" src={require('../images/react.png')} />
</a>
</Grid.Col>

<Grid.Col span="content">
<a href="https://mantine.dev/" target="blank">
<Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="40" src={require('../images/mantine.png')} />
</a>
</Grid.Col>

<Grid.Col span="content">
<a href="https://www.framer.com/motion/" target="blank">
<Image style={{ display: 'block', marginLeft: 'auto'}} h={40} w="40" src={require('../images/framer-motion.png')} />
</a>

</Grid.Col>

</Grid>

</AppShell.Footer>

</div>

  );
};




export default Footer;