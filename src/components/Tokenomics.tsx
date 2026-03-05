import { Coins, TrendingUp, Users, Zap } from 'lucide-react';

export const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-cyan-400">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fair distribution through Proof-of-Work mining with no pre-mine or ICO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <Coins className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Native Token</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Symbol</span>
                <span className="text-white font-semibold">INRI</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Decimals</span>
                <span className="text-white font-semibold">18</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Initial Distribution</span>
                <span className="text-white font-semibold">Mining Only</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">Pre-mine</span>
                <span className="text-green-400 font-semibold">0% (Fair Launch)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Supply & Emission</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Block Reward</span>
                <span className="text-white font-semibold">Variable</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Block Time</span>
                <span className="text-white font-semibold">~15 seconds</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-700">
                <span className="text-gray-400">Consensus</span>
                <span className="text-white font-semibold">Proof-of-Work</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-400">Algorithm</span>
                <span className="text-white font-semibold">Ethash</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Community</h4>
            <p className="text-gray-400 text-sm">100% fair distribution through mining</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Low Fees</h4>
            <p className="text-gray-400 text-sm">Minimal transaction costs for all users</p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Sustainable</h4>
            <p className="text-gray-400 text-sm">Long-term economic model for growth</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Wrapped INRI (WINRI)</h3>
          <p className="text-gray-300 text-center max-w-2xl mx-auto">
            WINRI is the wrapped version of INRI, designed for DeFi applications and trading pairs.
            1 WINRI = 1 INRI with seamless on-chain conversion.
          </p>
        </div>
      </div>
    </section>
  );
};
