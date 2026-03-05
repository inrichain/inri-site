import { CheckCircle, Circle, Rocket } from 'lucide-react';

export const Roadmap = () => {
  const phases = [
    {
      phase: 'Q1 2025',
      status: 'completed',
      items: [
        'Mainnet launch with Ethash consensus',
        'Fair launch with no pre-mine',
        'Initial mining pool setup',
        'Community building and outreach'
      ]
    },
    {
      phase: 'Q2 2025',
      status: 'active',
      items: [
        'Enhanced network monitoring tools',
        'Block explorer development',
        'Strategic partnerships with mining pools',
        'Developer documentation and SDK'
      ]
    },
    {
      phase: 'Q3 2025',
      status: 'upcoming',
      items: [
        'DEX integration for WINRI trading',
        'Cross-chain bridge development',
        'Advanced smart contract templates',
        'Community governance implementation'
      ]
    },
    {
      phase: 'Q4 2025',
      status: 'upcoming',
      items: [
        'Layer 2 scaling solution research',
        'Mobile wallet application',
        'Enterprise partnerships program',
        'Developer grant program launch'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'active':
        return 'text-cyan-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6" />;
      case 'active':
        return <Rocket className="w-6 h-6" />;
      default:
        return <Circle className="w-6 h-6" />;
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Development <span className="text-cyan-400">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our vision for building the future of decentralized infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                <div className={getStatusColor(phase.status)}>
                  {getStatusIcon(phase.status)}
                </div>
              </div>

              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                phase.status === 'active' ? 'bg-cyan-500/20 text-cyan-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}
              </div>

              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                      phase.status === 'completed' ? 'bg-green-400' :
                      phase.status === 'active' ? 'bg-cyan-400' :
                      'bg-gray-500'
                    }`}></div>
                    <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Join Our Journey</h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            We're building something special together. Stay tuned for more updates and join our community to shape the future of INRI CHAIN.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://twitter.com/inrichain" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all border border-cyan-500/30">
              Follow on Twitter
            </a>
            <a href="https://github.com/inrichain" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all border border-cyan-500/30">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
