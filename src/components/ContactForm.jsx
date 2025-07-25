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
    <section id="contacto" className="mt-20">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6">Contáctanos</h2>
      {submitted ? (
        <p className="text-green-600">Gracias por tu mensaje. Te responderemos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left space-y-4">
          <div>
            <label className="block text-sm text-gray-700">Nombre</label>
            <input type="text" name="name" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Correo electrónico</label>
            <input type="email" name="email" required className="w-full border p-2 rounded" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Mensaje</label>
            <textarea name="message" rows="5" required className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition">
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}
