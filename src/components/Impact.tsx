import {motion} from 'motion/react';
import {ShieldCheck, HandHelping, Landmark} from 'lucide-react';

export default function Impact() {
  const anchors = [
    {icon: <ShieldCheck size={32} />, text: '100% Secure Checkout'},
    {icon: <HandHelping size={32} />, text: 'Sharia-Compliant Zakat Fund'},
    {icon: <Landmark size={32} />, text: 'Registered NGO Badge'},
  ];

  const stats = [
    {number: '15+', label: 'Widows Empowered', color: 'text-primary'},
    {number: '30+', label: 'Scholarships Awarded', color: 'text-secondary'},
    {number: '100%', label: 'Transparency Score', color: 'text-primary'},
  ];

  return (
    <>
      {/* Trust Anchors Bar */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            className="bg-surface-cream py-10 md:py-12 px-8 rounded-2xl shadow-level-2 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center text-center border border-emerald-deep/5"
          >
            {anchors.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center justify-center gap-4 text-primary">
                <span className="text-secondary">{item.icon}</span>
                <span className="font-body font-bold text-lg">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{delay: index * 0.2}}
                className="flex flex-col items-center justify-center py-6"
              >
                <h3 className={`text-5xl md:text-6xl font-display font-semibold mb-4 ${stat.color}`}>
                  {stat.number}
                </h3>
                <p className="text-[#717972] font-body font-bold text-sm uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
