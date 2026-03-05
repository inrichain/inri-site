import { ArrowRight, Zap, Shield, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <div className="inline-flex items-center justify-center gap-2 mb-8 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-300 text-sm font-medium">INRI Network Live • EVM Compatible • PoW</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
          <span className="block mb-2">The Fair</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            PoW Blockchain
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Sustainable mining, minimal fees, and true decentralization. Join the INRI ecosystem today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            onClick={() => onNavigate('mining')}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/50"
          >
            <Zap className="w-5 h-5" />
            <span>Start Mining Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate('explorer')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 backdrop-blur-sm"
          >
            Explore Blockchain
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 rounded-2xl transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Zap className="w-6 h-6 text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ultra Low Fees</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Trade and transact with minimal costs</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 rounded-2xl transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Shield className="w-6 h-6 text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Battle-Tested</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Enterprise-grade PoW security</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-400/20 hover:border-blue-400/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 group-hover:from-blue-600/5 group-hover:to-cyan-600/5 rounded-2xl transition-all"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Users className="w-6 h-6 text-blue-950" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community First</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Fair mining & decentralized governance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
