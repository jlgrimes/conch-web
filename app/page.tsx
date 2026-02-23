import Link from "next/link";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="card">
        <p className="eyebrow">Conch</p>
        <h1>Ship agents that remember correctly under load.</h1>
        <p className="lead">
          Conch is biological memory infrastructure for AI agents: semantic recall, decay, reinforcement, and explainable ranking.
        </p>
      </section>

      <section className="card teaser">
        <h2>Need production reliability?</h2>
        <p className="section-note">
          For teams rolling Conch into real products, we run a focused reliability engagement to harden memory quality and ops.
        </p>
        <div className="cta-row">
          <Link className="primary-btn" href="/reliability">
            View reliability
          </Link>
          <a className="secondary-link" href="https://app.conch.lol" target="_blank" rel="noreferrer">
            Open customer portal →
          </a>
        </div>
      </section>
    </main>
  );
}
