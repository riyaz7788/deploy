/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ballon.gltf --transform
Author: Al-Deezel (https://sketchfab.com/moroahmedadel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cartoon-balloons-a54559c7cffa425686f47bb81c6a328f
Title: cartoon balloons
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ballon-transformed.glb')
  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} scale={0.1} />
    </group>
  )
}

useGLTF.preload('/ballon-transformed.glb')
