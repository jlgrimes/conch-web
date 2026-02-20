"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="absolute top-3 right-3 text-xs text-gray-500 hover:text-[var(--accent)] transition-colors"
    >
      {copied ? "copied!" : "copy"}
    </button>
  );
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(12px)", y: 15 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-gray-100 selection:bg-[var(--accent)] selection:text-white pb-32">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-40 pb-32">
        <FadeIn>
          <div className="text-4xl mb-6 opacity-80">🐚</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-6xl sm:text-7xl font-semibold tracking-tight mb-6 text-white leading-tight">
            Conch
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-2xl sm:text-3xl text-gray-400 mb-8 max-w-2xl font-medium leading-snug">
            Biological memory for AI agents.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg text-gray-500 mb-12 max-w-xl">
            Semantic search + decay. No API keys. Just a SQLite file.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="relative inline-block w-full max-w-md mb-10">
            <div className="code-block text-left text-base bg-[#0f0f0f] border-[#1f1f1f]">
              <CopyButton text="cargo install conch" />
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">cargo install</span> conch
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-wrap gap-4 font-medium">
            <a
              href="https://github.com/jlgrimes/conch"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://docs.rs/conch-core"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-gray-300 rounded-lg hover:border-gray-500 transition-colors"
            >
              Documentation
            </a>
          </div>
        </FadeIn>
      </section>

      {/* The Problem */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-4xl font-semibold mb-8 text-white tracking-tight">The <code className="text-[var(--accent)] bg-[#1a1a1a] px-2 py-1 rounded text-2xl font-mono">memory.md</code> problem</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <FadeIn delay={0.1}>
              <h3 className="text-xl font-medium text-white mb-2">Context blooming</h3>
              <p className="text-gray-500 leading-relaxed">Agent prompts get flooded with thousands of lines of irrelevant history. Tokens wasted in every turn.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h3 className="text-xl font-medium text-white mb-2">Grep isn&apos;t semantic</h3>
              <p className="text-gray-500 leading-relaxed">Keywords miss meaning. &quot;Where does Jared work?&quot; won&apos;t match &quot;Jared is employed at Microsoft&quot;.</p>
            </FadeIn>
          </div>
          <div className="space-y-8">
            <FadeIn delay={0.3}>
              <h3 className="text-xl font-medium text-white mb-2">Immutable and stale</h3>
              <p className="text-gray-500 leading-relaxed">A configuration fact from 6 months ago weighs the exact same as a user preference from today.</p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <h3 className="text-xl font-medium text-white mb-2">Duplicated mess</h3>
              <p className="text-gray-500 leading-relaxed">The same concept stored ten times in slightly different wordings as the file continuously appends.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#333] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 1: Biological Decay */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-2xl">📉</span>
                <span className="text-sm tracking-widest uppercase text-[var(--accent)] font-semibold">Decay</span>
              </div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight leading-snug">Biological memory pruning.</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Memories strengthen with use and fade over time.
                Facts decay slowly, while episodic events fade faster.
                Anything below the threshold is pruned forever.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-4">
            <FadeIn className="space-y-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-emerald-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-5 hover:border-[#333] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white text-base font-medium">Jared works at Microsoft</span>
                    <span className="text-xs text-emerald-400 font-mono">auth: 0.94</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "94%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-emerald-400 h-full rounded-full"></motion.div>
                  </div>
                  <p className="text-gray-600 text-xs mt-3">Recalled 3 days ago &mdash; reinforced</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-5 hover:border-[#333] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300 text-base font-medium">Prefers dark mode</span>
                    <span className="text-xs text-yellow-500 font-mono">auth: 0.31</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "31%" }} transition={{ duration: 1, delay: 0.3 }} className="bg-yellow-500 h-full rounded-full"></motion.div>
                  </div>
                  <p className="text-gray-600 text-xs mt-3">Recalled 40 days ago &mdash; fading</p>
                </div>
              </div>

              <div className="group relative opacity-40 hover:opacity-100 transition-opacity duration-500">
                <div className="relative bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-base font-medium line-through">Had lunch at Chipotle</span>
                    <span className="text-xs text-red-500 font-mono">auth: 0.01</span>
                  </div>
                  <div className="w-full bg-[#1a1a1a] rounded-full h-1.5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "1%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-red-500 h-full rounded-full"></motion.div>
                  </div>
                  <p className="text-gray-600 text-xs mt-3">Episode from 90 days ago &mdash; pruned</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 2: Semantic Search */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-2xl">🔍</span>
                <span className="text-sm tracking-widest uppercase text-[var(--accent)] font-semibold">Semantic</span>
              </div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight leading-snug">Hybrid search.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                BM25 and vector recall fused via Reciprocal Rank Fusion.
                Conch finds meaning, not keywords, even when the phrasing is completely different.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-4">
            <FadeIn>
              <div className="code-block text-sm p-6 bg-[#0d0d0d] border-[#1f1f1f] shadow-lg">
                <div className="text-gray-600 mb-2 font-medium"># Stored initially:</div>
                <div className="mb-8"><span className="text-gray-600">$</span> <span className="text-[var(--accent)]">conch remember</span> <span className="text-emerald-400/80">&quot;Jared&quot;</span> <span className="text-emerald-400/80">&quot;is employed at&quot;</span> <span className="text-emerald-400/80">&quot;Microsoft&quot;</span></div>
                
                <div className="text-gray-600 mb-2 font-medium"># Recalled later:</div>
                <div className="mb-4"><span className="text-gray-600">$</span> <span className="text-[var(--accent)]">conch recall</span> <span className="text-emerald-400/80">&quot;where does Jared work?&quot;</span></div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-gray-300 bg-[#161616] p-4 rounded-lg border border-[#2a2a2a]"
                >
                  <div className="text-white mb-1">→ [fact] Jared is employed at Microsoft</div>
                  <div className="text-xs font-mono text-gray-500">score: 0.847 | strength: 0.94</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 3: Graph Traversal */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-2xl">🕸️</span>
                <span className="text-sm tracking-widest uppercase text-[var(--accent)] font-semibold">Graph</span>
              </div>
              <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight leading-snug">Spreading activation.</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Finding a memory surfaces related ones via shared subjects and objects.
                A web of associated knowledge, just like your brain.
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full pt-4">
            <FadeIn>
              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-8 font-mono text-sm shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-5 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700"></div>
                <div className="flex flex-col items-start gap-3 space-y-1 relative z-10">
                  <div className="flex items-center gap-3 flex-wrap bg-[#141414] px-3 py-2 border border-[#262626] rounded-md">
                    <span className="text-white font-medium">Jared</span>
                    <span className="text-gray-600 text-xs">→ works at →</span>
                    <span className="text-gray-400">Microsoft</span>
                  </div>
                  <div className="text-gray-700 text-xs ml-6">│</div>
                  <div className="flex items-center gap-3 flex-wrap ml-6 bg-[#141414] px-3 py-2 border border-[#262626] rounded-md">
                    <span className="text-gray-400">Microsoft</span>
                    <span className="text-gray-600 text-xs">→ builds →</span>
                    <span className="text-gray-300">Copilot</span>
                  </div>
                  <div className="text-gray-700 text-xs ml-6">│</div>
                  <div className="flex items-center gap-3 flex-wrap bg-[#1a1a1a] px-3 py-2 border border-[var(--accent)]/30 rounded-md shadow-[0_0_15px_rgba(255,107,107,0.1)]">
                    <span className="text-white font-medium">Jared</span>
                    <span className="text-gray-600 text-xs">→ works on →</span>
                    <span className="text-white bg-[var(--accent)]/10 px-2 rounded text-[var(--accent)]">Copilot</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-6">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#222] to-transparent opacity-50"></div>
      </div>

      {/* Pillar 4/5: Local & MCP */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="text-3xl mb-6">🚫</div>
            <h3 className="text-2xl font-semibold text-white mb-4">Zero Infrastructure</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              One SQLite file. Local embeddings via FastEmbed.
              No API keys, no docker containers, and fully offline.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-3xl mb-6">🔌</div>
            <h3 className="text-2xl font-semibold text-white mb-4">MCP Support</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Built-in Model Context Protocol server. Drop the config into any
              MCP-compatible client (like Claude Desktop) and your LLM gets direct memory access.
            </p>
            <div className="code-block !bg-[#0d0d0d] text-xs !border-[#1f1f1f] text-gray-400">
              <pre>{`"mcpServers": {
  "conch": {
    "command": "conch-mcp",
    "env": { "CONCH_DB": "~/.conch/default.db" }
  }
}`}</pre>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-5xl mx-auto px-6 pt-32 pb-12 border-t border-[#1a1a1a]">
        <FadeIn className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">Built with <span className="text-[var(--accent)] text-lg">🐚</span> by <a href="https://github.com/jlgrimes" className="hover:text-white transition-colors">jlgrimes</a></p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="https://github.com/jlgrimes/conch" target="_blank" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://crates.io/crates/conch-core" target="_blank" className="hover:text-white transition-colors">crates.io</a>
            <a href="https://docs.rs/conch-core" target="_blank" className="hover:text-white transition-colors">Docs</a>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}
