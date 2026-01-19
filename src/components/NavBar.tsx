import { Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import logo from '../assets/logoTransparent.png';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash without jumping
      try {
        window.history.pushState(null, '', `#${id}`);
      } catch (e) {
        // Ignore history errors in restricted environments (e.g. sandboxed iframes)
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      window.history.pushState(null, '', ' ');
    } catch (e) {
      // Ignore history errors
    }
    setIsMenuOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: 'experience', label: '💼 Experiences' },
    { id: 'education', label: '🎓  Education' },
    { id: 'skills', label: '🛠️  Skills' },
    { id: 'contact', label: '📞  Contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full pointer-events-none">
        <div className="bg-white/80 dark:bg-black/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-800/50 px-6 py-3 flex items-center justify-between lg:justify-evenlyshadow-lg pointer-events-auto transition-all duration-300">
          <button 
            onClick={scrollToTop}
            className="hover:opacity-80 transition-opacity z-50 relative flex items-center"
          >
            <img 
              src={logo} 
              alt="Harsha Bikkavilli" 
              className="h-8 w-auto"
            />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 relative z-50">
            <button 
              onClick={toggleDarkMode}
              className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-text-main-light dark:text-text-main-dark"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-text-main-light dark:text-text-main-dark"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background-light/95 dark:bg-black/95 backdrop-blur-xl z-40 md:hidden transition-all duration-300 ease-in-out flex flex-col justify-center items-center ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-4">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-2xl font-bold text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors flex items-center gap-3"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;