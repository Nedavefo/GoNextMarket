import React from 'react';
import ServiceCard from "../components/ServiceCard";
import ContactForm from '../components/ContactForm';

const services = [
  {
    title: 'Validación y pruebas',
    description: 'Realizamos pruebas y revisiones lógicas antes del despliegue en campo.',
    icon: '✅',
    color: 'bg-green-100'
  },
  {
    title: 'Soporte técnico en campo',
    description: 'Asistencia técnica remota para entrevistadores durante el operativo.',
    icon: '🛠️',
    color: 'bg-blue-100'
  },
  {
    title: 'Entregas SPSS periódicas',
    description: 'Exportación, validación y estructuración de archivos SPSS para análisis.',
    icon: '📊',
    color: 'bg-cyan-100'
  },
  {
    title: 'Coordinación y gestión',
    description: 'Supervisión de la ejecución en campo y contacto con el cliente.',
    icon: '📋',
    color: 'bg-indigo-100'
  },
  {
    title: 'Almacenamiento en la nube',
    description: 'Respaldamos la base de datos en entornos seguros y accesibles.',
    icon: '☁️',
    color: 'bg-sky-100'
  },
  {
    title: 'Programación de encuestas',
    description: 'Configuramos cuestionarios en SurveyToGo para levantamiento profesional.',
    icon: '🧩',
    color: 'bg-purple-100'
  },
  {
    title: 'Llamadas institucionales',
    description: 'Aplicamos encuestas telefónicas a instituciones o entes oficiales.',
    icon: '📞',
    color: 'bg-lime-100'
  }
];

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-800 to-purple-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img src="src\public\logo.png" alt="Go Next Market" className="h-20 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Inteligencia de Mercado con Alcance Regional</h1>
          <p className="text-lg mb-6">Soluciones en recolección de datos y ejecución de estudios en campo en LATAM</p>
          <a href="#contacto" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">Contáctanos</a>
        </div>
      </section>

      <section id="servicios" className="text-center px-4 sm:px-8 py-16">
        <h2 className="text-3xl font-semibold text-blue-800 mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgColor={service.color}
            />
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
