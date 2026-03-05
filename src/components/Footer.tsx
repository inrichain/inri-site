import { Github, Twitter, Send, MessageCircle } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/inrichain' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/inrichain' },
    { icon: Send, label: 'Telegram', url: '#' },
    { icon: MessageCircle, label: 'Discord', url: '#' }
  ];

  const quickLinks = [
    { label: 'Documentation', url: '#' },
    { label: 'Whitepaper', url: 'https://rpc.inri.life/whitepaper.html' },
    { label: 'GitHub', url: 'https://github.com/inrichain' },
    { label: 'Community', url: '#' }
  ];

  const resources = [
    { label: 'Add to MetaMask', url: '#' },
    { label: 'Mining Guide', url: '#mining' },
    { label: 'Block Explorer', url: '#explorer' },
    { label: 'Network Stats', url: '#stats' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                INRI
              </div>
              <div>
                <div className="text-xl font-bold text-white">INRI CHAIN</div>
                <div className="text-xs text-cyan-400">Building the Future of PoW</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A fair, community-driven Layer 1 blockchain built for decentralization, low fees, and sustainable Proof-of-Work mining.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-cyan-500/20 border border-gray-700 hover:border-cyan-500/40 rounded-lg flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} INRI CHAIN. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
