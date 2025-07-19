import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Save, 
  Upload, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Palette, 
  Shield,
  Bell,
  Database
} from 'lucide-react'

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('general')
  
  const [generalSettings, setGeneralSettings] = useState({
    siteName: 'Colombia Mágica',
    siteDescription: 'Tu puerta de entrada a los destinos más increíbles de Colombia',
    contactEmail: 'info@colombiamagica.com',
    contactPhone: '+57 1 234 5678',
    address: 'Carrera 7 #32-16, Bogotá, Colombia',
    socialMedia: {
      facebook: 'https://facebook.com/colombiamagica',
      instagram: 'https://instagram.com/colombiamagica',
      twitter: 'https://twitter.com/colombiamagica',
      youtube: 'https://youtube.com/colombiamagica'
    }
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    smtpUser: 'noreply@colombiamagica.com',
    smtpPassword: '••••••••',
    fromName: 'Colombia Mágica',
    fromEmail: 'noreply@colombiamagica.com'
  })

  const [notificationSettings, setNotificationSettings] = useState({
    newBookingEmail: true,
    cancelBookingEmail: true,
    paymentEmail: true,
    weeklyReport: true,
    monthlyReport: true,
    systemAlerts: true
  })

  const tabs = [
    { id: 'general', name: 'General', icon: Globe },
    { id: 'email', name: 'Email', icon: Mail },
    { id: 'notifications', name: 'Notificaciones', icon: Bell },
    { id: 'security', name: 'Seguridad', icon: Shield },
    { id: 'backup', name: 'Respaldo', icon: Database }
  ]

  const handleGeneralChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setGeneralSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setGeneralSettings(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const handleEmailChange = (field, value) => {
    setEmailSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleNotificationChange = (field, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSave = () => {
    // Aquí se guardarían las configuraciones en Firebase/Supabase
    alert('Configuraciones guardadas exitosamente')
  }

  const renderGeneralTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Información General</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del Sitio
            </label>
            <Input
              value={generalSettings.siteName}
              onChange={(e) => handleGeneralChange('siteName', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de Contacto
            </label>
            <Input
              type="email"
              value={generalSettings.contactEmail}
              onChange={(e) => handleGeneralChange('contactEmail', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono de Contacto
            </label>
            <Input
              value={generalSettings.contactPhone}
              onChange={(e) => handleGeneralChange('contactPhone', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dirección
            </label>
            <Input
              value={generalSettings.address}
              onChange={(e) => handleGeneralChange('address', e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción del Sitio
          </label>
          <Textarea
            value={generalSettings.siteDescription}
            onChange={(e) => handleGeneralChange('siteDescription', e.target.value)}
            rows={3}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Redes Sociales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facebook
            </label>
            <Input
              value={generalSettings.socialMedia.facebook}
              onChange={(e) => handleGeneralChange('socialMedia.facebook', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instagram
            </label>
            <Input
              value={generalSettings.socialMedia.instagram}
              onChange={(e) => handleGeneralChange('socialMedia.instagram', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Twitter
            </label>
            <Input
              value={generalSettings.socialMedia.twitter}
              onChange={(e) => handleGeneralChange('socialMedia.twitter', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              YouTube
            </label>
            <Input
              value={generalSettings.socialMedia.youtube}
              onChange={(e) => handleGeneralChange('socialMedia.youtube', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const renderEmailTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración SMTP</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Servidor SMTP
            </label>
            <Input
              value={emailSettings.smtpHost}
              onChange={(e) => handleEmailChange('smtpHost', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Puerto
            </label>
            <Input
              value={emailSettings.smtpPort}
              onChange={(e) => handleEmailChange('smtpPort', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Usuario SMTP
            </label>
            <Input
              value={emailSettings.smtpUser}
              onChange={(e) => handleEmailChange('smtpUser', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contraseña SMTP
            </label>
            <Input
              type="password"
              value={emailSettings.smtpPassword}
              onChange={(e) => handleEmailChange('smtpPassword', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre del Remitente
            </label>
            <Input
              value={emailSettings.fromName}
              onChange={(e) => handleEmailChange('fromName', e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email del Remitente
            </label>
            <Input
              type="email"
              value={emailSettings.fromEmail}
              onChange={(e) => handleEmailChange('fromEmail', e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Button variant="outline">
            Probar Configuración
          </Button>
        </div>
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Notificaciones por Email</h3>
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">
                  {key === 'newBookingEmail' && 'Nueva Reserva'}
                  {key === 'cancelBookingEmail' && 'Cancelación de Reserva'}
                  {key === 'paymentEmail' && 'Confirmación de Pago'}
                  {key === 'weeklyReport' && 'Reporte Semanal'}
                  {key === 'monthlyReport' && 'Reporte Mensual'}
                  {key === 'systemAlerts' && 'Alertas del Sistema'}
                </label>
                <p className="text-sm text-gray-500">
                  {key === 'newBookingEmail' && 'Recibir notificación cuando se haga una nueva reserva'}
                  {key === 'cancelBookingEmail' && 'Recibir notificación cuando se cancele una reserva'}
                  {key === 'paymentEmail' && 'Recibir notificación cuando se confirme un pago'}
                  {key === 'weeklyReport' && 'Recibir reporte semanal de actividad'}
                  {key === 'monthlyReport' && 'Recibir reporte mensual de estadísticas'}
                  {key === 'systemAlerts' && 'Recibir alertas importantes del sistema'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => handleNotificationChange(key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Seguridad</h3>
        <div className="space-y-4">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-medium text-yellow-800 mb-2">Cambiar Contraseña</h4>
            <p className="text-sm text-yellow-700 mb-4">
              Se recomienda cambiar la contraseña regularmente por seguridad.
            </p>
            <div className="space-y-3">
              <Input type="password" placeholder="Contraseña actual" />
              <Input type="password" placeholder="Nueva contraseña" />
              <Input type="password" placeholder="Confirmar nueva contraseña" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Cambiar Contraseña
              </Button>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Autenticación de Dos Factores</h4>
            <p className="text-sm text-blue-700 mb-4">
              Añade una capa extra de seguridad a tu cuenta.
            </p>
            <Button variant="outline">
              Configurar 2FA
            </Button>
          </div>
          
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-medium text-red-800 mb-2">Sesiones Activas</h4>
            <p className="text-sm text-red-700 mb-4">
              Revisa y cierra sesiones activas en otros dispositivos.
            </p>
            <Button variant="outline" className="text-red-600 border-red-300">
              Ver Sesiones
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderBackupTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Respaldo de Datos</h3>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-medium text-green-800 mb-2">Respaldo Automático</h4>
            <p className="text-sm text-green-700 mb-4">
              Los datos se respaldan automáticamente cada 24 horas.
            </p>
            <p className="text-sm text-green-600">
              Último respaldo: Hoy a las 03:00 AM
            </p>
          </div>
          
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Respaldo Manual</h4>
            <p className="text-sm text-blue-700 mb-4">
              Crear un respaldo manual de todos los datos del sistema.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              <Database className="h-4 w-4 mr-2" />
              Crear Respaldo
            </Button>
          </div>
          
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-medium text-gray-800 mb-2">Restaurar Datos</h4>
            <p className="text-sm text-gray-700 mb-4">
              Restaurar datos desde un archivo de respaldo.
            </p>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Subir Respaldo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h2>
        <p className="text-gray-600">Administra la configuración general de Colombia Mágica</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'general' && renderGeneralTab()}
          {activeTab === 'email' && renderEmailTab()}
          {activeTab === 'notifications' && renderNotificationsTab()}
          {activeTab === 'security' && renderSecurityTab()}
          {activeTab === 'backup' && renderBackupTab()}
        </div>

        {/* Save Button */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <Button onClick={handleSave} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Save className="h-4 w-4 mr-2" />
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AdminSettings

