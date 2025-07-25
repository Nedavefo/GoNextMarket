import React from 'react';
import ServiceCard from "../components/ServiceCard";
import ContactForm from '../components/ContactForm';


const services = [
  {
    title: 'Programación de encuestas',
    description: 'Configuramos cuestionarios en SurveyToGo para levantamiento profesional.',
    icon: '🧩',
    color: 'bg-purple-100'
  },
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
    title: 'Llamadas institucionales',
    description: 'Aplicamos encuestas telefónicas a instituciones o entes oficiales.',
    icon: '📞',
    color: 'bg-lime-100'
  }
];

export default function Home() {
  return (
    <div className="text-center px-4 sm:px-8 py-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Bienvenido a Go Next Market</h1>
      <p className="text-gray-600 mb-12">Inteligencia de mercado con alcance regional</p>

      <section id="servicios" className="mt-10">
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
