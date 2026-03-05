import { Plus, Minus, TrendingUp, BarChart3, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const Pool = () => {
  const [activeTab, setActiveTab] = useState<'add' | 'remove'>('add');
  const [token1Amount, setToken1Amount] = useState('');
  const [token2Amount, setToken2Amount] = useState('');
  const [selectedPair, setSelectedPair] = useState('INRI-WINRI');
  const [showPairDropdown, setShowPairDropdown] = useState(false);

  const pairs = [
    { id: 'INRI-WINRI', name: 'INRI / WINRI', token1: 'INRI', token2: 'WINRI', icon1: '⚪', icon2: '🔷', fee: '0.25%', tvl: '$2.5M', apr: '45.2%', volume24h: '$1.2M' },
    { id: 'INRI-ETH', name: 'INRI / ETH', token1: 'INRI', token2: 'ETH', icon1: '⚪', icon2: '◆', fee: '1%', tvl: '$1.8M', apr: '38.9%', volume24h: '$890K' },
    { id: 'INRI-USDC', name: 'INRI / USDC', token1: 'INRI', token2: 'USDC', icon1: '⚪', icon2: '◇', fee: '0.05%', tvl: '$3.2M', apr: '52.1%', volume24h: '$2.1M' },
    { id: 'WINRI-ETH', name: 'WINRI / ETH', token1: 'WINRI', token2: 'ETH', icon1: '🔷', icon2: '◆', fee: '0.30%', tvl: '$1.2M', apr: '41.3%', volume24h: '$650K' },
  ];

  const userPools = [
    { pair: 'INRI-WINRI', balance: '100.50', value: '$100.50', apr: '45.2%', unclaimed: '2.15', earned: '$2.15' },
    { pair: 'INRI-USDC', balance: '50.00', value: '$50.00', apr: '52.1%', unclaimed: '1.85', earned: '$1.85' },
  ];

  const currentPair = pairs.find(p => p.id === selectedPair);

  const handleToken1Change = (value: string) => {
    setToken1Amount(value);
    if (value) {
      setToken2Amount((parseFloat(value) * 1).toFixed(6));
    } else {
      setToken2Amount('');
    }
  };

  const isValidAdd = token1Amount && token2Amount && parseFloat(token1Amount) > 0;

  return (
    <section id="pool" className="py-20 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Liquidity Pools
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Earn fees by providing liquidity to trading pairs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex space-x-3 mb-8 p-1 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <button
                  onClick={() => setActiveTab('add')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    activeTab === 'add'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Liquidity</span>
                </button>
                <button
                  onClick={() => setActiveTab('remove')}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                    activeTab === 'remove'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Minus className="w-5 h-5" />
                  <span>Remove Liquidity</span>
                </button>
              </div>

              {activeTab === 'add' ? (
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-300 text-sm font-semibold mb-3 block">Select Pair</label>
                    <div className="relative">
                      <button
                        onClick={() => setShowPairDropdown(!showPairDropdown)}
                        className="w-full flex items-center justify-between px-5 py-4 bg-gray-900/50 border border-gray-700/50 hover:border-cyan-500/30 rounded-2xl transition-all text-white font-semibold group"
                      >
                        <div className="flex items-center gap-3">
                          {currentPair && (
                            <>
                              <div className="flex -space-x-2">
                                <span className="text-2xl">{currentPair.icon1}</span>
                                <span className="text-2xl">{currentPair.icon2}</span>
                              </div>
                              <span>{currentPair.name}</span>
                            </>
                          )}
                        </div>
                        <ChevronDown className={`w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-all ${showPairDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {showPairDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-cyan-500/30 rounded-2xl shadow-xl z-20 overflow-hidden backdrop-blur-xl">
                          {pairs.map((pair) => (
                            <button
                              key={pair.id}
                              onClick={() => {
                                setSelectedPair(pair.id);
                                setShowPairDropdown(false);
                                setToken1Amount('');
                                setToken2Amount('');
                              }}
                              className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800/50 transition-colors border-b border-gray-800/30 last:border-b-0"
                            >
                              <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                  <span className="text-2xl">{pair.icon1}</span>
                                  <span className="text-2xl">{pair.icon2}</span>
                                </div>
                                <div className="text-left">
                                  <div className="text-white font-semibold">{pair.name}</div>
                                  <div className="text-xs text-gray-400">{pair.fee} • APR {pair.apr}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-semibold">{pair.tvl}</div>
                                <div className="text-xs text-gray-400">TVL</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-gray-400 text-sm font-medium">{currentPair?.token1}</label>
                      <span className="text-gray-500 text-xs">Balance: <span className="text-cyan-400">1000.00</span></span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <input
                        type="number"
                        value={token1Amount}
                        onChange={(e) => handleToken1Change(e.target.value)}
                        placeholder="0"
                        className="flex-1 bg-transparent text-3xl font-bold text-white outline-none placeholder-gray-600"
                      />
                      <div className="text-3xl">{currentPair?.icon1}</div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-all">
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-gray-400 text-sm font-medium">{currentPair?.token2}</label>
                      <span className="text-gray-500 text-xs">Balance: <span className="text-cyan-400">1000.00</span></span>
                    </div>
                    <div className="flex items-end justify-between gap-3">
                      <input
                        type="number"
                        value={token2Amount}
                        disabled
                        placeholder="0"
                        className="flex-1 bg-transparent text-3xl font-bold text-gray-600 outline-none placeholder-gray-700"
                      />
                      <div className="text-3xl">{currentPair?.icon2}</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Share of Pool</span>
                        <span className="text-cyan-400 font-semibold">0.00%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">LP Tokens Received</span>
                        <span className="text-cyan-400 font-semibold">{token1Amount ? (parseFloat(token1Amount) * Math.sqrt(2)).toFixed(6) : '0'}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    disabled={!isValidAdd}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform flex items-center justify-center gap-2 ${
                      isValidAdd
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105'
                        : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                    <span>{isValidAdd ? 'Supply Liquidity' : 'Enter Amounts'}</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="text-gray-300 text-sm font-semibold mb-3 block">Your Positions</label>
                    <div className="space-y-3">
                      {userPools.length > 0 ? userPools.map((pool, idx) => {
                        const pairData = pairs.find(p => p.id === pool.pair);
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedPair(pool.pair)}
                            className={`bg-gray-900/50 border rounded-2xl p-5 cursor-pointer transition-all hover:border-cyan-500/40 ${
                              selectedPair === pool.pair
                                ? 'border-cyan-500/50 bg-cyan-500/10'
                                : 'border-gray-700/50'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                  <span className="text-2xl">{pairData?.icon1}</span>
                                  <span className="text-2xl">{pairData?.icon2}</span>
                                </div>
                                <div>
                                  <div className="text-white font-semibold">{pool.pair}</div>
                                  <div className="text-gray-400 text-xs">{pool.balance} LP Tokens</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-cyan-400 font-bold text-lg">{pool.value}</div>
                                <div className="text-green-400 text-sm">{pool.apr} APR</div>
                              </div>
                            </div>
                          </div>
                        );
                      }) : (
                        <div className="text-center py-8 text-gray-400">
                          <p>No liquidity positions yet</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm">
                    <label className="text-gray-400 text-sm font-semibold mb-4 block">Amount to Remove</label>
                    <input
                      type="number"
                      placeholder="0"
                      className="w-full bg-transparent text-3xl font-bold text-white outline-none placeholder-gray-600 mb-4"
                    />
                    <div className="flex gap-2">
                      {['25', '50', '75', '100'].map((pct) => (
                        <button
                          key={pct}
                          className="flex-1 py-2 px-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 text-sm rounded-lg font-semibold transition-all border border-gray-700/50 hover:border-cyan-500/30"
                        >
                          {pct}%
                        </button>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-4 rounded-xl font-bold text-lg transition-all transform bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105 flex items-center justify-center gap-2">
                    <Minus className="w-5 h-5" />
                    Remove Liquidity
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 sticky top-24 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Top Pools
              </h3>
              <div className="space-y-3">
                {pairs.slice(0, 3).map((pair) => (
                  <div key={pair.id} className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-4 hover:border-cyan-500/40 transition-all hover:bg-gray-900/70">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1">
                          <span className="text-lg">{pair.icon1}</span>
                          <span className="text-lg">{pair.icon2}</span>
                        </div>
                        <div className="font-semibold text-white text-sm">{pair.name}</div>
                      </div>
                      <span className="text-green-400 font-bold text-sm bg-green-500/10 px-2 py-1 rounded-lg">{pair.apr}</span>
                    </div>
                    <div className="text-xs text-gray-400 space-y-1">
                      <div className="flex justify-between">
                        <span>TVL: <span className="text-cyan-400">{pair.tvl}</span></span>
                        <span>Vol: <span className="text-cyan-400">{pair.volume24h}</span></span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fee: <span className="text-cyan-400">{pair.fee}</span></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/40 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                Your Rewards
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Unclaimed Fees</span>
                    <span className="text-cyan-400 font-bold text-lg">4.00 INRI</span>
                  </div>
                </div>
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Estimated Daily</span>
                    <span className="text-green-400 font-bold text-lg">0.32 INRI</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/40 text-cyan-400 rounded-xl font-semibold transition-all hover:border-cyan-500/60">
                  Claim Rewards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
