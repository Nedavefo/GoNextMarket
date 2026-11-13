import React from 'react';
import { asset } from '../hooks';

export default function Footer() {
  return (
    <footer className="bg-brand-ink px-5 py-12 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <img src={asset('logo.png')} alt="Go Next Market" className="mx-auto h-9 w-auto sm:mx-0" />
          <p className="mt-3 text-sm">Bogotá, Colombia · contacto@gonextmarket.com</p>
        </div>
        <ul className="flex gap-6 text-sm">
          <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
          <li><a href="#proceso" className="hover:text-white">Cómo trabajamos</a></li>
          <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Go Next Market GNM SAS. Todos los derechos reservados.
      </p>
    </footer>
  );
}
