import { ArrowDownUp, Settings2, Zap } from 'lucide-react';
import { useState } from 'react';

export const Swap = () => {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [fromToken, setFromToken] = useState('INRI');
  const [toToken, setToToken] = useState('WINRI');
  const [slippage, setSlippage] = useState('0.5');
  const [showSettings, setShowSettings] = useState(false);

  const tokens = [
    { symbol: 'INRI', name: 'INRI Token', price: 1.0 },
    { symbol: 'WINRI', name: 'Wrapped INRI', price: 1.0 },
    { symbol: 'ETH', name: 'Ethereum', price: 3500 },
    { symbol: 'USDC', name: 'USD Coin', price: 1.0 }
  ];

  const handleSwapClick = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setFromAmount('');
    setToAmount('');
  };

  const handleFromChange = (value: string) => {
    setFromAmount(value);
    if (value) {
      const estimated = (parseFloat(value) * 0.999).toFixed(6);
      setToAmount(estimated);
    } else {
      setToAmount('');
    }
  };

  const isValid = fromAmount && toAmount && parseFloat(fromAmount) > 0;

  return (
    <section id="swap" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Lightning-Fast <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Token Swaps</span>
          </h2>
          <p className="text-lg text-gray-400">0.25% fees • Instant execution • Zero slippage</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-white">Swap Tokens</h3>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className={`w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 ${showSettings ? 'bg-blue-500/30' : ''}`}
                >
                  <Settings2 className="w-5 h-5 text-white" />
                </button>
              </div>

              {showSettings && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-white text-sm font-semibold">Slippage Tolerance</label>
                    <span className="text-cyan-400 font-black text-lg">{slippage}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={slippage}
                    onChange={(e) => setSlippage(e.target.value)}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <div className="flex gap-3 mt-4">
                    {['0.5', '1.0', '2.0'].map((val) => (
                      <button
                        key={val}
                        onClick={() => setSlippage(val)}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          slippage === val
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50'
                            : 'bg-white/10 border border-white/20 text-gray-300 hover:border-white/40'
                        }`}
                      >
                        {val}%
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-300 text-sm font-semibold">From</label>
                  <span className="text-gray-400 text-xs">Balance: 0.00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => handleFromChange(e.target.value)}
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-4xl font-black text-white outline-none placeholder-gray-600"
                  />
                  <select
                    value={fromToken}
                    onChange={(e) => setFromToken(e.target.value)}
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white px-4 py-2 rounded-xl border border-blue-400/30 hover:border-blue-400/50 focus:outline-none focus:border-blue-400 transition-all font-semibold"
                  >
                    {tokens.map((token) => (
                      <option key={token.symbol} value={token.symbol}>
                        {token.symbol}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-center -my-3 relative z-20">
                <button
                  onClick={handleSwapClick}
                  className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg shadow-blue-500/50"
                >
                  <ArrowDownUp className="w-7 h-7 text-white" />
                </button>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-gray-300 text-sm font-semibold">To (Estimated)</label>
                  <span className="text-gray-400 text-xs">Balance: 0.00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="number"
                    value={toAmount}
                    disabled
                    placeholder="0.0"
                    className="flex-1 bg-transparent text-4xl font-black text-gray-500 outline-none placeholder-gray-700"
                  />
                  <select
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white px-4 py-2 rounded-xl border border-blue-400/30 hover:border-blue-400/50 focus:outline-none focus:border-blue-400 transition-all font-semibold"
                  >
                    {tokens.map((token) => (
                      <option key={token.symbol} value={token.symbol}>
                        {token.symbol}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">Exchange Rate</div>
                  <div className="text-lg font-black text-white">1:0.999</div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs text-gray-400 mb-1">Fee (0.25%)</div>
                  <div className="text-lg font-black text-green-400">{fromAmount ? (parseFloat(fromAmount) * 0.0025).toFixed(6) : '0'}</div>
                </div>
              </div>

              <button
                disabled={!isValid}
                className={`w-full py-4 rounded-xl font-black transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 active:scale-95 ${
                  isValid
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Zap className="w-5 h-5" />
                <span className="text-lg">{isValid ? 'Execute Swap' : 'Enter Amount'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
