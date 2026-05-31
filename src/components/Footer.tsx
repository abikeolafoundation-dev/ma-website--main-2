import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || "Thank you for subscribing!");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
      setStatus('error');
      setMessage("Failed to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          className="bg-primary rounded-3xl p-10 md:p-20 relative overflow-hidden text-center text-white"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-deep/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Stay Connected with Our Journey</h2>
            <p className="text-white/80 text-lg md:text-xl font-body mb-10 leading-relaxed">
              Receive quarterly transparency reports, success stories, and news about our upcoming projects.
            </p>
            
            <div className="max-w-md mx-auto min-h-[80px]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-deep/20 border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center gap-3 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="text-emerald-400 w-12 h-12 animate-bounce" />
                    <p className="text-emerald-300 font-body font-semibold text-lg">{message}</p>
                    <button 
                      onClick={() => setStatus('idle')} 
                      className="mt-2 text-xs text-white/60 hover:text-white underline font-body transition-colors"
                    >
                      Subscribe another email
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-4">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address" 
                        required
                        disabled={status === 'loading'}
                        className="flex-grow px-6 py-4 rounded-xl border-none text-[#131d23] bg-white outline-none focus:ring-2 focus:ring-gold-light font-body disabled:opacity-75"
                      />
                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-secondary text-white px-8 py-4 rounded-xl font-body font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-lg whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Subscribing...
                          </>
                        ) : (
                          'Subscribe'
                        )}
                      </button>
                    </form>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-red-300 bg-red-950/20 border border-red-500/20 rounded-xl py-3 px-4 text-sm font-body"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                        <span>{message}</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-tertiary text-[#d0e6ef] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-white text-2xl font-display font-bold">Abikeola Charitable Foundation</div>
          <p className="font-body opacity-70 leading-relaxed">
            Securing the legacy of breadwinners and providing a bridge to a better tomorrow through sustainable charity models.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <Share2 size={18} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-all">
              <Mail size={18} className="text-white" />
            </a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="space-y-6">
          <h4 className="text-white font-body font-bold text-lg">Our Foundation</h4>
          <nav className="flex flex-col gap-4">
            {['Our Pillars', 'The Endowment Model', 'Impact Stories', 'Annual Reports'].map(link => (
              <a key={link} href="#" className="opacity-70 hover:opacity-100 hover:text-gold-light transition-all font-body">{link}</a>
            ))}
          </nav>
        </div>

        {/* Links 2 */}
        <div className="space-y-6">
          <h4 className="text-white font-body font-bold text-lg">Policies</h4>
          <nav className="flex flex-col gap-4">
            {['Privacy Policy', 'Donor Rights', 'Whistleblower Policy', 'FAQ'].map(link => (
              <a key={link} href="#" className="opacity-70 hover:opacity-100 hover:text-gold-light transition-all font-body">{link}</a>
            ))}
          </nav>
        </div>

        {/* Transparency Box */}
        <div className="space-y-6">
          <h4 className="text-white font-body font-bold text-lg">Transparency</h4>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-sm italic opacity-60 mb-4 font-body leading-relaxed">
              "We believe that community strength is measured by how we empower and support the most vulnerable among us."
            </p>
            <p className="text-xs text-gold-light font-body font-bold">— Our Mission Statement</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-50 font-body">
        <p>© 2024 Abikeola Charitable Foundation. All rights reserved. Registered NGO. Supporting sustainable community development.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-gold-light">Terms of Service</a>
          <a href="#" className="hover:text-gold-light">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
