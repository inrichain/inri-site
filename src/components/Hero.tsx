import { INRI } from "../lib/inri";
import { addInriNetwork } from "../lib/addNetwork";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute top-24 left-10 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-52 right-10 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live PoW network • ChainId {INRI.chainIdDec}
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          INRI Chain
          <span className="block text-white/70">Fair Proof-of-Work Blockchain</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/70">
          A global PoW network built for fairness, strong decentralization and real utility.
          Connect, mine, build and grow with the INRI ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={addInriNetwork}
            className="rounded-xl bg-white text-black px-5 py-3 font-semibold hover:opacity-90 transition"
          >
            Add INRI Network
          </button>

          <a
            href={INRI.explorerUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Open Explorer
          </a>

          <a
            href="#whitepaper"
            className="rounded-xl border border-white/15 bg-transparent px-5 py-3 font-semibold text-white/90 hover:bg-white/5 transition"
          >
            Whitepaper
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { k: "Consensus", v: "Proof of Work" },
            { k: "RPC", v: INRI.rpcUrl.replace("https://", "") },
            { k: "Launch", v: "Mainnet" },
          ].map((x) => (
            <div
              key={x.k}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white"
            >
              <div className="text-white/60 text-sm">{x.k}</div>
              <div className="mt-1 text-lg font-semibold">{x.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
