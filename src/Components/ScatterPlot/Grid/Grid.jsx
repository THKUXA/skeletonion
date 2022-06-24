import { Html } from '@react-three/drei'
import React, { useRef } from 'react'
import { AxesHelper } from 'three'

const Grid = ({rotation, size, divisions, flip, position, Flipx, Flipy, Flipz}) => {
    const mesh = useRef(null)
    //gridposition
    let gridposition = position.slice()
    gridposition[0] = gridposition[0] * (size/2)
    gridposition[1] = gridposition[1] * (size/2)
    gridposition[2] = gridposition[2] * (size/2)
    //gridrotation
    let gridrotation = rotation.slice()
    gridrotation[0] = gridrotation[0] * (Math.PI/2)
    gridrotation[1] = gridrotation[1] * (Math.PI/2)
    gridrotation[2] = gridrotation[2] * (Math.PI/2)
    let flippedx = Flipx ? -1: 1
    let flippedy = Flipy ? -1: 1
    let flippedz = Flipz ? -1: 1
  return (
    (flip &&
        <>
            <gridHelper 
                args = {[size,divisions,0xFFFFFF,0xFFFFFF]}
                position = {[-gridposition[0],gridposition[1],-gridposition[2]]}
                rotation = {[gridrotation[0],gridrotation[1],gridrotation[2]]}
            />
            <mesh
                ref={mesh}
                position = {[-gridposition[0]-0.01,gridposition[1]+0.01,-gridposition[2]-0.01]}
                rotation = {[gridrotation[1],gridrotation[2],gridrotation[0]]}
            >
                <boxGeometry args={[size,size,0]} />
                <meshStandardMaterial color={'rgb(181, 208, 232)'} />
            {
                (position[0] && 
                    <Html position={[size/1.5*flippedz,0,0]}>
                        <div><h1>Y-Axis</h1></div>
                    </Html>)
                 ||
                <></>
            }
            {
                (position[1] && 
                    <Html position={[0,-size/1.5*flippedz,0]}>
                        <div><h1>X-Axis</h1></div>
                    </Html>
                ) ||
                <></>
            }
            {
                (position[2] && 
                    <Html position={[size/1.5*flippedx,0,0]}>
                        <div><h1>Z-Axis</h1></div>
                    </Html>
                ) ||
                <></>
            }
            
            </mesh>
        </>
            ) 
    || 
        <>
            <gridHelper 
                args = {[size,divisions,0xFFFFFF,0xFFFFFF]}
                position = {[gridposition[0]-0.01,-gridposition[1]+0.01,gridposition[2]-0.01]}
                rotation = {[gridrotation[0],gridrotation[1],gridrotation[2]]}
            />
            <mesh
                ref={mesh}
                position = {[gridposition[0],-gridposition[1],gridposition[2]]}
                rotation = {[gridrotation[1],gridrotation[2],gridrotation[0]]}

            >
                <boxGeometry args={[size,size,0]} />
                <meshStandardMaterial color={'rgb(181, 208, 232)'} />
                {
                (position[0] && 
                    <Html position={[size/1.5*flippedz,0,0]}>
                        <div><h1>Y-Axis</h1></div>
                    </Html>)
                 ||
                <></>
            }
            {
                (position[1] && 
                    <Html position={[0,-size/1.5*flippedz,0]} style= {{width:'400px', display: 'inline'}}>
                        <div>
                            <h1>X-Axis</h1>
                            </div>
                    </Html>
                ) ||
                <></>
            }
            {
                (position[2] && 
                    <Html position={[size/1.5*flippedx,0,0]}>
                        <div><h1>Z-Axis</h1></div>
                    </Html>
                ) ||
                <></>
            }
            </mesh>
        </>
  )
}

export default Grid