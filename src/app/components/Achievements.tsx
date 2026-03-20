import { motion } from "motion/react";
import { Trophy, Award, Star, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "6 Star HackerRank (Highest)",
      description: "Problem Solving Excellence",
      color: "#FFD700",
    },
    {
      icon: Medal,
      title: "Serrala Hackathon 2024",
      description: "Creativity & Innovation Award for RAG chatbot",
      color: "#38bdf8",
    },
    {
      icon: Star,
      title: "GreenArc Employee Award",
      description: "Successfully executing Komida (BNP Paribas) project",
      color: "#22d3ee",
    },
    {
      icon: Award,
      title: "IBM Mainframe Championship",
      description: "Won smartwatch in contest 2016",
      color: "#06b6d4",
    },
  ];

  const certifications = [
    {
      name: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      year: "2024",
    },
    {
      name: "Impact Measurement & Management for SDGs",
      issuer: "Duke University",
      year: "2023",
    },
    {
      name: "Data Structure and Software Design",
      issuer: "University of Pennsylvania",
      year: "2023",
    },
    {
      name: "The Sustainable Development Goals",
      issuer: "University of Copenhagen",
      year: "2022",
    },
    {
      name: "Climate Change International Legal Regime",
      issuer: "United Nations",
      year: "2022",
    },
    {
      name: "Mathematical Foundation of Machine Learning",
      issuer: "Udemy",
      year: "2022",
    },
    {
      name: "Python & JavaScript Certification",
      issuer: "HackerRank",
      year: "2021",
    },
    {
      name: "Chemicals and Health",
      issuer: "Johns Hopkins University",
      year: "2021",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Achievements & Certifications
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            Recognition for excellence and continuous learning in software engineering
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#e2e8f0] mb-6 flex items-center gap-3">
                <Trophy className="text-[#38bdf8]" size={28} />
                Awards & Recognition
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-[#1e293b]/50 backdrop-blur-sm rounded-xl p-5 border border-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all flex items-start gap-4"
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <achievement.icon
                        size={24}
                        style={{ color: achievement.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-[#e2e8f0] mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-[#64748b] text-sm">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-[#e2e8f0] mb-6 flex items-center gap-3">
                <Award className="text-[#38bdf8]" size={28} />
                Professional Certifications
              </h3>

              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#1e293b]/30 backdrop-blur-sm rounded-lg p-4 border border-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-[#e2e8f0] mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-[#64748b] text-sm">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-full text-xs font-medium whitespace-nowrap">
                        {cert.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "8+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "8", label: "Certifications" },
              { value: "4", label: "Major Awards" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#1e293b]/30 rounded-xl border border-[#38bdf8]/10"
              >
                <div className="text-4xl font-bold text-[#38bdf8] mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-[#64748b] text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}