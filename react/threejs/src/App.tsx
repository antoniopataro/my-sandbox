import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";

import "./App.css";

function Chest() {
  const gltf = useGLTF("/chest.glb");
  const [ref] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));

  return <primitive ref={ref} object={gltf.scene} scale={1} />;
}

function Tower() {
  const gltf = useGLTF("/towers.glb");
  const [ref] = useBox(() => ({ mass: 10, position: [10, 1, 0] }));

  return <primitive ref={ref} object={gltf.scene} scale={5} />;
}

function Plane() {
  const [ref] = usePlane(() => ({
    mass: 0,
    position: [0, -1, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }));

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhongMaterial attach="material" color="yellow" />
    </mesh>
  );
}

function App() {
  return (
    <div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Physics>
          <Chest />
          <Tower />
          <Plane />
        </Physics>
        <Environment background={true} path={"/"} preset={"forest"} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
