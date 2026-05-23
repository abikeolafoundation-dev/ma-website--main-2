import {ReactNode} from 'react';
import {motion} from 'motion/react';
import {ShieldCheck, Heart, Eye, Menu, Mail, Globe} from 'lucide-react';

const RevealOnScroll = ({children, delay = 0}: {children: ReactNode, delay?: number, key?: string | number}) => (
  <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.8, ease: "easeOut", delay}}
  >
    {children}
  </motion.div>
);

export default function AboutUsPage() {
  const team = [
    {
      name: "Raheam Adefemi Adeyanju",
      role: "Program Director",
      description: "Raheam leads our outreach strategies, coordinating field operations to ensure direct aid reaches remote communities effectively.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXAHr9-UgsPBtf2NsGA7jtXnED83kQCylOXJQRiY9J4AHRRrk9TsWG2l94qeKfoVWkemP99hQvOSu83tnLZ4vzhv-9bufeIHKVFvl5qvqZefrZ8GFbHIa4LneX55KP1vZ5uYVBgUIpvgNoQlvdmNnP9rlL9Cdd5kXtSY53X4oUhA1jBd4vMaf3Ozi6i-KQx-d60OcU4AyfjVnswUQ97EMQFnskXDvwJg4Hw7j5PsBUwxa18hJ93DvILtl-GTeyVOdw1JjRE5o8lag"
    },
    {
      name: "Ibrahim Musa",
      role: "Waqf Fund Manager",
      description: "Overseeing our sustainable endowment funds, Ibrahim ensures the long-term financial stability of our orphan support programs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwnGUtrqHQmEdaGy-sRXNvQmDAmntwRkuSh_FeLbCTiATM5H7JDpfSwkSIAG-fSwh5k3DtZXUHxdoctX-EGcP0p-methJDPb2WDRhS78tOxC2ijyr5OvPX5r04-VeCcOBzJ_acba0-zlqYrfH9whyNv96QW24iZ6BM1JC22Q4v4_cPnfdMZPnQZoYDZou-AAoFsRA9mmURZ0-dIn5V7g7PyEi6H5OugUPwJcIe9nSZDz0Q84znty5fRNS0QA5nhrHgEKMJgsVjZcc"
    },
    {
      name: "Amina Olayinka",
      role: "Head of Operations",
      description: "Amina streamlines our logistics, from food relief distribution to medical equipment procurement for rural clinics.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdvIwmTBkEMDGtYrIeNBMuJY3aHpsT2MZ38pen6cpIQhTlpMIsMSi6lYyf-6iVc033D2b0SxrsROPs4Zbm9b0LLRHE1oyEHdfcO3dOCWrG4a5hiyW1Jp1eni_34ueFq7mgN6OTIdMy4yoMXztIzB_I0YMpu4aySq9wBs1dZ-xRwYbgytWAvdL3PDTVsBtDegoHYMjb71Mxa6r_rCiEeXQ08BbjzHFCot9K6ZpNAJZBUSLLkX_VOEMNV-PDOK2gK9Hg_BQufGVB__4"
    }
  ];

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[radial-gradient(circle_at_2px_2px,rgba(200,155,60,0.05)_1px,transparent_0)] bg-[length:32px_32px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div 
              initial={{opacity: 0, x: -30}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.8}}
            >
              <div className="inline-flex items-center gap-3 text-[#C89B3C] mb-8">
                <span className="w-12 h-px bg-[#C89B3C]"></span>
                <span className="font-body text-xs font-bold tracking-[0.2em] uppercase">Legacy of Stewardship</span>
              </div>
              <h1 className="text-4xl md:text-6xl text-primary font-display font-semibold mb-8 leading-tight">
                Our Visionary Leadership
              </h1>
              <div className="relative pl-8 border-l-4 border-[#C89B3C] mb-10">
                <p className="text-xl md:text-2xl font-display italic text-[#414943] leading-relaxed">
                  "True wealth is not measured by what we keep, but by what we give back to those who have lost the most."
                </p>
                <cite className="block mt-4 font-body text-sm font-bold not-italic text-primary">— Hajiya Abikeola, Founder</cite>
              </div>
              <div className="prose prose-lg max-w-2xl text-[#414943] font-body">
                <p className="leading-relaxed">
                  Dedicated to the upliftment of the most vulnerable, Hajiya Abikeola has spent over two decades pioneering grassroots initiatives across the region. Her mission focuses on the sustainable support of widows venurables and orphans, ensuring that tragedy does not lead to poverty, and that every child has a pathway to excellence through education and community care.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{opacity: 0, scale: 0.9, rotate: 2}}
              animate={{opacity: 1, scale: 1, rotate: 0}}
              whileHover={{rotate: -2}}
              transition={{duration: 0.8}}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-emerald-deep/5"
            >
              <img 
                alt="Portrait of Hajiya Abikeola" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96M9FI6oX-nyufZJ2de1kfv7OJWlWknWsDg9J-MTWmufQ5hNTv3GC76uVOEuH6fkHXd2pZwv_jhGkTgt7_1sZ05N5XH23i6Ii2TPJLbSkDEj3Sw6KD5V21GRoIyWYSuycFTjScz8bWhSKyfeyv12m-OcI9y5xhMhg4qgWjgNJlaKr3HoBWgKC5DkhsfRzgM5102IK4oPL-O2rXAE-8SZnyLbAbldd9B1qyVhQ83NHlI-7spIAmbb190ttVUxXZvk5cSda3ehnzs0" 
              />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#C89B3C]/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Deep Dive */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-3 text-[#C89B3C] mb-8">
                  <span className="w-12 h-px bg-[#C89B3C]"></span>
                  <span className="font-body text-xs font-bold tracking-[0.2em] uppercase">Deep Dive</span>
                </div>
                <h2 className="text-3xl md:text-5xl text-primary font-display font-semibold mb-10">Meet the Founder</h2>
                <div className="prose prose-lg max-w-none text-[#414943] font-body space-y-6">
                  <p className="leading-relaxed">
  Semilu Fatima Fadekemi is a compassionate humanitarian, philanthropist, and community development advocate dedicated to supporting vulnerable individuals and promoting positive social impact within society.
</p>
<p className="leading-relaxed">
  Born on February 28, 1987, in Lagos, she began her educational journey at Ideal Nursery and Primary School before proceeding to Awori Ajeromi Grammar School and later attended Upper College for her secondary education.
</p>
<p className="leading-relaxed">
  Driven by a passion for knowledge and societal development, she furthered her education at Lagos State University where she studied History and International Relations during the 2010/2011 academic session.
</p>
<p className="leading-relaxed">
  As the founder of Abikeola Charitable Foundation, Semilu Fatima Fadekemi has consistently demonstrated a strong commitment to humanitarian service, community welfare, and empowerment initiatives aimed at supporting widows, orphans, single parents, the elderly, and other vulnerable individuals.
</p>
<p className="leading-relaxed">
  Under her leadership, the foundation has successfully organized charitable outreach programs, including food relief distributions and awareness campaigns that have positively impacted over 100 beneficiaries across local communities. Her dedication to giving back to society continues to inspire hope and create meaningful change in the lives of many.
</p>
<p className="leading-relaxed">
  She is widely recognized for her kindness, leadership spirit, and unwavering passion for humanity and community development.
</p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="order-1 lg:order-2">
              <RevealOnScroll>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <img 
                      alt="Hajiya Abikeola Portrait" 
                      className="w-full h-full object-cover" 
                      src= "https://lh3.googleusercontent.com/aida/ADBb0uicH3gMQrbExQmOISY524vY7ABB2pjX7zxNJvlr6wq-zDXSfWHwXxCT_o6Nekkal7oHdE0rkpJqVdtCRLwfFcZYd8ZpDzMpPGWyUuzzHLBEOdmhgO3rqeo1dUZP_xOh2urFkv06rmsiSkPKYQAyu7H3u4rGqn_lGk4tpYf9t5MW9u_5tX1-TNggpzxEIhFQbKstsvNe4KCba--UhO3BkxyPF1ZnzqAPsgrpb439zric8V3JI5fAJ6Zp7rOlBwDH35Eh4oUOSwVH"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C89B3C]/10 rounded-full blur-2xl -z-10"></div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RevealOnScroll>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center rounded-xl text-primary shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl text-primary font-display font-semibold mb-3">Integrity</h4>
                  <p className="text-[#717972] font-body leading-relaxed">We maintain the highest ethical standards in every transaction and community interaction.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center rounded-xl text-primary shadow-sm">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl text-primary font-display font-semibold mb-3">Compassion</h4>
                  <p className="text-[#717972] font-body leading-relaxed">Our work is driven by a deep empathy for the human condition and a desire to heal.</p>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white flex items-center justify-center rounded-xl text-primary shadow-sm">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl text-primary font-display font-semibold mb-3">Transparency</h4>
                  <p className="text-[#717972] font-body leading-relaxed">Total openness in financial reporting, ensuring every donor knows their impact.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </main>
  );
}
