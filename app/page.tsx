"use client";

import { useState } from "react";

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

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`max-w-3xl mx-auto px-6 py-20 ${className}`}>{children}</section>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold mb-8 text-white">{children}</h2>;
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-center">
        <div className="text-5xl mb-4">🐚</div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          <span className="text-white">Conch</span>
        </h1>
        <p className="text-xl text-gray-400 mb-2">Biological memory for AI agents.</p>
        <p className="text-gray-500 mb-10">Semantic search + decay. No API keys. Just a SQLite file.</p>

        <div className="relative inline-block w-full max-w-md mb-8">
          <div className="code-block text-left">
            <CopyButton text="cargo install --git https://github.com/jlgrimes/conch conch" />
            <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">cargo install --git</span> https://github.com/jlgrimes/conch conch
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/jlgrimes/conch"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <a
            href="https://docs.rs/conch-core"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-gray-300 font-medium rounded-lg hover:border-[var(--accent)] hover:text-white transition-colors"
          >
            Docs
          </a>
        </div>
      </section>

      {/* The Problem */}
      <Section>
        <SectionTitle>The Problem</SectionTitle>
        <p className="text-gray-400 mb-6">
          Most AI agents use a flat <code className="text-[var(--accent)] bg-[#1a1a1a] px-1.5 py-0.5 rounded text-sm">memory.md</code> file. It doesn&apos;t scale.
        </p>
        <div className="grid gap-4">
          {[
            ["Loads everything into context", "Every prompt gets the whole file. Tokens wasted on irrelevant history."],
            ["No semantic recall", "grep finds keywords, not meaning. \"Where does Jared work?\" won't match \"Jared is employed at Microsoft\"."],
            ["No decay", "A fact from 6 months ago is weighted the same as one from today."],
            ["No deduplication", "The same thing stored 10 times in slightly different words."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-lg p-4">
              <p className="text-white font-medium mb-1">{title}</p>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
        <div className="code-block mt-8 text-gray-400">
          <div><span className="text-gray-500">// memory.md after 6 months:</span></div>
          <div className="text-white">4,000 lines, loaded every prompt</div>
          <div className="mt-2"><span className="text-gray-500">// Conch after 6 months:</span></div>
          <div className="text-[var(--accent)]">10,000 memories → 5 relevant ones returned per recall</div>
        </div>
      </Section>

      {/* The Solution */}
      <Section>
        <SectionTitle>Why Conch</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            ["🔍", "Recall by meaning", "Hybrid BM25 + vector search finds semantically relevant memories, not just keyword matches."],
            ["📉", "Biological decay", "Old memories fade unless reinforced. Frequently-accessed ones survive longer. Just like real memory."],
            ["🚫", "Zero infrastructure", "SQLite file + local embeddings via FastEmbed. No API keys, no servers, no config."],
            ["🔌", "MCP support", "Built-in Model Context Protocol server. Direct LLM tool integration out of the box."],
            ["🧬", "Deduplication", "Cosine similarity (0.95) detects near-duplicates and reinforces instead of cloning."],
            ["🕸️", "Graph traversal", "Spreading activation through shared subjects/objects surfaces related memories."],
          ].map(([emoji, title, desc], i) => (
            <div key={i} className="bg-[#111] border border-[#1a1a1a] rounded-lg p-5">
              <div className="text-2xl mb-2">{emoji}</div>
              <p className="text-white font-medium mb-1">{title}</p>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <div className="space-y-6">
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Store a fact</p>
            <div className="code-block">
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">conch remember</span> <span className="text-emerald-400">&quot;Jared&quot;</span> <span className="text-emerald-400">&quot;works at&quot;</span> <span className="text-emerald-400">&quot;Microsoft&quot;</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Store an episode</p>
            <div className="code-block">
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">conch remember-episode</span> <span className="text-emerald-400">&quot;Deployed v2.0 to production&quot;</span>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Recall by meaning</p>
            <div className="code-block">
              <div><span className="text-gray-500">$</span> <span className="text-[var(--accent)]">conch recall</span> <span className="text-emerald-400">&quot;where does Jared work?&quot;</span></div>
              <div className="text-gray-400 mt-1 italic">→ [fact] Jared works at Microsoft (score: 0.847)</div>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Run decay maintenance</p>
            <div className="code-block">
              <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">conch decay</span>
              <div className="text-gray-400 mt-1 italic">→ Decayed 847 memories, pruned 12 below threshold</div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-[#111] border border-[#1a1a1a] rounded-lg p-6">
          <p className="text-white font-medium mb-3">Scoring formula</p>
          <div className="code-block !bg-[#0a0a0a]">
            <span className="text-gray-300">score = RRF(BM25, vector) × recency × access_weight × strength</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-[var(--accent)]">Recency</span> <span className="text-gray-500">— 7-day half-life</span></div>
            <div><span className="text-[var(--accent)]">Access</span> <span className="text-gray-500">— log-normalized 1.0–2.0×</span></div>
            <div><span className="text-[var(--accent)]">Decay</span> <span className="text-gray-500">— facts λ=0.02/day, episodes λ=0.06/day</span></div>
            <div><span className="text-[var(--accent)]">Death</span> <span className="text-gray-500">— pruned below 0.01 strength</span></div>
          </div>
        </div>
      </Section>

      {/* Install */}
      <Section className="text-center">
        <SectionTitle>Get Started</SectionTitle>
        <div className="relative inline-block w-full max-w-md mb-6">
          <div className="code-block text-left">
            <CopyButton text="cargo install --git https://github.com/jlgrimes/conch conch" />
            <span className="text-gray-500">$</span> <span className="text-[var(--accent)]">cargo install --git</span> https://github.com/jlgrimes/conch conch
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          No Cargo? Check the{" "}
          <a href="https://github.com/jlgrimes/conch/blob/master/docs/install.md" target="_blank" className="text-[var(--accent)] hover:underline">
            installation guide
          </a>{" "}
          for prebuilt binaries.
        </p>

        <div className="mt-8 bg-[#111] border border-[#1a1a1a] rounded-lg p-6 text-left">
          <p className="text-white font-medium mb-3">MCP Server Config</p>
          <div className="code-block !bg-[#0a0a0a] text-xs">
            <pre>{`{
  "mcpServers": {
    "conch": {
      "command": "conch-mcp",
      "env": { "CONCH_DB": "~/.conch/default.db" }
    }
  }
}`}</pre>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 border-t border-[#1a1a1a] text-center">
        <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
          <span>MIT License</span>
          <span>·</span>
          <a href="https://github.com/jlgrimes/conch" target="_blank" className="hover:text-[var(--accent)] transition-colors">
            GitHub
          </a>
          <span>·</span>
          <a href="https://crates.io/crates/conch-core" target="_blank" className="hover:text-[var(--accent)] transition-colors">
            crates.io
          </a>
          <span>·</span>
          <a href="https://docs.rs/conch-core" target="_blank" className="hover:text-[var(--accent)] transition-colors">
            docs.rs
          </a>
        </div>
        <p className="text-gray-600 text-xs mt-4">Built with 🐚 by <a href="https://github.com/jlgrimes" className="hover:text-[var(--accent)]">jlgrimes</a></p>
      </footer>
    </main>
  );
}
