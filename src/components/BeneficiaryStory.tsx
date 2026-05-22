import {motion} from 'motion/react';
import {ArrowRight} from 'lucide-react';

export default function BeneficiaryStory() {
  return (
    <section className="py-24 md:py-32 bg-surface-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image & Quote */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              className="relative z-10"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-light/20 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmHc-6a_nlezpK6yOZ0GyRaUv-Cum7uyNAsnCmOCU4H5OXTtD3afwkwHuFF-V8vCGuRiRdsJFEHRCsVMM-yU1gX8-2An6z2LY8SsP_A0CiRNmtyJg4vhpgo0qmTIcHLKTE-B4-uJSa5FpM45CF9m_BP-nh0K_lq9Gb5owI1oxiKdM09AutozZXZz5MviLbBys_IR6gCADFGFB29cnb2NKUl85VI3SPpE933n_YshtU8oU7MyTPsTaPFwNWnEYdgJt_O9Rk41LeTIw" 
                alt="Story Image" 
                className="w-full aspect-[4/5] object-cover rounded-2xl shadow-level-2"
              />
              
              {/* Floating Quote */}
              <motion.div 
                initial={{opacity: 0, x: 20}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{delay: 0.4}}
                className="absolute -bottom-10 -right-4 md:-right-10 z-20 bg-white p-8 rounded-2xl shadow-level-2 border border-emerald-deep/5 max-w-[280px] md:max-w-xs"
              >
                <p className="font-display text-xl md:text-2xl text-primary italic leading-snug">
                  "Abikeola didn't just give us food; they gave my children their futures back."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-secondary"></div>
                  <span className="font-body text-xs font-bold uppercase tracking-wider text-secondary">Amina, Beneficiary</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div 
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            className="w-full lg:w-1/2 pt-12 lg:pt-0"
          >
            <span className="font-body font-bold text-xs uppercase tracking-[0.15em] text-secondary mb-4 block">Stories of Hope</span>
            <h2 className="text-primary text-3xl md:text-5xl font-display font-semibold mb-8">From Loss to Leadership</h2>
            <p className="text-[#414943] text-lg font-body mb-8 leading-relaxed">
              After losing her husband, Amina struggled to keep her three children in school. Through our scholarship program and tailoring apprenticeship, she now runs a thriving boutique and serves as a mentor for other widows in her community.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="p-5 bg-white rounded-xl shadow-level-1 border border-emerald-deep/5 backdrop-blur-sm">
                <h4 className="font-bold text-primary font-body mb-1">Education</h4>
                <p className="text-sm text-[#717972] font-body leading-relaxed">Children returned to school within 3 months.</p>
              </div>
              <div className="p-5 bg-white rounded-xl shadow-level-1 border border-emerald-deep/5 backdrop-blur-sm">
                <h4 className="font-bold text-primary font-body mb-1">Skills</h4>
                <p className="text-sm text-[#717972] font-body leading-relaxed">Completed 6-month master tailoring course.</p>
              </div>
            </div>

            <button className="flex items-center gap-3 text-primary font-body font-bold text-lg group transition-all">
              <span>Read More Stories</span>
              <motion.div 
                className="transition-transform group-hover:translate-x-2"
                transition={{type: "spring", stiffness: 400, damping: 10}}
              >
                <ArrowRight size={24} />
              </motion.div>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
