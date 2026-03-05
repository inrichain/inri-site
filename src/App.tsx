import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { NetworkStats } from './components/NetworkStats';
import { Tokenomics } from './components/Tokenomics';
import { Roadmap } from './components/Roadmap';
import { Mining } from './components/Mining';
import { SwapPremium } from './components/SwapPremium';
import { Pool } from './components/Pool';
import { ExplorerFunctional } from './components/ExplorerFunctional';
import { WhitepaperPremium } from './components/WhitepaperPremium';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'INRI CHAIN - Fair PoW Blockchain';
  }, []);

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 64;
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
      <Navigation onNavigate={handleNavigate} />
      <Hero onNavigate={handleNavigate} />
      <About />
      <NetworkStats />
      <Tokenomics />
      <Roadmap />
      <Mining />
      <SwapPremium />
      <Pool />
      <ExplorerFunctional />
      <WhitepaperPremium />
      <Footer />
    </div>
  );
}

export default App;
