export function P2PSection() {
  // Isso respeita o base "/inri-site/" no GitHub Pages
  const src = `${import.meta.env.BASE_URL}p2p/`;

  return (
    <section id="p2p" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-3xl font-black text-white">P2P</h2>
          <p className="mt-2 text-gray-300">
            P2P dentro do site (sem abrir outra aba).
          </p>
        </div>

        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm"
        >
          Open Fullscreen
        </a>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden border border-blue-500/20 bg-slate-950/40">
        <iframe
          title="INRI P2P"
          src={src}
          className="w-full"
          style={{ height: "900px", border: 0 }}
        />
      </div>
    </section>
  );
}
