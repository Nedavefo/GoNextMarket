import React, { useEffect, useState } from 'react';
import { Menu, Close } from './Icons';
import { asset } from '../hooks';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Cómo trabajamos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'border-b border-white/10 bg-brand-ink/85 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Principal">
        <a href="#inicio" className="flex items-center" aria-label="Go Next Market, inicio">
          <img src={asset('logo.png')} alt="Go Next Market" className="h-9 w-auto" />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-slate-300 transition hover:text-white">{l.label}</a>
            </li>
          ))}
          <li><a href="#contacto" className="btn btn-primary !py-2">Hablemos</a></li>
        </ul>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <Close /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/10 px-5 pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5">{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
