import { motion } from "motion/react";
import { Mail, Github, Linkedin, Code, ExternalLink } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/supratimhalder",
      username: "@supratimhalder",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/supratim-halder",
      username: "supratim-halder",
    },
    {
      name: "HackerRank",
      icon: Code,
      url: "https://hackerrank.com/supratimhldr6",
      username: "@supratimhldr6",
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      url: "#",
      username: "supratim.dev",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#0f1117] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Connect
          </h2>
          <p className="text-[#64748b] mb-12 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <a
              href="mailto:supratimhldr6@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#38bdf8] text-[#0f1117] rounded-xl font-medium hover:bg-[#0ea5e9] transition-all hover:scale-105 text-lg"
            >
              <Mail size={24} />
              supratimhldr6@gmail.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-[#1e293b]/50 backdrop-blur-sm rounded-xl p-6 border border-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all group"
                >
                  <link.icon className="text-[#38bdf8] mb-3 mx-auto group-hover:scale-110 transition-transform" size={32} />
                  <div className="font-medium text-[#e2e8f0] mb-1">
                    {link.name}
                  </div>
                  <div className="text-[#64748b] text-sm">
                    {link.username}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 pt-8 border-t border-[#38bdf8]/10"
          >
            <p className="text-[#64748b] text-sm">
              © 2026 Supratim Halder. Built with React & Tailwind CSS.
            </p>
            <p className="text-[#64748b] text-xs mt-2">
              Designed with passion for clean code and elegant solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
