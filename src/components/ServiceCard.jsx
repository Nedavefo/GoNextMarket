import React from 'react';

export default function ServiceCard({ title, description, Icon, accent = 'cyan', className = '' }) {
  const tone = accent === 'violet'
    ? 'from-brand-violet/15 to-brand-violet/0 text-brand-violet'
    : 'from-brand-cyan/15 to-brand-cyan/0 text-brand-cyan';
  return (
    <article className={`reveal group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 ${className}`}>
      <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${tone} opacity-0 blur-2xl transition duration-500 group-hover:opacity-100`} />
      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tone}`}>
        <Icon width={26} height={26} />
      </div>
      <h3 className="font-display text-xl font-bold text-brand-ink">{title}</h3>
      <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
