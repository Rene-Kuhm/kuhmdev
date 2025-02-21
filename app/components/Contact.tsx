'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Contáctame</h2>
          <p className="text-gray-400 mb-12">
            ¿Tienes un proyecto en mente? Estoy listo para ayudarte a convertir
            tu idea en realidad.
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
                required
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
                required
              />
            </div>
            <textarea
              placeholder="Tu Mensaje"
              rows={4}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
              required
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center mx-auto px-8 py-3 bg-[#00FF7F] text-gray-900 font-bold rounded-full hover:bg-[#00FF7F]/90 transition-colors"
            >
              <FaPaperPlane className="mr-2" /> Enviar Mensaje
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
