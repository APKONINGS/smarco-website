import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from './components/Logo.jsx'
import Seo from './components/Seo.jsx'
import LangToggle from './components/LangToggle.jsx'
import { useLang } from './i18n.js'
import { FORM_ENDPOINT, whatsappLink } from './site.js'
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  HardHat,
  PenTool,
  Building2,
  Route,
  Hammer,
  Calculator,
  Menu,
  X,
  Upload,
  MessageCircle,
  ChevronDown,
  Plus,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ----------------------------------------------------------------
   Constants
   All visible text lives in src/locales/{en,fr}.js; arrays here hold the
   non-text parts (icons, images, numbers) in the same order.
---------------------------------------------------------------- */
const NAV_LINKS = ['home', 'services', 'philosophy', 'projects', 'process', 'contact']

// Same order as t.services.items
const SERVICE_ICONS = [PenTool, Building2, HardHat, Route, Hammer, Calculator]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar() {
  const { t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-premium ${
          scrolled ? 'glass shadow-xl shadow-ink/10' : 'bg-transparent'
        } rounded-full px-5 sm:px-7 py-3 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 group">
            <Logo className="h-[46px] w-[46px] sm:h-[50px] sm:w-[50px] transition-transform group-hover:scale-105" />
            <span
              className={`font-display font-black tracking-tight text-lg leading-tight ${
                scrolled ? 'text-accent-dark' : 'text-accent-light'
              } transition-colors`}
            >
              SMART Architecture
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className={`text-sm font-medium tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {t.nav.links[key]}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <LangToggle tone={scrolled ? 'light' : 'dark'} />
            <a href="#contact" className="btn-primary gap-1.5 px-4 py-2 text-sm whitespace-nowrap">
              {t.nav.quote}
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LangToggle tone={scrolled ? 'light' : 'dark'} className="hidden sm:inline-flex" />
            <button
              onClick={() => setOpen(true)}
              className={`p-2 rounded-full ${scrolled ? 'text-ink' : 'text-white'}`}
              aria-label={t.nav.openMenu}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-deep/90 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <span className="font-display font-black text-xl text-accent-dark">SMART Architecture</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-full bg-divider/40" aria-label={t.nav.closeMenu}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-ink py-3 border-b border-divider"
              >
                {t.nav.links[key]}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 btn-primary px-6 py-4 w-full"
          >
            {t.nav.quote}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{t.lang.label}</span>
            <LangToggle onSwitch={() => setOpen(false)} />
          </div>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const { t } = useLang()
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.3 })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-[100dvh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=75"
          srcSet={[800, 1200, 1600, 2400]
            .map((w) => `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=${w}&q=75 ${w}w`)
            .join(', ')}
          sizes="100vw"
          fetchPriority="high"
          alt={t.hero.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/85 via-deep/50 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
      </div>

      {/* Decorative floating construction sparks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[18%] h-2 w-2 rounded-full bg-accent/70 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[10%] h-1.5 w-1.5 rounded-full bg-accent-light/50 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] right-[26%] h-1 w-1 rounded-full bg-primary-light/70 animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[68%] right-[22%] h-1.5 w-1.5 rounded-full bg-white/30 animate-float" style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center">
        <div className="px-6 sm:px-10 lg:px-16 max-w-4xl">
          <p className="hero-meta font-mono text-xs uppercase tracking-[0.3em] text-white/70 mb-6">
            {t.hero.eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-5xl md:text-6xl">
              {t.hero.line1}
            </span>
            <span
              className="hero-line-2 block font-serif italic font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              <span className="text-accent-light">{t.hero.to}</span>{' '}
              <span className="bg-gradient-to-r from-primary-light via-white to-primary-light bg-clip-text text-transparent">
                {t.hero.reality}
              </span>
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            {t.hero.intro}
            <span className="text-white"> {t.hero.introStrong}</span>
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="btn-primary group shadow-2xl shadow-primary/40 px-7 py-4"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+237652370882"
              className="btn-glass px-7 py-4"
            >
              <Phone className="h-4 w-4 text-accent-light" />
              +237 652 370 882
            </a>
          </div>

          <div className="hero-meta mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {t.hero.badges.map((item) => (
              <span key={item} className="flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-light" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[10px] tracking-[0.3em]">{t.hero.scroll}</span>
          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Feature Card 1 — Architecture Shuffler
---------------------------------------------------------------- */
const SHUFFLER_SPECS = ['3D + CAD', 'BIM', '2D + 3D'] // same order as t.shuffler

function ArchitectureShuffler() {
  const { t } = useLang()
  const items = t.shuffler.map((item, i) => ({ ...item, spec: SHUFFLER_SPECS[i] }))
  const [rotation, setRotation] = useState(0)
  // Rotate right by one each tick: the last card comes to the front.
  const n = items.length
  const stack = items.map((_, i) => items[(((i - rotation) % n) + n) % n])

  useEffect(() => {
    const interval = setInterval(() => setRotation((r) => r + 1), 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-44 w-full">
      {stack.map((item, i) => {
        const offset = i
        const total = stack.length
        return (
          <div
            key={item.tag}
            style={{
              transform: `translate(${offset * 14}px, ${offset * 14}px) scale(${1 - offset * 0.05})`,
              zIndex: total - offset,
              opacity: 1 - offset * 0.25,
              transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
            }}
            className="absolute inset-0 bg-white border border-divider rounded-3xl p-5 shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-1 rounded-full">
                {item.tag}
              </span>
              <span className="font-mono text-xs text-muted">{item.spec}</span>
            </div>
            <div className="mt-4 font-display text-lg font-semibold text-ink leading-tight">
              {item.label}
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              {Array.from({ length: 24 }).map((_, idx) => (
                <span
                  key={idx}
                  className="h-1 w-1 rounded-full"
                  style={{ background: idx < 24 - offset * 6 ? '#2563EB' : '#E2E8F0' }}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 2 — Site Watch (signature construction animation)
   Re-skinned from the reference "falling drops" pattern: I-beam +
   welding sparks in safety-orange, over a foundation surface line.
---------------------------------------------------------------- */
const SITE_STATUS_TONES = ['primary', 'warning', 'primary', 'accent'] // same order as t.siteWatch.statuses
const SITE_STATUS_PASSED = 3

function SiteWatch() {
  const { t } = useLang()
  const [statusIdx, setStatusIdx] = useState(0)
  const [count, setCount] = useState(6)

  const statuses = t.siteWatch.statuses.map((s, i) => ({ ...s, tone: SITE_STATUS_TONES[i] }))

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((idx) => {
        const next = (idx + 1) % SITE_STATUS_TONES.length
        if (next === SITE_STATUS_PASSED) setCount((c) => c + 1)
        return next
      })
    }, 2300)
    return () => clearInterval(interval)
  }, [])

  const sparks = [
    { left: '15%', delay: '0.0s', dur: '2.6s', size: 12 },
    { left: '25%', delay: '1.3s', dur: '3.0s', size: 10 },
    { left: '38%', delay: '0.6s', dur: '2.8s', size: 14 },
    { left: '50%', delay: '1.8s', dur: '2.4s', size: 11 },
    { left: '62%', delay: '0.9s', dur: '3.1s', size: 13 },
    { left: '74%', delay: '2.0s', dur: '2.7s', size: 10 },
    { left: '85%', delay: '0.4s', dur: '2.9s', size: 12 },
  ]

  const ripples = [
    { left: '22%', delay: '0.2s' },
    { left: '48%', delay: '1.0s' },
    { left: '76%', delay: '1.8s' },
  ]

  const status = statuses[statusIdx]
  const toneText =
    status.tone === 'accent' ? 'text-accent-dark' : status.tone === 'warning' ? 'text-amber-600' : 'text-primary-dark'
  const toneDot = status.tone === 'accent' ? 'bg-accent' : status.tone === 'warning' ? 'bg-amber-500' : 'bg-primary'

  return (
    <div
      className="relative h-44 w-full rounded-3xl overflow-hidden border border-primary/15"
      style={{ background: 'linear-gradient(180deg, #F3EFE8 0%, #E4DAC7 70%, #D9CFBC 100%)' }}
    >
      <div className="absolute -top-8 -left-6 h-20 w-32 rounded-full bg-white/50 blur-2xl" />
      <div className="absolute top-2 right-10 h-14 w-24 rounded-full bg-white/40 blur-xl" />

      {/* Header strip */}
      <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2">
          <HardHat className="h-3.5 w-3.5 text-accent-dark" strokeWidth={2.2} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-dark">
            {t.siteWatch.title}
          </span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-sm text-ink tabular-nums">
            {String(count).padStart(2, '0')}
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted">{t.siteWatch.sitesToday}</span>
        </div>
      </div>

      {/* I-beam girder */}
      <svg className="absolute left-3 right-3 top-9 h-5" viewBox="0 0 400 20" preserveAspectRatio="none">
        <rect x="0" y="2" width="400" height="3" fill="#5B5346" fillOpacity="0.55" />
        <rect x="0" y="15" width="400" height="3" fill="#5B5346" fillOpacity="0.55" />
        <rect x="0" y="4" width="400" height="12" fill="#8A7F68" fillOpacity="0.35" />
        {[60, 152, 248, 340].map((x) => (
          <rect key={x} x={x - 2} y="2" width="4" height="16" fill="#5B5346" fillOpacity="0.5" />
        ))}
      </svg>

      {/* Spark field */}
      <div className="absolute inset-x-0 top-14 bottom-11 overflow-hidden">
        {sparks.map((d, i) => (
          <svg
            key={i}
            className="absolute top-0"
            style={{
              left: d.left,
              width: `${d.size}px`,
              height: `${d.size}px`,
              animation: `rain-fall ${d.dur} cubic-bezier(0.55,0.05,0.7,0.45) ${d.delay} infinite`,
              filter: 'drop-shadow(0 1px 2px rgba(21,128,61,0.35))',
              transform: 'translateX(-50%)',
            }}
            viewBox="0 0 24 24"
          >
            <defs>
              <radialGradient id={`spark-${i}`} cx="50%" cy="35%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#15803D" />
              </radialGradient>
            </defs>
            <path
              d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
              fill={`url(#spark-${i})`}
            />
          </svg>
        ))}
      </div>

      {/* Foundation surface (cross-hatched) */}
      <svg className="absolute bottom-9 left-3 right-3 h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
        <line x1="0" y1="6" x2="200" y2="6" stroke="#8A7F68" strokeOpacity="0.5" strokeWidth="1.2" />
        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={i}
            x1={i * 10}
            y1="6"
            x2={i * 10 + 5}
            y2="11"
            stroke="#8A7F68"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Spark scatter ripples */}
      <div className="absolute bottom-[34px] left-3 right-3 h-2">
        {ripples.map((r, i) => (
          <span
            key={i}
            className="absolute top-0 -translate-x-1/2 rounded-full border border-accent-dark/50"
            style={{ left: r.left, width: '4px', height: '4px', animation: `rain-ripple 2.4s ease-out ${r.delay} infinite` }}
          />
        ))}
      </div>

      {/* Bottom status */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20">
        <div className="flex items-center gap-2 min-w-0">
          <span className={`relative h-2 w-2 rounded-full ${toneDot}`}>
            {status.tone === 'warning' && <span className={`absolute inset-0 rounded-full ${toneDot} animate-ping`} />}
          </span>
          <span
            key={status.text}
            className={`font-mono text-[10px] truncate ${toneText}`}
            style={{ animation: 'rain-fadein 0.35s ease-out' }}
          >
            {status.text}
          </span>
        </div>
        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] whitespace-nowrap pl-2 ${toneText}`}>
          {status.label}
        </span>
      </div>

      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

/* ----------------------------------------------------------------
   Feature Card 3 — Project Scheduler (cursor + calendar)
---------------------------------------------------------------- */
function ProjectScheduler() {
  const { t } = useLang()
  const days = t.scheduler.days
  const [step, setStep] = useState(0)
  const activeDay = 2

  useEffect(() => {
    const interval = setInterval(() => setStep((prev) => (prev + 1) % 5), 1400)
    return () => clearInterval(interval)
  }, [])

  const cursorPos = (() => {
    switch (step) {
      case 0:
        return { x: 8, y: 110, opacity: 0 }
      case 1:
        return { x: 60, y: 60, opacity: 1 }
      case 2:
      case 3:
        return { x: 60 + activeDay * 36, y: 60, opacity: 1 }
      case 4:
        return { x: 130, y: 130, opacity: 1 }
      default:
        return { x: 8, y: 110, opacity: 0 }
    }
  })()

  return (
    <div className="relative h-44 w-full bg-white border border-divider rounded-3xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">{t.scheduler.week}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-primary-dark bg-primary/10 px-2 py-0.5 rounded-full">
          {t.scheduler.milestone}
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {days.map((d, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center h-9 rounded-xl text-xs font-medium transition-all duration-300 ${
              step >= 3 && idx === activeDay
                ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/30'
                : 'bg-background text-ink'
            }`}
          >
            <span className="font-mono text-[9px] text-muted">{d}</span>
            <span className="font-display font-semibold text-sm">{idx + 7}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-2.5 rounded-2xl font-medium text-xs transition-all duration-300 ${
          step === 4 ? 'bg-accent text-white scale-[1.02] shadow-md shadow-accent/30' : 'bg-divider/40 text-muted'
        }`}
      >
        {step >= 3 ? t.scheduler.confirmed : t.scheduler.select}
      </button>

      <div
        className="absolute pointer-events-none transition-all duration-500 ease-out"
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px`, opacity: cursorPos.opacity, transform: step === 3 ? 'scale(0.85)' : 'scale(1)' }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#0F172A" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------
   Features Section
---------------------------------------------------------------- */
function Features() {
  const { t } = useLang()
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 90%', once: true },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
      })
      gsap.from('.feature-heading > *', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 95%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const visuals = [
    { Component: ArchitectureShuffler, tone: 'primary' },
    { Component: SiteWatch, tone: 'accent' },
    { Component: ProjectScheduler, tone: 'primary' },
  ]
  const cards = t.features.cards.map((card, i) => ({ ...card, ...visuals[i] }))

  return (
    <section id="services" ref={sectionRef} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="feature-heading max-w-3xl mb-16 sm:mb-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">
            {t.features.eyebrow}
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
            {t.features.title1}
            <span className="block font-serif italic font-medium text-primary-dark mt-1">{t.features.title2}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className={`feature-card group relative bg-surface border border-divider rounded-5xl p-7 transition-colors duration-500 shadow-sm hover:shadow-xl ${
                card.tone === 'accent' ? 'hover:border-accent/40 hover:shadow-accent/10' : 'hover:border-primary/40 hover:shadow-primary/10'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">{card.eyebrow}</span>
                <ArrowUpRight
                  className={`h-5 w-5 text-ink/30 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all ${
                    card.tone === 'accent' ? 'group-hover:text-accent' : 'group-hover:text-primary'
                  }`}
                  strokeWidth={1.8}
                />
              </div>

              <card.Component />

              <div className="mt-6">
                <h3 className="font-display font-bold text-2xl text-ink leading-tight">{card.heading}</h3>
                <p className={`font-serif italic text-sm mt-1 ${card.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'}`}>
                  {card.sub}
                </p>
                <p className="text-muted text-[15px] mt-4 leading-relaxed">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(target * eased))
              if (progress < 1) requestAnimationFrame(animate)
              else setCount(target)
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — Three core numbers
---------------------------------------------------------------- */
function Pillars() {
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const figures = [
    { n: '01', target: 10, suffix: '+', tone: 'primary' },
    { n: '02', target: 100, suffix: '+', tone: 'accent' },
    { n: '03', target: 100, suffix: '%', tone: 'primary' },
  ]
  const pillars = t.pillars.items.map((p, i) => ({ ...p, ...figures[i] }))

  return (
    <section id="philosophy" ref={ref} className="relative py-28 sm:py-40 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/14 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-accent-dark mb-5">
              {t.pillars.eyebrow}
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              {t.pillars.title1}
              <span className="block font-serif italic font-medium text-primary-dark">{t.pillars.title2}</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">{t.pillars.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-primary/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {p.n} / {p.title}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full group-hover:scale-150 transition-all duration-500 ${
                    p.tone === 'accent' ? 'bg-accent/40 group-hover:bg-accent' : 'bg-primary/40 group-hover:bg-primary'
                  }`}
                />
              </div>

              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[6rem] sm:text-[8rem] md:text-[9rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span
                  className={`font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 ${
                    p.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'
                  }`}
                >
                  {p.suffix}
                </span>
              </div>

              <p className={`font-mono text-[10px] uppercase tracking-[0.25em] mt-5 ${p.tone === 'accent' ? 'text-accent-dark' : 'text-primary-dark'}`}>
                {p.label}
              </p>
              <p className="text-muted text-[15px] mt-6 leading-relaxed max-w-xs">{p.desc}</p>

              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-transparent to-transparent ${p.tone === 'accent' ? 'via-accent' : 'via-primary'}`}
                  style={{ animation: `pillar-sweep 4s ease-in-out ${i * 0.4}s infinite` }}
                />
              </div>

              <span
                className={`absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest ${
                  p.tone === 'accent' ? 'text-accent/30' : 'text-primary/30'
                }`}
              >
                {p.n}.cm
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Projects — portfolio grid
---------------------------------------------------------------- */
// PLACEHOLDER CONTENT: replace every entry with a real SMARCO project before launch.
// Title, location and scope text live in t.projects.items (same order) in both locale files.
// `image` is a path in /public (e.g. '/projects/molyko-residence.jpg') or null for the blueprint tile.
const PROJECTS = [
  { category: 'residential', year: '2025', image: null },
  { category: 'commercial', year: '2024', image: null },
  { category: 'institutional', year: '2024', image: null },
  { category: 'infrastructure', year: '2023', image: null },
  { category: 'residential', year: '2023', image: null },
  { category: 'institutional', year: '2022', image: null },
]

const PROJECT_FILTERS = ['all', ...new Set(PROJECTS.map((p) => p.category))]

function Projects() {
  const { t } = useLang()
  const ref = useRef(null)
  const [filter, setFilter] = useState('all')
  const projects = PROJECTS.map((p, i) => ({ ...p, ...t.projects.items[i] }))
  const shown = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const filterLabel = (f) => (f === 'all' ? t.projects.all : t.projects.categories[f])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.08,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">{t.projects.eyebrow}</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              {t.projects.title1}
              <span className="block font-serif italic font-medium text-accent-dark">{t.projects.title2}</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label={t.projects.filterLabel}>
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? 'bg-accent-dark text-white border-accent-dark'
                    : 'bg-surface text-ink/70 border-divider hover:border-accent/50'
                }`}
              >
                {filterLabel(f)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((p) => (
            <article
              key={p.title}
              className="project-card group bg-surface border border-divider rounded-4xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-deep">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={t.projects.imageAlt(p.title, p.location)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="absolute inset-0 grid-bg opacity-40 flex items-center justify-center" aria-hidden="true">
                    <Building2 className="h-14 w-14 text-primary-light/40" strokeWidth={1.2} />
                  </div>
                )}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink">
                  {t.projects.categories[p.category]}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-ink">{p.title}</h3>
                <p className="flex items-center gap-1.5 text-muted text-sm mt-1.5">
                  <MapPin className="h-3.5 w-3.5 text-accent-dark" />
                  {p.location} · {p.year}
                </p>
                <p className="text-ink/70 text-sm mt-4 pt-4 border-t border-divider">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards
---------------------------------------------------------------- */
function Protocol() {
  const { t } = useLang()
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=100',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=120',
            scrub: 1,
          },
          scale: 0.92,
          filter: 'blur(6px) saturate(0.7)',
          opacity: 0.5,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const images = [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  ]
  const steps = t.process.steps.map((step, i) => ({
    ...step,
    num: String(i + 1).padStart(2, '0'),
    image: images[i],
  }))

  return (
    <section id="process" ref={containerRef} className="relative px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">{t.process.eyebrow}</span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          {t.process.title1}
          <span className="block font-serif italic font-medium text-accent-dark">{t.process.title2}</span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[60vh] lg:min-h-[70vh]">
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{step.meta}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-dark bg-accent/10 px-2.5 py-1 rounded-full">
                    {t.process.badge}
                  </span>
                </div>

                <div className="my-12">
                  <span className="font-display font-extrabold text-[7rem] sm:text-[10rem] leading-none text-accent/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.02] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-accent-dark text-2xl sm:text-3xl mt-3">{step.tagline}</p>
                </div>

                <p className="text-muted text-base sm:text-lg leading-relaxed max-w-lg">{step.text}</p>
              </div>

              <div className="lg:col-span-2 relative overflow-hidden min-h-[300px] lg:min-h-full bg-deep">
                <img src={step.image} alt={step.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-deep/15" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink">{t.process.step} {step.num}</span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/70">
                  {step.num} / SMART Architecture
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid
---------------------------------------------------------------- */
function ServicesGrid() {
  const { t } = useLang()
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-primary/18 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-light">{t.services.eyebrow}</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              {t.services.title1}
              <span className="block font-serif italic font-medium text-primary-light">{t.services.title2}</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base leading-relaxed">{t.services.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {t.services.items.map((svc, i) => {
            const Icon = SERVICE_ICONS[i]
            const isGreen = i % 2 === 0
            return (
              <div key={i} className="svc-tile group bg-deep p-7 sm:p-9 hover:bg-white/[0.02] transition-colors duration-500 relative">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`h-12 w-12 rounded-2xl border flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
                      isGreen
                        ? 'bg-accent/15 border-accent/30 group-hover:bg-accent'
                        : 'bg-primary/15 border-primary/30 group-hover:bg-primary'
                    }`}
                  >
                    <Icon className={`h-5 w-5 group-hover:text-white ${isGreen ? 'text-accent-light' : 'text-primary-light'}`} strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const { t } = useLang()
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const looks = [
    { Icon: ShieldCheck, tone: 'accent' },
    { Icon: Award, tone: 'accent' },
    { Icon: Clock, tone: 'primary' },
  ]
  const badges = t.trust.badges.map((b, i) => ({ ...b, ...looks[i] }))

  return (
    <section ref={ref} className="relative py-14 sm:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">{t.trust.eyebrow}</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            {t.trust.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {badges.map(({ Icon, title, text, tone }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-white border border-divider rounded-4xl p-6 transition-all duration-700 ease-out shadow-sm ${
                tone === 'accent' ? 'hover:border-accent/40' : 'hover:border-primary/40'
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <Icon className={`h-6 w-6 mb-3 ${tone === 'accent' ? 'text-accent-dark' : 'text-primary'}`} strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-1.5">{title}</h3>
              <p className="text-muted text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="btn-primary shadow-xl shadow-primary/30 px-7 py-3.5"
          >
            {t.trust.cta}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   FAQ
---------------------------------------------------------------- */
function Faq() {
  const { t } = useLang()

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">{t.faq.eyebrow}</span>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-ink mt-4 leading-[1.05] tracking-tight">
            {t.faq.title1}
            <span className="block font-serif italic font-medium text-accent-dark">{t.faq.title2}</span>
          </h2>
          <p className="text-muted text-lg mt-6 leading-relaxed">{t.faq.intro}</p>
          <a
            href={whatsappLink(t.whatsappButton.greeting)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3.5 mt-8"
          >
            <MessageCircle className="h-4 w-4" />
            {t.faq.cta}
          </a>
        </div>

        <div className="lg:col-span-8 divide-y divide-divider border-y border-divider">
          {t.faq.items.map((item, i) => (
            <details key={i} className="group py-1" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display font-semibold text-lg sm:text-xl text-ink">{item.q}</h3>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-divider text-accent-dark transition-transform duration-300 group-open:rotate-45 group-open:bg-accent/10">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="text-muted leading-relaxed pb-6 pr-12 max-w-2xl">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form
---------------------------------------------------------------- */
const inputClass =
  'w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body'

function FieldLabel({ htmlFor, label, required }) {
  return (
    <label htmlFor={htmlFor} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
      {label} {required && '*'}
    </label>
  )
}

function Field({ label, type = 'text', required, value, onChange }) {
  const id = useId()
  return (
    <div>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
    </div>
  )
}

function SelectField({ label, options, required, value, onChange }) {
  const { t } = useLang()
  const id = useId()
  return (
    <div>
      <FieldLabel htmlFor={id} label={label} required={required} />
      <div className="relative">
        <select
          id={id}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} appearance-none pr-10 ${value ? '' : 'text-muted'}`}
        >
          <option value="">{t.contact.select}</option>
          {options.map((o) => (
            <option key={o} value={o} className="text-ink">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
      </div>
    </div>
  )
}

// `m` is t.contact.message
function enquiryText(form, m) {
  return [
    m.greeting,
    '',
    `${m.name}: ${form.name}`,
    `${m.email}: ${form.email}`,
    form.phone ? `${m.phone}: ${form.phone}` : null,
    `${m.projectType}: ${form.projectType}`,
    form.location ? `${m.location}: ${form.location}` : null,
    form.budget ? `${m.budget}: ${form.budget}` : null,
    form.timeline ? `${m.timeline}: ${form.timeline}` : null,
    '',
    form.message,
  ]
    .filter((line) => line !== null)
    .join('\n')
}

function ContactForm() {
  const { t } = useLang()
  const c = t.contact
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [files, setFiles] = useState([])
  // idle | sending | sent | whatsapp | error
  const [status, setStatus] = useState('idle')
  const dropRef = useRef(null)
  const set = (key) => (v) => setForm((f) => ({ ...f, [key]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.projectType || !form.message) return

    if (!FORM_ENDPOINT) {
      // No form service configured yet: hand the enquiry over to WhatsApp, pre-filled.
      window.open(whatsappLink(enquiryText(form, c.message)), '_blank', 'noopener')
      setStatus('whatsapp')
      return
    }

    setStatus('sending')
    const data = new FormData()
    Object.entries(form).forEach(([k, v]) => data.append(k, v))
    data.append('_subject', c.subject(form.projectType, form.name))
    files.forEach((f) => data.append('photos', f))
    try {
      const res = await fetch(FORM_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dark">{c.eyebrow}</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              {c.title1}
              <span className="block font-serif italic font-medium text-accent-dark">{c.title2}</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed max-w-md">{c.intro}</p>

            <div className="mt-10 space-y-4">
              <a href="tel:+237652370882" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.callOffice}</span>
                  <span className="font-display font-semibold text-ink text-lg">+237 652 370 882</span>
                </span>
              </a>

              <a href="tel:+237679684854" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.altLine}</span>
                  <span className="font-display font-semibold text-ink text-lg">+237 679 684 854</span>
                </span>
              </a>

              <a href="tel:+237677915878" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.ceo}</span>
                  <span className="font-display font-semibold text-ink text-lg">+237 677 915 878</span>
                </span>
              </a>

              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent transition">
                  <MessageCircle className="h-5 w-5 text-accent-dark group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.whatsapp}</span>
                  <span className="font-display font-semibold text-ink text-lg">{c.whatsappSub}</span>
                </span>
              </a>

              <a href="mailto:ebuafield@gmail.com" className="lift-on-hover flex items-center gap-4 group">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.email}</span>
                  <span className="font-display font-semibold text-ink text-lg">ebuafield@gmail.com</span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted">{c.office}</span>
                  <span className="font-display font-semibold text-ink text-lg">Bomaka, Opposite FHS, Buea</span>
                </span>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-3xl bg-accent/5 border border-accent/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent-dark mb-2">
                {c.confidentialityTitle}
              </p>
              <p className="text-sm text-muted leading-relaxed">{c.confidentiality}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-surface border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-primary/5">
              {status !== 'sent' && status !== 'whatsapp' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={c.fields.name} required value={form.name} onChange={set('name')} />
                    <Field label={c.fields.email} type="email" required value={form.email} onChange={set('email')} />
                    <Field label={c.fields.phone} type="tel" value={form.phone} onChange={set('phone')} />
                    <Field label={c.fields.location} value={form.location} onChange={set('location')} />
                    <SelectField label={c.fields.projectType} required options={c.projectTypes} value={form.projectType} onChange={set('projectType')} />
                    <SelectField label={c.fields.budget} options={c.budgets} value={form.budget} onChange={set('budget')} />
                    <div className="sm:col-span-2">
                      <SelectField label={c.fields.timeline} options={c.timelines} value={form.timeline} onChange={set('timeline')} />
                    </div>
                  </div>

                  <div className="mt-5">
                    <FieldLabel htmlFor="enquiry-message" label={c.fields.message} required />
                    <textarea
                      id="enquiry-message"
                      value={form.message}
                      onChange={(e) => set('message')(e.target.value)}
                      required
                      rows={5}
                      placeholder={c.messagePlaceholder}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {FORM_ENDPOINT && <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-primary', '!bg-primary/5')
                    }}
                    onDragLeave={() => dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-primary', '!bg-primary/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <input type="file" multiple id="file-up" className="hidden" onChange={(e) => handleFiles(e.target.files)} accept="image/*" />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-6 w-6 mx-auto text-primary-dark mb-2" />
                      <p className="font-display font-semibold text-ink text-sm">{c.attachTitle}</p>
                      <p className="text-xs text-muted mt-1">{c.attachSub}</p>
                      {files.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 justify-center">
                          {files.map((f, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 bg-accent/10 text-accent-dark text-xs px-3 py-1.5 rounded-full font-mono">
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 22 ? f.name.slice(0, 22) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>}

                  {status === 'error' && (
                    <p role="alert" className="mt-5 text-sm text-red-700 bg-red-50 border border-red-200 rounded-2xl px-4 py-3">
                      {c.errorBefore}{' '}
                      <a href={whatsappLink(enquiryText(form, c.message))} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                        {c.errorLink}
                      </a>
                      {c.errorAfter}
                    </p>
                  )}

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      {FORM_ENDPOINT ? c.noteEndpoint : c.noteWhatsapp}
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="btn-primary px-7 py-3.5 disabled:opacity-50"
                    >
                      {status === 'sending' ? c.sending : FORM_ENDPOINT ? c.send : c.sendWhatsapp}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="h-16 w-16 mx-auto rounded-full bg-accent/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-accent-dark" />
                  </div>
                  {status === 'sent' ? (
                    <>
                      <h3 className="font-display font-bold text-2xl text-ink mb-3">{c.sentTitle}</h3>
                      <p className="text-muted max-w-md mx-auto">{c.sentText}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-2xl text-ink mb-3">{c.waTitle}</h3>
                      <p className="text-muted max-w-md mx-auto">{c.waText}</p>
                      <a
                        href={whatsappLink(enquiryText(form, c.message))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 mt-6"
                      >
                        {c.waRetry}
                      </a>
                    </>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  const { t, to } = useLang()
  const f = t.footer
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-accent/16 blur-3xl" />
      <div className="absolute top-1/3 right-0 h-56 w-56 rounded-full bg-primary/16 blur-3xl" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            {f.tagline1}
            <span className="font-serif italic font-medium text-accent-light block">{f.tagline2}</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md">{f.blurb}</p>
            <a
              href="#contact"
              className="btn-primary px-7 py-3.5 self-start sm:self-auto"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-14 w-14" />
              <span className="font-display font-black text-lg text-accent-light">SMART Architecture</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">{f.about}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-6">{f.ceoLine}</p>
            <LangToggle tone="dark" className="mt-6" />
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light mb-4">{f.services}</p>
            <ul className="space-y-2.5">
              {t.services.items.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a href="#services" className="text-white/65 hover:text-primary transition text-sm">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-4">{f.company}</p>
            <ul className="space-y-2.5">
              {['philosophy', 'projects', 'process', 'faq', 'contact'].map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-white/65 hover:text-primary transition text-sm">
                    {key === 'faq' ? f.faq : t.nav.links[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light mb-4">{f.contact}</p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+237652370882" className="text-white/65 hover:text-primary transition text-sm">
                  +237 652 370 882
                </a>
              </li>
              <li>
                <a href="tel:+237679684854" className="text-white/65 hover:text-primary transition text-sm">
                  +237 679 684 854
                </a>
              </li>
              <li>
                <a href="tel:+237677915878" className="text-white/65 hover:text-primary transition text-sm">
                  +237 677 915 878
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-primary transition text-sm">
                  {f.whatsapp}
                </a>
              </li>
              <li>
                <a href="mailto:ebuafield@gmail.com" className="text-white/65 hover:text-primary transition text-sm">
                  ebuafield@gmail.com
                </a>
              </li>
              <li className="text-white/65 text-sm">{f.address}</li>
              <li className="text-white/65 text-sm">Facebook — SMARCO Co. LTD</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent-light animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent-light" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/60">
              {f.status}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/50 text-xs font-mono">
            <Link to={to('/privacy')} className="hover:text-primary transition">{f.privacy}</Link>
            <Link to={to('/terms')} className="hover:text-primary transition">{f.terms}</Link>
            <span>© 2026 SMART Architecture &amp; Construction Co. Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   Floating WhatsApp button
---------------------------------------------------------------- */
function WhatsAppButton() {
  const { t } = useLang()
  return (
    <a
      href={whatsappLink(t.whatsappButton.greeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappButton.label}
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 pl-4 pr-5 py-3.5 hover:brightness-105 hover:-translate-y-0.5 transition"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
      <span className="hidden sm:inline font-semibold text-sm">{t.whatsappButton.short}</span>
    </a>
  )
}

/* ----------------------------------------------------------------
   App
---------------------------------------------------------------- */
export default function App() {
  const { t } = useLang()
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <Seo title={t.seo.title} description={t.seo.description} path="/" />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Projects />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
