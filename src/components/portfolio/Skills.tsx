import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "./shared";

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              The <span className="gradient-text">stack</span> I build with
            </>
          }
          description="A growing toolkit spanning frontend, backend, AI, and the cloud."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-white/15 via-white/5 to-transparent hover-lift"
            >
              <div className="relative h-full rounded-3xl glass-strong p-6 overflow-hidden">
                <div
                  className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${cat.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
                />
                <div className="relative flex items-center gap-3 mb-5">
                  <div
                    className={`grid place-items-center w-11 h-11 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white`}
                  >
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
                </div>
                <ul className="relative space-y-3">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="text-muted-foreground tabular-nums">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
                          className={`h-full bg-gradient-to-r ${cat.gradient}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
