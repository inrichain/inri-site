import { P2PSection } from './components/P2PSection';
import { Hero } from "./components/Hero";
import { LiveStats } from "./components/LiveStats";
import { Mining, Roadmap, Tokenomics, Whitepaper } from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-tight">INRI</div>
          <nav className="hidden md:flex gap-6 text-white/70">
            <a href="#stats" className="hover:text-white">Stats</a>
            <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#mining" className="hover:text-white">Mining</a>
            <a href="#whitepaper" className="hover:text-white">Whitepaper</a>
          </nav>
        </div>
      </header>

      <Hero />
      <LiveStats />
      <Tokenomics />
      <Roadmap />
      <Mining />
      <Whitepaper />

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-white/60">
          <div className="font-semibold text-white">INRI Chain</div>
          <div className="mt-2 text-sm">Fair PoW Blockchain • Build • Mine • Grow</div>
        </div>
      </footer>
    </div>
  );
}
