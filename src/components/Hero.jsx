import { Sparkles, ArrowRight, Shield, GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(75%_75%_at_50%_0%,rgba(99,102,241,0.35)_0%,rgba(17,24,39,0.2)_40%,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-24 md:pt-28 md:pb-32 grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Sparkles size={14} /> Open Innovation Track
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Reimagine learning for an adaptive, inclusive, future‑ready world
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Build scalable, impactful solutions for assessment, support, and personalized growth. 
              A web app that feels native on mobile with offline‑friendly patterns and a11y-first design.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-shadow"
              >
                Start prototyping <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
              >
                Explore features
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Secure exams</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <Shield size={16} className="text-emerald-400" /> Proctoring‑ready
                </dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Personalized</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <GraduationCap size={16} className="text-indigo-400" /> Adaptive paths
                </dd>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="text-xs text-white/70">Mobile‑first</dt>
                <dd className="mt-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" /> PWA patterns
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] md:aspect-[5/4] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/20 p-1">
              <div className="h-full w-full rounded-2xl bg-black/40 p-6 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="h-full w-full text-white/20"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#grad)" strokeWidth="1.2">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <circle key={i} cx="100" cy="100" r={4 + i * 4} opacity={0.35 - i * 0.01} />
                    ))}
                    <path d="M20 120 Q 100 20 180 120" opacity="0.5" />
                    <path d="M20 140 Q 100 40 180 140" opacity="0.35" />
                    <path d="M20 160 Q 100 60 180 160" opacity="0.25" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl bg-indigo-600/30 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-28 w-28 rounded-full bg-cyan-500/30 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
