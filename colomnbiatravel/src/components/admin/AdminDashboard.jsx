import React from 'react'
import { 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Eye,
  Star
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const AdminDashboard = () => {
  // Datos de ejemplo para las estadísticas
  const stats = [
    {
      title: 'Total Usuarios',
      value: '2,847',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Reservas Activas',
      value: '156',
      change: '+8%',
      trend: 'up',
      icon: Calendar,
      color: 'bg-green-500'
    },
    {
      title: 'Ingresos del Mes',
      value: '$45,230',
      change: '+23%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-yellow-500'
    },
    {
      title: 'Destinos Activos',
      value: '24',
      change: '-2%',
      trend: 'down',
      icon: MapPin,
      color: 'bg-purple-500'
    }
  ]

  // Datos para el gráfico de ventas
  const salesData = [
    { name: 'Ene', ventas: 4000, reservas: 24 },
    { name: 'Feb', ventas: 3000, reservas: 18 },
    { name: 'Mar', ventas: 5000, reservas: 32 },
    { name: 'Abr', ventas: 4500, reservas: 28 },
    { name: 'May', ventas: 6000, reservas: 38 },
    { name: 'Jun', ventas: 5500, reservas: 35 },
    { name: 'Jul', ventas: 7000, reservas: 42 }
  ]

  // Datos para destinos populares
  const popularDestinations = [
    { name: 'Cartagena', bookings: 45, rating: 4.9 },
    { name: 'Eje Cafetero', bookings: 38, rating: 4.8 },
    { name: 'Tayrona', bookings: 32, rating: 4.7 },
    { name: 'Caño Cristales', bookings: 28, rating: 4.9 },
    { name: 'Bogotá', bookings: 25, rating: 4.6 }
  ]

  // Reservas recientes
  const recentBookings = [
    { id: 1, customer: 'María González', destination: 'Cartagena', date: '2025-01-15', status: 'confirmada' },
    { id: 2, customer: 'Carlos Rodríguez', destination: 'Eje Cafetero', date: '2025-01-18', status: 'pendiente' },
    { id: 3, customer: 'Ana Martínez', destination: 'Tayrona', date: '2025-01-20', status: 'confirmada' },
    { id: 4, customer: 'Luis Pérez', destination: 'Caño Cristales', date: '2025-01-22', status: 'cancelada' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-600">Resumen general de Colombia Mágica</p>
      </div>

      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">vs mes anterior</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Gráfico de ventas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ventas Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="ventas" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de reservas */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Reservas por Mes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reservas" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Destinos populares y reservas recientes */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Destinos populares */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinos Más Populares</h3>
          <div className="space-y-4">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{destination.name}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{destination.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{destination.bookings}</p>
                  <p className="text-sm text-gray-500">reservas</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservas recientes */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Reservas Recientes</h3>
          <div className="space-y-4">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{booking.customer}</p>
                  <p className="text-sm text-gray-600">{booking.destination}</p>
                  <p className="text-xs text-gray-500">{booking.date}</p>
                </div>
                <div>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    booking.status === 'confirmada' 
                      ? 'bg-green-100 text-green-800'
                      : booking.status === 'pendiente'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

