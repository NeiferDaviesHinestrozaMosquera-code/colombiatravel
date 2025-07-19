import React, { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float, Environment, Cloud, Sky } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { ChevronDown, Play } from 'lucide-react'
import * as THREE from 'three'

// Componente de montañas 3D
const Mountains = () => {
  const mountainRef = useRef()
  
  useFrame((state) => {
    if (mountainRef.current) {
      mountainRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  return (
    <group ref={mountainRef}>
      {/* Montaña principal */}
      <mesh position={[-2, -1, -5]} scale={[3, 4, 3]}>
        <coneGeometry args={[1, 2, 8]} />
        <meshLambertMaterial color="#2d5016" />
      </mesh>
      
      {/* Montañas secundarias */}
      <mesh position={[1, -1.5, -6]} scale={[2, 3, 2]}>
        <coneGeometry args={[1, 2, 8]} />
        <meshLambertMaterial color="#1a3009" />
      </mesh>
      
      <mesh position={[3, -2, -7]} scale={[1.5, 2.5, 1.5]}>
        <coneGeometry args={[1, 2, 8]} />
        <meshLambertMaterial color="#0f1f05" />
      </mesh>
    </group>
  )
}

// Componente de texto 3D flotante
const FloatingText = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={[0, 1, 0]}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        COLOMBIA
        <meshStandardMaterial color="#ffffff" emissive="#ffdd44" emissiveIntensity={0.2} />
      </Text>
      <Text
        position={[0, 0.2, 0]}
        fontSize={0.4}
        color="#ffdd44"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Regular.woff"
      >
        MÁGICA
        <meshStandardMaterial color="#ffdd44" emissive="#ffdd44" emissiveIntensity={0.3} />
      </Text>
    </Float>
  )
}

// Componente de partículas flotantes
const FloatingParticles = () => {
  const particlesRef = useRef()
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const particles = []
  for (let i = 0; i < 50; i++) {
    particles.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 20
        ]}
      >
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#ffdd44" transparent opacity={0.6} />
      </mesh>
    )
  }

  return <group ref={particlesRef}>{particles}</group>
}

// Escena 3D principal
const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Suspense fallback={null}>
        {/* Iluminación */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#ffdd44" intensity={0.5} />
        
        {/* Cielo y ambiente */}
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        
        {/* Nubes */}
        <Cloud
          position={[-4, 2, -10]}
          speed={0.2}
          opacity={0.4}
          color="#ffffff"
        />
        <Cloud
          position={[4, 1, -8]}
          speed={0.3}
          opacity={0.3}
          color="#ffffff"
        />
        
        {/* Componentes 3D */}
        <Mountains />
        <FloatingText />
        <FloatingParticles />
        
        {/* Controles */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Suspense>
    </Canvas>
  )
}

const Hero = () => {
  const heroRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset
        const parallax = scrolled * 0.5
        heroRef.current.style.transform = `translateY(${parallax}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-yellow-600" />
      
      {/* Escena 3D */}
      <div ref={heroRef} className="absolute inset-0">
        <Scene3D />
      </div>
      
      {/* Overlay con contenido */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Descubre la
            <span className="block text-yellow-400">Magia de Colombia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up animation-delay-300">
            Paisajes únicos, cultura vibrante y experiencias inolvidables te esperan
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg"
            >
              Explorar Destinos
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Video
            </Button>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
      
      {/* Overlay de gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}

export default Hero

