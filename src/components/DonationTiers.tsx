import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Lock, FileText, RefreshCw, AlertCircle, X} from 'lucide-react';

export default function DonationTiers() {
  const [showModal, setShowModal] = useState(false);

  const tiers = [
    {
      id: 'support',
      label: 'Immediate Support',
      amount: '₦50,000',
      description: 'Provide a complete Back-to-School kit including uniforms, books, and stationery for a child who has lost a parent.',
      highlight: false,
    },
    {
      id: 'impact',
      label: 'Life Changing',
      amount: '₦250,000',
      description: 'Sponsor Vocational training for a widow, providing her with the tools and skills to start a sustainable small business.',
      highlight: true,
    },
    {
      id: 'custom',
      label: 'Tailored Giving',
      amount: 'Custom',
      description: 'Enter an amount that resonates with your heart. Every contribution helps secure a future for a family in need.',
      highlight: false,
      isCustom: true,
    }
  ];

  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <section id="donate" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-primary text-3xl md:text-5xl font-display font-semibold mb-6">Invest in Hope</h2>
          <p className="text-[#414943] text-lg font-body leading-relaxed">
            Your contribution directly supports education, vocational training, and immediate relief for vulnerable families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.id}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.1}}
              className={`relative flex flex-col p-10 rounded-2xl transition-all duration-300 ${
                tier.highlight 
                  ? 'bg-primary text-white shadow-level-2 transform lg:-translate-y-8 z-10' 
                  : 'bg-white border border-gray-100 shadow-level-1 hover:border-primary/20'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                  Most Impactful
                </div>
              )}
              
              <span className={`font-body font-bold text-xs uppercase tracking-[0.15em] mb-6 ${
                tier.highlight ? 'text-gold-light' : 'text-secondary'
              }`}>
                {tier.label}
              </span>
              
              <h3 className="text-4xl md:text-5xl font-display font-semibold mb-8">
                {tier.amount}
              </h3>
              
              <p className={`font-body leading-relaxed mb-10 flex-grow ${
                tier.highlight ? 'text-white/80' : 'text-[#414943]'
              }`}>
                {tier.description}
              </p>

              {tier.isCustom && (
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₦</span>
                  <input 
                    type="number" 
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-4 rounded-xl border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-primary font-body"
                  />
                </div>
              )}

              <button 
                onClick={handleDonateClick}
                className={`w-full py-4 rounded-xl font-body font-bold text-lg transition-all ${
                  tier.highlight 
                    ? 'bg-gold-light text-primary hover:brightness-105' 
                    : tier.id === 'custom' ? 'bg-primary text-white' : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {tier.isCustom ? 'Donate Custom' : 'Select Amount'}
              </button>
            </motion.div>
          ))}
        </div>

        {/* trust indicators */}
        <div className="mt-16 md:mt-24 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-[#717972] font-body font-semibold text-sm">
          <div className="flex items-center gap-2">
            <Lock size={16} /> Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <FileText size={16} /> Tax Receipt Provided
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw size={16} /> Monthly Updates
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#0c1812]/60 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-md w-full border border-gold-light/20 z-10 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-gold-light to-primary" />
              
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col items-center text-center mt-4">
                <div className="w-16 h-16 rounded-full bg-gold-light/10 flex items-center justify-center text-secondary mb-6">
                  <AlertCircle size={32} />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-primary mb-4">
                  Donate isn't active yet
                </h3>
                
                <p className="text-[#515953] font-body leading-relaxed mb-8">
                  The payment portal is currently under construction.
                </p>
                
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-full bg-primary hover:brightness-110 text-white font-body font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
