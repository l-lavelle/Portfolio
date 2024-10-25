import './LoadPage.css';
import { useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import {Canvas, useFrame } from '@react-three/fiber';
import{
  Center,
  Text3D,
  Environment,
  OrbitControls,
  MeshTransmissionMaterial,
  Float
} from '@react-three/drei';
import fontJson from '../../assets/typeface.json';
import Baskerville from '../../assets/Baskerville.json';
import Nunito from '../../assets/Nunito-Sans.json';
import Kantumruy from '../../assets/Kantumruy.json'

// Full Name Drops 
function AnimatedText5() {
  const letters = "Lauren".split("");
  const lastName ="Lavelle".split("");

  return (
    <div style={{ width: "100vw", height: "80vh" }} >
      <Canvas camera={{ position: [0, 0, 4] }} >
        <Float speed={2} rotationIntensity={.4}>
          {letters.map((letter, index) => (
            <DroppingLetter key={index} letter={letter} index={index} />
          ))}
        </Float>
        <Environment preset='sunset' blur={.3}/>
        <Float speed={2} rotationIntensity={.4}>
          {lastName.map((letter, index) => (
            <RisingLetter key={index} letter={letter} index={index} />
          ))}
        </Float>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

function DroppingLetter({ letter, index }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const yStart = 5; 
    const yEnd = 0; 
    const dropDuration = 2;

    const progress = Math.min((elapsedTime - index * 0.5) / dropDuration, 1);
    ref.current.position.y = yStart + (yEnd - yStart) * progress;
  });
  
  const config = {
    backside: true,
    backsideThickness: 0.3,
    transmission: 1,
    thickness: 0.01,
    chromaticAbberation: 5,
    ior: 2.5,
    color: '#8576FF',
  };

  return (
    <Center scale={[1, 1, .7]} position={[index -3, 0, 0]} front top>
      <Text3D
        ref={ref}
        font={fontJson}
        size={1}
        height={0.5}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={8}
      >
        {letter}
        <MeshTransmissionMaterial {...config}/>
      </Text3D>
    </Center>
  );
}

function RisingLetter({ letter, index }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const yStart = -5; // Start position at the bottom
    const yEnd = -1.5; // End position
    const riseDuration = 2; // Duration of the rise

    // Calculate the new position
    const progress = Math.min((elapsedTime - index * 0.5) / riseDuration, 1);
    ref.current.position.y = yStart + (yEnd - yStart) * progress;
  });

  const config = {
    backside: true,
    backsideThickness: 0.3,
    transmission: 1,
    thickness: 0.01,
    chromaticAbberation: 5,
    ior: 2.5,
    color: '#8576FF',
  };

  return (
    <Center scale={[1, 1, .7]} position={[index -3.3, 0, 0]} front top>
      <Text3D
        ref={ref}
        font={fontJson}
        size={1}
        height={0.5}
        curveSegments={32}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.05}
        bevelSegments={8}
      >
        {letter}
        <MeshTransmissionMaterial {...config}/>
      </Text3D>
    </Center>
  );
}

function LoadPage() {
  const navigate = useNavigate()
  // useEffect(()=>{
  //     setTimeout(()=>{
  //           navigate('/About')
  //       }, 10000)
  //   }, [])
  useEffect(()=>{
    setTimeout(()=>{
          navigate('/About')
      }, 100)
  }, [])

    return (
      <>
        <AnimatedText5 />
      </>
    );
  }
  
  export default LoadPage;





  

  
