import React from 'react';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { Check, Wrench, Chart, Clipboard, Cloud, Puzzle, Phone, Arrow } from '../components/Icons';
import { useReveal } from '../hooks';

const services = [
  { title: 'Programación de encuestas', description: 'Configuramos cuestionarios en SurveyToGo para un levantamiento profesional.', Icon: Puzzle, accent: 'violet', className: 'lg:col-span-2' },
  { title: 'Validación y pruebas', description: 'Pruebas y revisiones lógicas antes del despliegue en campo.', Icon: Check, accent: 'cyan' },
  { title: 'Soporte técnico en campo', description: 'Asistencia remota para entrevistadores durante todo el operativo.', Icon: Wrench, accent: 'cyan' },
  { title: 'Entregas SPSS periódicas', description: 'Exportación, validación y estructuración de archivos SPSS listos para análisis.', Icon: Chart, accent: 'violet', className: 'lg:col-span-2' },
  { title: 'Coordinación y gestión', description: 'Supervisión de la ejecución en campo y contacto directo con el cliente.', Icon: Clipboard, accent: 'violet' },
  { title: 'Almacenamiento en la nube', description: 'Respaldamos la base de datos en entornos seguros y accesibles.', Icon: Cloud, accent: 'cyan' },
  { title: 'Llamadas institucionales', description: 'Encuestas telefónicas a instituciones y entes oficiales.', Icon: Phone, accent: 'cyan', className: 'lg:col-span-4' },
];

const steps = [
  { n: '01', title: 'Programamos y probamos', text: 'Convertimos tu cuestionario en una encuesta digital y la validamos antes de salir a campo.' },
  { n: '02', title: 'Acompañamos el operativo', text: 'Soporte técnico a entrevistadores y supervisión de la ejecución mientras corre el estudio.' },
  { n: '03', title: 'Entregamos datos limpios', text: 'Bases SPSS estructuradas y validadas, con entregas periódicas y respaldo en la nube.' },
];

const pipeline = ['Programación', 'Campo', 'Validación', 'Entrega SPSS'];

export default function Home() {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section id="inicio" className="relative isolate overflow-hidden bg-brand-ink pb-24 pt-32 text-white sm:pt-40">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-brand-cyan/25 blur-[120px]" />
        <div className="absolute -right-24 top-40 -z-10 h-96 w-96 rounded-full bg-brand-violet/35 blur-[120px]" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200">
              <span className="h-2 w-2 rounded-full bg-brand-cyan" /> Operación en campo · LATAM
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Inteligencia de mercado con <span className="gradient-text">alcance regional</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              Recolección de datos y ejecución de estudios en campo: programamos la encuesta, damos soporte en terreno y entregamos bases SPSS listas para analizar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contacto" className="btn btn-primary">Contáctanos <Arrow width={18} height={18} /></a>
              <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
            </div>
          </div>

          {/* Pipeline visual */}
          <div className="relative mx-auto w-full max-w-md" aria-hidden="true">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-cyan/30 to-brand-violet/30 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-brand-panel/80 p-6 shadow-2xl backdrop-blur">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 font-mono text-xs text-slate-400">flujo-del-estudio</span>
              </div>
              <ol className="space-y-3">
                {pipeline.map((p, i) => (
                  <li key={p} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg font-display text-sm font-bold ${i % 2 ? 'bg-brand-violet/30 text-violet-200' : 'bg-brand-cyan/25 text-cyan-100'}`}>{i + 1}</span>
                    <span className="font-medium text-slate-100">{p}</span>
                    <Check className="ml-auto text-emerald-400" width={20} height={20} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-violet">Servicios</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-brand-ink">Todo el operativo, en un solo equipo</h2>
            <p className="mt-4 leading-relaxed text-slate-600">Desde que el cuestionario existe en papel hasta que la base llega limpia a tu analista.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="bg-brand-ink px-5 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan">Cómo trabajamos</p>
            <h2 className="mt-3 font-display text-4xl font-bold">Tres pasos, sin sorpresas</h2>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="reveal rounded-2xl border border-white/10 bg-white/5 p-7">
                <span className="gradient-text font-display text-5xl font-bold">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-300">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
