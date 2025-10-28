import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Vision', href: '#vision' },
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how' },
    { name: 'Get started', href: '#get-started' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-gradient-to-b from-black/60 to-transparent backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600/90 shadow-lg shadow-indigo-600/30">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">EduNova</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium shadow hover:shadow-lg transition-shadow"
            >
              Launch App
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-md bg-white px-3 py-2 text-center font-medium text-black"
            >
              Launch App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
