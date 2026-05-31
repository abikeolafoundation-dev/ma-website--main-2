import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Heart, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCBkGyPt-LA7n8pOQOEnFXx5dQJOiJCq-UxUqQ167DhiaLRTz84ExKgetrM7P0bxjrzFHcEbq8_pbZQaFgwpTOBmXTwuAfsUQjy78R1WiDuXrI08Gro340-htoLGKE1-DwQq932TUvP1PF8oalcHR6g-o15l2XDMxQk8vFkMIZPr9r-UYWtAS2QTQ6Og86bwPdhCEPti9LLRdBiRkrCejJIOdCw1bs3CMIkoXvG1KYTAAM_4xzdI8zftaT4ZIj4527YyG5byqzZvBg",
  "https://media.licdn.com/dms/image/v2/D5622AQGlqK6KU5l4jA/feedshare-shrink_800/B56Z48TeZ1GYAg-/0/1779128199417?e=1781740800&v=beta&t=XJfsTqx3003Q1IMDKYBaIdBwEQD47IjwEotcbX9y5WM"
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // changes every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with cross-fading effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img 
            key={currentImageIndex}
            src={images[currentImageIndex]} 
            alt={`Foundation Slide ${currentImageIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/85 via-emerald-deep/40 to-transparent z-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
          >
            <span className="inline-block bg-gold-light/20 backdrop-blur-md px-4 py-1.5 rounded-full text-gold-light font-body text-xs font-bold tracking-widest uppercase mb-6">
              Empowering Legacies
            </span>
            <h1 className="text-white text-4xl md:text-6xl font-display font-semibold mb-6 leading-[1.1] tracking-tight">
              Securing Futures When a Breadwinner is Lost.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-body mb-10 max-w-lg leading-relaxed">
              We provide dignity, education, and vocational support to families facing the sudden loss of their primary support system through sustainable community endowment and empowerment funds.
            </p>
            
            <div className="flex flex-wrap gap-4 md:gap-6">
              <motion.button 
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => document.getElementById('donate')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-primary text-white font-body font-bold text-lg px-8 py-4 rounded-xl shadow-xl flex items-center gap-3 transition-colors hover:bg-primary-container"
              >
                Donate Now <Heart size={20} fill="currentColor" />
              </motion.button>
              <Link to="/pillars">
                <motion.button 
                  whileHover={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
                  className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-body font-bold text-lg px-8 py-4 rounded-xl transition-all flex items-center gap-2"
                >
                  Our Mission <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
