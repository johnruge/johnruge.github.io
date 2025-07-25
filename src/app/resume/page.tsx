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
    period: "May 2027",
    coursework: "Data Structures & Algorithms, Software Development, Computer Systems"
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

      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 text-center shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">John Rugemalila</h1>
            <p className="text-xl text-gray-600 mb-8">Computer Science Student & Software Developer</p>

            <div className="flex flex-wrap justify-center gap-8 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-base">773-406-6328</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:johnruge@uchicago.edu" className="hover:text-blue-600 text-base">
                  johnruge [at] uchicago [dot] edu
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink size={16} />
                <a href="https://linkedin.com/in/john-rugemalila" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink size={16} />
                <a href="https://github.com/johnruge" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-base">
                  GitHub
                </a>
              </div>
            </div>

            <a
              href="/johnruge_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
            >
              <Download size={16} />
              Download PDF
            </a>
          </header>

          {/* Education */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Education</h2>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 italic">{education.degree}</h3>
                  <p className="text-base text-gray-600 mb-2">{education.school}</p>
                  <p className="text-gray-500 text-sm">
                    <strong>Relevant coursework:</strong> {education.coursework}
                  </p>
                </div>
                <div className="text-gray-600 lg:text-right">
                  <div className="flex items-center gap-2 lg:justify-end mb-2">
                    <Calendar size={16} />
                    <span className="text-base">{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end">
                    <MapPin size={16} />
                    <span className="text-base">{education.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Skills</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Languages</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-blue-50 text-blue-800 border border-blue-200 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Frameworks & Libraries</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.frameworks.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-green-50 text-green-800 border border-green-200 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Tools & Platforms</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-3 py-2 bg-purple-50 text-purple-800 border border-purple-200 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  {index < experiences.length - 1 && (
                    <div className="absolute left-2 top-12 w-px h-full bg-gray-200"></div>
                  )}
                  <div className="absolute left-0 top-4 w-3 h-3 bg-blue-600 rounded-full"></div>

                  <div className="mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-base text-gray-600 flex items-center gap-2 mt-1">
                          <Building size={16} />
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-gray-600 lg:text-right mt-2 lg:mt-0">
                        <div className="flex items-center gap-2 lg:justify-end mb-1">
                          <Calendar size={16} />
                          <span className="text-base">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end">
                          <MapPin size={16} />
                          <span className="text-base">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 text-base leading-relaxed ml-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-8 last:pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
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
                    <div className="text-gray-600 flex items-center gap-2 mt-2 lg:mt-0">
                      <Calendar size={16} />
                      <span className="text-base">{project.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base">{project.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-base"
              >
                View All Projects
                <span>→</span>
              </Link>
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center border-b border-gray-200 pb-4">Activities and Organizations</h2>
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0 pb-8 last:pb-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                    <div className="text-gray-600 flex items-center gap-2 mt-2 lg:mt-0">
                      <Calendar size={16} />
                      <span className="text-base">{activity.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">{activity.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}