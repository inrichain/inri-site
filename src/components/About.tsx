import { Code, Cpu, Globe, Lock } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Proof-of-Work',
      description: 'Secured by Ethash algorithm, ensuring fair and decentralized mining for all participants'
    },
    {
      icon: Code,
      title: 'EVM Compatible',
      description: 'Full Ethereum compatibility enables seamless deployment of smart contracts and dApps'
    },
    {
      icon: Globe,
      title: 'Community Driven',
      description: 'Built by the community, for the community, with transparent governance and development'
    },
    {
      icon: Lock,
      title: 'Decentralized',
      description: 'No pre-mine, no ICO - truly fair launch with distributed validator network'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What is <span className="text-cyan-400">INRI CHAIN?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            INRI CHAIN is a Proof-of-Work Layer 1 blockchain designed for fairness, accessibility, and long-term sustainability.
            Compatible with Ethereum tooling and focused on community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all hover:transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3777</div>
              <div className="text-gray-400">Chain ID</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Ethash</div>
              <div className="text-gray-400">Consensus</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">18</div>
              <div className="text-gray-400">Decimals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
