import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text3D, Float, Center } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { Award, Users, MapPin, Heart } from 'lucide-react'

// Componente de logo 3D animado
const Logo3D = () => {
  const logoRef = useRef()
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
      <group ref={logoRef}>
        {/* Forma principal del logo */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.8, 1.2, 0.3, 6]} />
          <meshStandardMaterial 
            color="#ffdd44" 
            emissive="#ffaa00" 
            emissiveIntensity={0.2}
          />
        </mesh>
        
        {/* Elementos decorativos */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial 
            color="#ff6b35" 
            emissive="#ff4500" 
            emissiveIntensity={0.3}
          />
        </mesh>
        
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[1.5, 0.2, 0.2]} />
          <meshStandardMaterial 
            color="#4ecdc4" 
            emissive="#00ced1" 
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Escena 3D para la sección About
const AboutScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ height: '300px' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, 0, -10]} color="#ffdd44" intensity={0.5} />
        
        <Logo3D />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={2}
        />
      </Suspense>
    </Canvas>
  )
}

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Viajeros Felices",
      color: "text-blue-600"
    },
    {
      icon: MapPin,
      number: "50+",
      label: "Destinos Únicos",
      color: "text-green-600"
    },
    {
      icon: Award,
      number: "15",
      label: "Años de Experiencia",
      color: "text-yellow-600"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Satisfacción",
      color: "text-red-600"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido textual */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre <span className="text-yellow-500">Nosotros</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Somos una agencia de turismo especializada en mostrar la verdadera esencia de Colombia. 
                Con más de 15 años de experiencia, hemos ayudado a miles de viajeros a descubrir los 
                tesoros ocultos de nuestro hermoso país.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro compromiso es brindar experiencias auténticas, seguras y memorables que conecten 
                a nuestros huéspedes con la rica cultura, biodiversidad y hospitalidad colombiana.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Valores */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Nuestros Valores</h3>
              <div className="space-y-3">
                {[
                  "Autenticidad en cada experiencia",
                  "Sostenibilidad y respeto por el medio ambiente",
                  "Apoyo a las comunidades locales",
                  "Seguridad y confianza en todos nuestros servicios"
                ].map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Conoce Nuestro Equipo
            </Button>
          </div>

          {/* Escena 3D */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl shadow-xl p-8">
              <AboutScene />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse animation-delay-1000" />
          </div>
        </div>

        {/* Sección de misión y visión */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Conectar a viajeros de todo el mundo con la magia de Colombia, ofreciendo experiencias 
              turísticas auténticas, sostenibles y transformadoras que generen un impacto positivo 
              en las comunidades locales y el medio ambiente.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser la agencia de turismo líder en Colombia, reconocida internacionalmente por la 
              calidad de nuestros servicios, nuestro compromiso con la sostenibilidad y nuestra 
              capacidad de crear recuerdos inolvidables para cada viajero.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

