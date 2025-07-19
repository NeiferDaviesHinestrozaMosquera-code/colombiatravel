import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float, useTexture, Sphere } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { MapPin, Star, Calendar, Users } from 'lucide-react'

// Componente de esfera 3D con textura
const DestinationSphere = ({ texture, position, onClick, isActive }) => {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      if (isActive) {
        meshRef.current.scale.setScalar(1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh
        ref={meshRef}
        position={position}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto'
        }}
      >
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          map={texture} 
          emissive={isActive ? "#ffdd44" : "#000000"}
          emissiveIntensity={isActive ? 0.2 : 0}
        />
      </mesh>
    </Float>
  )
}

// Escena 3D de destinos
const DestinationsScene = ({ destinations, activeDestination, setActiveDestination }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ height: '400px' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, 0, -10]} color="#ffdd44" intensity={0.3} />
        
        {destinations.map((destination, index) => {
          const angle = (index / destinations.length) * Math.PI * 2
          const radius = 3
          const position = [
            Math.cos(angle) * radius,
            Math.sin(angle * 0.5) * 0.5,
            Math.sin(angle) * radius
          ]
          
          return (
            <DestinationSphere
              key={destination.id}
              position={position}
              onClick={() => setActiveDestination(index)}
              isActive={activeDestination === index}
            />
          )
        })}
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
        />
      </Suspense>
    </Canvas>
  )
}

const Destinations = () => {
  const [activeDestination, setActiveDestination] = useState(0)
  
  const destinations = [
    {
      id: 1,
      name: "Cartagena de Indias",
      description: "Ciudad amurallada llena de historia, cultura y arquitectura colonial única.",
      image: "/src/assets/rzSvJ79ira3H.jpg",
      price: "$299",
      duration: "4 días",
      rating: 4.9,
      highlights: ["Ciudad Amurallada", "Playas del Caribe", "Gastronomía Local"]
    },
    {
      id: 2,
      name: "Eje Cafetero",
      description: "Paisajes montañosos, plantaciones de café y la cultura paisa más auténtica.",
      image: "/src/assets/ptGahub03730.jpeg",
      price: "$249",
      duration: "5 días",
      rating: 4.8,
      highlights: ["Plantaciones de Café", "Valle de Cocora", "Pueblos Patrimonio"]
    },
    {
      id: 3,
      name: "Caño Cristales",
      description: "El río más hermoso del mundo con sus colores únicos y biodiversidad.",
      image: "/src/assets/sP0dEc9iv6HL.jpeg",
      price: "$399",
      duration: "3 días",
      rating: 4.9,
      highlights: ["Río de Colores", "Naturaleza Virgen", "Aventura Extrema"]
    },
    {
      id: 4,
      name: "Tayrona",
      description: "Parque nacional con playas paradisíacas y selva tropical exuberante.",
      image: "/src/assets/c6SOnEPv4N7w.jpg",
      price: "$199",
      duration: "3 días",
      rating: 4.7,
      highlights: ["Playas Vírgenes", "Selva Tropical", "Cultura Indígena"]
    }
  ]

  const currentDestination = destinations[activeDestination]

  return (
    <section id="destinations" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Destinos <span className="text-yellow-500">Mágicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los lugares más increíbles de Colombia con nuestras experiencias únicas y personalizadas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Escena 3D */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              <DestinationsScene 
                destinations={destinations}
                activeDestination={activeDestination}
                setActiveDestination={setActiveDestination}
              />
            </div>
            
            {/* Controles de navegación */}
            <div className="flex justify-center mt-6 space-x-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDestination(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeDestination === index 
                      ? 'bg-yellow-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Información del destino activo */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={currentDestination.image}
                alt={currentDestination.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold">{currentDestination.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{currentDestination.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{currentDestination.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {currentDestination.name}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {currentDestination.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Destacados del viaje:</h4>
                <ul className="space-y-2">
                  {currentDestination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <span className="text-3xl font-bold text-yellow-600">
                    {currentDestination.price}
                  </span>
                  <span className="text-gray-500 ml-2">por persona</span>
                </div>
                
                <Button 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Reservar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destinations

