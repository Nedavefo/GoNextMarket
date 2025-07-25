import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <div className="mb-4 sm:mb-0">
          <img src="\logo.png" alt="Go Next Market" className="h-10 mb-2 mx-auto sm:mx-0" />
          <p className="text-sm">Bogotá, Colombia</p>
          <p className="text-sm">contacto@gonextmarket.com</p>
        </div>
        <div className="space-x-4 text-sm">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="#servicios" className="hover:underline">Servicios</a>
          <a href="#contacto" className="hover:underline">Contacto</a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} Go Next Market GNM SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}
