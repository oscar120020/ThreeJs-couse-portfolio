import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { CanvasLoader } from "..";
import { useIncrease } from "../../hooks/useIncrease";

const Ball = ({ imageUrl }) => {
  const [decal] = useTexture([imageUrl]);
  // const [isMouseOver, setIsMouseOver] = useState(false);
  // const { increase, stopIncrease, continueIncrease } = useIncrease(0.02);

  // useEffect(() => {
  //   if (isMouseOver) {
  //     stopIncrease()
  //   } else {
  //     continueIncrease()
  //   }
  // }, [isMouseOver]);

  return (
    <Float
      speed={0.75}
      rotationIntensity={1}
      floatIntensity={2}
      // onPointerEnter={() => setIsMouseOver(true)}
      // onPointerLeave={() => setIsMouseOver(false)}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imageUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
