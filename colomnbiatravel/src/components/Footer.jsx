import React from 'react'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    destinos: [
      { name: 'Cartagena de Indias', href: '#' },
      { name: 'Eje Cafetero', href: '#' },
      { name: 'Caño Cristales', href: '#' },
      { name: 'Parque Tayrona', href: '#' },
      { name: 'Bogotá', href: '#' },
      { name: 'Medellín', href: '#' }
    ],
    servicios: [
      { name: 'Tours Personalizados', href: '#' },
      { name: 'Paquetes Familiares', href: '#' },
      { name: 'Viajes de Aventura', href: '#' },
      { name: 'Turismo Cultural', href: '#' },
      { name: 'Ecoturismo', href: '#' },
      { name: 'Turismo Gastronómico', href: '#' }
    ],
    empresa: [
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Nuestro Equipo', href: '#' },
      { name: 'Testimonios', href: '#' },
      { name: 'Blog de Viajes', href: '#' },
      { name: 'Trabaja con Nosotros', href: '#' },
      { name: 'Sostenibilidad', href: '#' }
    ],
    ayuda: [
      { name: 'Preguntas Frecuentes', href: '#' },
      { name: 'Términos y Condiciones', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Política de Cancelación', href: '#' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Soporte 24/7', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <MapPin className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold">Colombia Mágica</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tu puerta de entrada a los destinos más increíbles de Colombia. 
              Creamos experiencias auténticas que conectan viajeros con la 
              verdadera esencia de nuestro hermoso país.
            </p>

            {/* Información de contacto */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">+57 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">info@colombiamagica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-300">Carrera 7 #32-16, Bogotá</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 transition-colors ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces de destinos */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Destinos</h3>
            <ul className="space-y-3">
              {footerLinks.destinos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces de ayuda */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-yellow-500">Ayuda</h3>
            <ul className="space-y-3">
              {footerLinks.ayuda.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                Suscríbete a nuestro newsletter
              </h3>
              <p className="text-gray-300">
                Recibe ofertas exclusivas y consejos de viaje directamente en tu email
              </p>
            </div>
            
            <div className="flex max-w-md">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
              />
              <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-r-md transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              © {currentYear} Colombia Mágica. Todos los derechos reservados.
            </div>
            
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Servicio
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

