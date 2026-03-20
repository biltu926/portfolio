import { motion } from "motion/react";
import { MapPin, Code, Heart } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-16 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] to-[#00b4d8] rounded-2xl blur-xl opacity-50" />
                <div className="relative w-72 h-72 bg-[#1e293b] rounded-2xl flex items-center justify-center overflow-hidden border-2 border-[#38bdf8]/30">
                  <div className="text-8xl text-[#38bdf8]">SH</div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-[#64748b]">
                <MapPin size={20} className="text-[#38bdf8]" />
                <span>Based in Kolkata, India</span>
              </div>

              <p className="text-[#e2e8f0] text-lg leading-relaxed">
                Senior Software Engineer with <span className="text-[#38bdf8] font-semibold">8+ years of experience</span> specializing in
                backend development, AI/RAG systems, cloud infrastructure, and fintech platforms.
              </p>

              <p className="text-[#64748b] leading-relaxed">
                I architect and build scalable Python and Java backend systems, conversational AI solutions,
                and data integration pipelines. My expertise spans distributed systems, real-time data processing,
                ETL workflows, and modern cloud architectures on AWS.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Code size={20} className="text-[#38bdf8] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#e2e8f0] font-medium mb-1">Technical Excellence</div>
                    <div className="text-[#64748b] text-sm">
                      Expert in RAG systems, LangChain, ERP integrations, payment backends, and cloud infrastructure
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart size={20} className="text-[#38bdf8] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-[#e2e8f0] font-medium mb-1">Passionate About</div>
                    <div className="text-[#64748b] text-sm">
                      Impact measurement for green investments, fintech innovation, AI/ML applications, and open source
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-sm">
                  AI/LLMs
                </span>
                <span className="px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-sm">
                  Fintech
                </span>
                <span className="px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-sm">
                  Green Tech
                </span>
                <span className="px-4 py-2 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-sm">
                  Open Source
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}