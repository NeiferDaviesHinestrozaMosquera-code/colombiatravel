import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se integrará con Firebase/Supabase
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Carrera 7 #32-16", "Bogotá, Colombia"],
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+57 1 234 5678", "+57 300 123 4567"],
      color: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@colombiamagica.com", "reservas@colombiamagica.com"],
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sáb: 9:00 AM - 2:00 PM"],
      color: "text-purple-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¡Hablemos de tu <span className="text-yellow-500">Próxima Aventura!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a planificar el viaje perfecto por Colombia. 
            Contáctanos y comencemos a crear recuerdos inolvidables.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <info.icon className={`h-8 w-8 mb-4 ${info.color}`} />
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Mapa placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-2">Nuestra Oficina</h4>
                  <p>Carrera 7 #32-16, Bogotá</p>
                  <p className="text-sm opacity-90">Zona Rosa - Chapinero</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos en Redes Sociales</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter', 'YouTube'].map((social) => (
                  <Button
                    key={social}
                    variant="outline"
                    size="sm"
                    className="hover:bg-yellow-50 hover:border-yellow-500"
                  >
                    {social}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+57 300 123 4567"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destino de Interés
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Selecciona un destino</option>
                    <option value="cartagena">Cartagena de Indias</option>
                    <option value="eje-cafetero">Eje Cafetero</option>
                    <option value="cano-cristales">Caño Cristales</option>
                    <option value="tayrona">Parque Tayrona</option>
                    <option value="otro">Otro destino</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu viaje ideal, fechas, número de personas, intereses especiales..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Tiempo de respuesta:</strong> Nos comprometemos a responder tu consulta 
                en menos de 24 horas durante días hábiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

