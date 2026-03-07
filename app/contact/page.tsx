'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-space-950 px-4 py-32">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyber/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 text-transparent bg-clip-text">
            İletişime Geç
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Sorularınız, projeleriniz veya sadece tanışmak için bana ulaşabilirsiniz.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="name" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-4">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ahmet Çalışkan"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-white/20"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-4">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ahmet@example.com"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="message" className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 ml-4">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Nasıl yardımcı olabilirim?"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-white placeholder:text-white/20 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(0,123,255,0.3)] hover:shadow-[0_0_35px_rgba(0,123,255,0.5)] flex items-center justify-center gap-3 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center gap-3">
                {status === 'loading' ? (
                  <>
                    <FiLoader className="text-xl animate-spin" /> GÖNDERİLİYOR...
                  </>
                ) : status === 'success' ? (
                  <>
                    <FiCheckCircle className="text-xl" /> BAŞARIYLA GÖNDERİLDİ
                  </>
                ) : status === 'error' ? (
                  <>
                    <FiAlertCircle className="text-xl" /> BİR HATA OLUŞTU
                  </>
                ) : (
                  <>
                    GÖNDER <FiSend className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
