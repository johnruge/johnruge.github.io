import Link from 'next/link';
import { Download, MapPin, Phone, Mail, ExternalLink, Calendar, Building } from 'lucide-react';
import NavBar from '@/components/ui/NavBar';

export default function ResumePage() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Data for Common Good – Biological Sciences Division, UChicago",
      location: "Chicago, IL",
      period: "June 2025 – Present",
      description: [
        "Developed a GraphQL-based ETL pipeline that consolidated data across 5+ pediatric cancer consortia",
        "Implemented a caching layer for AWS Lambda-queried datasets, reducing average response times by over 70%",
        "Optimized GraphQL performance through query consolidation, decreasing API calls by 60%",
        "Refactored legacy code, improving readability and enabling easier integration across research workflows"
      ]
    },
    {
      title: "Software Developer",
      company: "UChicago Computer Science Instructional Laboratory (CSIL)",
      location: "Chicago, IL",
      period: "March 2024 – Present",
      description: [
        "Developed SemaDoc, an in-house AI-powered documentation tool used across 8 teams, reducing documentation time from hours to minutes using LLM-powered workflows",
        "Architected the FastAPI backend for SemaDoc, integrating async Trello APIs, Ollama-hosted LLMs, and MongoDB to support 500+ concurrent users with sub-100ms database operations",
        "Contributed to rewriting the CSIL website using Next.js and Node.js, serving 5,000+ UChicago students",
        "Built a secure alumni database system with a FastAPI backend, enabling efficient data entry and search"
      ]
    },
    {
      title: "Software Development Research Assistant",
      company: "Amyoli Internet Research Lab",
      location: "Chicago, IL",
      period: "November 2024 – June 2025",
      description: [
        "Contributed to the development of Water On My Block (LINK), a full-stack flood reporting platform empowering South Side Chicago residents to document, visualize, and validate local flooding events",
        "Built a responsive React.js frontend, including a 9-step progressive form capturing 18+ flood metrics",
        "Designed a RESTful backend using Node.js, Express.js, and MongoDB with JWT-based route protection",
        "Configured and deployed to AWS EC2 with NGINX reverse proxy and SSL/TLS encryption"
      ]
    }
  ];

  const education = {
    degree: "B.A. in Computer Science",
    school: "The University of Chicago",
    location: "Chicago, IL",
    period: "Expected, May 2027",
    coursework: "Data Structures & Algorithms, Software Development, Computer Systems, Discrete Math"
  };

  const skills = {
    languages: ["Java", "Go (Golang)", "Python", "C", "JavaScript (Node.js)", "TypeScript", "SQL"],
    frameworks: ["Springboot", "FastAPI", "Express.js", "React", "Next.js", "Django"],
    tools: ["AWS", "PostgreSQL", "MongoDB", "Firebase", "ChromaDB", "Postman", "Git", "Docker", "Ollama"]
  };

  const projects = [
    {
      title: "DarasaAI",
      link: "https://github.com/johnruge/darasaai",
      period: "June 2025 – Present",
      description: "Developed a robust monolithic Spring Boot application supporting 47 REST endpoints across 10 controllers, enabling core LMS functionalities including assignments, notes, and timed tests. Implemented secure JWT-based authentication with role-based access control and BCrypt password hashing, safeguarding user data and access control for teachers, students, and admins."
    },
    {
      title: "http-server",
      link: "https://github.com/johnruge/http-server",
      period: "July 2025",
      description: "Developed a HTTP/1.1 server, supporting persistent connections, static file serving, and custom route handling. Implemented concurrent request handling using goroutines and channels, achieving 100+ simultaneous connections with sub-50ms response times."
    },
    {
      title: "lzw-file-compressor",
      period: "November 2024",
      description: "Implemented a Lempel–Ziv–Welch compression and decompression system in C, enabling lossless file encoding. Handled edge cases such as recursive decoding and unknown codes by implementing prefix-based table traversal."
    }
  ];

  const activities = [
    {
      title: "Kappa Theta Pi – Director of Technology",
      period: "Sept 2024-Present",
      description: "Organized professional events, led hackathons, and managed internal tech projects"
    },
    {
      title: "compileHer – Teacher",
      period: "Oct 2024-Present",
      description: "Created CS curriculum and led coding workshops for kids"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">John Rugemalila</h1>
                <p className="text-xl text-gray-600 mb-4">Computer Science Student & Software Developer</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+1 773-406-6328</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:johnruge@uchicago.edu" className="hover:text-blue-600">
                      johnruge@uchicago.edu
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    <a href="https://linkedin.com/in/john-rugemalila" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      linkedin.com/in/john-rugemalila
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink size={16} />
                    <a href="https://github.com/johnruge" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                      github.com/johnruge
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:text-right">
                <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>
            </div>
          </header>

          {/* Education */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Education</h2>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{education.degree}</h3>
                  <p className="text-gray-600">{education.school}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    <strong>Relevant coursework:</strong> {education.coursework}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-sm text-gray-600 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end mt-1">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Skills</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-0 top-8 w-px h-full bg-gray-200"></div>
                  )}
                  <div className="flex gap-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 relative z-10"></div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-gray-600 flex items-center gap-2">
                            <Building size={16} />
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-sm text-gray-600 md:text-right mt-1 md:mt-0">
                          <div className="flex items-center gap-2 md:justify-end">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 md:justify-end mt-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white rounded-lg border border-gray-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Projects</h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mt-1 md:mt-0">
                      <Calendar size={16} />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                View All Projects
                <span>→</span>
              </Link>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">Activities and Organizations</h2>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div key={index}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{activity.title}</h3>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mt-1 md:mt-0">
                      <Calendar size={16} />
                      <span>{activity.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{activity.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
} 