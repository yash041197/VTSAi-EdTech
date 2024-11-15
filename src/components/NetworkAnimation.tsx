import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const GOALS = [
  "Study in Europe with Us",
  "Connect with Top Universities",
  "Transform Your Future",
  "Global Education Network"
];

function AnimatedText() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GOALS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1 + 2;
      textRef.current.material.opacity = (Math.sin(clock.getElapsedTime() * 2) + 1) / 2;
    }
  });

  return (
    <Text
      ref={textRef}
      fontSize={0.8}
      color="#1E40AF"
      anchorX="center"
      anchorY="middle"
      position={[0, 2, 0]}
      material-transparent={true}
      material-depthWrite={false}
      fontWeight={700}
    >
      {GOALS[currentIndex]}
    </Text>
  );
}

function FloatingParticles() {
  const particlesCount = 200;
  const particlesRef = useRef();
  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  const speeds = new Float32Array(particlesCount);

  useEffect(() => {
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      speeds[i] = Math.random() * 0.02 + 0.02;
      
      // Generate different shades of blue
      colors[i * 3] = 0.2 + Math.random() * 0.2; // R
      colors[i * 3 + 1] = 0.4 + Math.random() * 0.2; // G
      colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
    }
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particlesCount; i++) {
        const idx = i * 3;
        positions[idx + 1] += speeds[i];
        if (positions[idx + 1] > 8) positions[idx + 1] = -8;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function ConnectionsNetwork() {
  const linesRef = useRef();
  const nodesCount = 12;
  const nodes = [];

  for (let i = 0; i < nodesCount; i++) {
    const angle = (i / nodesCount) * Math.PI * 2;
    const radius = 4 + Math.random() * 2;
    nodes.push(new THREE.Vector3(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      (Math.random() - 0.5) * 2
    ));
  }

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = clock.getElapsedTime() * 0.1;
      linesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group ref={linesRef}>
      {nodes.map((start, i) => 
        nodes.slice(i + 1).map((end, j) => (
          <line key={`${i}-${j}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  start.x, start.y, start.z,
                  end.x, end.y, end.z
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#2563EB" linewidth={2} transparent opacity={0.4} />
          </line>
        ))
      )}
      {nodes.map((pos, i) => (
        <mesh key={`node-${i}`} position={[pos.x, pos.y, pos.z]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <AnimatedText />
      <FloatingParticles />
      <ConnectionsNetwork />
    </>
  );
}

export default function NetworkAnimation() {
  return (
    <section className="h-[600px] bg-gradient-to-b from-blue-50 to-white">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Scene />
      </Canvas>
    </section>
  );
}