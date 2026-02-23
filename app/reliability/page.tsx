"use client";

import { motion } from "framer-motion";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const tiers = [
  {
    name: "Starter",
    price: "Contact",
    detail: "Fast reliability audit + prioritized fix plan for early teams.",
  },
  {
    name: "Growth",
    price: "Contact",
    detail: "Hands-on reliability implementation + telemetry hardening.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    detail: "Custom rollout with compliance, reliability SLOs, and enablement.",
  },
];

export default function ReliabilityPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[var(--accent)] selection:text-white flex flex-col items-center">
      <nav className="w-full max-w-5xl px-6 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐚</span>
          <span className="text-xl font-bold tracking-tight text-white mb-0.5">Conch</span>
        </div>
        <a href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to home
        </a>
      </nav>

      <section className="w-full max-w-5xl px-6 pt-10 md:pt-16 pb-14 md:pb-20">
        <FadeIn delay={0.1}>
          <p className="text-sm uppercase tracking-[0.18em] text-[var(--accent)] mb-3">Reliability</p>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-tight max-w-4xl">
            Production reliability for memory-powered AI systems.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-2xl text-gray-400 mt-5 max-w-3xl leading-snug">
            We harden retrieval quality, write reliability, explainability, and ops telemetry so your memory stack survives real traffic.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://app.conch.lol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              Open portal
            </a>
            <a
              href="mailto:founders@conch.lol?subject=Conch%20Reliability"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#333] text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
            >
              Contact team
            </a>
          </div>
        </FadeIn>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      <section className="w-full max-w-5xl px-6 py-14 md:py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-8">Offer</h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((tier, i) => (
            <FadeIn delay={0.1 + i * 0.07} key={tier.name}>
              <article className="bg-[#0f0f0f] border border-[#202020] rounded-2xl p-5 h-full">
                <h3 className="text-white text-xl font-medium">{tier.name}</h3>
                <p className="text-[var(--accent)] font-semibold mt-1">{tier.price}</p>
                <p className="text-gray-400 mt-3 leading-relaxed">{tier.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="w-full max-w-5xl px-6 pb-16 md:pb-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Proof we focus on</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="bg-[#0f0f0f] border border-[#202020] rounded-2xl p-6">
            <ul className="space-y-3 text-gray-300 leading-relaxed">
              <li>• Retrieval drift checks and ranking explainability artifacts</li>
              <li>• Write-retry telemetry + failure-mode hardening</li>
              <li>• Snapshot comparison tooling for regression triage</li>
              <li>• Documented rollout checklist for production readiness</li>
            </ul>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
