import { Activity, Box, Gauge, TrendingUp } from 'lucide-react';
import { useNetworkStats } from '../hooks/useNetworkStats';

export const NetworkStats = () => {
  const { stats, loading } = useNetworkStats();

  const statsData = [
    {
      icon: Box,
      label: 'Current Block',
      value: loading ? '...' : stats.blockNumber.toLocaleString(),
      subtext: 'Height'
    },
    {
      icon: Gauge,
      label: 'Gas Price',
      value: loading ? '...' : `${stats.gasPrice}`,
      subtext: 'Gwei'
    },
    {
      icon: TrendingUp,
      label: 'Network Health',
      value: loading ? '...' : '98.5%',
      subtext: 'Uptime'
    },
    {
      icon: Activity,
      label: 'Status',
      value: loading ? 'Connecting...' : 'Active',
      subtext: 'Live'
    }
  ];

  return (
    <section id="stats" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Real-Time <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Network Stats</span>
          </h2>
          <p className="text-lg text-gray-400">Monitor INRI CHAIN metrics as they happen</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-blue-950" />
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                  <div className="text-xs text-blue-300 mt-2">{stat.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 transition-all"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Network Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">RPC Endpoint</div>
                <div className="font-mono text-blue-300 text-sm break-all hover:text-cyan-300 transition-colors cursor-copy">
                  https://rpc.inri.life
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Chain ID</div>
                <div className="font-mono text-cyan-300 text-sm">
                  0xEC1 <span className="text-gray-500">(3777)</span>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Native Token</div>
                <div className="font-mono text-blue-300 text-sm">INRI</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all">
                <div className="text-xs text-gray-400 mb-2 uppercase tracking-wide font-semibold">Consensus</div>
                <div className="font-mono text-cyan-300 text-sm">Proof-of-Work</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
