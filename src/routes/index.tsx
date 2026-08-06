import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  Clock,
  Shield,
  Leaf,
  Users,
  MessageCircle,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Star,
  ArrowRight,
  Sparkles,
  Building2,
  Menu,
  X,
  MessageSquare,
  TrendingUp,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CRVSLogo } from "@/components/CRVSLogo";
import { BobcatMark, BobcatBadge } from "@/components/BobcatMark";

import heroRiver from "@/assets/hero-san-river.png.asset.json";
import galleryUniform from "@/assets/gallery-uniform.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryBin from "@/assets/gallery-bin.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";
import galleryClean from "@/assets/gallery-clean.jpg";

const PHONE_DISPLAY = "(484) 633-9535";
const PHONE_TEL = "+14846339535";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRVS | Valet Trash Service for Apartments in San Marcos, TX" },
      {
        name: "description",
        content:
          "Crystal River Valet Services picks up trash at your residents' doors five nights a week. Student owned, locally run, insured, and minutes away when you need us.",
      },
      { property: "og:title", content: "CRVS | Valet Trash Service in San Marcos, TX" },
      {
        property: "og:description",
        content:
          "Cleaner spaces. Better places. Nightly doorstep trash pickup for apartment communities across Central Texas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why CRVS", href: "#why" },
  { label: "Residents Want This", href: "#residents" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Header />
      <Hero />
      <ValetIntro />
      <Services />
      <About />
      <WhyChoose />
      <ResidentValue />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCall />
    </div>
  );
}

function TopBar() {
  return (
    <div className="hidden md:block bg-forest-deep text-cream/90 text-xs">
      <div className="container-x flex h-9 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-cream">
            <Phone className="h-3.5 w-3.5" /> Call or text {PHONE_DISPLAY}
          </a>
          <a href="mailto:info@crystalriverservices.com" className="flex items-center gap-2 hover:text-cream">
            <Mail className="h-3.5 w-3.5" /> info@crystalriverservices.com
          </a>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <span className="flex items-center gap-2">
            <BobcatMark className="h-3.5 w-3.5 text-cream/70" /> Student owned in San Marcos
          </span>
          <span className="h-3 w-px bg-cream/30" />
          <a href="#" aria-label="Facebook" className="hover:text-cream"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-cream"><Instagram className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#" className="text-forest-deep">
          <CRVSLogo />
        </a>
        <nav className="hidden xl:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/75 hover:text-forest-deep transition-colors"
            >
              {n.label}
            </a>
          ))}
          <Link
            to="/resident-signup"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest-deep hover:text-forest"
          >
            <BobcatMark className="h-3.5 w-3.5 opacity-70" /> Resident Sign Up
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex">
            <Button className="bg-forest hover:bg-forest-deep text-cream rounded-full px-5">
              Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <button
            className="xl:hidden text-forest-deep"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium py-2 text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/resident-signup"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-semibold py-2 text-forest-deep"
            >
              <BobcatMark className="h-4 w-4 opacity-70" /> Resident Sign Up
            </Link>
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-forest text-cream rounded-full">Request a Quote</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroRiver.url}
          alt="Clear flowing San Marcos River with limestone banks and cypress trees"
          className="h-full w-full object-cover"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/85 via-forest-deep/70 to-forest/60" />
      </div>

      <div className="relative container-x pt-24 pb-32 md:pt-32 md:pb-44 text-cream">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              LOCALLY BASED · SAN MARCOS
            </div>
            <BobcatBadge className="text-cream/85 bg-cream/5 backdrop-blur" />
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Cleaner spaces.<br />
            <span className="italic text-gold">Better places.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85 leading-relaxed">
            We pick up trash at your residents' doors up to five nights a week. We live here, we go
            to school here, and we can be on your property in minutes when something comes up.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-cream text-forest-deep hover:bg-gold hover:text-forest-deep rounded-full px-7 h-12 font-semibold">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={`tel:${PHONE_TEL}`}>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
                <Phone className="mr-2 h-4 w-4" /> {PHONE_DISPLAY}
              </Button>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-xl gap-6 border-t border-cream/20 pt-8">
            {[
              { k: "5 nights", v: "Weekly pickup" },
              { k: "Minutes", v: "On site when needed" },
              { k: "Insured", v: "Local student owned" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-2xl md:text-3xl text-gold">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-cream/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function ValetIntro() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container-x">
        <div className="rounded-2xl bg-card shadow-[0_30px_60px_-30px_rgba(20,60,40,0.25)] border border-border/60 p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest text-cream">
            <Truck className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-forest-deep">
              So what is valet trash, really?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
              Residents set their tied bags in a bin by the door. We come by after dinner,
              collect every bag, and walk it straight to the compactor. Nobody carries trash
              across the parking lot in the rain. Nothing sits in a breezeway overnight. Your
              community just looks better in the morning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Clock, title: "Nightly Doorstep Pickup", desc: "Five nights a week, straight from the resident's door." },
  { icon: CheckCircle2, title: "A Schedule That Holds", desc: "Same window every night, so residents stop wondering." },
  { icon: Users, title: "Uniformed Attendants", desc: "Branded polos, name tags, and people you can recognize." },
  { icon: Sparkles, title: "Quiet and Clean", desc: "No banging bins, no spills, no waking anyone up." },
  { icon: Building2, title: "Built for Apartments", desc: "Breezeways, stairs, and gated garages are our normal." },
  { icon: Leaf, title: "Plans That Fit", desc: "We shape the route and price around your property." },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="What We Do" title="One service. Done right, every night." />
        <p className="max-w-2xl text-muted-foreground text-lg mt-4">
          We do one thing: nightly valet trash for apartment communities. No side businesses,
          no divided attention. Your property gets the whole team.
        </p>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-forest/40 hover:shadow-lg transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest-deep group-hover:bg-forest group-hover:text-cream transition-colors">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-forest-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={galleryUniform}
            alt="Professional uniformed CRVS attendant"
            className="rounded-2xl w-full h-[560px] object-cover shadow-xl"
            loading="lazy"
            width={1200}
            height={1400}
          />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-forest-deep text-cream p-6 max-w-[220px] shadow-2xl">
            <div className="font-display text-4xl text-gold">Est.</div>
            <div className="font-display text-3xl">2026</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-cream/70">San Marcos, TX</div>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Our Story" title="Started by students, right here in San Marcos." />
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              CRVS is student owned and locally owned. We are Texas State students who
              noticed the same thing everyone else did: trash piling up in breezeways and nobody
              coming to fix it. So we built the service we wished our own complexes had.
            </p>
            <p>
              Living in town changes everything. Our crew is a few minutes away, not a few
              counties away. If a bin gets missed or a chute jams, someone is on site fast.
            </p>
            <p>
              We run on three habits:
              <span className="text-foreground font-medium"> show up, speak up, follow through</span>.
              That is what keeps properties clean and managers out of the complaint inbox.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Student Owned", "Locally Owned", "Fully Insured", "Minutes Away"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-2 text-xs font-medium text-forest-deep">
                <CheckCircle2 className="h-3.5 w-3.5 text-forest" /> {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 text-forest-deep/70">
            <BobcatMark className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.2em]">Proudly Bobcat owned</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Clock, title: "Pickups You Can Count On", desc: "Same time, same standard, five nights a week." },
  { icon: Users, title: "A Crew That Looks Sharp", desc: "Uniformed, branded, and easy for residents to spot." },
  { icon: MapPin, title: "Minutes From Your Property", desc: "We live in San Marcos, so we can be there fast." },
  { icon: Shield, title: "Fully Insured", desc: "General liability and workers' comp in place." },
  { icon: MessageCircle, title: "We Answer", desc: "Call or text and you get a person, not a ticket." },
  { icon: Building2, title: "Apartments Only", desc: "Multifamily is all we do, so we know your layout." },
];

function WhyChoose() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Why CRVS" title="Small team. High standard." />
          <p className="mt-4 text-lg text-muted-foreground">
            Every detail here exists to make your community look and feel better managed.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card p-8 hover:bg-secondary/40 transition-colors">
              <r.icon className="h-6 w-6 text-forest" />
              <h3 className="mt-4 font-display text-xl text-forest-deep">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const residentPoints = [
  {
    icon: TrendingUp,
    title: "Clean communities lease faster",
    desc: "A prospect decides in the first thirty seconds of a tour. A spotless breezeway sells the unit before you say a word.",
  },
  {
    icon: Users,
    title: "Clean communities keep residents",
    desc: "People renew where daily life feels easy. Doorstep pickup is a small luxury they notice every single night.",
  },
  {
    icon: X,
    title: "Missed trash does real damage",
    desc: "Bags in stairwells bring odor, pests, and one star reviews. Once a community looks neglected, rent follows.",
  },
  {
    icon: ClipboardCheck,
    title: "Residents told us they want it",
    desc: "In our resident surveys around San Marcos, valet trash came back as an amenity residents would use and pay for.",
  },
];

function ResidentValue() {
  return (
    <section id="residents" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="The Case For Valet Trash" title="Clean living is a leasing strategy." />
          <p className="mt-4 text-lg text-muted-foreground">
            Trash is the smallest thing on your budget and one of the loudest things on your
            property. Handle it well and everything else looks handled too.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {residentPoints.map((p) => (
            <div key={p.title} className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest-deep">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl text-forest-deep">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-forest/20 bg-cream p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <BobcatMark className="h-7 w-7 text-forest shrink-0 mt-1" />
            <p className="text-forest-deep max-w-2xl">
              Residents in our surveys said the same thing over and over: they would use valet
              trash if their community offered it. Give them that, and renewal season gets a lot
              quieter.
            </p>
          </div>
          <Link to="/resident-signup" className="shrink-0">
            <Button className="bg-forest hover:bg-forest-deep text-cream rounded-full h-11 px-6">
              Resident Sign Up <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "Cleaner grounds residents actually notice",
  "Happier residents at renewal time",
  "Fewer trash complaints in your inbox",
  "Better curb appeal for tours and photos",
  "Service every night, without reminders",
  "Onboarding that takes days, not months",
  "A direct line to the owners, not a call center",
];

function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-forest-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <BobcatMark className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 text-cream opacity-[0.04]" />
      <div className="container-x relative grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">For Property Managers</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            What matters to <span className="italic text-gold">you</span>, handled nightly.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed max-w-lg">
            Think of us as an extra set of hands on your team. Our routes, our texts, and our
            pickups are all built to make your week easier.
          </p>
          <a href="#contact" className="mt-8 inline-block">
            <Button size="lg" className="bg-gold hover:bg-cream text-forest-deep rounded-full px-7 h-12 font-semibold">
              Get a Property Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li key={b} className="flex items-start gap-4 border-b border-cream/10 pb-4 last:border-0">
              <span className="font-display text-2xl text-gold w-8">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-lg text-cream/90 pt-1">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const photos = [
  { src: galleryTeam, alt: "CRVS team walking at apartment community", span: "md:col-span-2 md:row-span-2" },
  { src: galleryBin, alt: "Branded CRVS bin on doorstep", span: "" },
  { src: galleryCommunity, alt: "Clean apartment community walkway", span: "md:col-span-2" },
  { src: galleryClean, alt: "Pristine apartment breezeway", span: "" },
  { src: galleryUniform, alt: "Uniformed attendant", span: "" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="Gallery" title="A night on the route." />
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {photos.map((p) => (
            <div key={p.alt} className={`relative overflow-hidden rounded-2xl group ${p.span}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    quote:
      "Our community feels new again. Residents notice, maintenance notices, and trash complaints have basically stopped.",
    name: "Sarah M.",
    role: "Property Manager · San Marcos",
  },
  {
    quote:
      "On time every night and easy to reach. Best service partner we have brought on in years.",
    name: "James R.",
    role: "Regional Manager · Central Texas",
  },
  {
    quote:
      "They answer the phone. They show up fast. That alone puts them ahead of everyone we have used.",
    name: "Alicia T.",
    role: "Community Manager · New Braunfels",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-x">
        <SectionHeading eyebrow="Reviews" title="What managers say about us." />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-card border border-border p-8 flex flex-col">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-forest-deep">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold text-foreground">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Request received", {
        description: "We'll be in touch within one business day.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-[1.1fr_1fr] gap-12">
        <div>
          <SectionHeading eyebrow="Request a Quote" title="Let's get your community cleaner." />
          <p className="mt-4 text-muted-foreground text-lg max-w-lg">
            Tell us about your property. We will send a plan and pricing within one business day.
            Prefer to text? Send us a message at {PHONE_DISPLAY}.
          </p>

          <form onSubmit={onSubmit} className="mt-10 grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Community / Property" name="community" required />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-widest text-forest-deep">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                className="mt-2 rounded-xl border-border bg-card focus-visible:ring-forest"
                placeholder="Unit count, current setup, timing…"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-forest hover:bg-forest-deep text-cream rounded-full h-12 px-8 w-full md:w-auto md:justify-self-start"
            >
              {loading ? "Sending…" : "Request a Quote"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          <InfoCard icon={Phone} title="Call us" primary={PHONE_DISPLAY} secondary="Mon to Fri, 9:00 AM to 7:00 PM" href={`tel:${PHONE_TEL}`} />
          <InfoCard icon={MessageSquare} title="Text us" primary={PHONE_DISPLAY} secondary="Texts welcome anytime" href={`sms:${PHONE_TEL}`} />
          <InfoCard icon={Mail} title="Email" primary="info@crystalriverservices.com" secondary="Business inquiries" href="mailto:info@crystalriverservices.com" />
          <InfoCard icon={MapPin} title="Service Area" primary="San Marcos, TX" secondary="Serving all of Central Texas" />

          <div className="rounded-2xl overflow-hidden border border-border h-72">
            <iframe
              title="CRVS service area, San Marcos, TX"
              src="https://www.google.com/maps?q=San+Marcos,+Texas&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl bg-forest-deep text-cream p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Business Hours</div>
            <div className="mt-3 text-sm space-y-1.5">
              <div className="flex justify-between"><span>Monday to Friday</span><span>9:00 AM to 7:00 PM</span></div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-cream/70">
              <BobcatMark className="h-4 w-4" /> Call or text {PHONE_DISPLAY} anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs uppercase tracking-widest text-forest-deep">{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 h-11 rounded-xl border-border bg-card focus-visible:ring-forest"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, primary, secondary, href }: { icon: any; title: string; primary: string; secondary: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 hover:border-forest/40 hover:shadow-md transition-all">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest-deep">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="mt-1 font-display text-lg text-forest-deep">{primary}</div>
        <div className="text-sm text-muted-foreground">{secondary}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80 pt-20 pb-10">
      <div className="container-x grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="text-cream"><CRVSLogo /></div>
          <p className="mt-5 text-sm text-cream/70 leading-relaxed max-w-sm">
            Crystal River Valet Services. Student owned, locally run doorstep trash collection
            for apartment communities across San Marcos and Central Texas.
          </p>
          <div className="mt-5">
            <BobcatBadge className="text-cream/70" />
          </div>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:bg-cream/10"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 hover:bg-cream/10"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} className="hover:text-cream">{n.label}</a></li>
            ))}
            <li>
              <Link to="/resident-signup" className="hover:text-cream">Resident Sign Up</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contact</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href={`tel:${PHONE_TEL}`} className="hover:text-cream">{PHONE_DISPLAY}</a></li>
            <li><a href={`sms:${PHONE_TEL}`} className="hover:text-cream">Text {PHONE_DISPLAY}</a></li>
            <li><a href="mailto:info@crystalriverservices.com" className="hover:text-cream">info@crystalriverservices.com</a></li>
            <li>Mon to Fri, 9:00 AM to 7:00 PM</li>
            <li>San Marcos, Texas</li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/60">
        <div>© {new Date().getFullYear()} Crystal River Valet Services. All rights reserved.</div>
        <div>Cleaner spaces. Better places.</div>
      </div>
    </footer>
  );
}

function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE_TEL}`}
      aria-label="Call CRVS"
      className="md:hidden fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream shadow-xl shadow-forest/40"
    >
      <Phone className="h-5 w-5" />
    </a>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.25em] text-forest">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-forest-deep leading-[1.05]">
        {title}
      </h2>
    </div>
  );
}
