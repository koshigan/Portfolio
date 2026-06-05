import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, MeshDistortMaterial, Float } from '@react-three/drei'

// Particle star field
function ParticleField() {
  const ref = useRef()
  const sphere = useMemo(() => {
    const positions = new Float32Array(3000)
    for (let i = 0; i < 3000; i++) {
      positions[i] = (Math.random() - 0.5) * 20
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.04
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  )
}

// Floating glowing sphere
function GlowSphere({ position, color, scale, speed }) {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.4
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          transparent
          opacity={0.12}
          wireframe={false}
        />
      </mesh>
    </Float>
  )
}

// Rotating torus ring
function RotatingTorus({ position, color, scale }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4
      ref.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[1, 0.25, 16, 80]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.18}
        wireframe={false}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

// Icosahedron wireframe
function WireIco({ position, color, scale }) {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2
      ref.current.rotation.y = state.clock.elapsedTime * 0.35
    }
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.22}
        emissive={color}
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}

export default function ThreeHero() {
  return (
    <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[-5, -3, 3]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 0, 6]} intensity={0.5} color="#3b82f6" />

        <ParticleField />

        {/* Background spheres */}
        <GlowSphere position={[3.5, 1, -2]} color="#8b5cf6" scale={2.5} speed={0.8} />
        <GlowSphere position={[-3.2, -1.5, -3]} color="#06b6d4" scale={1.8} speed={1.1} />
        <GlowSphere position={[1, -2.5, -1]} color="#3b82f6" scale={1.2} speed={1.4} />

        {/* Torus rings */}
        <RotatingTorus position={[3.8, -0.5, -1]} color="#8b5cf6" scale={1.2} />
        <RotatingTorus position={[-4, 1.5, -2]} color="#06b6d4" scale={0.8} />

        {/* Wireframe ico */}
        <WireIco position={[-2.5, 2.5, -1]} color="#a78bfa" scale={1.0} />
        <WireIco position={[2, -2.8, -0.5]} color="#22d3ee" scale={0.7} />
      </Canvas>
    </div>
  )
}
