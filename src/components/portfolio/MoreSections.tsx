import { motion } from "framer-motion";
import { certifications, achievements, testimonials, profile } from "@/data/portfolio";
import { SectionHeading } from "./shared";
import { ExternalLink, Quote } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="absolute inset-0 aurora-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Certifications"
          title={
            <>
              Always <span className="gradient-text">leveling up</span>
            </>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl glass-strong overflow-hidden hover-lift"
            >
              <div
                className={`relative aspect-[16/9] bg-gradient-to-br ${c.gradient} overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 grid place-items-center text-white/90 font-display font-bold text-xl text-center px-6">
                  {c.title}
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-medium">{c.provider}</div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
                <a
                  href={c.credentialUrl || "#"}
                  target={c.credentialUrl && c.credentialUrl !== "#" ? "_blank" : undefined}
                  rel={
                    c.credentialUrl && c.credentialUrl !== "#" ? "noopener noreferrer" : undefined
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-white/10 hover:bg-white/5 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GitHubStats() {
  const user = "vaibhav-pruthi";
  const cards = [
    {
      src: `https://github-stats-extended.vercel.app/api?username=${user}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000`,
      alt: "GitHub Stats",
    },
    {
      src: `https://github-stats-extended.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000`,
      alt: "Top Languages",
    },
    {
      src: `https://github-readme-streak-stats.herokuapp.com/?user=${user}&theme=tokyonight&hide_border=true&background=00000000`,
      alt: "Streak Stats",
    },
  ];
  return (
    <section id="github" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="GitHub"
          title={
            <>
              Open <span className="gradient-text">source life</span>
            </>
          }
          description="A live look at my contributions, languages, and streaks."
        />
        <div className="rounded-3xl glass-strong p-6 mb-6">
          <img
            src={`https://ghchart.rshah.org/7c3aed/${user}`}
            alt="GitHub contribution graph"
            className="w-full"
            loading="lazy"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.alt} className="rounded-3xl glass-strong p-4 grid place-items-center">
              <img src={c.src} alt={c.alt} loading="lazy" className="max-w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Achievements"
          title={
            <>
              Milestones & <span className="gradient-text">moments</span>
            </>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative rounded-3xl glass-strong p-6 hover-lift overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/15 to-cyan-500/10 blur-3xl" />
              <a.icon className={`w-8 h-8 ${a.color}`} />
              <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export function Resume() {
//   return (
//     <section id="resume" className="relative py-28">
//       <div className="mx-auto max-w-5xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500 via-cyan-400 to-pink-500"
//         >
//           <div className="rounded-3xl glass-strong p-8 sm:p-12 grid md:grid-cols-[1fr_auto] gap-10 items-center overflow-hidden relative">
//             <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-violet-500/30 blur-3xl" />
//             <div className="relative">
//               <span className="inline-block px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
//                 Resume
//               </span>
//               <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Grab the full picture</h2>
//               <p className="mt-3 text-muted-foreground max-w-md">
//                 A concise one-page resume covering my experience, projects, and stack.
//               </p>
//               <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
//                 <li>• 3+ internships across full-stack and AI</li>
//                 <li>• 20+ shipped projects and OSS contributions</li>
//                 <li>• Strong fundamentals in CS + AI</li>
//               </ul>
//               <a
//                 href={profile.resumeUrl}
//                 download
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium shadow-glow-violet hover:scale-[1.03] transition-transform"
//               >
//                 Download Resume
//               </a>
//             </div>
//             <div className="relative w-44 h-60 sm:w-52 sm:h-72 rounded-2xl glass border border-white/10 overflow-hidden mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
//               <div className="absolute inset-0 p-4 space-y-2">
//                 <div className="h-3 w-2/3 rounded-full bg-white/20" />
//                 <div className="h-2 w-1/2 rounded-full bg-white/10" />
//                 <div className="h-2 w-full rounded-full bg-white/10 mt-3" />
//                 <div className="h-2 w-5/6 rounded-full bg-white/10" />
//                 <div className="h-2 w-4/6 rounded-full bg-white/10" />
//                 <div className="h-3 w-1/3 rounded-full bg-violet-400/40 mt-4" />
//                 <div className="h-2 w-full rounded-full bg-white/10" />
//                 <div className="h-2 w-5/6 rounded-full bg-white/10" />
//                 <div className="h-2 w-3/6 rounded-full bg-white/10" />
//                 <div className="h-3 w-1/3 rounded-full bg-cyan-400/40 mt-4" />
//                 <div className="h-2 w-full rounded-full bg-white/10" />
//                 <div className="h-2 w-4/6 rounded-full bg-white/10" />
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kind words"
          title={
            <>
              What people <span className="gradient-text">say</span>
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl glass-strong p-6 hover-lift"
            >
              <Quote className="w-6 h-6 text-violet-400" />
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-white text-sm font-semibold">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
