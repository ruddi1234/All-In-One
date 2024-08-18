import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, SpotLight, useSpriteLoader, OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as random from "maath/random/dist/maath-random.esm";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[10]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpotLight
          position={[-5, 1, -1]}
          angle={0.30}
          penumbra={1}
          intensity={10}
          distance={15}
          color="#ffffff"
          castShadow
        />
        <SpotLight
          position={[5, 1, -1]}
          angle={0.30}
          penumbra={1}
          intensity={10}
          distance={15}
          color="#ffffff"
          castShadow
        />
        <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars />
        </Suspense>
        <EffectComposer>
          <Bloom luminanceThreshold={1} luminanceSmoothing={1} height={100} />
        </EffectComposer>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;