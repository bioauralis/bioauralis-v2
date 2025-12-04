import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    const formData = new FormData(e.target);

    // Tu endpoint de Formspree
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
      
      // Opcional: Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => setStatus(""), 5000);
    } else {
      setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-emerald-800">Contacto</h2>
        <p className="text-slate-600 mb-8">
          ¿Tenés alguna duda o querés sumarte a la causa? Escribinos.
        </p>
        
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl shadow-emerald-900/5 rounded-2xl p-8 space-y-6 text-left"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre completo"
              required
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@ejemplo.com"
              required
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
            <textarea
              name="message"
              placeholder="¿Cómo te gustaría ayudar?"
              rows="5"
              required
              className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "Enviando..."}
            className={`w-full font-bold py-4 px-6 rounded-xl transition-all shadow-lg text-lg flex justify-center items-center ${
              status === "Enviando..."
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-500/30 text-white transform hover:-translate-y-1"
            }`}
          >
            {status === "Enviando..." ? (
              <span className="flex items-center gap-2">
                Enviando...
              </span>
            ) : (
              "Enviar Mensaje"
            )}
          </button>
        </form>

        {status && (
          <div className={`mt-6 p-4 rounded-xl font-medium transition-all ${
            status.includes("error") 
              ? "bg-red-100 text-red-700" 
              : "bg-emerald-100 text-emerald-800"
          }`}>
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;