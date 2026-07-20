import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "./shared";

function ProjectCard({ p, i }: { p: (typeof projects)[number]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent transition-all duration-300 group-hover:shadow-[0_20px_50px_-20px_rgba(124,58,237,0.4)]">
        <div className="relative rounded-3xl glass-strong overflow-hidden">
          {/* visual */}
          <div
            className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}
          >
            <div
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 70%, white 0%, transparent 50%)",
              }}
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="font-display text-4xl sm:text-5xl font-bold text-white/90 text-center px-6 drop-shadow-lg">
                {p.title}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* body */}
          <div className="p-6">
            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-foreground/80 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-2">
              <a
                href={p.github && p.github !== "#" ? p.github : "https://github.com/vaibhav-pruthi"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 bg-white/5 hover:bg-white/10 text-foreground transition-all cursor-pointer relative z-10 ${
                  p.demo && p.demo !== "#" ? "flex-1 w-full" : "w-full"
                }`}
              >
                View Code
              </a>
              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-sm bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium hover:scale-[1.03] transition-transform cursor-pointer relative z-10"
                >
                  <ExternalLink className="w-4 h-4" /> Live demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute inset-0 aurora-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Projects I'm <span className="gradient-text">proud of</span>
            </>
          }
          description="A selection of shipped products, experiments, and side quests."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
