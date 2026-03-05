import { Search, Box, Activity, Clock } from 'lucide-react';
import { useState } from 'react';

export const Explorer = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const recentBlocks = [
    { number: 125678, txCount: 45, miner: '0x742d...3f8a', time: '12 sec ago' },
    { number: 125677, txCount: 32, miner: '0x8a3c...6b2d', time: '27 sec ago' },
    { number: 125676, txCount: 28, miner: '0x5e9f...1c4e', time: '41 sec ago' },
    { number: 125675, txCount: 51, miner: '0x742d...3f8a', time: '56 sec ago' },
  ];

  const recentTxs = [
    { hash: '0xabc1...def2', from: '0x123...456', to: '0x789...012', value: '2.5 INRI' },
    { hash: '0xghi3...jkl4', from: '0x345...678', to: '0x901...234', value: '0.8 INRI' },
    { hash: '0xmno5...pqr6', from: '0x567...890', to: '0x123...456', value: '15.2 INRI' },
  ];

  return (
    <section id="explorer" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Block <span className="text-cyan-400">Explorer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Search and explore blocks, transactions, and addresses on INRI CHAIN
          </p>
        </div>

        <div className="mb-12">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Address / Txn Hash / Block / Token"
                className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Box className="w-6 h-6 text-cyan-400" />
                <span>Recent Blocks</span>
              </h3>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentBlocks.map((block, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                        <Box className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{block.number}</div>
                        <div className="text-xs text-gray-400">{block.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Txns</div>
                      <div className="text-white font-semibold">{block.txCount}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Miner</span>
                    <span className="text-cyan-400 font-mono">{block.miner}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <Activity className="w-6 h-6 text-cyan-400" />
                <span>Recent Transactions</span>
              </h3>
              <Clock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {recentTxs.map((tx, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-500/40 transition-all"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-mono text-sm mb-1 truncate">{tx.hash}</div>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span>From: <span className="text-cyan-400">{tx.from}</span></span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-400">
                        <span>To: <span className="text-cyan-400">{tx.to}</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Value</span>
                    <span className="text-white font-semibold">{tx.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-6 text-center">
          <p className="text-gray-300">
            This is a basic explorer preview. Full explorer functionality coming soon with detailed block and transaction information.
          </p>
        </div>
      </div>
    </section>
  );
};
