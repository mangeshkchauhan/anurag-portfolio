'use client';

import { ArrowRight, BarChart3, CircleDollarSign, Gauge, LineChart, Network, ShieldCheck, Sparkles, Target } from 'lucide-react';

const BOOKING_URL = 'https://calendly.com/anuragray1999/30min';
const DECK_URL = 'https://docs.google.com/presentation/d/1d1QymCVW8Qvt2TnMQcezXLLYWa-gyFc3Aqpw1NZOYKM/edit?usp=sharing';
const HERO_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4';
const RESERVE_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4';
const LOGO_IMAGE = '/tokenomy-assets/logo.png';
const NETWORK_IMAGE = '/tokenomy-assets/net1.png';

const services = [
  {
    title: 'Token Architecture',
    body: 'Supply, vesting, emissions, incentives, sinks, and utility shaped into one operating model.',
    icon: CircleDollarSign,
  },
  {
    title: 'Economic Reporting',
    body: 'Decision-grade analysis across user cohorts, liquidity, retention, runway, and market pressure.',
    icon: LineChart,
  },
  {
    title: 'Behavior Design',
    body: 'On-chain and product behavior mapped into rewards that retain real users, not mercenary volume.',
    icon: Network,
  },
  {
    title: 'Utility Systems',
    body: 'Token and NFT utility designed around actual product demand instead of speculative decoration.',
    icon: Sparkles,
  },
  {
    title: 'Launch Strategy',
    body: 'Airdrops, liquidity, sequencing, and communication plans built for cleaner market entry.',
    icon: Target,
  },
  {
    title: 'Treasury Policy',
    body: 'Runway, reserves, unlocks, and budget rules structured before the market begins pricing risk.',
    icon: ShieldCheck,
  },
];

const process = [
  {
    label: '01',
    title: 'Design',
    body: 'Translate product behavior into a token model with clear value flow, incentives, and risk controls.',
  },
  {
    label: '02',
    title: 'Launch',
    body: 'Structure emissions, liquidity, airdrops, and stakeholder expectations before the first market cycle.',
  },
  {
    label: '03',
    title: 'Govern',
    body: 'Use dashboards and reporting to tune the economy after real users, capital, and markets arrive.',
  },
];

const healthSignals = [
  'Retention quality',
  'Emission pressure',
  'Liquidity depth',
  'Unlock exposure',
  'Treasury runway',
  'Airdrop efficiency',
];

const testimonials = [
  {
    quote: 'Anurag served as an invaluable resource conducting comparative analysis, research, and reports while working on the team at ATMTA. His reporting contributed directly to making strategic decisions at a corporate level.',
    name: 'Michael Wagner',
    role: 'Co-Founder & CEO, ATMTA, Inc',
  },
  {
    quote: 'Anurag was an outstanding economist on my team, delivering reliable and insightful analysis that consistently drove our projects forward. His sharp understanding of economic modelling, collaborative nature, and positive energy made him a real asset.',
    name: 'Eric Vermilion',
    role: 'CEO, W3 Economic Labs',
  },
  {
    quote: 'Anurag is a brilliant economist with a deep understanding of the latest economic theories. He is a quick learner, a great team player, and always willing to go the extra mile.',
    name: 'Akshay Gole',
    role: 'Senior Software Engineer',
  },
];

function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span className={`relative grid place-items-center overflow-hidden rounded-[0.6rem] bg-black ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_IMAGE} alt="Tokenomy" className="h-full w-full scale-[2.08] object-cover opacity-95 brightness-[1.18] contrast-[1.08] hue-rotate-[318deg] saturate-[0.72]" />
      <span className="absolute inset-0 bg-[#dac8aa]/18 mix-blend-color" />
    </span>
  );
}

function ArrowPill({ href, children, dark = true }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 ${dark ? 'bg-black text-white hover:bg-[#2B2644]' : 'bg-white text-black hover:bg-white/85'}`}
    >
      {children}
      <span className={`grid rounded-full p-2 transition-colors duration-200 ${dark ? 'bg-white' : 'bg-black'}`}>
        <ArrowRight className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${dark ? 'text-black' : 'text-white'}`} />
      </span>
    </a>
  );
}

function Navbar() {
  const links = [
    { label: 'Vision', href: '#vision' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Services', href: '#services' },
    { label: 'Proof', href: '#proof' },
    { label: 'Deck', href: DECK_URL },
  ];

  return (
    <nav className="absolute left-0 right-0 top-0 z-30 px-6 py-5">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between rounded-full border border-black/5 bg-[#f5f5f5]/20 px-3 py-2 backdrop-blur-md md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-0">
        <a href="#home" className="flex items-center gap-3" aria-label="Tokenomy home">
          <LogoMark className="h-8 w-8" />
          <span className="text-2xl font-semibold tracking-[-0.055em] text-black">Tokenomy</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[15px] font-medium tracking-[-0.025em] text-black/58 transition-colors duration-200 hover:text-black">
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-black px-6 py-2.5 text-sm font-semibold tracking-[-0.015em] text-white transition-colors duration-200 hover:bg-[#2B2644]">
          Connect
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="flex flex-1 items-end px-6 pb-6 pt-20">
      <div className="relative mx-auto h-[calc(100vh-96px)] w-full max-w-[88rem] overflow-hidden rounded-[1.35rem] bg-[#e9e3db]">
        <video src={HERO_VIDEO} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,245,0.96)_0%,rgba(245,245,245,0.82)_34%,rgba(245,245,245,0.24)_62%,rgba(245,245,245,0.05)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F5F5F5]/35 to-transparent" />
        <div className="relative z-10 flex h-full flex-col justify-start p-8 pt-24 md:p-12 md:pt-32">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-black/10 bg-white/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/52 backdrop-blur">
              Economy architecture for Web3 founders
            </p>
            <h1 className="max-w-4xl text-[3.55rem] font-semibold leading-[0.9] text-black md:text-[5.9rem]" style={{ letterSpacing: '-0.078em' }}>
              Tokenomics, institutionalized.
            </h1>
            <p className="mt-6 max-w-[34rem] text-lg font-medium leading-relaxed tracking-[-0.025em] text-black/60 md:text-xl">
              Design capital flows, incentives, and launch systems with the discipline of a financial operating model.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 pb-2">
              <ArrowPill href={BOOKING_URL}>Book meeting</ArrowPill>
              <a href={DECK_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/10 bg-white/24 px-6 py-3 text-sm font-semibold tracking-[-0.015em] text-black/72 backdrop-blur transition-colors duration-200 hover:bg-white/65 hover:text-black">
                View deck
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThesisSection() {
  return (
    <section id="ecosystem" className="bg-[#F5F5F5] px-6 py-24">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/38">The thesis</p>
          <h2 className="max-w-xl text-4xl font-semibold leading-[0.98] text-black md:text-6xl" style={{ letterSpacing: '-0.06em' }}>
            Designed for durable token economies.
          </h2>
        </div>
        <div className="space-y-7">
          <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.045em] text-black/70 md:text-[2rem]">
            Tokenomy turns product behavior, market incentives, and treasury constraints into economic architecture founders can operate.
          </p>
          <p className="max-w-2xl text-base font-medium leading-relaxed tracking-[-0.02em] text-black/48">
            The work is not cosmetic token design. It is the structure beneath the market: emissions, utility, sinks, liquidity, reporting, and governance tied back to real user value.
          </p>
        </div>
      </div>
    </section>
  );
}

function CompleteCycleSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 pb-24">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.35rem] bg-white p-7 md:p-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/36">Complete cycle</p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-black md:text-6xl" style={{ letterSpacing: '-0.058em' }}>
            From model to market discipline.
          </h2>
          <div className="mt-10 grid gap-3">
            {process.map((step) => (
              <article key={step.title} className="grid grid-cols-[4.2rem_1fr] gap-4 rounded-2xl border border-black/[0.06] bg-[#F5F5F5] p-5">
                <div className="text-sm font-semibold tracking-[-0.02em] text-black/30">{step.label}</div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.045em] text-black">{step.title}</h3>
                  <p className="mt-2 max-w-xl text-sm font-medium leading-relaxed tracking-[-0.015em] text-black/50">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[1.35rem] bg-black">
          <video src={HERO_VIDEO} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full scale-125 object-cover object-right opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,rgba(255,255,255,0.06),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
          <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white/78 backdrop-blur-md">
            <Gauge className="h-4 w-4" />
            Market-ready architecture
          </div>
          <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/12 bg-black/28 p-6 text-white backdrop-blur-xl md:p-8">
            <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.055em] md:text-5xl">Built before the market starts testing assumptions.</h3>
            <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed tracking-[-0.015em] text-white/55">
              A cleaner operating layer for founders, investors, and teams who need the economy to make sense before launch pressure arrives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section id="vision" className="bg-[#F5F5F5] px-6 pb-24">
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 overflow-hidden rounded-[1.35rem] bg-black md:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[520px] p-8 text-white md:p-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={NETWORK_IMAGE} alt="Tokenomy network" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-[#2B2644]/70" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <LogoMark className="h-12 w-12" />
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/38">Our vision</p>
              <h2 className="max-w-lg text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: '-0.06em' }}>
                Product, market, and token in one frame.
              </h2>
            </div>
          </div>
        </div>
        <div className="space-y-7 p-8 text-white md:p-12">
          <p className="text-xl font-medium leading-relaxed tracking-[-0.035em] text-white/74">
            We architect tokenomic frameworks that integrate with product and go-to-market strategy, whether for a simple token or a complex multi-asset ecosystem.
          </p>
          <p className="text-base font-medium leading-relaxed tracking-[-0.02em] text-white/50">
            The focus is resilience: balanced sinks and faucets, adaptable mechanisms, incentive systems that reward real contribution, and models that can operate through both expansion and contraction.
          </p>
          <p className="text-base font-medium leading-relaxed tracking-[-0.02em] text-white/50">
            Every system is shaped around practical user value, so the token is not a narrative layer. It becomes part of how the product works.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F5F5] px-6 pb-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/36">Services</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-black md:text-6xl" style={{ letterSpacing: '-0.058em' }}>
              Financial architecture for tokenized systems.
            </h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed tracking-[-0.015em] text-black/48">
            A focused service stack for founders building Web3 economies with credible modelling, reporting, launch strategy, and capital discipline.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const dark = index === 0 || index === 5;
            return (
              <article key={service.title} className={`min-h-[17rem] rounded-[1.2rem] p-6 transition-transform duration-200 hover:-translate-y-1 ${dark ? 'bg-[#2B2644] text-white' : 'bg-white text-black'}`}>
                <div className={`mb-10 flex h-11 w-11 items-center justify-center rounded-full ${dark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold tracking-[-0.045em]">{service.title}</h3>
                <p className={`text-sm font-medium leading-relaxed tracking-[-0.015em] ${dark ? 'text-white/56' : 'text-black/50'}`}>{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DecisionLayerSection() {
  return (
    <section className="bg-[#F5F5F5] px-6 pb-24">
      <div className="relative mx-auto min-h-[720px] max-w-[88rem] overflow-hidden rounded-[1.35rem] bg-[#dcd3c4]">
        <video src={RESERVE_VIDEO} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full scale-[1.02] object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,245,0.9)_0%,rgba(245,245,245,0.58)_34%,rgba(245,245,245,0.06)_70%),linear-gradient(180deg,rgba(255,255,255,0)_52%,rgba(0,0,0,0.12)_100%)]" />

        <div className="relative z-10 grid min-h-[720px] grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[0.92fr_0.72fr] lg:items-end">
          <div className="max-w-3xl self-end pb-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/38">Capital discipline</p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-black md:text-6xl" style={{ letterSpacing: '-0.06em' }}>
              Reserve-grade thinking for token systems.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed tracking-[-0.02em] text-black/56">
              Launch design, treasury planning, liquidity depth, and reporting should sit inside one financial operating view.
            </p>
          </div>

          <div className="rounded-[1.25rem] border border-white/44 bg-white/48 p-6 shadow-[0_24px_90px_rgba(43,38,68,0.13)] backdrop-blur-xl md:p-7">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/36">Decision layer</p>
            <h3 className="text-3xl font-semibold leading-tight text-black md:text-4xl" style={{ letterSpacing: '-0.055em' }}>
              Read the signals before the market does.
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {healthSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 rounded-2xl bg-white/58 p-4 text-sm font-semibold tracking-[-0.02em] text-black/64">
                  <BarChart3 className="h-4 w-4 text-black" />
                  {signal}
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm font-medium leading-relaxed tracking-[-0.015em] text-black/48">
              Reporting should connect incentives, users, liquidity, unlocks, and runway into decisions founders can actually make.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="proof" className="bg-[#F5F5F5] px-6 pb-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-black/36">Proof</p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-black md:text-6xl" style={{ letterSpacing: '-0.058em' }}>
              Quiet credibility from serious teams.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-relaxed tracking-[-0.015em] text-black/45">
            Selected feedback from collaborators across economic research, software, and venture-backed product teams.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.18fr_1fr_1fr]">
          {testimonials.map((item, index) => (
            <article key={item.name} className={`relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.2rem] border border-black/[0.04] p-7 ${index === 0 ? 'bg-white' : 'bg-white/58'}`}>
              <div className="pointer-events-none absolute -right-4 -top-8 text-[9rem] font-semibold leading-none text-black/[0.035]">“</div>
              <blockquote className="relative text-base font-medium leading-relaxed tracking-[-0.02em] text-black/70">“{item.quote}”</blockquote>
              <div className="relative mt-8">
                <p className="font-semibold tracking-[-0.025em] text-black">{item.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.13em] text-black/35">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#F5F5F5] px-6 pb-24">
      <div className="mx-auto grid max-w-[88rem] gap-8 rounded-[1.35rem] bg-black p-8 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/36">Connect</p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl" style={{ letterSpacing: '-0.06em' }}>
            Build before the market prices it.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end md:justify-end">
          <ArrowPill href={BOOKING_URL} dark={false}>Book meeting</ArrowPill>
          <a href="mailto:tokenomyinfo@gmail.com" className="text-sm font-medium text-white/50 transition-colors hover:text-white">tokenomyinfo@gmail.com</a>
          <a href="https://t.me/anuragray" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/50 transition-colors hover:text-white">Telegram: @anuragray</a>
        </div>
      </div>
    </section>
  );
}

export function TokenomyHaloLanding() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F5F5] font-['Space_Grotesk'] text-black">
      <div className="relative flex h-screen flex-col overflow-hidden bg-[#F5F5F5]">
        <Navbar />
        <HeroSection />
      </div>
      <ThesisSection />
      <CompleteCycleSection />
      <VisionSection />
      <ServicesSection />
      <DecisionLayerSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
