// navigate tranisiton slower
// add code in box for loading 
import videoBG from '../../assets/home-video.mp4'
import './LoadPage.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import ReactTyped from 'react-typed';
import {Canvas} from '@react-three/fiber';
import{
  Center,
  Text3D,
  Environment,
  OrbitControls,
  MeshTransmissionMaterial,
  Float,
  Stars
} from '@react-three/drei';
import fontJson from '../../assets/typeface.json'

function LoadPage() {
  const navigate = useNavigate()
  useEffect(()=>{
      setTimeout(()=>{
            navigate('/About')
        }, 10000)
    }, [])

    return (
      <div>
        {/* <video autoPlay muted id="bg-video">
            <source src={videoBG} type="video/mp4"/>
        </video> */}
        <div class="container">
            <div id="b1"></div>
            {/* <div id="b2"></div> */}
        </div>
        {/* <CanvasCreation/> */}
        <Canvas>
      <Float speed={2} rotationIntensity={1}>
        <Center>
          <Text3D
            font={fontJson} // Make sure to provide a path to a font file
            size={1}
            height={0.5}
            curveSegments={32}
            bevelEnabled
            bevelThickness={0.1}
            bevelSize={0.1}
            bevelSegments={8}
          
          >
            Hello, 3D World!
            <meshStandardMaterial attach="material" color="white" />
          </Text3D>
        </Center>
        <OrbitControls />
        <Environment preset="city" blur={0.5} />
      </Float>
    </Canvas>


        <div class="content fadeIn">
            <div className='load-container'>
                <ReactTyped className="space-string" strings={[`Lauren Lavelle`,'asdfj']} typeSpeed={350} />
            </div>
        </div>
      </div>
    );
  }
  

  function CanvasCreation(){
    const {...config}={
      backside: true,
      backsideThickness:.3,
      transmission:1,
      thickness:.3,
      chromaticAbberation:5,
      ior:1.5,
      // color:"black",

    }
    return(<Canvas camera={{position:[0,0,6]}}>
    <Float speed={2} rotationIntensity={1}> 
    <Text  position={[0, 0, 0]} 
        fontSize={1} 
        color="white" 
        anchorX="center" 
        anchorY="middle">
      trial
    </Text>
    <Environment preset='city' blur={0.5}/>
    <axesHelper args={[50]}/>
    <OrbitControls/>
    </Float>
    </Canvas>
    )
  }

  function Texttrial({children}){

    return(
      <>
      <group>
        <Center>
          {/* <Text3D
          // scale={3}
          // letterSpacing={.03}
          // height={0.25}
          // bevelEnabled
          // bevelSize={.02}
          // bevelSegments={10}
          // curveSegments={120}
          // bevelThickness={0.01}
          >
            {children}
            <MeshTransmissionMaterial {...config}/>
          </Text3D> */}
        </Center>
      </group>
      </>
    )
  }
  export default LoadPage;
