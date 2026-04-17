export default function AkazortacCyberpunkLanding() { const nav = [ { label: 'Lab', href: '#lab' }, { label: 'Stack', href: '#stack' }, { label: 'Access', href: '#access' }, { label: 'Roadmap', href: '#roadmap' }, ];

const features = [ { title: 'Public Front Door', text: 'Akazortac.win gives your node lab a sharp public identity while keeping the real control plane protected.', }, { title: 'Private Control Layer', text: 'Use Tailscale and tunnels for dashboards, SSH, admin panels, and internal services without exposing everything to the internet.', }, { title: 'Built to Expand', text: 'Start with a landing page today, then grow into node status, GPU metrics, client tools, docs, and monetized services.', }, ];

const stack = [ 'Cloudflare DNS + edge delivery', 'Cloudflare Pages for the public site', 'Tailscale for private access', 'Tunnel-based internal service exposure', 'Future GPU, node, and earnings dashboards', 'Room for Akash / Clore / Render tooling', ];

const roadmap = [ 'Live node status page', 'GPU metrics dashboard', 'Private tools portal', 'Docs and deployment guides', 'Service inquiry / contact page', 'Compute earnings overview', ];

return ( <main className="min-h-screen bg-black text-white"> <section className="relative overflow-hidden border-b border-fuchsia-500/20"> <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.22),transparent_25%),radial-gradient(circle_at_left,rgba(34,211,238,0.18),transparent_25%),linear-gradient(to_bottom,rgba(17,24,39,0.85),rgba(0,0,0,1))]" /> <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

<div className="relative mx-auto max-w-7xl px-6 py-6">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
        <div>
          <div className="text-xs uppercase tracking-[0.35em] text-fuchsia-300">Akazortac</div>
          <div className="text-lg font-semibold text-white">Node Lab</div>
        </div>

        <div className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <a key={item.label} href={item.href} className="text-sm text-white/70 transition hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#access"
          className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20"
        >
          Secure Access
        </a>
      </nav>
    </div>

    <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            Private infrastructure • public identity • future-ready lab
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
            Enter the <span className="text-fuchsia-400">Akazortac</span> grid.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            A cyberpunk launchpad for secure compute systems, node experiments, GPU infrastructure, and private tools.
            Built with Cloudflare on the edge and protected access behind your private network.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#lab"
              className="rounded-2xl bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.02]"
            >
              Explore the Lab
            </a>
            <a
              href="#stack"
              className="rounded-2xl border border-cyan-400/30 px-6 py-3 font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              View Stack
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              ['Edge', 'Cloudflare'],
              ['Private', 'Tailscale'],
              ['Future', 'Dashboards + tools'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</div>
                <div className="mt-2 text-base font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-fuchsia-500/20 bg-white/5 p-6 shadow-2xl shadow-fuchsia-500/10 backdrop-blur">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.25em] text-white/45">Live Brand Snapshot</span>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">Online</span>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-sm text-white/45">Domain</div>
              <div className="mt-1 text-lg font-semibold">akazortac.win</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-sm text-white/45">Public layer</div>
              <div className="mt-1 text-lg font-semibold">Cloudflare Pages</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-sm text-white/45">Private layer</div>
              <div className="mt-1 text-lg font-semibold">Tailscale + tunnel services</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <div className="text-sm text-white/45">Mission</div>
              <div className="mt-1 text-lg font-semibold">Secure systems. Experimental compute. Expandable platform.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="lab" className="mx-auto max-w-7xl px-6 py-20">
    <div className="mb-10 max-w-3xl">
      <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Lab profile</div>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A public front for a private operator stack</h2>
      <p className="mt-4 text-lg leading-8 text-white/70">
        Akazortac.win is designed to look powerful in public while keeping sensitive infrastructure behind controlled access.
        It is the brand layer for your lab now and the launchpad for future services later.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      {features.map((item) => (
        <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-fuchsia-500/5">
          <h3 className="text-xl font-semibold text-fuchsia-300">{item.title}</h3>
          <p className="mt-4 leading-7 text-white/70">{item.text}</p>
        </div>
      ))}
    </div>
  </section>

  <section id="stack" className="border-y border-white/10 bg-white/[0.03]">
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Current stack</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for secure access and future expansion</h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Keep your public site fast and polished through Cloudflare while routing internal tools through private access layers.
            This gives you the best of both worlds: visibility without unnecessary exposure.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {stack.map((item) => (
            <div key={item} className="rounded-2xl border border-cyan-400/20 bg-black/40 p-4 text-white/85">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  <section id="access" className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Public routes</div>
        <h3 className="mt-3 text-2xl font-bold">What belongs on the open internet</h3>
        <div className="mt-6 space-y-4 text-white/75">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">akazortac.win → landing page</div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">docs.akazortac.win → future guides</div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4">status.akazortac.win → future public status page</div>
        </div>
      </div>

      <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Private routes</div>
        <h3 className="mt-3 text-2xl font-bold">What stays protected</h3>
        <div className="mt-6 space-y-4 text-white/80">
          <div className="rounded-2xl border border-cyan-400/20 bg-black/30 p-4">Admin dashboards</div>
          <div className="rounded-2xl border border-cyan-400/20 bg-black/30 p-4">GPU monitoring and node controls</div>
          <div className="rounded-2xl border border-cyan-400/20 bg-black/30 p-4">SSH, management tools, and internal services</div>
        </div>
      </div>
    </div>
  </section>

  <section id="roadmap" className="border-t border-white/10 bg-[linear-gradient(to_bottom,rgba(236,72,153,0.04),rgba(0,0,0,1))]">
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Roadmap</div>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Next upgrades for the Akazortac platform</h2>
        <p className="mt-4 text-lg leading-8 text-white/70">
          This homepage is just the first layer. The next phase is turning it into a real operations portal for monitoring, compute income, node health, and private services.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {roadmap.map((item) => (
          <div key={item} className="rounded-2xl border border-fuchsia-500/20 bg-white/5 p-5 text-white/85 shadow-lg shadow-fuchsia-500/5">
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>

  <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
    © 2026 Akazortac.win · Secure infrastructure · Private access · Experimental compute systems
  </footer>
      <section id="lab" className="border-t border-fuchsia-500/10 bg-[linear-gradient(to_bottom,rgba(255,0,255,0.04),rgba(0,0,0,1))] px-6 py-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 max-w-3xl">
        <div className="text-sm uppercase tracking-[0.3em] text-fuchsia-400">Node command center</div>
        <h2 className="mt-4 text-3xl font-black sm:text-5xl">Live lab dashboard</h2>
        <p className="mt-4 text-lg leading-8 text-white/70">
          This is the next layer for Akazortac: a clean dashboard section for node health, GPU status, uptime, and future earnings tracking.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          ["GPU Status", "ONLINE"],
          ["Primary GPU", "RTX 5090"],
          ["Node Uptime", "99.2%"],
          ["Active Jobs", "0"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-fuchsia-500/20 bg-white/5 p-5 shadow-lg shadow-fuchsia-500/10">
            <div className="text-xs uppercase tracking-[0.25em] text-white/45">{label}</div>
            <div className="mt-3 text-2xl font-bold text-white">{value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-cyan-400/20 bg-black/40 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-cyan-300">GPU telemetry</h3>
            <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Placeholder
            </span>
          </div>

          <div className="mt-6 space-y-5">
            {[
              ["Utilization", "0%"],
              ["VRAM Used", "0.7 GB / 32 GB"],
              ["Temperature", "34°C"],
              ["Power Draw", "62W"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex items-center justify-between text-sm text-white/65">
                  <span>{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
                <div className="h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500" style={{ width: label === 'Utilization' ? '8%' : label === 'VRAM Used' ? '12%' : label === 'Temperature' ? '34%' : '20%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-bold text-fuchsia-300">Roadmap queue</h3>
          <div className="mt-6 space-y-4 text-white/80">
            {[
              'Connect real GPU metrics',
              'Add Akash / Clore / Render earnings panel',
              'Create private admin route',
              'Add node health alerts',
              'Build secure tools page behind Tailscale',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="stack" className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Infrastructure stack</div>
        <h2 className="mt-4 text-3xl font-black sm:text-4xl">What powers Akazortac</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Cloudflare Pages for the public site',
            'Cloudflare DNS for routing and edge access',
            'Tailscale for private admin and internal services',
            'RTX 5090 compute node foundation',
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-cyan-400/15 bg-black/30 p-4 text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
</main>

); }
