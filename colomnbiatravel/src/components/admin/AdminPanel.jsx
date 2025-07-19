import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'
import AdminDestinations from './AdminDestinations'
import AdminBookings from './AdminBookings'
import AdminUsers from './AdminUsers'
import AdminSettings from './AdminSettings'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

const AdminPanel = () => {
  const { user } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Si no hay usuario autenticado, mostrar login
  if (!user) {
    return <AdminLogin />
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Contenido principal */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <AdminHeader setSidebarOpen={setSidebarOpen} />
          
          {/* Contenido */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/destinations" element={<AdminDestinations />} />
              <Route path="/bookings" element={<AdminBookings />} />
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/settings" element={<AdminSettings />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminPanel

