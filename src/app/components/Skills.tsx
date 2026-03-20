import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "Java", "SQL"],
      color: "#38bdf8",
    },
    {
      title: "Frameworks",
      skills: ["Django", "Flask", "Spring Boot", "React", "FastAPI"],
      color: "#0ea5e9",
    },
    {
      title: "Tools & Platforms",
      skills: ["Kafka", "AWS", "Celery", "LangChain", "Workato", "Snowflake", "Zookeeper", "Docker", "Redis", "Loggly"],
      color: "#06b6d4",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "Cosmos NoSQL"],
      color: "#22d3ee",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0f1117]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Skills & Technologies
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, performant, and intelligent software solutions
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-1 h-8 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-2xl font-semibold text-[#e2e8f0]">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-[#0f1117] border border-[#38bdf8]/20 text-[#e2e8f0] rounded-lg text-sm font-medium hover:border-[#38bdf8]/50 hover:bg-[#38bdf8]/5 transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Cloud */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Git", "CI/CD", "Microservices", "REST APIs", "GraphQL", "gRPC", "Terraform", "Nginx", "RabbitMQ", "Airflow"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="px-3 py-1 bg-[#38bdf8]/5 border border-[#38bdf8]/20 text-[#64748b] rounded-full text-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}