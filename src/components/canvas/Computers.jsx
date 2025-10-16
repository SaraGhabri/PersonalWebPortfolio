import {Suspense, useEffect, useState} from 'react'
//empty canvas to allow us place smth on it
import { Canvas } from '@react-three/fiber'
//helpers to draw on the canvas the 3d model : useGLTF to load the model
//  OrbitControls to move around the model, Preload to load the model before displaying it
import{ OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");  return (
    //to create 3js element, we use mesh not div
    //to add light to mesh to see it : hemisphereLight, pointLight, spotLight
    //to add texture to the model : use useGLTF hook to load the model
    // and add it to the scene using primitive component
    // to adjust the position, rotation, scale of the model : use scale, position, rotation props
    //to make it responsive : use media query to detect screen size and adjust scale and position accordingly
     <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
  
 
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      //camera : where are we looking at this model from 
      //fov : field of view, how much of the scene we can see
      camera={{ position: [20, 3, 5], fov: 25 }}
      //gl property : to enable antialiasing to make the model look smoother
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>


      
      <Preload all />
    </Canvas>
  );
};

export default Computers