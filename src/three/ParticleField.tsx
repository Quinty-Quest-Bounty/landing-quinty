import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  speed?: number
}

export function ParticleField({ count = 600, speed = 0.008 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null!)

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      // Wider spread for dense background coverage
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
      // Varied sizes — some larger "star" particles
      sz[i] = Math.random() < 0.1 ? 0.06 + Math.random() * 0.04 : 0.015 + Math.random() * 0.02
    }
    return { positions: pos, sizes: sz }
  }, [count])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y += delta * speed
    pointsRef.current.rotation.x += delta * speed * 0.3
    // Gentle float
    pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#0EA885"
        transparent
        opacity={0.65}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
