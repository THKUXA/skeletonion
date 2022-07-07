import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls, Text } from '@react-three/drei';
import Grid from './Grid/Grid';
import { textGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import './ScatterPlot.css'


const ScatterPlot = ({boxes}) => {
  const deg2rad = degrees => degrees * (Math.PI / 180);
  const size = 50
  const divisions = 10
  const [Flipx, setFlipx] = useState(false)
  const [Flipy, setFlipy] = useState(false)
  const [Flipz, setFlipz] = useState(false)
  
  const ocRef = useRef(null)

  function Box(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    
    return (
      <>
        <mesh
          {...props}
          ref={mesh}
          onClick={(event) => setActive(!active)}
          onPointerOver={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
          {hovered && <Html >
        <div class="content">
            X:{props.position[0]} <br />
            Y:{props.position[1]} <br />
            Z:{props.position[2]} <br />

        </div>
      </Html>}
        </mesh>
       
      </>
    )
  }
  function ResetCamera(){
      ocRef.current.reset()
  }
  function Camera(){
  
   
    useFrame(({camera}) => {
      
      if(camera.position.y<=(-size/2)){
          setFlipx(true)
      }else{
        setFlipx(false)
      }
      if(camera.position.x<=(size/2)){
          setFlipy(false)
      }else{
        setFlipy(true)
      }
      if(camera.position.z<=(size/2)){
          setFlipz(false)
      }else{setFlipz(true)}
    })
    return null
  }
  return (
    <>
      <button onClick={ResetCamera} className ='cambutton'> Reset Camera</button>
      <Canvas camera={{fov:75,  position: [size/2,size/2,size/2]}} className = 'Canvas'>
      <OrbitControls ref={ocRef}/>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Grid size={size} divisions = {14} rotation = {[0,0,1]} position = {[1,0,0]} flip = {Flipy} Flipx = {Flipx} Flipy = {Flipy} Flipz = {Flipz}/>
        <Grid size={size} divisions = {5} rotation = {[0,1,0]} position = {[0,1,0]} flip = {Flipx} Flipx = {Flipx} Flipy = {Flipy} Flipz = {Flipz}/>
        <Grid size={size} divisions = {9} rotation = {[1,0,0]} position = {[0,0,1]} flip = {Flipz} Flipx = {Flipx} Flipy = {Flipy} Flipz = {Flipz}/>
        <Camera />
        {boxes.map((item,i) => <Box position={item}/>)}

      </Canvas>
    </>
  )
}

export default ScatterPlot