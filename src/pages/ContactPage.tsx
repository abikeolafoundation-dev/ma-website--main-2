
import React, {ReactNode, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'motion/react';
import {
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Youtube,
  MessageSquare, 
  Rss, 
  Building2, 
  ExternalLink,
  Camera,
  Megaphone,
  Users,
  ShieldCheck,
  Play,
  AlertCircle,
  Loader2,
  CheckCircle2
} from 'lucide-react';
import {socialService, SocialStats} from '../services/socialService';

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

export default function ContactPage() {
  const [stats, setStats] = useState<SocialStats[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || "Thank you for subscribing!");
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

  useEffect(() => {
    // Load social account metrics (async)
    const loadStats = async () => {
      try {
        const fetched = await socialService.getStats();
        setStats(fetched);
      } catch (e) {
        console.error('Failed to load social stats', e);
        setStats([]);
      }
    };
    loadStats();

    // Inject Juicer Embed Script for real-time posts inside our container ref
    const script = document.createElement('script');
    script.src = "https://www.juicer.io/embed/abikeola-charitable-foundation-27b82140b/embed-code.js";
    script.async = true;
    script.defer = true;
    
    let activeScript = script;
    if (containerRef.current) {
      containerRef.current.appendChild(activeScript);
    }
    
    return () => {
      // Clean up script on unmount
      if (containerRef.current && containerRef.current.contains(activeScript)) {
        containerRef.current.removeChild(activeScript);
      }
      // Clean up Juicer DOM tree & global state if initialized
      if ((window as any).Juicer && typeof (window as any).Juicer.remove === 'function') {
        (window as any).Juicer.remove();
      }
    };
  }, []);

  const getStatsIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram': return <Camera size={40} />;
      case 'twitter': return <Megaphone size={40} />;
      case 'facebook': return <Users size={40} />;
      case 'linkedin': return <Building2 size={40} />;
      case 'youtube': return <Play size={40} />;
      default: return <MessageSquare size={40} />;
    }
  };

  return (
    <main className="bg-background pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{opacity: 0, x: -30}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8}}
          >
            <span className="text-secondary bg-gold-light/20 px-4 py-1.5 rounded-full font-body text-xs font-bold uppercase tracking-widest mb-6 inline-block">
              Join Our Journey
            </span>
            <h1 className="text-4xl md:text-6xl text-primary font-display font-semibold mb-6 leading-tight">
              Our Digital Community
            </h1>
            <p className="text-lg md:text-xl text-[#414943] font-body mb-10 max-w-lg leading-relaxed">
              Stay connected with our day-to-day impact. Follow our journey as we build a better tomorrow, one community at a time. Through our social channels, you get an inside look at the lives transformed by your generosity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('feed')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-primary text-white px-8 py-4 rounded-xl font-body font-bold hover:shadow-lg transition-all"
              >
                Explore Feed
              </button>
              <Link 
                to="/pillars"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-body font-bold hover:bg-primary/5 transition-all text-center inline-flex items-center justify-center"
              >
                Our Pillars
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8}}
            className="relative h-[400px] md:h-[500px] rounded-[100px] overflow-hidden shadow-2xl"
          >
            <img 
              alt="Community impact" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP2E-JRo63QE6aUQ6zPlKKh_VTGjkIwx3KmGS_Mcub_NYeUzalwmiORh5MWwcStoFYTSOLgU0LODtHqa07bj99vOEiOlDuYMFih1hVccXKh4VZECbKQwe7E2mipb4IfGQBoKvatlTUEc-bwB4jP5koiapGUA1MNqj_ugd_7d3dB2E1BTS1KYNgGuLIFui8dh5ayCAG4ZVuX_o4WCsDrqySXwa03KOSm6X9WWurmOqGL29zNICidTJCrliqUs8uUFFJgSmiZCGmwbA" 
            />
          </motion.div>
        </div>
      </section>

      {/* Social Grid Accounts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <RevealOnScroll key={stat.platform} delay={idx * 0.1}>
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300 border border-emerald-deep/10 shadow-sm">
                <div className="text-secondary mb-4 flex justify-center">
                  {getStatsIcon(stat.platform)}
                </div>
                <h3 className="text-xl text-primary font-display font-semibold mb-1">{stat.platform}</h3>
                <p className="text-[#717972] font-body text-xs mb-4 uppercase font-bold tracking-widest">{stat.followers} Followers</p>
                <a 
                  href={stat.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary font-body font-bold text-sm hover:underline flex items-center gap-2 mx-auto justify-center"
                >
                  Follow {stat.handle} <ExternalLink size={14} />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Real-time Dynamic Social Wall (YouTube, X, LinkedIn, Instagram) */}
      <section id="feed" className="py-24 px-6 bg-[#f1f5ee]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl text-primary font-display font-semibold mb-4">Moments of Hope</h2>
            <p className="text-[#414943] font-body text-lg max-w-2xl mx-auto">
              A live, real-time social wall showcasing our latest updates, activities, and videos directly from our official channels.
            </p>
          </div>
          
          <RevealOnScroll>
            <div 
              ref={containerRef}
              className="bg-crisp-white rounded-[40px] p-6 md:p-10 shadow-sm border border-emerald-deep/5 overflow-hidden"
              style={{ width: '100%', minHeight: '600px' }}
            >
              <div 
                className="juicer-feed" 
                data-feed-id="abikeola-charitable-foundation-27b82140b"
                data-per="9"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-24 px-6 bg-crisp-white border-y border-emerald-deep/5 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center shrink-0 shadow-lg text-white">
              <Building2 size={48} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-primary font-display font-semibold mb-4 leading-tight">Professional Impact & Governance</h2>
              <p className="text-[#414943] font-body text-lg mb-8">Follow our professional updates, corporate partnerships, and institutional governance reports on LinkedIn.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-emerald-deep/10 text-sm font-body font-bold text-primary">
                  <ShieldCheck size={18} className="text-secondary" />
                  NGO Registered: 12345-ABK
                </div>
                <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-emerald-deep/10 text-sm font-body font-bold text-primary">
                  <Rss size={18} className="text-secondary" />
                  Q3 Stewardship Report Published
                </div>
              </div>
              <Link 
                to="/pillars"
                className="bg-primary text-white px-8 py-4 rounded-xl font-body font-bold flex items-center gap-3 hover:bg-primary-container transition-all shadow-lg active:scale-95 inline-flex"
              >
                Explore Our Pillars <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 text-center">
        <RevealOnScroll>
          <div className="bg-white p-12 md:p-24 rounded-[60px] max-w-4xl mx-auto border-2 border-gold-light/20 shadow-level-1">
            <h2 className="text-3xl md:text-5xl text-primary font-display font-semibold mb-6">Never Miss a Story</h2>
            <p className="text-[#414943] font-body text-lg md:text-xl mb-12 max-w-2xl mx-auto">Get monthly updates on our projects and community impact delivered straight to your inbox.</p>
            
            <div className="max-w-md mx-auto min-h-[100px]">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    exit={{opacity: 0, scale: 0.95}}
                    className="bg-emerald-deep/5 border border-emerald-deep/20 text-primary p-8 rounded-2xl flex flex-col items-center gap-3 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="text-secondary w-12 h-12 animate-bounce" />
                    <p className="font-body font-bold text-lg text-primary">{message}</p>
                    <p className="font-body text-sm text-[#414943] text-center">We've registered <span className="font-semibold text-secondary">{emailInput}</span>. You'll receive our monthly stewardship reports shortly.</p>
                    <button 
                      onClick={() => {
                        setStatus('idle');
                        setEmailInput('');
                      }} 
                      className="mt-2 text-xs text-primary/60 hover:text-primary underline font-body transition-colors"
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
                    <form 
                      onSubmit={handleSubscribe}
                      className="flex flex-col md:flex-row gap-4 mb-4"
                    >
                      <input 
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        disabled={status === 'loading'}
                        className="flex-1 bg-[#f1f5ee] border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all outline-none font-body disabled:opacity-75" 
                        placeholder="Your professional email" 
                        type="email"
                      />
                      <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-primary text-white px-8 py-4 rounded-xl font-body font-bold hover:shadow-xl transition-all shadow-level-1 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed"
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
                        className="flex items-center justify-center gap-2 text-red-800 bg-red-50 border border-red-200 rounded-xl py-3 px-4 text-sm font-body"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                        <span>{message}</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}
