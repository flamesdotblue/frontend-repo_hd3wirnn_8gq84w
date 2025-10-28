import { ArrowRight, Smartphone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-600/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/30 via-fuchsia-500/20 to-cyan-500/20 p-[1px]">
          <div className="rounded-3xl bg-black/50 p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Launch your pilot in days, not months
                </h3>
                <p className="mt-3 text-white/80">
                  Spin up cohorts, publish adaptive modules, and measure learning with rich analytics. 
                  Designed to work beautifully on phones and tablets.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow hover:shadow-lg"
                  >
                    Create a free workspace <ArrowRight size={18} />
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
                  >
                    See what’s inside
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="aspect-[9/19] w-full rounded-xl bg-gradient-to-b from-zinc-900 to-black p-4 flex flex-col">
                    <div className="mx-auto h-1.5 w-12 rounded-full bg-white/10" />
                    <div className="mt-4 rounded-lg bg-white/5 p-3">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <Smartphone size={14} /> Mobile lesson
                      </div>
                      <p className="mt-2 text-sm text-white/90">
                        "Today, we explore photosynthesis with an interactive quiz after each step."
                      </p>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="h-16 rounded-lg bg-white/5" />
                      ))}
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <button className="rounded-full bg-indigo-600 px-3 py-2 text-sm font-medium text-white">
                        Continue
                      </button>
                      <button className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-fuchsia-500/30 blur-2xl" />
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-500/30 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
