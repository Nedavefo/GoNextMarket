import React, { useState } from 'react';
import { Mail, Pin } from './Icons';

const field = 'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-violet focus:ring-4 focus:ring-brand-violet/15';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/moqgwzyw', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('bad response');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-slate-50 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
        <div className="reveal lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-violet">Contacto</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-brand-ink">¿Tienes un estudio en camino?</h2>
          <p className="mt-4 leading-relaxed text-slate-600">Cuéntanos qué necesitas medir y dónde. Te respondemos con una propuesta de cómo operarlo.</p>
          <ul className="mt-8 space-y-4 text-slate-700">
            <li className="flex items-center gap-3"><Pin className="text-brand-cyan" /> Bogotá, Colombia</li>
            <li className="flex items-center gap-3"><Mail className="text-brand-cyan" /> contacto@gonextmarket.com</li>
          </ul>
        </div>

        <div className="reveal lg:col-span-3">
          {status === 'sent' ? (
            <div role="status" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
              <p className="font-display text-2xl font-bold text-emerald-800">¡Mensaje enviado!</p>
              <p className="mt-2 text-emerald-700">Gracias por escribirnos. Te responderemos pronto.</p>
              <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-emerald-800 underline">Enviar otro mensaje</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">Nombre
                  <input type="text" name="name" required autoComplete="name" className={field} placeholder="Tu nombre" />
                </label>
                <label className="block text-sm font-medium text-slate-700">Correo electrónico
                  <input type="email" name="email" required autoComplete="email" className={field} placeholder="tu@empresa.com" />
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">Mensaje
                <textarea name="message" rows="5" required className={field} placeholder="Cuéntanos sobre tu proyecto" />
              </label>
              {status === 'error' && (
                <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">No pudimos enviar el mensaje. Inténtalo de nuevo en unos minutos.</p>
              )}
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
