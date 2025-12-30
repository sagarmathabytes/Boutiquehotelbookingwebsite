import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone/95 backdrop-blur-sm border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center">
              <span className="text-stone text-xl font-serif">N</span>
            </div>
            <div>
              <div className="font-serif text-lg text-charcoal">Nepal Boutique</div>
              <div className="text-xs text-charcoal-light tracking-wide">Curated Stays</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/search" 
              className={`text-sm transition-colors ${
                isActive('/search') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Hotels
            </Link>
            <Link 
              to="/about" 
              className={`text-sm transition-colors ${
                isActive('/about') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Our Standards
            </Link>
            <Link 
              to="/partner" 
              className={`text-sm transition-colors ${
                isActive('/partner') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
              }`}
            >
              Partner Portal
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-charcoal/10">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/search" 
                className={`text-sm transition-colors ${
                  isActive('/search') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hotels
              </Link>
              <Link 
                to="/about" 
                className={`text-sm transition-colors ${
                  isActive('/about') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Standards
              </Link>
              <Link 
                to="/partner" 
                className={`text-sm transition-colors ${
                  isActive('/partner') ? 'text-forest' : 'text-charcoal-light hover:text-charcoal'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner Portal
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
