import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Application",
      institution: "RCC Institute of Information Technology",
      location: "Kolkata, India",
      duration: "August 2014 - May 2017",
      grade: "CGPA: 8.0",
      icon: "🎓",
    },
    {
      degree: "Bachelor of Science (Honors)",
      field: "Computer Science",
      institution: "Calcutta University",
      location: "Kolkata, India",
      duration: "March 2011 - May 2014",
      grade: "CGPA: 6.37 (First Class)",
      icon: "🎓",
    },
  ];

  return (
    <section id="education" className="py-24 bg-[#0f1117]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Education
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            Academic foundation in computer science and applications
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#38bdf8] to-[#06b6d4] rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all" />
                
                <div className="relative bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#38bdf8]/10 group-hover:border-[#38bdf8]/30 transition-all h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-[#38bdf8]/10 rounded-lg">
                      <GraduationCap className="text-[#38bdf8]" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#e2e8f0] mb-1">
                        {edu.degree}
                      </h3>
                      <div className="text-[#38bdf8] font-medium text-sm mb-2">
                        {edu.field}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="text-[#e2e8f0] font-medium">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2 text-[#64748b] text-sm">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#64748b] text-sm">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <div className="px-3 py-1.5 bg-[#38bdf8]/10 border border-[#38bdf8]/30 text-[#38bdf8] rounded-lg text-sm font-medium inline-block">
                    {edu.grade}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
