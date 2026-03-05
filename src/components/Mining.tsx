import { Download, Cpu, Gauge, Wallet } from 'lucide-react';

export const Mining = () => {
  return (
    <section id="mining" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start <span className="text-cyan-400">Mining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the INRI CHAIN network and earn INRI rewards through fair Proof-of-Work mining
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Cpu className="w-7 h-7 text-cyan-400" />
              <span>Mining Requirements</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">GPU Mining</div>
                  <div className="text-gray-400 text-sm">Ethash algorithm compatible with most modern GPUs (AMD, NVIDIA)</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Memory Required</div>
                  <div className="text-gray-400 text-sm">Minimum 4GB VRAM recommended for optimal performance</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white font-semibold mb-1">Operating System</div>
                  <div className="text-gray-400 text-sm">Windows, Linux, or HiveOS supported</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
              <Download className="w-7 h-7 text-cyan-400" />
              <span>Mining Software</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">T-Rex Miner</div>
                  <span className="text-xs text-gray-400">NVIDIA</span>
                </div>
                <div className="text-sm text-gray-400 mb-3">High performance NVIDIA GPU miner</div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Download →
                </a>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">TeamRedMiner</div>
                  <span className="text-xs text-gray-400">AMD</span>
                </div>
                <div className="text-sm text-gray-400 mb-3">Optimized for AMD GPUs</div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Download →
                </a>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-500/40 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">lolMiner</div>
                  <span className="text-xs text-gray-400">AMD/NVIDIA</span>
                </div>
                <div className="text-sm text-gray-400 mb-3">Universal miner for both GPU types</div>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                  Download →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <Gauge className="w-7 h-7 text-cyan-400" />
            <span>Quick Start Guide</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400 font-bold text-xl">
                1
              </div>
              <div className="text-white font-semibold mb-2">Download Miner</div>
              <div className="text-gray-400 text-sm">Choose and download mining software</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400 font-bold text-xl">
                2
              </div>
              <div className="text-white font-semibold mb-2">Configure Pool</div>
              <div className="text-gray-400 text-sm">Set up RPC endpoint and wallet address</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400 font-bold text-xl">
                3
              </div>
              <div className="text-white font-semibold mb-2">Start Mining</div>
              <div className="text-gray-400 text-sm">Run the miner and start earning INRI</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-3 text-cyan-400 font-bold text-xl">
                4
              </div>
              <div className="text-white font-semibold mb-2">Monitor</div>
              <div className="text-gray-400 text-sm">Track your hashrate and rewards</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <Wallet className="w-7 h-7 text-cyan-400" />
            <span>Example Configuration</span>
          </h3>
          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="text-gray-400 mb-2">T-Rex Example:</div>
            <div className="text-cyan-400 break-all">
              t-rex -a ethash -o https://rpc.inri.life -u YOUR_WALLET_ADDRESS -w worker1
            </div>
            <div className="text-gray-400 mt-4 mb-2">TeamRedMiner Example:</div>
            <div className="text-cyan-400 break-all">
              teamredminer -a ethash -o https://rpc.inri.life -u YOUR_WALLET_ADDRESS -w worker1
            </div>
          </div>
          <div className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <div className="text-sm text-cyan-400">
              <strong>Note:</strong> Replace YOUR_WALLET_ADDRESS with your actual INRI wallet address from MetaMask
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
