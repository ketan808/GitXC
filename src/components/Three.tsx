import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Environment, OrbitControls } from "@react-three/drei"
import { angleToRadians } from '../utils/angle';
import * as THREE from 'three';


/* args controls */

const Orbski = () => {

const orbitControlsRef = useRef(null);
  
useFrame ((state) => {
  if(!!orbitControlsRef.current){
    const { x, y } = state.pointer;



    orbitControlsRef.current.setAzimuthalAngle(x * angleToRadians(-15));
    orbitControlsRef.current.setPolarAngle((y + 0.75) * angleToRadians(90 - 30));



    orbitControlsRef.current.update();


  }
})

useEffect (() => {
  if(!!orbitControlsRef.current){

  }
}, [orbitControlsRef])


return (
<>

<OrbitControls ref={orbitControlsRef} minPolarAngle={angleToRadians(40)}  maxPolarAngle={angleToRadians(50)} />;

</>
);
}




/* Sphere */

const Sphere = ({ position, args }) => {

return (

<mesh position={position} castShadow >
<sphereGeometry args={args}/>
<meshStandardMaterial color='#ffffff' metalness={0.9} roughness={0.3}/>
</mesh>


)}

/* Floor */

const Floor = ({ args, position}) => {

return (

  <mesh position={position} rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
  <planeGeometry args={args}/>
  <meshStandardMaterial color='#1ea3db'/>
  </mesh>
  
  
  )}





/* Canvas */

const Three = () => {
    


return ( 


<Canvas style={{ height: '500px', backgroundColor:'#005f8a' }} shadows>

<Sphere position={[0, 0, 0]} args={[1, 32, 32]} />



<Floor position={[0, -1, 0]} args={[50, 50]} />



<ambientLight args={['#ffffff', 0.25]} />



<spotLight args={['#ffffff', 30, 20, angleToRadians(45), 0.4]} position={[-6, 1, 0]} castShadow  />



{/* <Environment background>

<mesh scale={100}>
<sphereGeometry args={[10, 64, 65]} />
<meshBasicMaterial  color='#1a1b1e' side={THREE.BackSide} />
</mesh>

</Environment>  */}

<Orbski />

</Canvas>



)

}



export default Three;