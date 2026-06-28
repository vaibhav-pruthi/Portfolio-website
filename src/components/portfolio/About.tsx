import { motion } from "framer-motion";
import { about, stats } from "@/data/portfolio";
import { SectionHeading, Counter } from "./shared";
import { Compass, Rocket, Heart, Target } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Journey", text: about.journey, gradient: "from-violet-500 to-pink-500" },
  { icon: Target, title: "Objective", text: about.objective, gradient: "from-cyan-500 to-blue-500" },
  { icon: Heart, title: "Passion", text: "Building AI products with craft, taste, and obsessive attention to detail.", gradient: "from-pink-500 to-amber-400" },
  { icon: Rocket, title: "Now", text: "Exploring multi-agent systems, LLM evals, and design-engineering.", gradient: "from-emerald-500 to-cyan-500" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About me"
          title={<>Building thoughtful software at the <span className="gradient-text">edge of AI</span></>}
          description={about.summary}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover-lift"
            >
              <div className="relative h-full rounded-3xl glass-strong p-6">
                <div className={`inline-grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br ${p.gradient} text-white mb-4`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl glass p-5 text-center hover-lift flex-1 min-w-[140px] max-w-[200px]"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/10 blur-2xl" />
              <div className="relative font-display text-3xl sm:text-4xl font-bold gradient-text">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="relative mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
