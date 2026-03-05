import { useEffect, useMemo, useState } from "react";
import { INRI } from "../lib/inri";

type Stats = {
  chainIdHex?: string;
  blockNumber?: number;
  gasPriceGwei?: number;
  peerCount?: number;
  lastUpdated?: number;
  ok: boolean;
  error?: string;
};

async function rpc(method: string, params: any[] = []) {
  const res = await fetch(INRI.rpcUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
  });
  const j = await res.json();
  if (j.error) throw new Error(j.error.message || "RPC error");
  return j.result;
}

function hexToInt(hex: string) {
  return parseInt(hex.startsWith("0x") ? hex.slice(2) : hex, 16);
}

export function useInriStats(pollMs = 6000) {
  const [stats, setStats] = useState<Stats>({ ok: false });

  const poll = useMemo(
    () => async () => {
      try {
        const [chainIdHex, blockHex, gasHex, peerHex] = await Promise.all([
          rpc("eth_chainId"),
          rpc("eth_blockNumber"),
          rpc("eth_gasPrice"),
          rpc("net_peerCount"),
        ]);

        const blockNumber = hexToInt(blockHex);
        const gasWei = BigInt(gasHex);
        const gasPriceGwei = Number(gasWei / 1_000_000_000n);

        setStats({
          ok: true,
          chainIdHex,
          blockNumber,
          gasPriceGwei,
          peerCount: hexToInt(peerHex),
          lastUpdated: Date.now(),
        });
      } catch (e: any) {
        setStats({ ok: false, error: e?.message || "Failed to fetch stats" });
      }
    },
    []
  );

  useEffect(() => {
    poll();
    const t = setInterval(poll, pollMs);
    return () => clearInterval(t);
  }, [poll, pollMs]);

  return stats;
}
