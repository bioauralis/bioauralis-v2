import { motion } from "framer-motion";

export default function ProjectCard({ image, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }} // Se levanta levemente
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group border border-gray-100"
    >
      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-emerald-800 group-hover:text-emerald-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          {text}
        </p>
      </div>
    </motion.div>
  );
}