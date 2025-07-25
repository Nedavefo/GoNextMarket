import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('https://formspree.io/f/moqgwzyw', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert('Error al enviar. Intenta más tarde.');
        }
      })
      .catch(() => {
        alert('Error al enviar. Intenta más tarde.');
      });
  };

  return (
    <section id="contacto" className="bg-gray-50 py-16 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">¿Hablamos?</h2>
        <p className="text-center text-gray-600 mb-8">Envíanos un mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        {submitted ? (
          <p className="text-green-600 text-center text-lg">Gracias por tu mensaje. Te responderemos pronto.</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div>
              <label className="block text-sm text-gray-700">Nombre</label>
              <input type="text" name="name" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Correo electrónico</label>
              <input type="email" name="email" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Mensaje</label>
              <textarea name="message" rows="5" required className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition">
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
}