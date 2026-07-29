import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CRVSLogo } from "@/components/CRVSLogo";

import heroRiver from "@/assets/hero-san-river.png.asset.json";
import galleryUniform from "@/assets/gallery-uniform.jpg";
import galleryCommunity from "@/assets/gallery-community.jpg";
import galleryBin from "@/assets/gallery-bin.jpg";
import galleryTeam from "@/assets/gallery-team.jpg";
import galleryClean from "@/assets/gallery-clean.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CRVS — Premium Valet Trash Service for Apartment Communities | San Marcos, TX" },
      {
        name: "description",
        content:
          "Crystal River Valet Services provides reliable nightly doorstep trash collection for apartment communities across Central Texas. Professional, insured, and locally owned.",
      },
      { property: "og:title", content: "CRVS — Premium Valet Trash Service | San Marcos, TX" },
      {
        property: "og:description",
        content:
          "Cleaner spaces. Better places. Dependable valet trash service for apartment communities in Central Texas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
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
          <a href="tel:5121234567" className="flex items-center gap-2 hover:text-cream">
            <Phone className="h-3.5 w-3.5" /> (512) 123-4567
          </a>
          <a href="mailto:info@crystalriverservices.com" className="flex items-center gap-2 hover:text-cream">
            <Mail className="h-3.5 w-3.5" /> info@crystalriverservices.com
          </a>
        </div>
        <div className="flex items-center gap-4 opacity-90">
          <span>Serving San Marcos & Central Texas</span>
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
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/75 hover:text-forest-deep transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:inline-flex">
            <Button className="bg-forest hover:bg-forest-deep text-cream rounded-full px-5">
              Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <button
            className="lg:hidden text-forest-deep"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Locally Owned · Central Texas
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight">
            Cleaner spaces.<br />
            <span className="italic text-gold">Better places.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/85 leading-relaxed">
            Premium doorstep valet trash service for apartment communities across San Marcos
            and Central Texas — professional, dependable, and quietly excellent every single night.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact">
              <Button size="lg" className="bg-cream text-forest-deep hover:bg-gold hover:text-forest-deep rounded-full px-7 h-12 font-semibold">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="tel:5121234567">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-7 border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream">
                <Phone className="mr-2 h-4 w-4" /> (512) 123-4567
              </Button>
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-xl gap-6 border-t border-cream/20 pt-8">
            {[
              { k: "5 nights", v: "Weekly pickup" },
              { k: "100%", v: "Insured & bonded" },
              { k: "Local", v: "Central Texas team" },
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
              What is valet trash service?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">
              Residents leave their tied trash bags in a bin outside their door. Our uniformed
              attendants quietly collect it five nights a week and transport it directly to the
              property's compactor — no dumpsters overflowing, no bags in breezeways, no complaints
              in the manager's inbox. Just a cleaner, calmer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Clock, title: "Nightly Doorstep Pickup", desc: "Five nights a week, right from the resident's door." },
  { icon: CheckCircle2, title: "Reliable Schedule", desc: "Consistent pickup windows your residents can count on." },
  { icon: Users, title: "Uniformed Attendants", desc: "Professional, background-checked, branded staff." },
  { icon: Sparkles, title: "Clean & Discreet", desc: "Quiet operations that respect resident life." },
  { icon: Building2, title: "Apartment Communities", desc: "Purpose-built for multifamily properties." },
  { icon: Leaf, title: "Custom Plans", desc: "Tailored routes and pricing for every community." },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="What We Do" title="One service. Done exceptionally well." />
        <p className="max-w-2xl text-muted-foreground text-lg mt-4">
          We focus on a single thing — nightly valet trash collection for apartment communities —
          and we do it better than anyone else in Central Texas.
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
          <SectionHeading eyebrow="Our Story" title="Built on the banks of the San Marcos River." />
          <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Crystal River Valet Services is a locally owned company built specifically to bring
              dependable, high-touch valet trash service to Central Texas apartment communities.
            </p>
            <p>
              We founded CRVS on three ideas that too many service companies forget:
              <span className="text-foreground font-medium"> professionalism, communication, and reliability</span>.
              Our team shows up, communicates clearly, and treats every property like our own.
            </p>
            <p>
              The result? Cleaner properties, happier residents, and fewer trash-related complaints
              in a property manager's day — every single week.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Locally Owned", "Fully Insured", "Bonded Staff", "Central Texas"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-4 py-2 text-xs font-medium text-forest-deep">
                <CheckCircle2 className="h-3.5 w-3.5 text-forest" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Clock, title: "Reliable Nightly Pickups", desc: "Same time. Same standard. Every night." },
  { icon: Users, title: "Professional Appearance", desc: "Uniformed, branded, background-checked staff." },
  { icon: Shield, title: "Fully Insured", desc: "General liability and workers' comp coverage." },
  { icon: MessageCircle, title: "Responsive Communication", desc: "Direct line to management, always." },
  { icon: Sparkles, title: "Flexible Scheduling", desc: "Routes designed around your property." },
  { icon: Building2, title: "Multifamily Focus", desc: "100% dedicated to apartment communities." },
];

function WhyChoose() {
  return (
    <section id="why" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Why CRVS" title="The premium standard for valet trash." />
          <p className="mt-4 text-lg text-muted-foreground">
            Every detail is designed to make your community look and feel better managed.
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

const benefits = [
  "Cleaner communities that residents notice",
  "Increased resident satisfaction and retention",
  "Fewer trash-related complaints in your inbox",
  "Improved curb appeal for tours & marketing",
  "Reliable service every single night",
  "Simple, fast onboarding process",
  "Direct communication with management",
];

function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-forest-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="container-x relative grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">For Property Managers</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            What matters to <span className="italic text-gold">you</span>, handled nightly.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed max-w-lg">
            We think like an extension of your management team. Every route, every conversation,
            every pickup is designed to make your property easier to run.
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
        <SectionHeading eyebrow="Gallery" title="What quiet excellence looks like." />
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
      "CRVS made our community feel new again. Residents notice. Our maintenance team notices. Complaints about trash are almost gone.",
    name: "Sarah M.",
    role: "Property Manager · San Marcos",
  },
  {
    quote:
      "Uniformed, on time, and easy to reach when I need something. Best service partner we've onboarded in years.",
    name: "James R.",
    role: "Regional Manager · Central Texas",
  },
  {
    quote:
      "Professional from the first email. They actually pick up the phone. That alone puts them ahead of everyone else.",
    name: "Alicia T.",
    role: "Community Manager · New Braunfels",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-secondary/50">
      <div className="container-x">
        <SectionHeading eyebrow="Reviews" title="Property managers on working with CRVS." />
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
          <SectionHeading eyebrow="Request a Quote" title="Let's make your community cleaner." />
          <p className="mt-4 text-muted-foreground text-lg max-w-lg">
            Tell us about your property. We'll follow up with a tailored plan and pricing within
            one business day.
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
          <InfoCard icon={Phone} title="Call us" primary="(512) 123-4567" secondary="Mon–Fri, 8am–6pm CT" href="tel:5121234567" />
          <InfoCard icon={Mail} title="Email" primary="info@crystalriverservices.com" secondary="Business inquiries" href="mailto:info@crystalriverservices.com" />
          <InfoCard icon={MapPin} title="Service Area" primary="San Marcos, TX" secondary="Serving all of Central Texas" />

          <div className="rounded-2xl overflow-hidden border border-border h-72">
            <iframe
              title="CRVS service area — San Marcos, TX"
              src="https://www.google.com/maps?q=San+Marcos,+Texas&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl bg-forest-deep text-cream p-6">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">Business Hours</div>
            <div className="mt-3 text-sm space-y-1.5">
              <div className="flex justify-between"><span>Mon – Fri</span><span>8:00 AM – 6:00 PM</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>By appointment</span></div>
              <div className="flex justify-between"><span>Sunday</span><span>Closed (pickups run)</span></div>
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
            Crystal River Valet Services — premium doorstep trash collection for apartment
            communities across San Marcos and Central Texas.
          </p>
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
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Contact</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="tel:5121234567" className="hover:text-cream">(512) 123-4567</a></li>
            <li><a href="mailto:info@crystalriverservices.com" className="hover:text-cream">info@crystalriverservices.com</a></li>
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
      href="tel:5121234567"
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
