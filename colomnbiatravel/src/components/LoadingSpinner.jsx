import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-b-white rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Colombia Mágica</h2>
        <p className="text-white/80">Cargando experiencias únicas...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner

