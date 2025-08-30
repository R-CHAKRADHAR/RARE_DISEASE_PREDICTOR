import { useState } from 'react'
import Navbar from './components/Navbar'
import Toast from './components/Toast'
import Home from './pages/Home'
import Predict from './pages/Predict'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Documentation from './pages/Documentation'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  const [route, setRoute] = useState('home')

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition">
      <Navbar onNavigate={setRoute} />
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {route === 'home' && <Home onStartPredict={() => setRoute('predict')} />}
        {route === 'predict' && <Predict />}
        {route === 'about' && <About />}
        {route === 'dashboard' && <Dashboard />}
        {route === 'documentation' && <Documentation />}
        {route === 'faq' && <FAQ />}
        {route === 'contact' && <Contact />}
      </main>
      <Toast />
    </div>
  )
}
