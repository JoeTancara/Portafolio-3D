import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            intensity={100}
            penumbra={0.5}
            color="white"
        />
        <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            intensity={40}
            penumbra={0.5}
            color="#4cf0ed"
        />
        <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            intensity={60}
            penumbra={2}
            color="#0d4bd2"
        />
        <primitive 
            object={new THREE.RectAreaLight('#242986', 8, 3, 2)}
            position={[1, 3, 4]}
            intensity={15}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        <pointLight
            position={[0, 1, 0]}
            intensity={10}
            color="#0d00a4"
        />
        <pointLight
            position={[1, 2, -2]}
            intensity={10}
            color="#7209b7"
        />

    </>
  )
}

export default HeroLights