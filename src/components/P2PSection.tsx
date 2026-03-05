export function P2PSection() {
  // Respeita o base do GitHub Pages (/inri-site/)
  const src = `${import.meta.env.BASE_URL}p2p/`;

  return (
    <section id="p2p" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">P2P</h2>
          <p className="mt-2 text-white/60">
            P2P dentro do site (sem abrir outra aba).
          </p>
        </div>

        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
        >
          Abrir em tela cheia
        </a>
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
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
