'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiCheckCircle, FiAlertCircle, FiLoader, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('E-posta gönderimi başarısız oldu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setErrorMessage('E-posta gönderimi başarısız oldu. Lütfen tekrar deneyin.');
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
    <div className="min-h-screen relative bg-[#020617] pt-32 pb-20 px-4 md:px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            İletişime <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Geçin</span>
          </h1>
          <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Yenilikçi projelerde yer almak, teknik birikimimi ekibinize katmak veya profesyonel kariyer fırsatlarını değerlendirmek için iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Card 1: İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="group relative">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2rem] blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/[0.05] rounded-[2rem] p-8 md:p-10 space-y-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full -mr-16 -mt-16" />

                <div className="space-y-6 relative z-10">
                  <h3 className="text-xl font-bold text-white flex items-center gap-3">
                    İletişim Bilgileri
                  </h3>

                  <div className="space-y-8">
                    <div className="flex items-center gap-5 group/item">
                      <div className="w-12 h-12 bg-blue-500/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover/item:border-blue-500/30 transition-all shadow-inner">
                        <FiMail className="text-xl text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 font-black tracking-widest uppercase mb-1">E-POSTA</p>
                        <p className="text-sm text-gray-200 group-hover/item:text-blue-400 transition-colors font-medium break-all underline-offset-4 decoration-blue-500/30 hover:underline cursor-pointer">
                          {personalInfo.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 group/item">
                      <div className="w-12 h-12 bg-indigo-500/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover/item:border-indigo-500/30 transition-all shadow-inner">
                        <FiMapPin className="text-xl text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-[9px] text-gray-500 font-black tracking-widest uppercase mb-1">KONUM</p>
                        <p className="text-sm text-gray-200 group-hover/item:text-indigo-400 transition-colors font-medium">
                          Kırklareli, İstanbul - Türkiye
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-5 relative z-10">
                  <p className="text-[9px] text-gray-500 font-black tracking-widest uppercase">SOSYAL MEDYA</p>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1 text-gray-400 hover:text-white"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 hover:border-blue-400/40 hover:bg-blue-400/10 transition-all hover:-translate-y-1 text-gray-400 hover:text-blue-400"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mesaj Gönder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-[2rem] blur opacity-30 group-hover:opacity-70 transition duration-1000" />

              <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/[0.05] rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full -mr-24 -mb-24" />

                <div className="relative z-10 space-y-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white tracking-tight">Mesaj Gönder</h3>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-widest uppercase text-gray-500 ml-4">Ad Soyad</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ahmet Çalışkan"
                          className="w-full px-6 py-4 bg-black/20 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:bg-black/40 transition-all outline-none text-white text-sm placeholder:text-gray-700"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black tracking-widest uppercase text-gray-500 ml-4">E-posta</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="ahmet@example.com"
                          className="w-full px-6 py-4 bg-black/20 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:bg-black/40 transition-all outline-none text-white text-sm placeholder:text-gray-700"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest uppercase text-gray-500 ml-4">Konu</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="İş birliği hakkında..."
                        className="w-full px-6 py-4 bg-black/20 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:bg-black/40 transition-all outline-none text-white text-sm placeholder:text-gray-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black tracking-widest uppercase text-gray-500 ml-4">Mesaj</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Mesajınızı buraya yazın..."
                        className="w-full px-6 py-4 bg-black/20 border border-white/5 rounded-2xl focus:border-blue-500/50 focus:bg-black/40 transition-all outline-none text-white text-sm resize-none placeholder:text-gray-700"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="group relative w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-2xl transition-all shadow-xl shadow-blue-500/10 disabled:opacity-50 flex items-center justify-center overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-3 text-white font-black tracking-widest uppercase text-xs">
                        {status === 'loading' ? (
                          <><FiLoader className="animate-spin text-lg" /> Gönderiliyor</>
                        ) : status === 'success' ? (
                          <><FiCheckCircle className="text-lg" /> Mesaj Gönderildi</>
                        ) : status === 'error' ? (
                          <><FiAlertCircle className="text-lg text-red-400" /> Hata Oluştu</>
                        ) : (
                          <>Mesajı Gönder <FiSend className="text-lg group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" /></>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                    {status === 'error' && errorMessage && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] text-red-400 font-medium text-center mt-3 bg-red-400/10 py-2 rounded-lg border border-red-400/20"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
