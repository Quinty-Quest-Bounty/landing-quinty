import { Canvas } from '@react-three/fiber'
import { ParticleField } from './ParticleField'
import { useDeviceCapability } from '../hooks/useDeviceCapability'

export default function Scene3D() {
  const tier = useDeviceCapability()

  return (
    <Canvas
      gl={{
        powerPreference: 'high-performance',
        alpha: true,
        antialias: false,
        stencil: false,
        depth: false,
      }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ParticleField count={tier === 'high' ? 250 : 80} />
    </Canvas>
  )
}
