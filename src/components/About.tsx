import { Grid, Box, Image } from '@mantine/core';        



const About = () => {


    return (
    
    <div >
      
    
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 40 }}>

    <Grid.Col span="content">
    <Box lightHidden><Image style={{ display: 'block', marginRight: 'auto'}} h={225} w="225" src={require('../images/ketan-bio.png')} /></Box >
    <Box darkHidden><Image style={{ display: 'block', marginRight: 'auto'}} h={220} w="200" src={require('../images/ketan-bio.png')} darkHidden/></Box >
    </Grid.Col>

    <Grid.Col span="auto">
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Grid.Col>
   
   
    </Grid>
    
    
    </div>
    )
    
    
    }


    export default About;