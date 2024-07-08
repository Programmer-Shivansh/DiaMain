// src/App.jsx

import { Loader, PerformanceMonitor, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Physics } from "@react-three/rapier";
import { Suspense, useState } from "react";
import { Experience } from "./components/Experience";
import { Leaderboard } from "./components/Leaderboard";
import Marketplace from "./components/Marketplace";
import Modal from "react-modal";

// Set the app element for the modal
Modal.setAppElement('#root');

function App() {
  const [downgradedPerformance, setDowngradedPerformance] = useState(false);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  return (
    <>
      <Loader />
      <Leaderboard />
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px',
          zIndex: 1000
        }}
        onClick={() => {setIsMarketplaceOpen(true)
          
        }}
      >
        Open Marketplace
      </button>
      <Modal
        isOpen={isMarketplaceOpen}
        onRequestClose={() => setIsMarketplaceOpen(false)}
        contentLabel="Marketplace Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            backgroundColor:'white',
            zIndex:1001,


          },
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '10px',
            zIndex: 1000
          }}
          onClick={() => setIsMarketplaceOpen(false)}
        >
          Close Marketplace
        </button>
        <Marketplace />
      </Modal>
      <Canvas
        shadows
        camera={{ position: [0, 30, 0], fov: 30, near: 2 }}
        dpr={[1, 1.5]} // optimization to increase performance on retina/4k devices
      >
        <color attach="background" args={["#242424"]} />
        <SoftShadows size={42} />

        <PerformanceMonitor
          // Detect low performance devices
          onDecline={(fps) => {
            setDowngradedPerformance(true);
          }}
        />
        <Suspense>
          <Physics>
            <Experience downgradedPerformance={downgradedPerformance} />
          </Physics>
        </Suspense>
        {!downgradedPerformance && (
          // disable the postprocessing on low-end devices
          <EffectComposer disableNormalPass>
            <Bloom luminanceThreshold={1} intensity={1.5} mipmapBlur />
          </EffectComposer>
        )}
      </Canvas>
    </>
  );
}

export default App;
