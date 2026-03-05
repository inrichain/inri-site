import { Download, FileText, BookOpen, ExternalLink, Github, Shield, Zap, Cpu } from 'lucide-react';

export const WhitepaperPremium = () => {
  const downloadWhitepaper = () => {
    const whitepaperContent = `
INRI CHAIN - Technical Whitepaper
==================================

Abstract
--------
INRI CHAIN is a fair Proof-of-Work blockchain designed for accessibility and decentralization.
Built on Ethereum-compatible technology with custom consensus mechanisms optimized for inclusive mining.

1. Technical Specifications
---------------------------
- Chain ID: 3777
- Consensus: Proof-of-Work (Fair Mining)
- Block Time: ~12 seconds
- Gas Limit: Dynamic
- Native Token: INRI
- Total Supply: 21,000,000 INRI
- Decimals: 18
- EVM Compatible: Full Solidity support

2. Network Architecture
-----------------------
- RPC Endpoints: https://rpc.inri.life
- WebSocket: wss://rpc.inri.life (if available)
- Chain Explorer: https://explorer.inri.life
- Public Peers: Multiple relay nodes
- Consensus Finality: 12 block confirmations

3. Tokenomics
-------------
Total Supply: 21,000,000 INRI

Distribution:
- Community Mining: 40%
- Team & Development: 20%
- Ecosystem Fund: 30%
- Treasury: 10%

Mining Rewards:
- Block Reward: 1 INRI (adjustable)
- Fee: 0.2% (network operations)
- Difficulty: Auto-adjusts every 2016 blocks
- Halving: Every 4 years

4. Security Model
-----------------
- PoW Mining: ASIC-resistant algorithm
- 51% Attack Cost: Prohibitively high due to network size
- Finality: After 12 block confirmations
- Smart Contract Audit: TBD
- Bug Bounty Program: Active

5. Developer Guidelines
-----------------------
Smart Contract Deployment:
  - Language: Solidity 0.8.0+
  - Standard: ERC-20, ERC-721, ERC-1155
  - Gas Price: Typical 1-50 Gwei
  - RPC URL: https://rpc.inri.life

Example Connection (Web3.js):
  const web3 = new Web3('https://rpc.inri.life');
  const balance = await web3.eth.getBalance('0x...');

Example Connection (Ethers.js):
  const provider = new ethers.JsonRpcProvider('https://rpc.inri.life');
  const blockNumber = await provider.getBlockNumber();

6. Governance
-------------
- Community Voting: Snapshot voting on governance proposals
- Treasury Management: Multi-sig wallet (3-of-5)
- Upgrade Mechanism: Time-locked governance contracts
- Proposal Threshold: 10,000 INRI

7. Roadmap
----------
Q1 2024: Network Launch & Testnet
Q2 2024: Mainnet Genesis & Mining Pool Launch
Q3 2024: DEX Integration (Uniswap V3 deployment)
Q4 2024: Bridge Implementation (Polygon & TRON)
Q1 2025: DAO Launch & Community Governance
Q2 2025: Enterprise Partnerships
Q3 2025: Layer 2 Scaling Solution
Q4 2025: Cross-chain Interoperability

8. References
-------------
- Ethereum Yellow Paper: https://ethereum.org/en/whitepaper/
- Solidity Docs: https://docs.soliditylang.org/
- Web3.js: https://web3js.readthedocs.io/
- Ethers.js: https://docs.ethers.org/

9. Contact & Support
--------------------
- GitHub: https://github.com/inrichain
- Discord: https://discord.gg/inrichain
- Email: support@inri.life
- Twitter: https://twitter.com/inrichain

---
Document Version: 1.0
Last Updated: 2024
INRI Foundation - All rights reserved
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(whitepaperContent));
    element.setAttribute('download', 'INRI_Whitepaper.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="whitepaper" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Documentation</span>
          </h2>
          <p className="text-lg text-gray-400">Complete technical specifications and developer resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <FileText className="w-8 h-8 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Whitepaper</h3>
                  <p className="text-sm text-gray-300">Full technical specification</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Complete documentation covering INRI's consensus mechanism, economic model, governance structure, and implementation details for developers.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={downloadWhitepaper}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20 hover:border-white/40">
                  <ExternalLink className="w-4 h-4" />
                  <span>View Online</span>
                </button>
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-8 h-8 text-blue-950" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Developer Docs</h3>
                  <p className="text-sm text-gray-300">Integration guides & APIs</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Step-by-step guides for developers. Deploy smart contracts, integrate with RPC endpoints, and build dApps on INRI.
              </p>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50">
                  <BookOpen className="w-4 h-4" />
                  <span>Read</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20 hover:border-white/40">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Zap, title: 'Fast RPC', desc: 'Sub-second response times' },
            { icon: Cpu, title: 'EVM Compatible', desc: 'Deploy Solidity contracts' },
            { icon: Shield, title: 'Secure', desc: 'Battle-tested consensus' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-6 hover:border-blue-400/50 transition-all">
                <Icon className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="font-black text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-2xl p-8">
          <h3 className="text-2xl font-black text-white mb-8">Quick Reference</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Chain ID', value: '3777' },
              { label: 'Block Time', value: '~12 seconds' },
              { label: 'Total Supply', value: '21M INRI' },
              { label: 'RPC', value: 'rpc.inri.life' },
              { label: 'Gas Price', value: '1-50 Gwei' },
              { label: 'Min Stake', value: '—' },
              { label: 'Explorer', value: 'explorer.inri.life' },
              { label: 'Consensus', value: 'PoW Fair Mining' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="text-xs text-gray-400 mb-1 font-semibold uppercase">{item.label}</div>
                <div className="text-sm font-black text-cyan-400">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
