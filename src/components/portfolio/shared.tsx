import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center mb-14"
    >
      <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium tracking-wider uppercase text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, value, { duration: 1.8, ease: [0.2, 0.8, 0.2, 1] });
      return controls.stop;
    }
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60] bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500"
      style={{ scaleX: 0 }}
      whileInView={{}}
      id="scroll-progress"
    />
  );
}
