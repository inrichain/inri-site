import { useInriStats } from "../hooks/useInriStats";
import { INRI } from "../lib/inri";

function fmt(n?: number) {
  if (n === undefined) return "—";
  return n.toLocaleString("en-US");
}

export function LiveStats() {
  const s = useInriStats(6000);

  return (
    <section className="mx-auto max-w-6xl px-6 py-14" id="stats">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Network Stats</h2>
          <p className="mt-2 text-white/60">
            Live data from RPC: <span className="text-white/80">{INRI.rpcUrl}</span>
          </p>
        </div>
        <div className="text-sm text-white/50">
          {s.ok && s.lastUpdated ? `Updated ${new Date(s.lastUpdated).toLocaleTimeString()}` : s.error ? `Error: ${s.error}` : "Loading..."}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { k: "Chain ID", v: s.chainIdHex ? `${INRI.chainIdDec} (${s.chainIdHex})` : "—" },
          { k: "Block Height", v: fmt(s.blockNumber) },
          { k: "Gas (Gwei)", v: fmt(s.gasPriceGwei) },
          { k: "Peers", v: fmt(s.peerCount) },
        ].map((x) => (
          <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-white/60 text-sm">{x.k}</div>
            <div className="mt-2 text-white text-2xl font-extrabold">{x.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
