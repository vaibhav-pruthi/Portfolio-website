import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, Globe, Send, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";
import { SectionHeading } from "./shared";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      reply_to: form.email,
      message: form.message,
      to_name: profile.name,
      name: form.name,
      email: form.email,
      user_name: form.name,
      user_email: form.email,
    };

    emailjs
      .send(
        "service_zs3hu2a",
        "template_77uwo17",
        templateParams,
        "DyppH8GL3ISr9FEnr"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("Failed to send message. Please try again.");
          setIsSending(false);
        }
      );
  };

  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "/in/vaibhav-pruthi", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "@vaibhav-pruthi", href: profile.github },
    { icon: Globe, label: "Portfolio", value: "vaibhavpruthi.dev", href: profile.portfolio },
    { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-0 aurora-bg opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's <span className="gradient-text">build something</span></>}
          description="Have a project, role, or idea to discuss? My inbox is always open."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl glass-strong p-6 sm:p-8">
            <h3 className="font-display text-xl font-semibold">Reach me directly</h3>
            <p className="mt-1 text-sm text-muted-foreground">The fastest channels — happy to chat.</p>
            <ul className="mt-6 space-y-3">
              {items.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="group flex items-center gap-4 p-3 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white">
                      <it.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground">{it.label}</div>
                      <div className="text-sm font-medium">{it.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl glass-strong p-6 sm:p-8 space-y-4"
          >
            <h3 className="font-display text-xl font-semibold">Send a message</h3>
            <p className="text-sm text-muted-foreground -mt-1">I'll get back via email or LinkedIn.</p>
            <div>
              <label className="text-xs text-muted-foreground">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/30 text-sm resize-none"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-medium shadow-glow-violet hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed transition-transform"
            >
              <Send className="w-4 h-4" /> {isSending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-display font-bold text-lg">
              Vaibhav<span className="gradient-text">.dev</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Full Stack Developer · AI Engineer · Designing & shipping thoughtful software.
            </p>
          </div>
          <div>
            <div className="text-sm font-medium mb-3">Navigation</div>
            <ul className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={`/${l.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = l.href;
                      if (targetId === "home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const element = document.getElementById(targetId);
                        if (element) {
                          const offset = 85;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = element.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }
                      const nativePushState = History.prototype.pushState;
                      try {
                        nativePushState.call(window.history, null, "", `/${targetId}`);
                      } catch (err) {
                        window.history.pushState(null, "", `/${targetId}`);
                      }
                    }}
                    className="hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-medium mb-3">Connect</div>
            <div className="flex items-center gap-2">
              <a href={profile.github} aria-label="GitHub" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="grid place-items-center w-10 h-10 rounded-xl glass hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {profile.name}. Crafted with care.</div>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
