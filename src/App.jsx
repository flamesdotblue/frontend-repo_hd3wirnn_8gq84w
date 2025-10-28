import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© {new Date().getFullYear()} EduNova — Open Innovation in Education</p>
          <div className="flex items-center gap-6">
            <a href="#vision" className="hover:text-white">Vision</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-white">Get started</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Vision section */}
        <section id="vision" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our vision</h2>
                <p className="mt-4 text-white/80 max-w-2xl">
                  We empower educators, students, and institutions to prototype and launch new models of learning — 
                  from adaptive pathways and formative assessment to real-time support — all in one place. 
                  Build once for the web and deliver a delightful, accessible experience on any device.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Learner-centered design',
                  'Evidence-based decisions',
                  'Privacy and security by default',
                  'Interoperability and open standards',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <FeatureGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
