import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [ "Home", "About", "Projects", "Contact"];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex w-[92%] items-center justify-between rounded-full border border-white/80 px-6 py-3 text-gray-500 bg-blend-darken backdrop-blur-xl bg-transparent">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 text-xl font-bold">
        <span
          className="h-5 w-5 rounded-sm"
          style={{ background: "var(--accent-purple)" }}
        />
    Raj kashyap
      </a>

      {/* Desktop Links */}
      <div className="hidden gap-8 md:flex ">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-gray-500 bg-blend-darken hover:transition-colors hover:(gradient-border rounded-full hover:bg-[linear-gradient(90deg,var(--accent-purple),var(--accent-orange),var(--accent-yellow),var(--accent-green))] px-6 py-3 font-semibold hover:text-black  transition hover:shadow-glow-strong duration-300 linear-ease"
          >
            {l}
          </a>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden gap-3 md:flex">
       
        <button className="rounded-full bg-white px-4 py-2 font-semibold text-black shadow-lg transition hover:shadow-xl hover:bg-black hover:text-white border-white border  hover:border-white transi duration-100 ease-linear hover:scale-105 hover:shadow-white">
         <a href="#resume">MyResume</a>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`absolute left-0 top-full w-full px-6 py-8 backdrop-blur-xl bg-black border border-white/10 rounded-2xl transform transition-all duration-300 ease-in-out origin-top md:hidden ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto mt-2"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="transition-colors hover:text-[var(--accent-purple)]"
            >
              {l}
            </a>
          ))}
        
        </div>
      </div>
    </nav>
  );
}
