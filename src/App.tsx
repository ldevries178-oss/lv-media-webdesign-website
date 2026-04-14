import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, Globe, ChevronDown, ArrowLeft, ArrowRight, PenTool, Code, Brain, TrendingUp, Check, Plus, Mail, MapPin, Minus, Twitter, Linkedin, Instagram, Star, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { translations, Language } from './translations';

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: { x: number, y: number, r: number, vx: number, vy: number, opacity: number }[] = [];
    const particleCount = Math.floor(width * height / 15000);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`;
        ctx.fill();
      });
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
}

function Navbar({ currentLang, setCurrentLang, t }: { currentLang: Language, setCurrentLang: (l: Language) => void, t: any }) {
  const [activeLink, setActiveLink] = useState('services');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl shadow-[0_0_20px_rgba(47,248,1,0.05)] border-b border-white/5">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        <a className="font-headline italic text-2xl font-bold text-white tracking-tighter" href="#">LV MEDIA</a>
        <div className="hidden md:flex items-center gap-10">
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'diensten' ? 'text-secondary' : 'text-white/70'}`} 
            href="#diensten"
            onClick={() => setActiveLink('diensten')}
          >{t.nav.addons}</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'work' ? 'text-secondary' : 'text-white/70'}`} 
            href="#work"
            onClick={() => setActiveLink('work')}
          >{t.nav.portfolio}</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'pricing' ? 'text-secondary' : 'text-white/70'}`} 
            href="#pricing"
            onClick={() => setActiveLink('pricing')}
          >{t.nav.pricing}</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'contact' ? 'text-secondary' : 'text-white/70'}`} 
            href="#contact"
            onClick={() => setActiveLink('contact')}
          >{t.nav.contact}</a>
          
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-white/70 hover:text-secondary font-bold text-sm tracking-widest transition-colors">
              <Globe className="w-4 h-4" />
              <span className="uppercase">{currentLang}</span>
              <ChevronDown className="w-3 h-3 opacity-50 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-12 right-0 w-24 bg-surface-container-highest/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 shadow-2xl z-[60]">
              {(['NL', 'EN', 'FR', 'DE'] as Language[]).map(lang => (
                <button 
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`w-full text-center px-4 py-3 text-xs font-bold tracking-widest transition-all ${currentLang === lang ? 'bg-secondary/20 text-secondary' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-primary text-on-primary-container px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-secondary/20">{t.nav.cta}</button>
        </div>
        <button className="md:hidden text-white hover:text-secondary transition-colors" aria-label="Toggle mobile menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface-container-highest/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['diensten', 'work', 'pricing', 'contact'].map((id) => (
                <a 
                  key={id}
                  href={`#${id}`} 
                  onClick={() => { setIsMenuOpen(false); setActiveLink(id); }}
                  className={`text-2xl font-headline italic ${activeLink === id ? 'text-secondary' : 'text-white/70'}`}
                >
                  {t.nav[id === 'diensten' ? 'addons' : id]}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {(['NL', 'EN', 'FR', 'DE'] as Language[]).map(lang => (
                  <button 
                    key={lang}
                    onClick={() => { setCurrentLang(lang); setIsMenuOpen(false); }}
                    className={`px-3 py-2 rounded-lg text-xs font-bold tracking-widest ${currentLang === lang ? 'bg-secondary/20 text-secondary' : 'text-white/50'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero({ t }: { t: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left Glow */}
        <motion.div 
          animate={{ 
            x: [0, 150, -50, 0], 
            y: [0, 100, -50, 0], 
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[40vw] h-[40vw] min-w-[500px] bg-secondary/20 rounded-full blur-[150px]" 
        />
        {/* Center Right Glow */}
        <motion.div 
          animate={{ 
            x: [0, -200, 100, 0], 
            y: [0, 150, -100, 0], 
            opacity: [0.4, 0.7, 0.4] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] min-w-[600px] bg-secondary/20 rounded-full blur-[150px]" 
        />
        {/* Bottom Center Glow */}
        <motion.div 
          animate={{ 
            x: [0, 150, -150, 0], 
            y: [0, -150, 50, 0], 
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] min-w-[600px] bg-secondary/20 rounded-full blur-[150px]" 
        />
      </div>
      <div className="relative z-10 max-w-5xl px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 mb-8 rounded-full border border-outline-variant/30 bg-surface-container-low text-xs tracking-widest uppercase font-bold text-secondary"
        >
          {t.hero.tag}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline italic text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.95] tracking-tighter mb-8"
        >
          {t.hero.titlePrimary} <br/> <span className="text-secondary">{t.hero.titleSecondary}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-lg font-light mb-12 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-primary text-on-primary-container px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.1)]">{t.hero.ctaPrimary}</button>
          <button className="border border-primary text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary/5 transition-colors">{t.hero.ctaSecondary}</button>
        </motion.div>
      </div>
    </section>
  );
}

function InfiniteMarquee({ t }: { t: any }) {

  return (
    <section className="py-12 bg-surface-container-low overflow-hidden whitespace-nowrap border-y border-outline-variant/10">
      <div className="flex items-center animate-marquee gap-12 min-w-max will-change-transform">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 text-white/90 text-lg md:text-xl font-headline italic pr-12">
            {t.marqueeItems.map((item: string, j: number) => (
              <span key={j} className="flex items-center gap-4">
                <span className="w-2 h-2 bg-secondary rounded-full"></span> {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function Expertise({ t }: { t: any }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  const CARD_COUNT = t.expertise.cards.length; // 4

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the exact pixel offset to center each card
  useEffect(() => {
    function calcTranslate() {
      const track = trackRef.current;
      if (!track) return;
      const cards = track.querySelectorAll<HTMLElement>('[data-card]');
      if (cards.length === 0) return;

      const progress = scrollYProgress.get();
      const vw = window.innerWidth;

      // For each card, compute offset that centers it
      const centers: number[] = [];
      cards.forEach((card) => {
        const cardLeft = card.offsetLeft;
        const cardWidth = card.offsetWidth;
        // Offset to center this card in viewport
        centers.push(cardLeft + cardWidth / 2 - vw / 2);
      });

      // Map progress to card index (with dwell time at each card)
      // progress 0 => card 0 centered
      // progress 1 => last card centered
      const maxIndex = centers.length - 1;
      const cardProgress = progress * maxIndex;
      const idx = Math.min(Math.floor(cardProgress), maxIndex - 1);
      const frac = cardProgress - idx;

      let offset: number;
      if (cardProgress <= 0) {
        offset = centers[0];
      } else if (cardProgress >= maxIndex) {
        offset = centers[maxIndex];
      } else {
        // Smooth interpolation between card centers
        offset = centers[idx] + (centers[idx + 1] - centers[idx]) * frac;
      }

      setTranslateX(-offset);
    }

    calcTranslate();

    const unsub = scrollYProgress.on("change", calcTranslate);
    window.addEventListener("resize", calcTranslate);
    return () => {
      unsub();
      window.removeEventListener("resize", calcTranslate);
    };
  }, [scrollYProgress, CARD_COUNT]);

  // Determine active card index for visual highlighting
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (progress) => {
      const maxIndex = CARD_COUNT - 1;
      const idx = Math.round(progress * maxIndex);
      setActiveIndex(Math.min(Math.max(idx, 0), maxIndex));
    });
    return unsub;
  }, [scrollYProgress, CARD_COUNT]);

  const icons = [
    <PenTool className="w-8 h-8" />,
    <TrendingUp className="w-8 h-8" />,
    <Code className="w-8 h-8" />,
    <Brain className="w-8 h-8" />
  ];

  return (
    <section 
      id="diensten" 
      ref={targetRef}
      className="bg-surface relative z-10"
      style={{ height: `${CARD_COUNT * 70 + 30}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center w-full pt-20 md:pt-28" style={{ overflow: 'clip' }}>
        {/* Section header */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8 md:mb-12 text-center md:text-left w-full flex-shrink-0">
          <FadeIn>
            <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">
              {t.expertise.tag}
            </span>
            <h2 className="font-headline italic text-4xl md:text-6xl text-white">
              {t.expertise.titleTop}<br/>{t.expertise.titleBottom}
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal card track */}
        <div className="flex-1 flex flex-col justify-center pb-16 md:pb-0" style={{ overflow: 'clip' }}>
          <div
            ref={trackRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: 'none',
              willChange: 'transform',
            }}
            className="flex items-stretch gap-8 w-max px-[10vw] py-6"
          >
            {t.expertise.cards.map((s: any, i: number) => (
              <div
                key={i}
                data-card
                className={`flex-shrink-0 w-[85vw] md:w-[60vw] max-w-[800px] min-h-[420px] bg-surface-container-low border p-8 md:p-12 rounded-3xl flex flex-col justify-between group shadow-2xl backdrop-blur-xl relative transition-all duration-300 ease-out ${
                  activeIndex === i
                    ? 'border-secondary/40 scale-[1.02] shadow-[0_0_60px_rgba(47,248,1,0.08)]'
                    : 'border-outline-variant/20 opacity-40 scale-95'
                }`}
              >
                <div className="absolute top-4 right-4 w-24 h-24 bg-secondary/5 blur-3xl group-hover:bg-secondary/10 transition-colors duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="text-secondary mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
                    {icons[i]}
                  </div>
                  <h3 className="text-2xl font-headline italic text-white mb-4 group-hover:text-secondary transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{s.desc}</p>
                </div>
                <ul className="space-y-3 text-sm text-secondary/70 relative z-10 pt-6 border-t border-white/5">
                  {s.list.map((item: string, j: number) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 pb-8 md:pb-12">
          {t.expertise.cards.map((_: any, i: number) => (
            <div
              key={i}
              className={`rounded-full transition-all duration-500 ${
                activeIndex === i
                  ? 'w-8 h-2 bg-secondary shadow-[0_0_10px_rgba(47,248,1,0.5)]'
                  : 'w-2 h-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-widest uppercase font-bold text-white/60">
            {t.expertise.scrollHint || 'Scroll to explore'}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-white/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


function Work({ t }: { t: any }) {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 bg-surface-container-lowest relative z-10" id="work">
      <div className="px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <FadeIn className="mb-12">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.work.tag}</span>
          <h2 className="font-headline italic text-4xl md:text-6xl lg:text-7xl text-white mb-6">{t.work.titlePrimary} <br className="hidden md:block" /> {t.work.titleSecondary}</h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            {t.work.desc}
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2} className="w-full group rounded-3xl overflow-hidden mb-12 border border-outline-variant/20 bg-surface-container-high shadow-2xl relative aspect-video min-h-[300px] md:min-h-[450px]">
          <img 
            src="/bjj-platform-hero.jpg.png" 
            alt="Internationaal BJJ Platform" 
            loading="lazy" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500" />
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <button className="bg-primary text-on-primary-container px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
            {t.work.cta}
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

function Counter({ from, to, suffix = "" }: { from: number, to: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const duration = 2000;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.floor(easeOutQuart * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function Stats({ t }: { t: any }) {
  return (
    <section className="py-40 bg-surface relative z-10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <FadeIn delay={0.1} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-surface-container-low border border-outline-variant/10">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={120} suffix="+" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">{t.stats.projects}</p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-secondary-container/10 border border-secondary/20">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={98} suffix="%" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">{t.stats.satisfaction}</p>
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-surface-container-low border border-outline-variant/10">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={8} suffix="+" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">{t.stats.experience}</p>
        </FadeIn>
      </div>
    </section>
  );
}

function Team({ t }: { t: any }) {
  const members = [
    { name: "Sarah Jenkins", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZmJ7OM8agMU6JXLYAPXFKH152yy_oaO-k8K9_U7MCri1kEIKTGnPM2cAH6dQbxemhUhXNMnGLJhMlu58MWfx-VDS0ViJefQ6ZxCszcWxn9XbeGaB6fTgkLUzF7oI_UB8HohNgLXVCvWMOQQguqlNvAyCP1k89dWHQQDESapKQSdABEWlWgifw0zAdrDJFNU4_XA5I9GCKXpQG549AAtRSbMkvao-TwygrznrlFANbUbw6KJX6YrUzvTfjnBFPLGVo8sPfCblZYc" },
    { name: "Michael Chen", role: "Lead Designer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiKeGq3mcMsn9KNBiM5iHTltthvNftVNQDF1Pc-GzQ-grmlFIr59Hc5-yOce3q2ekAInTJtWySZvW9VA9WF_LvjUg6YKqX0EEFNcvndXp82CiXZ3SZm7GLk57CLcxgKYZudRKSCPXwH5TqK7zUvJ4fMTDHsDvnvfEc0PG5LOnunHcJUf6S211CT4Hpeuxk0lwC-1UifTLCrn7A5KmbtHnk0dOUNHO1IWR_tQQRxiQUZfhIXPePYjguUdrXpf4bQChRkL6uLaccSUM" },
    { name: "Elena Rodriguez", role: "Tech Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjK8-4eZCSYB_e_ftarrhZPWzWti47uI51Lg-_twKUcO2g3Y51gMs8YpH_y9_Hc9mkeaH7g2eENVl00TrbATlSmCCIH20EfWIMUCi6LGA9nSRHG1U8FeiXuneO7ogS_z7GgqhpV-LS2oAbd4BH8vc5Y6-oKrqD6rHYJHxrLHWSZXxdur9I6XqwRcj6gcNIKriWi2EaMMCQ-NjWxhwyzhGHYmpk4lg8gZwtjCqDFIMtBpduSpAx1UOq6F11rRRqjUCugLiqIe-j-HE" }
  ];

  return (
    <section className="py-40 relative z-10">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.team.tag}</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">{t.team.title}</h2>
      </FadeIn>
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {members.map((m, i) => (
          <FadeIn key={i} delay={i * 0.1} className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
              <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-2xl font-headline italic text-white">{m.name}</h3>
            <p className="text-secondary text-sm font-bold tracking-widest uppercase">{m.role}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ t }: { t: any }) {
  const row1 = t.testimonials.row1;
  const row2 = t.testimonials.row2;

  return (
    <section className="py-32 bg-surface-container-low/30 overflow-hidden border-y border-outline-variant/10 relative z-10">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.testimonials.tag}</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white mb-4">{t.testimonials.title}</h2>
        <p className="text-on-surface-variant text-lg">{t.testimonials.desc}</p>
      </FadeIn>
      <div className="flex animate-marquee gap-6 mb-6 min-w-max px-6 md:px-12 will-change-transform">
        {[...row1, ...row1, ...row1].map((testimonial: any, i: number) => (
          <div key={i} className="bg-surface-container-low border border-outline-variant/20 p-8 rounded-2xl w-[400px] flex-shrink-0 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary/80" fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">"{testimonial.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-outline-variant/20 bg-surface-container-highest flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initial}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{testimonial.name}</p>
                <p className="text-secondary text-xs font-bold tracking-widest mt-1 uppercase">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex animate-marquee-reverse gap-6 min-w-max px-6 md:px-12 will-change-transform">
        {[...row2, ...row2, ...row2].map((testimonial: any, i: number) => (
          <div key={i} className="bg-surface-container-low border border-outline-variant/20 p-8 rounded-2xl w-[400px] flex-shrink-0 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary/80" fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">"{testimonial.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-outline-variant/20 bg-surface-container-highest flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initial}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{testimonial.name}</p>
                <p className="text-secondary text-xs font-bold tracking-widest mt-1 uppercase">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing({ t }: { t: any }) {
  return (
    <section className="py-40 relative z-10" id="pricing">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-24 text-center">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.pricing.tag}</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">{t.pricing.title}</h2>
      </FadeIn>
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <FadeIn delay={0.1} className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-headline italic text-white mb-2">{t.pricing.cards[0].title}</h3>
            <p className="text-on-surface-variant text-xs mb-4 min-h-[32px]">{t.pricing.cards[0].subtitle}</p>
            <div className="text-4xl font-headline italic text-white mb-8">{t.pricing.cards[0].price} <span className="text-sm font-body not-italic text-on-surface-variant">{t.pricing.cards[0].period}</span></div>
            <ul className="space-y-4 mb-12">
              {t.pricing.cards[0].features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> {f}</li>
              ))}
            </ul>
          </div>
          <button className="w-full py-4 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">{t.pricing.cards[0].cta}</button>
        </FadeIn>
        
        <FadeIn delay={0.2} className="bg-surface-container-highest p-10 rounded-3xl border border-secondary/30 relative flex flex-col justify-between shadow-[0_0_50px_rgba(47,248,1,0.1)] scale-105 z-10">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-surface px-4 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full">{t.pricing.cards[1].badge}</div>
          <div>
            <h3 className="text-xl font-headline italic text-white mb-2">{t.pricing.cards[1].title}</h3>
            <p className="text-secondary/80 text-xs mb-4 font-bold tracking-widest uppercase min-h-[32px]">{t.pricing.cards[1].subtitle}</p>
            <div className="text-3xl font-headline italic text-white mb-8">{t.pricing.cards[1].price} <span className="text-sm font-body not-italic text-on-surface-variant">{t.pricing.cards[1].period}</span></div>
            <ul className="space-y-4 mb-12">
              {t.pricing.cards[1].features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> {f}</li>
              ))}
            </ul>
          </div>
          <button className="w-full py-4 rounded-full bg-primary text-on-primary-container text-sm font-bold hover:scale-105 transition-transform">{t.pricing.cards[1].cta}</button>
        </FadeIn>

        <FadeIn delay={0.3} className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-headline italic text-white mb-2">{t.pricing.cards[2].title}</h3>
            <p className="text-on-surface-variant text-xs mb-4 min-h-[32px]">{t.pricing.cards[2].subtitle}</p>
            <div className="text-3xl font-headline italic text-white mb-8">{t.pricing.cards[2].price} <span className="text-sm font-body not-italic text-on-surface-variant">{t.pricing.cards[2].period}</span></div>
            <ul className="space-y-4 mb-12">
              {t.pricing.cards[2].features.map((f: string, i: number) => (
                <li key={i} className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> {f}</li>
              ))}
            </ul>
          </div>
          <button className="w-full py-4 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">{t.pricing.cards[2].cta}</button>
        </FadeIn>
      </div>
    </section>
  );
}

function FAQ({ t }: { t: any }) {
  const faqs = t.faq.items;

  return (
    <section className="py-40 bg-surface-container-lowest relative z-10">
      <div className="px-6 md:px-12 max-w-3xl mx-auto">
        <FadeIn className="mb-24 text-center">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.faq.tag}</span>
          <h2 className="font-headline italic text-4xl md:text-6xl text-white">{t.faq.title}</h2>
        </FadeIn>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <FAQItem question={faq.q} answer={faq.a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant/10 pb-8">
      <button onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} className="flex items-center justify-between w-full text-left group">
        <span className="text-xl md:text-2xl font-headline italic text-white group-hover:text-secondary transition-colors">{question}</span>
        {isOpen ? <Minus className="text-secondary flex-shrink-0" /> : <Plus className="text-secondary flex-shrink-0" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 text-on-surface-variant text-sm md:text-base"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
}

function Contact({ t }: { t: any }) {
  return (
    <section className="py-40 relative overflow-hidden z-10" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn>
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">{t.contact.tag}</span>
          <h2 className="font-headline italic text-4xl md:text-7xl text-white mb-8">{t.contact.title1} <br/> {t.contact.title2} <br/> {t.contact.title3}</h2>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">{t.contact.desc}</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-secondary w-5 h-5" />
              <span>hello@lvmedia.studio</span>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="glass-card p-10 md:p-12 rounded-3xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">{t.contact.form.firstName}</label>
                <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder={t.contact.form.firstName} type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">{t.contact.form.lastName}</label>
                <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder={t.contact.form.lastName} type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">{t.contact.form.email}</label>
              <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder="jouw@email.nl" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">{t.contact.form.goals}</label>
              <textarea className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder={t.contact.form.goalsPlaceholder} rows={4}></textarea>
            </div>
            <button className="w-full py-4 rounded-full bg-primary text-on-primary-container font-black text-base hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.05)]" type="submit">{t.contact.form.cta}</button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer({ t }: { t: any }) {
  return (
    <footer className="relative flex flex-col items-center w-full px-6 md:px-12 overflow-hidden bg-[#0e0e0e] pt-20 pb-12 border-t border-outline-variant/10">
      <div className="w-full max-w-7xl mx-auto mb-20 relative z-10">
        <div className="text-[12vw] leading-none font-headline italic font-bold text-white text-center tracking-tighter opacity-90" aria-hidden="true">LV MEDIA</div>
      </div>
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 relative z-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-white font-body text-sm">L</div>
            <span className="font-headline italic text-2xl font-bold text-white tracking-tighter">LV<span className="text-on-surface-variant font-body not-italic font-normal text-xl tracking-normal">media</span></span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            {t.footer.desc}
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Twitter Profile" className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" aria-label="LinkedIn Profile" className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram Profile" className="w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-base">{t.footer.expertise}</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            {t.footer.expertiseLinks.map((link: string, i: number) => (
              <a key={i} href="#" className="hover:text-secondary transition-colors">{link}</a>
            ))}
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-base">{t.footer.company}</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            {t.footer.companyLinks.map((link: string, i: number) => (
              <a key={i} href="#" className="hover:text-secondary transition-colors">{link}</a>
            ))}
          </div>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-base">{t.footer.legal}</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            {t.footer.legalLinks.map((link: string, i: number) => (
              <a key={i} href="#" className="hover:text-secondary transition-colors">{link}</a>
            ))}
          </div>
        </div>

      </div>

      <div className="w-full max-w-7xl border-t border-outline-variant/10 pt-8 flex justify-center relative z-10">
        <div className="text-white/40 text-xs tracking-widest uppercase font-bold">
          © 2026 LVMEDIA. ALL RIGHTS RESERVED.
        </div>
      </div>

      {/* Neon Underglow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-secondary/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
    </footer>
  );
}

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('NL');
  const t = translations[currentLang];

  useEffect(() => {
    document.documentElement.lang = currentLang.toLowerCase();
    document.title = t.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.seo.desc);
    }
  }, [currentLang, t]);

  return (
    <div className="bg-surface selection:bg-secondary selection:text-surface-container-lowest min-h-screen text-on-surface font-body">
      <Particles />
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} t={t} />
      {/* Expertise is outside of any overflow:hidden ancestor so position:sticky works correctly */}
      <div className="relative z-10">
        <Hero t={t} />
        <InfiniteMarquee t={t} />
      </div>
      <Expertise t={t} />
      <main className="relative z-10 overflow-x-hidden">
        <Work t={t} />
        <Stats t={t} />
        <Team t={t} />
        <Testimonials t={t} />
        <Pricing t={t} />
        <FAQ t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
