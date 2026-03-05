import { ArrowDownUp, Zap, BarChart3, TrendingUp, Settings, Info } from 'lucide-react';
import { useState } from 'react';

export const SwapPremium = () => {
  const [inputAmount, setInputAmount] = useState('');
  const [outputAmount, setOutputAmount] = useState('');
  const [priceImpact, setPriceImpact] = useState(0);
  const [slippage, setSlippage] = useState(0.5);
  const [showSettings, setShowSettings] = useState(false);

  const handleInputChange = (value: string) => {
    setInputAmount(value);
    if (value && parseFloat(value) > 0) {
      const output = (parseFloat(value) * 0.995 * 1.02).toFixed(6);
      setOutputAmount(output);
      setPriceImpact(0.5);
    } else {
      setOutputAmount('');
      setPriceImpact(0);
    }
  };

  const swapTokens = () => {
    const temp = inputAmount;
    setInputAmount(outputAmount);
    setOutputAmount(temp);
  };

  return (
    <section id="swap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Swap</span> Tokens
          </h2>
          <p className="text-lg text-gray-400">Instant token exchange with best prices</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
                <div className="relative z-10">
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">You send</label>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={inputAmount}
                          onChange={(e) => handleInputChange(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-3xl font-black text-white placeholder-gray-600 focus:outline-none focus:border-blue-400/50 transition-all"
                        />
                        <div className="text-xs text-gray-400 mt-2">Balance: 1,234.56 INRI</div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-3">
                        <div className="px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl hover:border-blue-400/50 cursor-pointer transition-all">
                          <div className="text-xs text-gray-400 mb-1">Token</div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"></div>
                            INRI
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center -my-4 relative z-20">
                    <button
                      onClick={swapTokens}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 shadow-lg shadow-blue-500/50 border border-blue-400/50"
                    >
                      <ArrowDownUp className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  <div className="mt-8">
                    <label className="block text-sm font-semibold text-gray-300 mb-3">You receive</label>
                    <div className="flex gap-3">
                      <div className="flex-1">
                        <input
                          type="number"
                          placeholder="0.0"
                          value={outputAmount}
                          disabled
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-3xl font-black text-gray-500 placeholder-gray-600 cursor-not-allowed"
                        />
                        <div className="text-xs text-gray-400 mt-2">Minimum received: {outputAmount ? (parseFloat(outputAmount) * (1 - slippage / 100)).toFixed(6) : '0.0'} INRI</div>
                      </div>
                      <div className="flex flex-col items-end justify-center gap-3">
                        <div className="px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-xl hover:border-blue-400/50 cursor-pointer transition-all">
                          <div className="text-xs text-gray-400 mb-1">Token</div>
                          <div className="font-semibold text-white flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400"></div>
                            USDT
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-xs text-gray-400 mb-2">Price Impact</div>
                      <div className="text-xl font-black text-white">{priceImpact.toFixed(2)}%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="text-xs text-gray-400 mb-2">Exchange Rate</div>
                      <div className="text-xl font-black text-cyan-400">1 INRI = 0.0502 USDT</div>
                    </div>
                  </div>

                  <button className="w-full mt-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-black transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!inputAmount || parseFloat(inputAmount) <= 0}
                  >
                    <Zap className="w-5 h-5" />
                    <span className="text-lg">Swap Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/50 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-white">Details</h3>
                  <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-all"
                  >
                    <Settings className="w-5 h-5 text-blue-400" />
                  </button>
                </div>

                {showSettings && (
                  <div className="space-y-4 mb-4 pb-4 border-b border-white/10">
                    <div>
                      <label className="text-xs text-gray-400 mb-2 block">Slippage Tolerance</label>
                      <div className="flex gap-2">
                        {[0.1, 0.5, 1].map((val) => (
                          <button
                            key={val}
                            onClick={() => setSlippage(val)}
                            className={`px-3 py-2 rounded-lg transition-all text-sm font-semibold ${
                              slippage === val
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            {val}%
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Liquidity</span>
                    <span className="text-cyan-400 font-semibold">Deep</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Route</span>
                    <span className="text-white font-mono text-xs">INRI → USDT</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Fee</span>
                    <span className="text-white font-semibold">0.25%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 rounded-2xl p-6">
                <h3 className="font-black text-white mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  Stats
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">24h Volume</span>
                    <span className="text-white font-semibold">$2.34M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">24h Trades</span>
                    <span className="text-white font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">TVL</span>
                    <span className="text-cyan-400 font-semibold">$45.6M</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 flex gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-300">
                  Swap is powered by Uniswap V3. Prices update every 12 seconds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
