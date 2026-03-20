import { motion } from "motion/react";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  duration: string;
  period: string;
  highlights: string[];
  details?: string[];
}

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: ExperienceItem[] = [
    {
      company: "Serrala",
      role: "Senior Software Engineer",
      location: "Pune, India (Hybrid)",
      duration: "Feb 2024 – Present",
      period: "1+ year",
      highlights: [
        "Designed and deployed end-to-end RAG-based conversational chatbot using LLMs, LangChain, and custom Python backend",
        "Built scalable WebSocket-based service on ECS containers integrating LLMs, embedding models, and custom backend layer",
        "Built ETL data pipeline connecting Snowflake with Serrala systems via Workato, S3, and distributed job orchestration",
      ],
      details: [
        "Implemented real-time synchronization of payments, deposits, and credit memos with NetSuite and Stripe",
        "Developed backend services for Alevate AR payments via Stripe and WorldPay, integrated with Web and Mobile SDKs",
        "Migrated CI/CD pipelines from CircleCI to GitHub Actions, standardizing builds across projects",
        "Provisioned AWS infrastructure including ECS, ECR, ALB, Lambda for multiple services",
        "Developed advanced saved search capabilities and automated email scheduling for Alevate AR SaaS platform",
      ],
    },
    {
      company: "GreenArc Capital",
      role: "Senior Developer",
      location: "Mumbai, India (Hybrid)",
      duration: "Jan 2022 – Feb 2024",
      period: "2 years",
      highlights: [
        "Designed and implemented SaaS backend for Impact GINI platform focused on impact measurement for green investments",
        "Developed REST APIs with comprehensive unit test coverage and asynchronous task processing using Celery",
        "Enhanced analytics performance through data format optimization with Parquet and efficient spreadsheet chunking",
      ],
      details: [
        "Implemented impact scoring algorithms across Individual, MSME, and Education domains",
        "Strengthened application security enforcing CSP, CSRF, CORS, and data encryption (ZAP, Heyhack auditing)",
        "Conducted code reviews and optimized complex MongoDB queries for efficiency",
        "Led refactoring and optimization initiatives across codebase",
      ],
    },
    {
      company: "Parabole.ai",
      role: "Senior Engineer → Engineer",
      location: "Bengaluru, India",
      duration: "Jun 2017 – Jan 2022",
      period: "4.5 years",
      highlights: [
        "Co-designed event-driven architecture for AI-powered order optimization simulator (digital twin solution)",
        "Developed Python backend services leveraging Kafka for text parsing, database I/O, and ontology generation",
        "Built knowledge graph platform with doc parser, Apache Tika, and Kafka pipeline for TRAIN platform",
      ],
      details: [
        "Created web crawlers for PDFs, text, and HTML content",
        "Dockerized backend services and implemented comprehensive unit tests",
        "Developed API endpoints and backend infrastructure for enterprise AI solutions",
        "Built scalable data processing pipelines for knowledge extraction",
      ],
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-[#e2e8f0] mb-4 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Work Experience
          </h2>
          <p className="text-[#64748b] text-center mb-16 max-w-2xl mx-auto">
            8+ years of building impactful software solutions across fintech, AI, and enterprise domains
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#38bdf8]/20" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-[#0d0d0d] z-10" />

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-20 md:ml-0">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#1e293b]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-[#e2e8f0] mb-2">
                          {exp.company}
                        </h3>
                        <div className="text-[#38bdf8] font-medium mb-3">
                          {exp.role}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-[#64748b]">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-[#e2e8f0] text-sm">
                            <span className="text-[#38bdf8] mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Expandable Details */}
                      {exp.details && (
                        <>
                          {expandedIndex === index && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-2 mb-4 pl-4 border-l-2 border-[#38bdf8]/30"
                            >
                              {exp.details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-[#64748b] text-sm">
                                  <span className="text-[#38bdf8] mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </motion.ul>
                          )}

                          <button
                            onClick={() => toggleExpanded(index)}
                            className="text-[#38bdf8] text-sm flex items-center gap-1 hover:gap-2 transition-all"
                          >
                            {expandedIndex === index ? (
                              <>
                                Show less <ChevronUp size={16} />
                              </>
                            ) : (
                              <>
                                Show more <ChevronDown size={16} />
                              </>
                            )}
                          </button>
                        </>
                      )}
                    </motion.div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}