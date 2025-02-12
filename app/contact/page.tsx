'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Error al enviar el mensaje');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Rene-Kuhm',
      color: 'hover:text-gray-100'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/rene-kuhm/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/KuhmRene',
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'renekuhm2@gmail.com',
      link: 'mailto:renekuhm2@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Ubicación',
      value: 'Eduardo Castex (LP), Argentina'
    },
    {
      icon: FaPhone,
      label: 'Teléfono',
      value: '+54 9 2334-409838',
      link: 'tel:+5492334409838'
    }
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00FF7F]/10 via-black to-black"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(#00FF7F 1px, transparent 1px),
              linear-gradient(to right, #00FF7F 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            mask: 'radial-gradient(circle at center, transparent 0%, black 100%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <section className="py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF7F]">
              Contacto
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Me encantaría escucharlo! Contáctame y trabajemos juntos
              para hacer realidad tus ideas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-black/50 p-8 rounded-lg border border-[#00FF7F]/10">
                <h2 className="text-2xl font-semibold text-[#00FF7F] mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-3 bg-[#00FF7F]/10 rounded-lg">
                          <Icon className="w-6 h-6 text-[#00FF7F]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white hover:text-[#00FF7F] transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Sígueme en las redes
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-[#00FF7F]/10 rounded-lg text-[#00FF7F] transition-colors ${social.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-[#00FF7F]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F]/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-[#00FF7F]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F]/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-[#00FF7F]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F]/50"
                    placeholder="¿Sobre qué quieres hablar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-[#00FF7F]/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00FF7F]/50 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-[#00FF7F] hover:bg-[#00FF7F]/90 text-black'
                  }`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-500 text-center mt-4"
                  >
                    ¡Mensaje enviado con éxito! Te responderé pronto.
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 mt-4"
                  >
                    {errorMessage || 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
