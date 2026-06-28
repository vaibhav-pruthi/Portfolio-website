import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  const scrollToSection = (targetId: string) => {
    // Use native pushState to prevent TanStack Router from intercepting and resetting scroll
    const nativePushState = History.prototype.pushState;
    try {
      nativePushState.call(window.history, null, "", `/${targetId}`);
    } catch (e) {
      window.history.pushState(null, "", `/${targetId}`);
    }

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 85; // Height of sticky navbar + padding
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-soft" : ""
          }`}
        >
          <a
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-2 group"
          >
            <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white font-bold shadow-glow-violet">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              Vaibhav<span className="gradient-text">.dev</span>
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={`/${l.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(l.href);
                  }}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-white/10 transition-colors"
            >
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-glow-violet hover:scale-105 transition-transform"
            >
              Let's talk
            </a>
            <button
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl glass"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 rounded-2xl glass-strong p-2"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={`/${l.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    scrollToSection(l.href);
                  }}
                  className="block px-4 py-3 rounded-xl text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
