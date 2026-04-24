import type { Metadata } from "next"
import Link from "next/link"
import { Zap, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing - Amane Soft",
  description: "Choose the perfect plan for your enterprise needs. Transparent pricing with no hidden fees.",
}

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams getting started with enterprise software",
    features: [
      { name: "5 team members", included: true },
      { name: "10 projects", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Email support", included: true },
      { name: "API access", included: false },
      { name: "Custom integrations", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$999",
    period: "/month",
    description: "For growing businesses that need more power and flexibility",
    features: [
      { name: "25 team members", included: true },
      { name: "Unlimited projects", included: true },
      { name: "Advanced analytics & reporting", included: true },
      { name: "Priority support (24h response)", included: true },
      { name: "Full API access", included: true },
      { name: "Custom integrations (3)", included: true },
      { name: "Dedicated account manager", included: false },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex requirements",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Unlimited projects", included: true },
      { name: "Custom analytics & BI", included: true },
      { name: "24/7 phone & email support", included: true },
      { name: "Full API access + webhooks", included: true },
      { name: "Unlimited custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
    ],
    popular: false,
  },
]

const faqs = [
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, wire transfers, and can arrange invoice-based billing for Enterprise plans.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What happens when I exceed my plan limits?",
    answer: "We'll notify you when you're approaching limits. You can upgrade anytime or we can discuss custom quotas for your needs.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <header className="fixed top-0 z-50 w-full flex justify-center p-4 sm:p-6 pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-6 px-4 py-2 rounded-full border border-white/5 bg-zinc-950/50 backdrop-blur-xl shadow-2xl">
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <div className="h-7 w-7 rounded-lg bg-white flex items-center justify-center transition-all group-hover:rotate-12">
                <Zap className="h-4 w-4 text-black fill-current" />
              </div>
              <span className="text-sm font-bold text-white tracking-tighter">Amane Soft</span>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/solutions" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Solutions</Link>
              <Link href="/resources" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Resources</Link>
              <Link href="/pricing" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-white bg-white/10">Pricing</Link>
              <Link href="/company" className="px-3 py-1.5 rounded-full text-[12px] font-semibold text-zinc-400 hover:text-white transition-all hover:bg-white/5">Company</Link>
            </div>
            <div className="flex items-center gap-2">
              <Button className="hidden sm:flex bg-white hover:bg-zinc-200 text-black font-bold rounded-full px-4 h-8 text-[11px]">Get Started</Button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section className="pt-40 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative p-6 rounded-2xl border ${
                    plan.popular 
                      ? "bg-white/5 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]" 
                      : "bg-zinc-900/50 border-white/5"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[10px] font-bold rounded-full">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-white mb-2">
                    {plan.price}
                    {plan.period && <span className="text-sm font-normal text-zinc-400">{plan.period}</span>}
                  </p>
                  <p className="text-sm text-zinc-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        {feature.included ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <X className="h-4 w-4 text-zinc-600" />
                        )}
                        <span className={feature.included ? "text-zinc-300" : "text-zinc-600"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-bold ${plan.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-white/10 text-white hover:bg-white/20"}`}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-zinc-900/50 border border-white/5">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-zinc-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}