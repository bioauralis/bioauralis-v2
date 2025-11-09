import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mqagwzql", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
      e.target.reset();
    } else {
      setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-green-700">Contacto</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-all"
          >
            Enviar mensaje
          </button>
        </form>
        {status && (
          <p className="mt-6 text-gray-700 font-medium transition-all">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
