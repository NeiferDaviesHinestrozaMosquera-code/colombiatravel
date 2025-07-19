import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './App.css'

// Componentes principales
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/admin/AdminPanel'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Colombia Mágica - Descubre la Belleza de Colombia</title>
          <meta name="description" content="Agencia de turismo especializada en destinos colombianos. Descubre paisajes únicos, cultura vibrante y experiencias inolvidables en Colombia." />
          <meta name="keywords" content="turismo colombia, viajes colombia, destinos colombianos, agencia turismo" />
        </Helmet>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/admin/*" element={<AdminPanel />} />
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <Destinations />
                <About />
                <Contact />
                <Footer />
              </>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App

