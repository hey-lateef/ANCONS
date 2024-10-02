import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-purple-500 p-4 fixed w-full top-0 z-50 shadow-lg">
      <nav className="flex items-center justify-between">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo or Title Section (Optional) */}
          <div className="text-white font-bold text-lg">
            ANCONS International
          </div>

          {/* Toggler Button */}
          <button 
            className="md:hidden flex justify-center w-8 h-8 bg-purple-700 text-white rounded-full"
            id="menu-btn"
            onClick={handleMenuToggle}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link 
              to="/" 
              className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <ul 
        className={`md:hidden flex flex-col absolute top-full left-0 w-full bg-purple-500 p-4 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <li>
          <Link 
            to="/" 
            className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/portfolio" 
            className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="text-white font-bold hover:bg-purple-700 px-4 py-2 rounded transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;