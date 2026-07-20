import { motion } from "framer-motion";
import { experience, education } from "@/data/portfolio";
import { SectionHeading } from "./shared";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title={
            <>
              Where I've <span className="gradient-text">built things</span>
            </>
          }
        />

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {experience.map((e, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${left ? "" : "sm:[direction:rtl]"}`}
                >
                  <div
                    className={`pl-12 sm:pl-0 [direction:ltr] ${left ? "sm:text-right sm:pr-10" : "sm:pl-10"}`}
                  >
                    <div className="rounded-3xl glass-strong p-6 hover-lift">
                      <div
                        className="flex items-center gap-2 sm:justify-end text-xs text-muted-foreground mb-2"
                        style={left ? {} : { justifyContent: "flex-start" }}
                      >
                        <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 border border-white/10">
                          {e.period}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold">{e.role}</h3>
                      <div className="text-sm text-muted-foreground">{e.org}</div>
                      <ul
                        className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${left ? "sm:text-right" : ""}`}
                      >
                        {e.points.map((pt) => (
                          <li key={pt}>• {pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 [direction:ltr]">
                    <div className="relative grid place-items-center w-8 h-8 rounded-full bg-background border border-white/10">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 blur-md opacity-60" />
                      <div className="relative grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
                        <e.icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              What I've <span className="gradient-text">studied</span>
            </>
          }
        />
        <div className="grid md:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl glass-strong p-6 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
                  <ed.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">{ed.period}</div>
                  <h3 className="mt-1 font-display text-lg font-semibold">{ed.degree}</h3>
                  <div className="text-sm text-muted-foreground">{ed.school}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ed.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
