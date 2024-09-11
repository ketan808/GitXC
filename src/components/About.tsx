import { Grid, Box, Image, Title } from '@mantine/core';        



const About = () => {


    return (
    
    <div >
      
    
    <Grid gutter={{ base: '20', sm: '30', md: '30', xl: 40 }} >

    <Grid.Col span={{ base: 12, sm: 'content', md: 'content', lg: 'content' }} >
    <Box lightHidden mt='5px'>
    <Image style={{ backgroundColor:'white', border:'5px solid white', display: 'block', margin: 'auto', borderRadius: '5%'}}
     h={200} w="200" src={require('../images/ketan.png')} /></Box >
    <Box darkHidden><Image style={{ backgroundColor:'white', border:'5px solid #e4e7ec', display: 'block', marginRight: 'auto', borderRadius: '5%'}} h={200} w="200" src={require('../images/ketan.png')} /></Box >
    </Grid.Col>

    <Grid.Col span={{ base: 12, sm: 'auto', md: 'auto', lg: 'auto' }} >
    <Title fw={200} order={2} c="theme0">Overview</Title> 
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </Grid.Col>
   
   
    </Grid>


    
    </div>
    )
    
    
    }


    export default About;