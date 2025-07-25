import NavBar from '@/components/ui/NavBar';
import { MapPin, GraduationCap, Code, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              I&apos;m John Rugemalila, a Computer Science student at the University of Chicago
              passionate about building innovative software solutions that solve real-world problems.
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Background */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="text-blue-600" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Background</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                I&apos;m currently pursuing my B.A. in Computer Science at the University of Chicago,
                with expected graduation in May 2027. My academic journey has been focused on
                building a strong foundation in algorithms, data structures, and software development.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Through coursework in Data Structures & Algorithms, Software Development, Computer Systems,
                and Discrete Math, I&apos;ve developed both theoretical knowledge and practical skills
                that I apply to real-world projects.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-2xl border border-gray-200 p-10 shadow-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <Heart className="text-red-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Interests</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                I&apos;m passionate about full-stack development, system design, and creating
                scalable applications. I particularly enjoy working on projects that have
                social impact and can make a difference in people&apos;s lives.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Beyond coding, I&apos;m interested in AI/ML applications, open-source software,
                and exploring how technology can address real-world challenges in education,
                healthcare, and social justice.
              </p>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="bg-white rounded-2xl border border-gray-200 p-10 mb-20 shadow-sm">
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                <Code className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What I Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Full-Stack Development</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Building end-to-end web applications using modern frameworks like React, Next.js,
                  and Spring Boot with databases like MongoDB and PostgreSQL.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">System Programming</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Developing low-level systems and tools in languages like Go and C, focusing on
                  performance, concurrency, and efficient resource utilization.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Research & Impact</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Contributing to research projects and building tools that have real-world impact,
                  particularly in areas like education, healthcare, and community empowerment.
                </p>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-12 text-center shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="text-blue-600" size={24} />
              <span className="text-blue-800 font-medium text-xl">Currently in Chicago, IL</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Open to Opportunities
            </h3>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
              I&apos;m always interested in new challenges, internships, and collaborations.
              Whether it&apos;s a software engineering role, research opportunity, or an
              interesting project, I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:johnruge@uchicago.edu"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}