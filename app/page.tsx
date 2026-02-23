"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="absolute top-2.5 right-2.5 text-sm text-gray-500 hover:text-[var(--accent)] transition-colors bg-[#0f0f0f] px-2 py-1 rounded"
    >
      {copied ? "copied!" : "copy"}
    </button>
  );
}

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[var(--accent)] selection:text-white flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-5xl px-6 py-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🐚</span>
          <span className="text-xl font-bold tracking-tight text-white mb-0.5">Conch</span>
        </div>
        <a
          href="#pricing"
          className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors text-sm font-medium"
        >
          See Reliability Pack
        </a>
      </nav>

      {/* Hero */}
      <section className="w-full max-w-5xl px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 text-white leading-tight">
            Reliable production memory for AI agents.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-xl md:text-3xl text-gray-400 mb-6 max-w-3xl font-medium leading-snug">
            Stop fragile prompt hacks and recoverable context bugs. Ship memory that survives real production traffic.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg text-gray-500 mb-10 max-w-xl">
            Conch is an embedded memory engine with deterministic storage and high-signal retrieval. No cloud dependency. No API keys. One SQLite file your team can test, ship, and trust.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative inline-block w-full max-w-md mb-8">
            <div className="code-block text-left text-sm md:text-base border-[#1f1f1f]">
              <CopyButton text="cargo install conch" />
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">cargo install</span> conch
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 font-medium">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
            >
              Start Reliability Pack
            </a>
            <a
              href="#proof"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#333] text-gray-300 rounded-lg hover:border-gray-500 transition-colors w-full sm:w-auto"
            >
              Review reliability proof
            </a>
            <a
              href="https://github.com/jlgrimes/conch"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#333] text-gray-300 rounded-lg hover:border-gray-500 transition-colors w-full sm:w-auto"
            >
              View GitHub
            </a>
          </div>
        </FadeIn>
      </section>

      {/* The Capability Grid */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white tracking-tight">Scale intelligence infinitely.</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <FadeIn delay={0.1}>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">Context scalability</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">Provide your agents with years of history without polluting the prompt. Token utilization stays perfectly efficient, no matter how much your agent learns.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">Semantic precision</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">Locate exact meaning across all stored memories instantly. Completely resilient to variations in human phrasing or formatting.</p>
            </FadeIn>
          </div>
          <div className="space-y-6 md:space-y-8">
            <FadeIn delay={0.3}>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">Dynamic relevance tracking</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">Give your memory a sense of temporal weight. Critical user preferences endure indefinitely, while obsolete logs and episodes organically fade away.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">Knowledge consolidation</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">Stop generating duplicated messes. Conch automatically reinforces frequently accessed memories while avoiding endless duplication.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pain / Solution Narrative */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn>
            <div className="rounded-2xl border border-[#2a1616] bg-[#120d0d] p-6 md:p-8 h-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Most agent failures are memory failures.</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-5">
                Teams lose reliability when memory is bolted on: noisy recall, duplicated facts, stale context, and no confidence in what the agent will retrieve next.
              </p>
              <ul className="space-y-3 text-sm md:text-base text-gray-500">
                <li>Prompt state resets between sessions</li>
                <li>Hard to prove what memory was stored or recalled</li>
                <li>Expensive context windows hide root-cause defects</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#101010] p-6 md:p-8 h-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Conch makes memory production-grade.</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-5">
                Conch gives your team an embedded memory layer with deterministic behavior, testability, and retrieval quality designed for real operational load.
              </p>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li>Deterministic write paths with explicit storage triggers</li>
                <li>Hybrid semantic retrieval tuned for precision under drift</li>
                <li>Decay + reinforcement mechanics that reduce memory bloat</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Why Teams Buy */}
      <section id="why-buy" className="w-full max-w-5xl px-6 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white tracking-tight">Why teams buy Conch</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mb-10">
            Conch is purchased to reduce reliability incidents and shorten the path from prototype to production memory.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-5 md:p-6 h-full">
              <p className="text-[var(--accent)] text-sm font-semibold mb-2">Outcome 01</p>
              <h3 className="text-white text-lg font-medium mb-2">Fewer memory regressions</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">Deterministic persistence and explicit recall behavior reduce surprise failures after deploys.</p>
              <p className="text-gray-500 text-sm">Teams use Conch to enforce stable memory behavior across agent versions.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-5 md:p-6 h-full">
              <p className="text-[var(--accent)] text-sm font-semibold mb-2">Outcome 02</p>
              <h3 className="text-white text-lg font-medium mb-2">Faster production launch</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">Embedded SQLite deployment removes remote memory service dependencies and infra drag.</p>
              <p className="text-gray-500 text-sm">Engineering teams can move from demo to production in days, not quarters.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-5 md:p-6 h-full">
              <p className="text-[var(--accent)] text-sm font-semibold mb-2">Outcome 03</p>
              <h3 className="text-white text-lg font-medium mb-2">Lower token spend for context</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4">Recall exactly what matters without overstuffing prompts with full chat history.</p>
              <p className="text-gray-500 text-sm">Budgets stay predictable as usage scales and context depth grows.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pricing / Offer */}
      <section id="pricing" className="w-full max-w-5xl px-6 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white tracking-tight">Reliability Pack experiment</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mb-10">
            Three ways to adopt Conch, from solo validation to full reliability hardening with hands-on implementation support.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[#1f1f1f] bg-[#0e0e0e] p-6 h-full flex flex-col">
              <p className="text-gray-400 text-sm mb-2">Starter</p>
              <h3 className="text-white text-2xl font-semibold mb-4">OSS only</h3>
              <p className="text-gray-500 text-sm md:text-base mb-5">For individual builders validating memory quality in a single agent workflow.</p>
              <ul className="space-y-2 text-sm text-gray-300 mb-7">
                <li>MIT open-source Conch core</li>
                <li>Community docs + examples</li>
                <li>Self-serve setup</li>
              </ul>
              <a href="https://github.com/jlgrimes/conch" target="_blank" className="mt-auto inline-flex justify-center px-4 py-2.5 rounded-lg border border-[#333] text-gray-300 hover:border-gray-500 transition-colors">
                Use Starter
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6 h-full flex flex-col">
              <p className="text-gray-300 text-sm mb-2">Team</p>
              <h3 className="text-white text-2xl font-semibold mb-4">Shared rollout</h3>
              <p className="text-gray-400 text-sm md:text-base mb-5">For teams shipping multi-agent workflows and needing integration guidance.</p>
              <ul className="space-y-2 text-sm text-gray-200 mb-7">
                <li>Architecture review + implementation checklist</li>
                <li>Storage trigger design for AGENTS.md</li>
                <li>Rollout playbook with reliability guardrails</li>
              </ul>
              <a href="https://github.com/jlgrimes/conch/discussions" target="_blank" className="mt-auto inline-flex justify-center px-4 py-2.5 rounded-lg border border-[#444] text-white hover:border-gray-300 transition-colors">
                Talk Team Plan
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-[var(--accent)]/40 bg-[linear-gradient(180deg,rgba(255,107,107,0.08),rgba(10,10,10,1))] p-6 h-full flex flex-col shadow-[0_0_0_1px_rgba(255,107,107,0.1)]">
              <p className="text-[var(--accent)] text-sm mb-2 font-semibold">Reliability Pack</p>
              <h3 className="text-white text-2xl font-semibold mb-4">Production hardening</h3>
              <p className="text-gray-200 text-sm md:text-base mb-5">For high-stakes workflows where reliability incidents are costly and unacceptable.</p>
              <ul className="space-y-2 text-sm text-gray-100 mb-7">
                <li>Memory reliability audit + threat model</li>
                <li>Load, drift, and regression test harness setup</li>
                <li>Runbook + incident response patterns for memory failures</li>
              </ul>
              <a href="mailto:hello@conch-memory.dev?subject=Reliability%20Pack%20Inquiry" className="mt-auto inline-flex justify-center px-4 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors">
                Apply for Reliability Pack
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Trust / Proof */}
      <section id="proof" className="w-full max-w-5xl px-6 py-16 md:py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white tracking-tight">Trust, built on shipped reliability work</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mb-10">
            Reliability is a product claim only when backed by shipped controls and repeatable test evidence.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <FadeIn delay={0.1}>
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
              <h3 className="text-white text-xl font-medium mb-4">Shipped reliability items</h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-300">
                <li>Hybrid BM25 + vector retrieval with rank fusion for stable query performance</li>
                <li>Biological decay and reinforcement to control stale memory accumulation</li>
                <li>Embedded SQLite deployment to remove external memory service failure modes</li>
                <li>Agent-skill integration path for deterministic memory writes via rule triggers</li>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-xl border border-[#1f1f1f] bg-[#0f0f0f] p-6">
              <h3 className="text-white text-xl font-medium mb-4">Evidence-oriented testing language</h3>
              <div className="space-y-4 text-sm md:text-base">
                <p className="text-gray-300"><span className="text-white font-medium">Regression suites:</span> verify recall behavior for canonical user facts and edge phrasing drift.</p>
                <p className="text-gray-300"><span className="text-white font-medium">Load checks:</span> validate retrieval quality under sustained write/read throughput before rollout.</p>
                <p className="text-gray-300"><span className="text-white font-medium">Failure drills:</span> rehearse corruption, stale-memory, and conflict scenarios with clear runbooks.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 1: Biological Decay */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-snug">It learns what matters. And forgets what doesn&apos;t.</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                Just like a human brain, Conch strengthens memories dynamically as they are used.
                Irrelevant episodes fade quickly, essential facts endure, and useless noise is garbage-collected forever.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            <FadeIn className="space-y-3">
              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-4 md:p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white text-sm md:text-base font-medium">Jared works at Microsoft</span>
                  <span className="text-sm md:text-base text-emerald-400 font-mono">auth: 0.94</span>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-1 md:h-1.5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-emerald-400 h-full rounded-full"></motion.div>
                </div>
                <p className="text-gray-600 text-sm md:text-base mt-2.5">Recalled 3 days ago &mdash; reinforced</p>
              </div>
              
              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-4 md:p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300 text-sm md:text-base font-medium">Prefers dark mode</span>
                  <span className="text-sm md:text-base text-yellow-500 font-mono">auth: 0.31</span>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-1 md:h-1.5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "31%" }} transition={{ duration: 1, delay: 0.3 }} className="bg-yellow-500 h-full rounded-full"></motion.div>
                </div>
                <p className="text-gray-600 text-sm md:text-base mt-2.5">Recalled 40 days ago &mdash; fading slowly</p>
              </div>

              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-4 md:p-5 opacity-60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-500 text-sm md:text-base font-medium line-through">Had lunch at Chipotle</span>
                  <span className="text-sm md:text-base text-red-500 font-mono">auth: 0.01</span>
                </div>
                <div className="w-full bg-[#1a1a1a] rounded-full h-1 md:h-1.5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "1%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-red-500 h-full rounded-full"></motion.div>
                </div>
                <p className="text-gray-600 text-sm md:text-base mt-2.5">Obsolete episode &mdash; pruned permanently</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 2: Semantic Search */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-snug">Retrieve meaning. Not just keywords.</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Powered by a hybrid BM25 and vector recall engine, fused via Reciprocal Rank Fusion.
                Your agent immediately finds the exact intent behind a query, completely resilient to phrasing differences.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            <FadeIn>
              <div className="code-block text-sm md:text-base p-5 md:p-6 bg-[#0d0d0d] border-[#1f1f1f]">
                <div className="text-gray-600 mb-1.5 font-medium"># Stored initially:</div>
                <div className="mb-6"><span className="text-gray-600">$</span> <span className="text-[var(--accent)]">conch remember</span> <span className="text-emerald-400/80">&quot;Jared&quot;</span> <span className="text-emerald-400/80">&quot;is employed at&quot;</span> <span className="text-emerald-400/80">&quot;Microsoft&quot;</span></div>
                
                <div className="text-gray-600 mb-1.5 font-medium"># Intuitively recalled:</div>
                <div className="mb-3"><span className="text-gray-600">$</span> <span className="text-[var(--accent)]">conch recall</span> <span className="text-emerald-400/80">&quot;where does Jared work?&quot;</span></div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-gray-300 bg-[#161616] p-3 md:p-4 rounded-lg border border-[#2a2a2a]"
                >
                  <div className="text-white mb-1">→ [fact] Jared is employed at Microsoft</div>
                  <div className="text-sm md:text-base font-mono text-gray-500">score: 0.847 | strength: 0.94</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 3: Graph Traversal */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-snug">Spreading activation mapping.</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Memories don&apos;t exist in a vacuum. Retrieving one memory naturally surfaces deeply adjacent knowledge through shared subjects and objects. You are building an intelligent graph of associations.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-2">
            <FadeIn>
              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-6 md:p-8 font-mono text-sm md:text-base">
                <div className="flex flex-col items-start gap-2.5 relative z-10">
                  <div className="flex items-center gap-2 flex-wrap bg-[#141414] px-2.5 py-1.5 border border-[#262626] rounded">
                    <span className="text-white font-medium">Jared</span>
                    <span className="text-gray-600 text-[10px] md:text-sm">→ works at →</span>
                    <span className="text-gray-400">Microsoft</span>
                  </div>
                  <div className="text-gray-700 text-sm md:text-base ml-5">│</div>
                  <div className="flex items-center gap-2 flex-wrap ml-5 bg-[#141414] px-2.5 py-1.5 border border-[#262626] rounded">
                    <span className="text-gray-400">Microsoft</span>
                    <span className="text-gray-600 text-[10px] md:text-sm">→ builds →</span>
                    <span className="text-gray-300">Copilot</span>
                  </div>
                  <div className="text-gray-700 text-sm md:text-base ml-5">│</div>
                  <div className="flex items-center gap-2 flex-wrap bg-[#1a1a1a] px-2.5 py-1.5 border border-[#333] rounded">
                    <span className="text-white font-medium">Jared</span>
                    <span className="text-gray-600 text-[10px] md:text-sm">→ works on →</span>
                    <span className="text-white bg-[var(--accent)]/10 px-1.5 py-0.5 rounded text-[var(--accent)]">Copilot</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 4: OpenClaw Skill */}
      <section className="w-full max-w-5xl px-6 py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight leading-snug">Just ask OpenClaw to use it. That&apos;s it.</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-2">
              Conch operates as a native agent skill. Give OpenClaw the skill URL and define your Mandatory Storage Triggers in <code className="text-gray-300 bg-[#161616] px-1.5 py-0.5 rounded border border-[#2a2a2a]">AGENTS.md</code>, and your agent will deterministically learn your project context.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} className="w-full max-w-3xl border border-[#1f1f1f] rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center px-4 py-3 bg-[#111111] border-b border-[#1f1f1f] gap-2">
              <div className="w-3 h-3 rounded-full bg-[#333]"></div>
              <div className="w-3 h-3 rounded-full bg-[#333]"></div>
              <div className="w-3 h-3 rounded-full bg-[#333]"></div>
            </div>
            <div className="code-block text-left text-sm md:text-base p-6 bg-[#0a0a0a] border-none rounded-none !font-mono">
              <div className="text-gray-600 mb-3 font-medium"># 1. Provide the skill instructions:</div>
              <div className="mb-8"><span className="text-gray-500">User:</span> <span className="text-gray-300">Read https://raw.githubusercontent.com/jlgrimes/conch/master/skill/SKILL.md and install conch.</span></div>
              
              <div className="text-gray-600 mb-3 font-medium"># 2. Setup Deterministic Storage (AGENTS.md):</div>
              <div className="code-block !bg-[#111111] !border-[#222] !p-5 text-sm md:text-base">
                <span className="text-[var(--accent)]/90 block mb-2 font-semibold tracking-wide">### Mandatory Conch Triggers</span>
                <span className="text-gray-400 block mb-4">You are a system, not a person. These are IF-THEN rules, not aspirations.</span>
                <span className="text-white block">| Condition | What to store |</span>
                <span className="text-gray-600 block">|-----------|--------------|</span>
                <span className="text-white block">| A project is named | name, concept, stack, repo, location |</span>
                <span className="text-white block">| A tech decision is made | what was decided and why |</span>
                <span className="text-white block">| Something is built and pushed | repo URL, local path, status |</span>
                <span className="text-white block">| A preference is expressed | the preference, verbatim |</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="w-full max-w-5xl px-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>



      {/* Final CTA */}
      <section className="w-full max-w-5xl px-6 py-24 md:py-32 text-center">
        <FadeIn>
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-sm font-semibold tracking-wide uppercase">
            Open Source & MIT
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 tracking-tight">Ship memory your team can trust in production.</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8">Start with OSS today, then upgrade to the Reliability Pack when memory incidents become business-critical.</p>
          <div className="relative inline-block w-full max-w-md mx-auto mb-7">
            <div className="code-block text-left text-sm md:text-base bg-[#0f0f0f] border-[#1f1f1f]">
              <CopyButton text="cargo install conch" />
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">cargo install</span> conch
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center font-medium">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Choose your plan
            </a>
            <a href="#proof" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-[#333] text-gray-300 rounded-lg hover:border-gray-500 transition-colors w-full sm:w-auto">
              See proof points
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl px-6 pt-10 pb-10 border-t border-[#1a1a1a] flex flex-col items-center">
        <FadeIn className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <p className="text-gray-600 text-sm md:text-base">Built with <span className="text-[var(--accent)] text-lg">🐚</span> by <a href="https://github.com/jlgrimes" className="hover:text-white transition-colors">jlgrimes</a></p>
          <div className="flex gap-4 md:gap-6 text-sm md:text-base text-gray-500 font-medium">
            <a href="https://github.com/jlgrimes/conch" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://crates.io/crates/conch-core" target="_blank" className="hover:text-white transition-colors">crates.io</a>
            <a href="https://docs.rs/conch-core" target="_blank" className="hover:text-white transition-colors">Docs</a>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
