import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  gradient: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Travel Itinerary Application",
      description: "Full-stack travel planning application that generates personalized itineraries using ChatGPT API. Features user authentication, intelligent recommendations based on preferences, and interactive travel planning.",
      technologies: ["Flask", "Python", "React", "Celery", "AWS", "ChatGPT API", "MongoDB"],
      link: "#",
      github: "#",
      gradient: "from-[#38bdf8] to-[#0ea5e9]",
    },
    {
      title: "WhatsApp Order Booking & Management",
      description: "GenAI-powered application integrating with WhatsApp Cloud APIs to automate booking management, inventory tracking, and customer engagement for businesses. Built for seamless B2C communication.",
      technologies: ["Spring Boot", "Java", "GenAI", "WhatsApp API", "React", "AWS"],
      link: "#",
      github: "#",
      gradient: "from-[#06b6d4] to-[#0891b2]",
    },
    {
      title: "Algorithmic Trading Scripts",
      description: "Python-based trading automation system for fetching stock market data, running analytics on historical data, and modeling trading strategies. Built for gig work with real-time data processing capabilities.",
      technologies: ["Python", "Pandas", "NumPy", "Data Analytics", "Stock Market APIs"],
      link: "#",
      github: "#",
      gradient: "from-[#22d3ee] to-[#06b6d4]",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#0f1117]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Featured Projects
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, automation, and data-driven applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-20 group-hover:opacity-40 blur transition-all`} />
                
                <div className="relative bg-[#1e293b] rounded-2xl p-6 h-full flex flex-col border border-[#38bdf8]/10 group-hover:border-[#38bdf8]/30 transition-all">
                  {/* Header with gradient */}
                  <div className={`h-2 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
                  
                  <h3 className="text-2xl font-bold text-[#e2e8f0] mb-3 group-hover:text-[#38bdf8] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#64748b] mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#0f1117] border border-[#38bdf8]/20 text-[#38bdf8] rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-[#e2e8f0] hover:text-[#38bdf8] transition-colors text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-[#e2e8f0] hover:text-[#38bdf8] transition-colors text-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#38bdf8] hover:gap-3 transition-all"
            >
              View all projects
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}