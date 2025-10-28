import { GraduationCap, Shield, Globe, Smartphone, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'Adaptive Learning Paths',
    description:
      'Dynamic pathways adjust to each learner using mastery signals and low-stakes diagnostics.',
    icon: GraduationCap,
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Secure, Fair Assessment',
    description:
      'Integrity-first exams with proctoring hooks, item banks, randomization, and analytics.',
    icon: Shield,
    color: 'from-emerald-500 to-lime-500',
  },
  {
    title: 'Inclusive by Design',
    description:
      'WCAG-friendly UI, captions, transcripts, multi-language UX, and dyslexia-friendly modes.',
    icon: Globe,
    color: 'from-cyan-500 to-sky-500',
  },
  {
    title: 'Mobile Native Feel',
    description:
      'Responsive layout, offline-ready patterns, and gestures for a great small-screen experience.',
    icon: Smartphone,
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Build for impact at scale
          </h2>
          <p className="mt-3 text-white/70">
            Everything you need to prototype, validate, and launch innovations that transform learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon, color }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${color} p-3 text-white shadow-lg shadow-black/20`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle size={14} /> Ready for pilots
              </div>
              <div className="pointer-events-none absolute -right-12 -top-12 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
