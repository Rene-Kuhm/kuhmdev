'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Contacto desde el sitio web',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Contacto desde el sitio web', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
    }
  };

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
          
          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 text-green-400 rounded-lg">
              Mensaje enviado con éxito. ¡Gracias por contactarme!
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 text-red-400 rounded-lg">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nombre"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
                required
              />
              <input
                type="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
                required
              />
            </div>
            <textarea
              placeholder="Tu Mensaje"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF7F]"
              required
            />
            <motion.button
              type="submit"
              disabled={status === 'loading'}
              whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
              className={`flex items-center justify-center mx-auto px-8 py-3 bg-[#00FF7F] text-gray-900 font-bold rounded-full transition-colors ${
                status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#00FF7F]/90'
              }`}
            >
              <FaPaperPlane className="mr-2" />
              {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
