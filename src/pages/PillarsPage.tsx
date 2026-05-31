import {ReactNode} from 'react';
import {motion} from 'motion/react';
import {Newsletter} from '../components/Footer';
import {School, Gavel, Wallet, Landmark, HeartHandshake, Star, ShieldCheck, CheckCircle} from 'lucide-react';

const RevealOnScroll = ({children, delay = 0}: {children: ReactNode, delay?: number}) => (
  <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.8, ease: "easeOut", delay}}
  >
    {children}
  </motion.div>
);

export default function PillarsPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <motion.div 
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            <div className="inline-block px-4 py-1.5 bg-gold-light/20 text-secondary rounded-full font-body text-xs font-bold tracking-widest mb-8">
              ESTABLISHED STEWARDSHIP
            </div>
            <h1 className="text-4xl md:text-6xl text-primary font-display font-semibold max-w-3xl mb-6">
              Our Pillars & The Endowment Model
            </h1>
            <p className="text-lg md:text-xl text-[#414943] font-body max-w-2xl leading-relaxed">
              Sustaining generational impact through the intersection of traditional sustainable endowment principles and modern institutional excellence.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full text-primary fill-current" viewBox="0 0 100 100">
            <circle cx="100" cy="0" r="80"></circle>
          </svg>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl text-primary font-display font-semibold mb-4">The Three Core Pillars</h2>
              <div className="w-24 h-1 bg-secondary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <RevealOnScroll>
              <div className="group bg-surface-cream rounded-2xl border border-emerald-deep/5 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt="Widows receiving vocational training support" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyryTIfS6lA0FUuvQ7IjC3R13VYig0aNyHL8MLrfl0AV-4bnPjmeAJx66OtKI4mIK2AddvSRix4O3U4BbIOY8eg--sHfklYKG1LEmwsT2xhrxygXzyAUqM9sRVQYqBPrrh-TmFEsBbgmCpfaIMWFipWFTb9nKnKc79Q2ps0N_miDEiumy0qKaPbbjcGonG3PBKRd-Ujv9KGc3Ld14KH3ADAl_pqvMtJJNq-gdXQsXVsuLNiwlBQGtj0qz9ckkt3gGNKThw02uBiic" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-primary font-display font-semibold mb-4 text-[#072C1D]">Livelihood & Empowerment</h3>
                  <p className="text-[#717972] font-body leading-relaxed">
                    Supporting widows with vocational training and seed capital to build sustainable, independent businesses within their communities.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Pillar 2 */}
            <RevealOnScroll delay={0.1}>
              <div className="group bg-surface-cream rounded-2xl border border-emerald-deep/5 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt="Hopeful imagery of a child in a school uniform" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3tKBYdAi7RSze7lKCKdkue9tDU4ePSYPtKRBPMYu0ZPklQQl_FHHP76fPPZY5t7l83wJXcGvr1K7WoPIaCxHTamonB_JgqwUS0p3Lb57U5sEQnnbOy0c4r6imW4Pc3JSyA7F4Nz5nKT-37lhoYKYNsKUJUoRHXPM-dxzE4miFhQ465evjXbquIidyFYlzNrXWJ9KEiY42joWwyYuCZ4Nbgmbwz47RbG3bXvqudqtBhYTRQPpeEJy9sMeqsmFmLAUtzvrlbIdOliM" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg">
                    <School className="text-white" size={24} />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-primary font-display font-semibold mb-4 text-[#072C1D]">Education & Scholarships</h3>
                  <p className="text-[#717972] font-body leading-relaxed">
                    Providing orphans and vulnerable children with full scholarships, textbooks, and high-quality uniforms to break the cycle of poverty.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Pillar 3 */}
            <RevealOnScroll delay={0.2}>
              <div className="group bg-surface-cream rounded-2xl border border-emerald-deep/5 overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden bg-primary-container flex items-center justify-center">
                  <Gavel className="text-white/40" size={80} strokeWidth={1} />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl text-primary font-display font-semibold mb-4 text-[#072C1D]">Legal & Social Protection</h3>
                  <p className="text-[#717972] font-body leading-relaxed">
                    Ensuring widows have professional legal support for inheritance rights and robust community advocacy against systemic marginalization.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* The Sustainable Endowment Model Section */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-primary font-display font-semibold mb-4">The Sustainable Endowment Model</h2>
            <p className="text-lg md:text-xl text-[#414943] font-body max-w-2xl mx-auto leading-relaxed">
              Empowerment through Endowment: A legacy that never ends.
            </p>
          </div>
          
          {/* Infographic Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Step 1: Principal */}
            <RevealOnScroll>
              <div className="p-8 bg-white border border-emerald-deep/5 shadow-sm rounded-2xl text-center">
                <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wallet className="text-secondary" size={32} />
                </div>
                <h4 className="text-xs text-secondary font-body font-bold uppercase tracking-widest mb-2">Donation</h4>
                <p className="text-sm text-[#717972] font-body">100% of your initial donation is preserved as principal.</p>
              </div>
            </RevealOnScroll>
            
            <div className="hidden md:flex justify-center">
              <motion.div animate={{x: [0, 5, 0]}} transition={{repeat: Infinity, duration: 2}} className="text-gold-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </motion.div>
            </div>

            {/* Step 2: Investment */}
            <RevealOnScroll delay={0.1}>
              <div className="p-10 bg-primary text-white rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                  <Landmark className="text-white" size={32} />
                </div>
                <h4 className="text-xs text-gold-light font-body font-bold uppercase tracking-widest mb-2 text-center">Sustainable Investment</h4>
                <p className="text-sm opacity-90 font-body text-center leading-relaxed">Capital is placed in high-yield, ethical, and sustainable assets.</p>
              </div>
            </RevealOnScroll>

            <div className="hidden md:flex justify-center">
              <motion.div animate={{x: [0, 5, 0]}} transition={{repeat: Infinity, duration: 2}} className="text-gold-light">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </motion.div>
            </div>

            {/* Step 3: Perpetual Support */}
            <RevealOnScroll delay={0.2}>
              <div className="p-8 bg-white border border-emerald-deep/5 shadow-sm rounded-2xl text-center">
                <div className="w-16 h-16 bg-gold-light/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeartHandshake className="text-secondary" size={32} />
                </div>
                <h4 className="text-xs text-secondary font-body font-bold uppercase tracking-widest mb-2">Enduring Impact</h4>
                <p className="text-sm text-[#717972] font-body">Only generated profits fund programs, creating a perpetual stream.</p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Explanation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <Star className="text-secondary" size={32} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-2xl text-primary font-display font-semibold mb-4 text-[#072C1D]">Generational Preservation</h4>
                  <p className="text-lg text-[#414943] font-body leading-relaxed">
                    Traditional charity is consumed. Our Endowment Model survives. By investing the principal, we ensure that the support for orphans and widows today is still available for the generations of tomorrow.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Donor Trust Card */}
            <div className="bg-surface-cream p-10 rounded-2xl border border-primary/5 shadow-level-1">
              <div className="flex items-center gap-4 mb-8">
                <ShieldCheck className="text-primary" size={40} />
                <h4 className="text-2xl font-display font-semibold text-primary text-[#072C1D]">Donor Trust & Compliance</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Ethical & Sustainable Asset Selection',
                  'Fully Audited Annual Financial Reports',
                  'Independent Board of Trustees & Advisors',
                  '100% Transparency in Fund Allocation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[#414943] font-body font-medium">
                    <CheckCircle className="text-secondary" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
