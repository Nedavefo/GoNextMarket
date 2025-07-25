import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="src\public\logo.png" alt="Go Next Market" className="h-10 mr-3" />
          <span className="font-bold text-xl">Go Next Market</span>
        </Link>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
