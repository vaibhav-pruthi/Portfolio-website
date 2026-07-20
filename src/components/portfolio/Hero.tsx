import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiDocker,
  SiPython,
} from "react-icons/si";

const floatingIcons = [
  { Icon: SiReact, className: "top-[12%] left-[8%]", color: "text-cyan-400", delay: 0 },
  { Icon: SiTypescript, className: "top-[22%] right-[10%]", color: "text-blue-400", delay: 0.5 },
  { Icon: SiTailwindcss, className: "top-[55%] left-[5%]", color: "text-cyan-300", delay: 1 },
  { Icon: SiNextdotjs, className: "bottom-[18%] right-[8%]", color: "text-foreground", delay: 1.5 },
  { Icon: SiNodedotjs, className: "top-[40%] right-[18%]", color: "text-emerald-400", delay: 0.8 },
  { Icon: SiMongodb, className: "bottom-[30%] left-[14%]", color: "text-emerald-500", delay: 0.3 },
  { Icon: SiPostgresql, className: "bottom-[8%] left-[40%]", color: "text-blue-300", delay: 1.2 },
  { Icon: SiVercel, className: "top-[10%] right-[35%]", color: "text-foreground", delay: 0.6 },
  { Icon: SiDocker, className: "bottom-[42%] right-[5%]", color: "text-blue-400", delay: 1.8 },
  { Icon: SiPython, className: "top-[68%] right-[22%]", color: "text-amber-300", delay: 0.4 },
];

function useTyped(words: string[], speed = 80, pause = 1500) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const w = words[wi % words.length];
    const t = setTimeout(
      () => {
        if (!deleting) {
          setText(w.slice(0, text.length + 1));
          if (text.length + 1 === w.length) setTimeout(() => setDeleting(true), pause);
        } else {
          setText(w.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setWi((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, wi, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyped(["Full Stack Developer", "AI Engineer", "Data Science Enthusiast"]);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 120]);
  const y2 = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
        my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
      }}
      className="relative min-h-screen flex items-center pt-28 pb-20 mesh-bg overflow-hidden"
    >
      {/* aurora blobs */}
      <motion.div
        style={{ y: y1, x: sx }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-violet-600/30 blur-3xl"
      />
      <motion.div
        style={{ y: y2, x: sy }}
        className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full bg-cyan-500/20 blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-pink-500/20 blur-3xl"
      />

      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* floating tech icons */}
      {floatingIcons.map(({ Icon, className, color, delay }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + delay * 0.1, duration: 0.6 }}
          className={`hidden md:block absolute ${className} ${color}`}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
            className="grid place-items-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl glass-strong shadow-soft"
          >
            <Icon className="w-6 h-6 lg:w-7 lg:h-7" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-6 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="gradient-text inline-block">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 h-9 text-xl sm:text-2xl lg:text-3xl font-display font-medium text-muted-foreground"
          >
            <span className="text-foreground/90">{typed}</span>
            <span className="ml-1 inline-block w-[3px] h-7 align-middle bg-gradient-to-b from-violet-400 to-cyan-400 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 text-white font-medium shadow-glow-violet hover:scale-[1.03] transition-transform"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-strong font-medium hover-lift"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  const offset = 85;
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
                const nativePushState = History.prototype.pushState;
                try {
                  nativePushState.call(window.history, null, "", "/contact");
                } catch (err) {
                  window.history.pushState(null, "", "/contact");
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 font-medium hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href={profile.github}
              aria-label="GitHub"
              className="hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              className="hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Avatar disc */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-14 relative"
          >
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 blur-2xl opacity-40 animate-pulse-glow" />
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px]">
              <div className="w-full h-full rounded-full bg-background grid place-items-center">
                <span className="font-display text-3xl font-bold gradient-text">
                  {profile.avatar}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground flex flex-col items-center gap-2"
      >
        <Sparkles className="w-4 h-4" />
        Scroll to explore
      </motion.div>
    </section>
  );
}
