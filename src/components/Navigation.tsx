import { Menu, X, Wallet } from 'lucide-react';
import { useState } from 'react';
import { useWeb3 } from '../hooks/useWeb3';

interface NavigationProps {
  onNavigate: (section: string) => void;
}

export const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { account, isConnected, connect, disconnect } = useWeb3();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Stats', id: 'stats' },
    { label: 'P2P', id: 'p2p' },
    { label: 'Mining', id: 'mining' },
    { label: 'Swap', id: 'swap' },
    { label: 'Pool', id: 'pool' },
    { label: 'Explorer', id: 'explorer' },
    { label: 'Docs', id: 'whitepaper' }
  ];

  const handleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      connect();
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-600 rounded-xl flex items-center justify-center font-black text-slate-900 shadow-lg">
              ⛓
            </div>
            <div>
              <div className="text-lg font-black text-white tracking-tight">INRI CHAIN</div>
              <div className="text-xs text-blue-300 font-medium">Chain 3777</div>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm font-medium rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handleConnect}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 font-semibold shadow-lg shadow-blue-500/30 transform hover:scale-105 active:scale-95"
            >
              <Wallet className="w-4 h-4" />
              <span className="text-sm">{isConnected && account ? formatAddress(account) : 'Connect'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-blue-500/20 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className="block w-full text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors py-3 px-3 rounded-lg font-medium"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleConnect}
              className="flex items-center space-x-2 w-full justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold mt-4 transform hover:scale-105 active:scale-95 transition-all"
            >
              <Wallet className="w-4 h-4" />
              <span>{isConnected && account ? formatAddress(account) : 'Connect Wallet'}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
