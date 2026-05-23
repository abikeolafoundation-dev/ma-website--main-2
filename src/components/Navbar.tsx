import {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Menu, X} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const handleDonate = () => {
    if (pathname !== '/') {
      navigate('/');
      // Delay to allow page render before scrolling
      setTimeout(() => {
        document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Home', href: '/'},
    {name: 'About Us', href: '/about-us'},
    {name: 'Our Pillars', href: '/pillars'},
    {name: 'Contact', href: '/contact'},
  ];

  const isLightBackground = pathname !== '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="Abikeola Charitable Foundation Logo" 
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
          />
          <span className={`font-display text-xl md:text-2xl font-bold ${
            isScrolled || isLightBackground ? 'text-primary' : 'text-white'
          }`}>
            Abikeola Charitable Foundation
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={`font-body font-medium transition-all hover:text-secondary relative ${
                isScrolled || isLightBackground ? 'text-[#414943]' : 'text-white'
              } ${pathname === link.href ? 'text-secondary' : ''}`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/pillars">
            <button className={`hidden lg:block px-6 py-2 border rounded-soft font-body font-semibold text-sm transition-all ${
              isScrolled || isLightBackground
                ? 'border-gold-light text-secondary hover:bg-gold-light/10' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}>
              Our Mission
            </button>
          </Link>
          <button 
            onClick={handleDonate}
            className="bg-primary-container text-white px-6 py-2.5 rounded-soft font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
          >
            Donate Now
          </button>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || isLightBackground ? 'text-primary' : 'text-white'} />
            ) : (
              <Menu className={isScrolled || isLightBackground ? 'text-primary' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{opacity: 0, height: 0}}
            animate={{opacity: 1, height: 'auto'}}
            exit={{opacity: 0, height: 0}}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`font-body font-medium py-2 border-b border-gray-100 ${
                    pathname === link.href ? 'text-secondary' : 'text-primary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <Link to="/pillars" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-3 border border-gold-light text-secondary rounded-soft font-body font-semibold">
                    Our Mission
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
