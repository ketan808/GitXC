import { Grid, Box, Image} from '@mantine/core';        


const About = () => {


    return (
    
    <div >
      
    
    <Grid gutter={{ base: '20', sm: '30', md: '30', xl: 40 }} >

    <Grid.Col span={{ base: 12, sm: 'content', md: 'content', lg: 'content' }} >
    
    <Box lightHidden mt='5px' mb='5px'>
    <Image style={{ backgroundColor:'white', border:'5px solid white', display: 'block', margin: 'auto', borderRadius: '5%'}} h={200} w="200" src={require('../images/ketan.png')} /></Box >

    <Box darkHidden mt='5px' mb='5px'>
    <Image style={{ backgroundColor:'white', border:'5px solid #e4e7ec', display: 'block', margin: 'auto', borderRadius: '5%'}} h={200} w="200" src={require('../images/ketan.png')} /></Box >
   
    </Grid.Col>

 <Grid.Col span={{ base: 12, sm: 'auto', md: 'auto', lg: 'auto' }} >

{/* <span>Digital design came to me when a family friend saw my drawings and bought me an online web-design course, which I completed with enthusiasm and discovered design was not just a passion but a calling.</span> */}
<span>I started my design career over 20 years ago by developing websites for local businesses, which led to my first major break with a design agency called Clock. I discovered at this point that design is more than just a passion for me; it is a calling, which is how I have felt ever since.</span>
<p>In a chance meeting, I accepted a web-design role for Combined Insurance (AON), where I redesigned the UI and UX for all their organisation websites and got a taste for some coding. The role taught me how to listen attentively and identify customer pain points that could inform effective design decisions.</p>
<p>The rest is history; since then, I've been designing and expanding my toolkit. I love working across the full spectrum of product design, from research through to UI and implementation, and get a ton of energy from working on seriously impactful work, such as in my last contract for the British Army.</p>
<p>I hope you enjoy my portfolio, and would love to connect if there's an opportunity to work toge</p>

 </Grid.Col>
   
   
    </Grid>


    </div>
    )
    
    
    }


    export default About;