import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="src\public\logo.png" alt="Go Next Market" className="h-10 mr-3" />
          <span className="font-bold text-xl">Go Next Market</span>
        </Link>
        <div className="space-x-6 hidden md:flex">
          <a
            href="/"
            className="relative font-medium hover:text-white transition duration-300
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white
              hover:before:w-full before:transition-all before:duration-300"
          >
            Inicio
          </a>
          <a
            href="#servicios"
            className="relative font-medium hover:text-white transition duration-300
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white
              hover:before:w-full before:transition-all before:duration-300"
          >
            Servicios
          </a>
          <a
            href="#contacto"
            className="relative font-medium hover:text-white transition duration-300
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-white
              hover:before:w-full before:transition-all before:duration-300"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
