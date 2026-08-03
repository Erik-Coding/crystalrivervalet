import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Landmark,
  Phone,
  RefreshCw,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { CRVSLogo } from "@/components/CRVSLogo";
import { BobcatMark, BobcatBadge } from "@/components/BobcatMark";

const PHONE_DISPLAY = "(484) 633-9535";
const PHONE_TEL = "+14846339535";

export const Route = createFileRoute("/resident-signup")({
  head: () => ({
    meta: [
      { title: "Resident Sign Up | CRVS Valet Trash in San Marcos, TX" },
      {
        name: "description",
        content:
          "Sign up for CRVS doorstep valet trash service, link a payment method, and set up recurring monthly payments in a couple of minutes.",
      },
      { property: "og:title", content: "Resident Sign Up | CRVS Valet Trash" },
      {
        property: "og:description",
        content:
          "Start nightly doorstep trash pickup at your apartment. Link a card, bank, or wallet and set monthly autopay.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResidentSignup,
});

const paymentMethods = [
  { id: "card", label: "Credit or debit card", note: "Secured by Stripe", icon: CreditCard },
  { id: "ach", label: "Bank transfer (ACH)", note: "Lowest fees", icon: Landmark },
  { id: "apple-pay", label: "Apple Pay", note: "One tap on iPhone", icon: Smartphone },
  { id: "google-pay", label: "Google Pay", note: "One tap on Android", icon: Smartphone },
  { id: "venmo", label: "Venmo Business", note: "Pay from your Venmo balance", icon: Wallet },
  { id: "paypal", label: "PayPal", note: "Use your PayPal account", icon: Wallet },
  { id: "square", label: "Square", note: "Card on file with Square", icon: CreditCard },
];

function ResidentSignup() {
  const [method, setMethod] = useState("card");
  const [autopay, setAutopay] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      setMethod("card");
      toast.success("You're on the list", {
        description: autopay
          ? "We'll text a secure payment link to finish monthly autopay setup."
          : "We'll text a secure link to finish your payment setup.",
      });
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/85 backdrop-blur-md sticky top-0 z-40">
        <div className="container-x flex h-20 items-center justify-between">
          <Link to="/" className="text-forest-deep">
            <CRVSLogo />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden md:inline-flex text-sm font-medium text-foreground/70 hover:text-forest-deep">
              <ArrowLeft className="mr-1.5 h-4 w-4" /> Back home
            </Link>
            <a href={`tel:${PHONE_TEL}`}>
              <Button className="bg-forest hover:bg-forest-deep text-cream rounded-full px-5">
                <Phone className="mr-2 h-4 w-4" /> {PHONE_DISPLAY}
              </Button>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-forest-deep text-cream relative overflow-hidden">
        <BobcatMark className="pointer-events-none absolute -right-8 -bottom-12 h-64 w-64 text-cream opacity-[0.05]" />
        <div className="container-x py-16 md:py-24 relative">
          <BobcatBadge className="text-cream/80" />
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Never carry a trash bag<br />
            <span className="italic text-gold">across the parking lot again.</span>
          </h1>
          <p className="mt-5 max-w-xl text-cream/80 text-lg leading-relaxed">
            Set your bag by the door. We pick it up five nights a week. Sign up below, link a
            payment method, and turn on monthly autopay so you never think about it again.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid lg:grid-cols-[1.15fr_1fr] gap-12">
          <form onSubmit={onSubmit} className="grid gap-8">
            <div>
              <h2 className="font-display text-2xl text-forest-deep">1. Your details</h2>
              <div className="mt-5 grid gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Apartment community" name="community" required />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field label="Unit number" name="unit" required />
                  <Field label="Preferred start date" name="start" type="date" />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-xs uppercase tracking-widest text-forest-deep">
                    Anything we should know
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="mt-2 rounded-xl border-border bg-card focus-visible:ring-forest"
                    placeholder="Gate code, dog at the door, upstairs unit…"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-forest-deep">2. Link a payment method</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Pick how you want to pay. We text a secure link to finish setup, so no card
                numbers are ever typed on this page.
              </p>
              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                {paymentMethods.map((m) => {
                  const active = method === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMethod(m.id)}
                      className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? "border-forest bg-forest/5 shadow-sm"
                          : "border-border bg-card hover:border-forest/40"
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                          active ? "bg-forest text-cream" : "bg-forest/10 text-forest-deep"
                        }`}
                      >
                        <m.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-forest-deep">{m.label}</span>
                        <span className="block text-xs text-muted-foreground">{m.note}</span>
                      </span>
                      {active && <CheckCircle2 className="ml-auto h-4 w-4 text-forest shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-forest-deep">3. Monthly autopay</h2>
              <div className="mt-5 flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest-deep shrink-0">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-forest-deep">Charge me automatically each month</div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Billed on the first of the month. Cancel or pause anytime by text.
                  </p>
                </div>
                <Switch checked={autopay} onCheckedChange={setAutopay} aria-label="Enable monthly autopay" />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-forest hover:bg-forest-deep text-cream rounded-full h-12 px-8 w-full md:w-auto md:justify-self-start"
            >
              {loading ? "Submitting…" : "Sign up for service"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl text-forest-deep">What you get</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Pickup at your door five nights a week",
                  "A uniformed attendant you'll recognize",
                  "Text us and a real person answers",
                  "Crew lives in town and can be here in minutes",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <CheckCircle2 className="h-4 w-4 text-forest shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-forest-deep text-cream p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Business Hours</div>
              <div className="mt-3 text-sm flex justify-between">
                <span>Monday to Friday</span>
                <span>9:00 AM to 7:00 PM</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-cream/70">
                <BobcatMark className="h-4 w-4" /> Call or text {PHONE_DISPLAY} anytime
              </div>
            </div>

            <div className="rounded-2xl border border-forest/20 bg-cream p-6 text-sm text-forest-deep">
              Not sure if your community has CRVS yet? Text us your address and we will reach out
              to your property manager for you.
            </div>
          </aside>
        </div>
      </section>

      <footer className="bg-forest-deep text-cream/70 py-10">
        <div className="container-x flex flex-col md:flex-row justify-between gap-3 text-xs">
          <div>© {new Date().getFullYear()} Crystal River Valet Services. Student owned in San Marcos, Texas.</div>
          <Link to="/" className="hover:text-cream">Back to home</Link>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} className="text-xs uppercase tracking-widest text-forest-deep">
        {label}
      </Label>
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
