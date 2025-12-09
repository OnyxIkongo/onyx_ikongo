import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <h2 className="text-xl font-bold tracking-tight text-text-primary">ONYX IKONGHO</h2>
        <button
          onClick={toggleMenu}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-transparent text-text-primary md:hidden"
        >
          {isOpen ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
        </button>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Accueil</Link>
          <Link to="/about" className="text-text-primary text-lg font-medium hover:text-primary transition-colors">À propos</Link>
          <Link to="/projects" className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Projets</Link>
          <Link to="/contact" className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>
      </header>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold tracking-tight text-text-primary">ONYX IKONGHO</h2>
            <button onClick={closeMenu} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-transparent text-text-primary">
              <X className="text-3xl" />
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-6">
            <Link to="/" onClick={closeMenu} className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Accueil</Link>
            <Link to="/about" onClick={closeMenu} className="text-text-primary text-lg font-medium hover:text-primary transition-colors">À propos</Link>
            <Link to="/projects" onClick={closeMenu} className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Projets</Link>
            <Link to="/contact" onClick={closeMenu} className="text-text-primary text-lg font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navigation