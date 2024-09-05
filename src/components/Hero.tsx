import {Container, Title} from '@mantine/core';
import '../inViewUI/css/style.css'

const hero = {
    style: "gradientGreen",
    height: "500px",
}

const heroInner = {
   background: "",
   paddingTop: "80px",
   color: "white"

}



interface Props {
    Title1: string;
    Title2: string;
    Title3: string;
  }
  

function Hero(props: Props) {

  
return (


<div style = {hero} className = "">
    
<Container size={1100} style = {heroInner} >



<Title order={2}>{props.Title1}</Title>
<Title order={1}>{props.Title2}</Title>
<Title order={4}>{props.Title3}</Title>



</Container>


</div>



);
}

  


export default Hero;