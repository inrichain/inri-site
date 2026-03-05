import { INRI } from "./inri";

export async function addInriNetwork() {
  const eth = (window as any).ethereum;
  if (!eth) {
    alert("No wallet detected. Install MetaMask or open in a Web3 wallet browser.");
    return;
  }

  try {
    await eth.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: INRI.chainIdHex,
          chainName: INRI.name,
          rpcUrls: [INRI.rpcUrl],
          nativeCurrency: { name: INRI.symbol, symbol: INRI.symbol, decimals: 18 },
          blockExplorerUrls: [INRI.explorerUrl],
        },
      ],
    });
  } catch (e: any) {
    alert(e?.message || "Failed to add network");
  }
}
