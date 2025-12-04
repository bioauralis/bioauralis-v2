import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Nuevo estado para el menú

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3 z-50">
          <img src={logo} alt="BioAuralis" className="w-10 h-10 rounded-full object-cover" />
          <a href="#inicio" className={`text-2xl font-bold transition-colors ${scrolled || menuOpen ? "text-emerald-800" : "text-white"}`}>
            BioAuralis
          </a>
        </div>

        {/* Botón Hamburguesa (Móvil) */}
        <button 
          className="md:hidden z-50 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Cambia el color del ícono según el fondo */}
          <svg className={`w-8 h-8 ${scrolled || menuOpen ? "text-emerald-800" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links de Navegación */}
        <div className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:static md:bg-transparent md:flex-row md:translate-x-0 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col md:flex-row gap-8 text-center font-medium text-lg md:text-base">
            {['Quiénes somos', 'Cómo ayudar', 'Proyectos', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
                  className={`transition-colors ${
                    scrolled || menuOpen ? "text-gray-700 hover:text-emerald-600" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Botón Donar Realista */}
          <button
            onClick={() => alert("¡Aquí abrirías tu link de MercadoPago o PayPal!")}
            className={`px-6 py-2.5 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 ${
              scrolled || menuOpen
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-white text-emerald-800 hover:bg-gray-100"
            }`}
          >
            Donar
          </button>
        </div>
      </nav>
    </header>
  );
}