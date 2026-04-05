import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Menu, ArrowLeft, ArrowRight, PenTool, Code, Brain, TrendingUp, Check, Plus, Mail, MapPin, Minus, Twitter, Linkedin, Instagram, Star } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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

function Navbar() {
  const [activeLink, setActiveLink] = useState('services');

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl shadow-[0_0_20px_rgba(47,248,1,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <a className="font-headline italic text-2xl font-bold text-white tracking-tighter" href="#">LV MEDIA</a>
        <div className="hidden md:flex items-center gap-10">
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'services' ? 'text-secondary' : 'text-white/70'}`} 
            href="#services"
            onClick={() => setActiveLink('services')}
          >Services</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'work' ? 'text-secondary' : 'text-white/70'}`} 
            href="#work"
            onClick={() => setActiveLink('work')}
          >Work</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'about' ? 'text-secondary' : 'text-white/70'}`} 
            href="#about"
            onClick={() => setActiveLink('about')}
          >About</a>
          <a 
            className={`font-medium text-sm transition-all duration-300 hover:scale-105 hover:text-secondary ${activeLink === 'pricing' ? 'text-secondary' : 'text-white/70'}`} 
            href="#pricing"
            onClick={() => setActiveLink('pricing')}
          >Pricing</a>
          <button className="bg-primary text-on-primary-container px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300">Get a Quote</button>
        </div>
        <button className="md:hidden text-white" aria-label="Toggle mobile menu">
          <Menu />
        </button>
      </div>
    </nav>
  );
}

function Hero() {
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
          The Digital Curator
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline italic text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.95] tracking-tighter mb-8"
        >
          We build digital <br/> experiences <span className="text-secondary">that perform.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-lg font-light mb-12 leading-relaxed"
        >
          Elevate your brand with premium web design, cutting-edge development, and results-driven digital strategies.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-primary text-on-primary-container px-8 py-4 rounded-full font-bold text-base hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.1)]">View Our Work</button>
          <button className="border border-primary text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-primary/5 transition-colors">Book a Discovery Call</button>
        </motion.div>
      </div>
    </section>
  );
}

function InfiniteMarquee() {
  const items = [
    "Results-driven strategies",
    "8 years of industry excellence",
    "120+ high-impact projects delivered",
    "98% client success rate",
    "Award-winning digital design",
    "Global reach & scale"
  ];

  return (
    <section className="py-12 bg-surface-container-low overflow-hidden whitespace-nowrap border-y border-outline-variant/10">
      <div className="flex items-center animate-marquee gap-12 min-w-max will-change-transform">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 text-white/90 text-lg md:text-xl font-headline italic pr-12">
            {items.map((item, j) => (
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

function Expertise() {
  const services = [
    { icon: <PenTool className="w-8 h-8" />, title: "Strategy & Design", desc: "High-conversion UX/UI flows and rapid wireframing for complex web platforms.", list: ["UX Research", "Interface Design", "Interactive Prototypes"] },
    { icon: <Code className="w-8 h-8" />, title: "Engineering", desc: "Robust builds using React, Next.js, and modern tech stacks for scalability.", list: ["Custom Frameworks", "API Integrations", "Performance Focused"] },
    { icon: <Brain className="w-8 h-8" />, title: "AI Integration", desc: "Leverage custom LLMs and automated workflows into your existing product ecosystem.", list: ["Custom LLM Models", "AI Agents", "Data Engineering"] },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Growth & SEO", desc: "Advanced analytics and search engine optimization to dominate your niche.", list: ["SEO Audits", "Conversion Tracking", "Market Analysis"] }
  ];

  return (
    <section className="py-24 md:py-32 bg-surface relative z-10" id="services">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Expertise</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">Our specialized <br/> digital toolkit.</h2>
      </FadeIn>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={i} delay={i * 0.1} className="w-full min-h-[380px] bg-surface-container-low border border-outline-variant/20 p-8 md:p-10 rounded-2xl flex flex-col justify-between group hover:border-secondary/50 transition-all duration-500">
            <div>
              <div className="text-secondary mb-8">{s.icon}</div>
              <h3 className="text-2xl font-headline italic text-white mb-4">{s.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-secondary/70">
              {s.list.map((item, j) => (
                <li key={j} className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    { title: "Nebula Finance", category: "FINTECH", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi-gXf4SanHlS_vpi-WJmDP-GbY9uTND2iCmK_Gqp8IOPgbxRuv9nPyDfcBjUgLQ_dY0Z4Eh1CmwyxOO_p5BC4NNAWR4ZNxwHwmpfS5-4jssGRJgqiiB04KhLWFxV381thUx52PAyGmyOA_8feK10F42tgJxmdUM5Lc3SgwbCQBBd1mRnB-Xv0PIuw6i4suRcQQHdL9rOqlBtngt924GA6HuBuOPljEOc9F5mNud58Nb7iuHTy0B-sJmp61o7za90euzU8EJ9s_CI", aspect: "aspect-square", offset: "" },
    { title: "Vogue Archive", category: "COMMERCE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqVb8rmzKXGtNT8XjZksqvw5TZjSavIfASQ72VYnPLlAs2zlKrYxds36NOeRAZm3EjI3FNz1ji6OhwgcdPaubunGrS40mV5DhSmhAligwsj32IReZuDpbAD8gJkKH8TUX59sYwc34PnZBob5AcNstAP_sBm3QbHanG1IKP92GN-ENudM2UrADa0YDPCeavpACw4okS8x94QCzM5o5BDUa_VTRLh1kDnucdfaumu-eNW97ovApKw3BJMt_8xqRX1xAMZp3-lBv2izA", aspect: "aspect-[4/5]", offset: "md:translate-y-16" },
    { title: "Zenith Health", category: "LIFESTYLE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyayA8mprHDXT64Uw6RGsOWaPfDBuzhN22zTwagAlT8iCyiPas9SKWaMcaalZd7DFJ7X9E3VNUXWUrE_Px8QpnWOFA8YTFSTMxDjA9wMSUymn4UxVgRQsEv1DGchrS4NP9wYgGuoT3IZh5kxiMtIwhBb5wYeBH8LzXEZ5OGvQgt9JWNpuhImVGR5eT1Ju0HvPRmN0QOH2jKKzrkmaRo0nvw7SkLtpbs1istdX1qIqXEvJSLeOw3AoNkhlo2w16JFtT5DVAOqm9UeM", aspect: "aspect-[4/5]", offset: "md:-translate-y-16" },
    { title: "Axiom Labs", category: "CORPORATE", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoqotwUqBJRQCbI2KxPpSgkTkjWviYvHFxE6BpLKIa5snTVqx4ZpTaISDpNwyeqrPA4EIYbY8rLCD14H6i-PRXd9hwlHcGBE3qI5oQ019wrm7tczkz5VM4F5HEACxfGh1gvCF1a30_rtGrDUKBSePiapt3HsSDeV0IcIIa8SIA0h9srDOFHuA0N0e2yPhnNxUErzDvibROpKRLUkGD-TCCkG6RX5S4erjypRaUBBB1Ce2UezBM4RcLjpOteaXNkaxvxYe0SgF7Sz8", aspect: "aspect-square", offset: "" }
  ];

  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-surface-container-lowest relative z-10" id="work">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Our Portfolio</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">Selected Works.</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-6 md:px-12 max-w-7xl mx-auto">
        {projects.map((p, i) => (
          <FadeIn key={i} delay={i * 0.1} className={`relative group overflow-hidden rounded-2xl ${p.aspect} ${p.offset}`}>
            <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
              <span className="text-secondary text-xs font-bold mb-2">{p.category}</span>
              <h3 className="text-3xl font-headline italic text-white">{p.title}</h3>
            </div>
          </FadeIn>
        ))}
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

function Stats() {
  return (
    <section className="py-40 bg-surface relative z-10">
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        <FadeIn delay={0.1} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-surface-container-low border border-outline-variant/10">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={120} suffix="+" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">Projects Completed</p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-secondary-container/10 border border-secondary/20">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={98} suffix="%" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">Satisfaction Rate</p>
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-col items-center justify-center p-12 rounded-3xl bg-surface-container-low border border-outline-variant/10">
          <div className="text-6xl md:text-7xl font-headline italic text-secondary mb-6">
            <Counter from={0} to={8} suffix="+" />
          </div>
          <p className="text-lg text-on-surface uppercase tracking-widest font-bold text-center">Years Experience</p>
        </FadeIn>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: "Sarah Jenkins", role: "Founder & CEO", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZmJ7OM8agMU6JXLYAPXFKH152yy_oaO-k8K9_U7MCri1kEIKTGnPM2cAH6dQbxemhUhXNMnGLJhMlu58MWfx-VDS0ViJefQ6ZxCszcWxn9XbeGaB6fTgkLUzF7oI_UB8HohNgLXVCvWMOQQguqlNvAyCP1k89dWHQQDESapKQSdABEWlWgifw0zAdrDJFNU4_XA5I9GCKXpQG549AAtRSbMkvao-TwygrznrlFANbUbw6KJX6YrUzvTfjnBFPLGVo8sPfCblZYc" },
    { name: "Michael Chen", role: "Lead Designer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiKeGq3mcMsn9KNBiM5iHTltthvNftVNQDF1Pc-GzQ-grmlFIr59Hc5-yOce3q2ekAInTJtWySZvW9VA9WF_LvjUg6YKqX0EEFNcvndXp82CiXZ3SZm7GLk57CLcxgKYZudRKSCPXwH5TqK7zUvJ4fMTDHsDvnvfEc0PG5LOnunHcJUf6S211CT4Hpeuxk0lwC-1UifTLCrn7A5KmbtHnk0dOUNHO1IWR_tQQRxiQUZfhIXPePYjguUdrXpf4bQChRkL6uLaccSUM" },
    { name: "Elena Rodriguez", role: "Tech Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjK8-4eZCSYB_e_ftarrhZPWzWti47uI51Lg-_twKUcO2g3Y51gMs8YpH_y9_Hc9mkeaH7g2eENVl00TrbATlSmCCIH20EfWIMUCi6LGA9nSRHG1U8FeiXuneO7ogS_z7GgqhpV-LS2oAbd4BH8vc5Y6-oKrqD6rHYJHxrLHWSZXxdur9I6XqwRcj6gcNIKriWi2EaMMCQ-NjWxhwyzhGHYmpk4lg8gZwtjCqDFIMtBpduSpAx1UOq6F11rRRqjUCugLiqIe-j-HE" }
  ];

  return (
    <section className="py-40 relative z-10">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">The Brains</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">Led by experts.</h2>
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

function Testimonials() {
  const row1 = [
    { text: "Professional, highly skilled, and easy to communicate with. The team understood our vision perfectly.", name: "Rachel Adams", role: "FOUNDER, NOVA THREADS", initial: "R" },
    { text: "Exceptional code quality and design. They delivered ahead of schedule and exceeded our expectations.", name: "Mark Johnson", role: "CTO, SYNC WORKSPACE", initial: "M" },
    { text: "LVmedia completely transformed our online presence. Our conversion rates have doubled since launching the new site.", name: "David Thompson", role: "CEO, AURA BANKING", initial: "D" }
  ];
  
  const row2 = [
    { text: "Their attention to detail is unmatched. Every aspect of the project was handled with extreme care.", name: "Sarah Jenkins", role: "CMO, NEXUS TECH", initial: "S" },
    { text: "The team at LVmedia is incredibly talented. They brought our complex ideas to life effortlessly.", name: "James Wilson", role: "DIRECTOR, ELEVATE", initial: "J" },
    { text: "Working with LVmedia was a game-changer for our business. The new platform is fast and beautiful.", name: "Emily Chen", role: "FOUNDER, LUMINA", initial: "E" }
  ];

  return (
    <section className="py-32 bg-surface-container-low/30 overflow-hidden border-y border-outline-variant/10 relative z-10">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Testimonials</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white mb-4">Client Feedback</h2>
        <p className="text-on-surface-variant text-lg">Don't just take our word for it. Here's what our partners have to say.</p>
      </FadeIn>
      <div className="flex animate-marquee gap-6 mb-6 min-w-max px-6 md:px-12 will-change-transform">
        {[...row1, ...row1, ...row1].map((t, i) => (
          <div key={i} className="bg-surface-container-low border border-outline-variant/20 p-8 rounded-2xl w-[400px] flex-shrink-0 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary/80" fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-outline-variant/20 bg-surface-container-highest flex items-center justify-center text-white font-bold text-sm">
                {t.initial}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-secondary text-xs font-bold tracking-widest mt-1 uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex animate-marquee-reverse gap-6 min-w-max px-6 md:px-12 will-change-transform">
        {[...row2, ...row2, ...row2].map((t, i) => (
          <div key={i} className="bg-surface-container-low border border-outline-variant/20 p-8 rounded-2xl w-[400px] flex-shrink-0 flex flex-col justify-between min-h-[280px]">
            <div>
              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-secondary/80" fill="currentColor" />)}
              </div>
              <p className="text-on-surface-variant text-base leading-relaxed mb-8">"{t.text}"</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-outline-variant/20 bg-surface-container-highest flex items-center justify-center text-white font-bold text-sm">
                {t.initial}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{t.name}</p>
                <p className="text-secondary text-xs font-bold tracking-widest mt-1 uppercase">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-40 relative z-10" id="pricing">
      <FadeIn className="px-6 md:px-12 max-w-7xl mx-auto mb-24 text-center">
        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Investment</span>
        <h2 className="font-headline italic text-4xl md:text-6xl text-white">Scaleable Pricing.</h2>
      </FadeIn>
      <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <FadeIn delay={0.1} className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-headline italic text-white mb-4">Essential</h3>
            <div className="text-4xl font-headline italic text-white mb-8">$2,500 <span className="text-sm font-body not-italic text-on-surface-variant">/ project</span></div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> 5 Custom Pages</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> Responsive Design</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> Basic SEO</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> 1 Month Support</li>
            </ul>
          </div>
          <button className="w-full py-4 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">Select Plan</button>
        </FadeIn>
        
        <FadeIn delay={0.2} className="bg-surface-container-highest p-10 rounded-3xl border border-secondary/30 relative flex flex-col justify-between shadow-[0_0_50px_rgba(47,248,1,0.1)] scale-105 z-10">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-surface px-4 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full">Recommended</div>
          <div>
            <h3 className="text-xl font-headline italic text-white mb-4">Professional</h3>
            <div className="text-4xl font-headline italic text-white mb-8">$5,000 <span className="text-sm font-body not-italic text-on-surface-variant">/ project</span></div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> 15 Custom Pages</li>
              <li className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> Custom Integrations</li>
              <li className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> Advanced Animations</li>
              <li className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> Advanced SEO</li>
              <li className="flex items-center gap-3 text-on-surface text-sm font-medium"><Check className="text-secondary w-4 h-4" /> 3 Months Support</li>
            </ul>
          </div>
          <button className="w-full py-4 rounded-full bg-primary text-on-primary-container text-sm font-bold hover:scale-105 transition-transform">Get Started</button>
        </FadeIn>

        <FadeIn delay={0.3} className="bg-surface-container-lowest p-10 rounded-3xl border border-outline-variant/10 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-headline italic text-white mb-4">Custom</h3>
            <div className="text-4xl font-headline italic text-white mb-8">Quote</div>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> Unlimited Pages</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> Complex Apps / Dashboards</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> E-commerce Engine</li>
              <li className="flex items-center gap-3 text-on-surface-variant text-sm"><Check className="text-secondary w-4 h-4" /> Dedicated Account Manager</li>
            </ul>
          </div>
          <button className="w-full py-4 rounded-full border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">Contact Sales</button>
        </FadeIn>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you provide SEO?", a: "Yes, all our builds include technical SEO as standard. For higher-tier plans, we provide comprehensive keyword strategy and optimization." },
    { q: "How long does a project take?", a: "Typically, a standard project takes 4–6 weeks. Complex applications or e-commerce platforms can range from 8–12 weeks." },
    { q: "What CMS do you use?", a: "We specialize in headless architectures using Contentful, Sanity, or Strapi. We also build custom management interfaces if required." },
    { q: "Do you offer maintenance?", a: "Absolutely. We provide monthly retainer packages for security updates, performance monitoring, and content management." }
  ];

  return (
    <section className="py-40 bg-surface-container-lowest relative z-10">
      <div className="px-6 md:px-12 max-w-3xl mx-auto">
        <FadeIn className="mb-24 text-center">
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Knowledge Base</span>
          <h2 className="font-headline italic text-4xl md:text-6xl text-white">Frequently Asked Questions.</h2>
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

function Contact() {
  return (
    <section className="py-40 relative overflow-hidden z-10" id="contact">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn>
          <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-4 block">Connect</span>
          <h2 className="font-headline italic text-4xl md:text-7xl text-white mb-8">Let's build <br/> something <br/> amazing together.</h2>
          <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">Have a project in mind? Fill out the form and our design lead will reach out within 24 hours.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white">
              <Mail className="text-secondary w-5 h-5" />
              <span>hello@lvmedia.studio</span>
            </div>
            <div className="flex items-center gap-4 text-white">
              <MapPin className="text-secondary w-5 h-5" />
              <span>Los Angeles, CA</span>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="glass-card p-10 md:p-12 rounded-3xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">Name</label>
                <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder="First Name" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">Last Name</label>
                <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder="Last Name" type="text" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">Email</label>
              <input className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder="your@email.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase font-bold text-on-surface-variant tracking-widest">Project Details</label>
              <textarea className="w-full bg-surface-container border-none rounded-xl focus:ring-1 focus:ring-secondary text-white p-4 outline-none text-sm" placeholder="Tell us about your project..." rows={4}></textarea>
            </div>
            <button className="w-full py-4 rounded-full bg-primary text-on-primary-container font-black text-base hover:scale-[1.02] transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.05)]" type="submit">Send Inquiry</button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
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
            Crafting digital experiences that elevate brands and drive results.
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
          <h3 className="text-white font-bold text-base">Services</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-secondary transition-colors">Web Design</a>
            <a href="#" className="hover:text-secondary transition-colors">Development</a>
            <a href="#" className="hover:text-secondary transition-colors">UI/UX Design</a>
            <a href="#" className="hover:text-secondary transition-colors">SEO Optimization</a>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-base">Company</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-secondary transition-colors">About Us</a>
            <a href="#" className="hover:text-secondary transition-colors">Our Work</a>
            <a href="#" className="hover:text-secondary transition-colors">Careers</a>
            <a href="#" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-base">Legal</h3>
          <div className="flex flex-col gap-4 text-sm text-on-surface-variant">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
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
  return (
    <div className="bg-surface selection:bg-secondary selection:text-surface-container-lowest min-h-screen text-on-surface font-body overflow-x-hidden relative">
      <Particles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <InfiniteMarquee />
        <Expertise />
        <Work />
        <Stats />
        <Team />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
