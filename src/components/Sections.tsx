import { INRI } from "../lib/inri";

export function Tokenomics() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="tokenomics">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Tokenomics</h2>
      <p className="mt-2 text-white/60">Clear, simple and miner-aligned economics.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { k: "Native Token", v: "INRI" },
          { k: "Use Cases", v: "Gas fees, mining rewards, ecosystem incentives" },
          { k: "Fair Launch", v: "PoW distribution — no hidden mint" },
        ].map((x) => (
          <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white/60 text-sm">{x.k}</div>
            <div className="mt-2 text-white font-semibold">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Roadmap() {
  const items = [
    { q: "Q1", t: "Network stability + explorers + wallets" },
    { q: "Q2", t: "Ecosystem growth + dev tooling + docs" },
    { q: "Q3", t: "DEX / swaps + liquidity programs" },
    { q: "Q4", t: "Scaling + partnerships + expansion" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="roadmap">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Roadmap</h2>
      <p className="mt-2 text-white/60">Execution-driven milestones.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((x) => (
          <div key={x.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white/60 text-sm">{x.q}</div>
            <div className="mt-2 text-white font-semibold">{x.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Mining() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="mining">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Mining</h2>
      <p className="mt-2 text-white/60">
        Join the network security. Start mining INRI with your hardware.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
        <div className="font-semibold text-white">Quick start</div>
        <ul className="mt-3 list-disc pl-5 space-y-2">
          <li>Download miner/node package</li>
          <li>Set your INRI wallet address</li>
          <li>Connect to RPC / bootnodes</li>
          <li>Start and monitor hashrate</li>
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <a className="rounded-xl bg-white text-black px-5 py-3 font-semibold" href="#docs">
            Mining Guide
          </a>
          <a className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold" href={INRI.explorerUrl} target="_blank" rel="noreferrer">
            View Blocks
          </a>
        </div>
      </div>
    </section>
  );
}

export function Whitepaper() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="whitepaper">
      <h2 className="text-2xl md:text-3xl font-bold text-white">Whitepaper</h2>
      <p className="mt-2 text-white/60">
        Read the full technical overview and vision.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <a
          href={INRI.whitepaperUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-xl bg-white text-black px-5 py-3 font-semibold"
        >
          Open Whitepaper (PDF)
        </a>
        <p className="mt-3 text-white/50 text-sm">
          Tip: use a 1200×630 image for OG/Twitter to maximize sharing.
        </p>
      </div>
    </section>
  );
}
