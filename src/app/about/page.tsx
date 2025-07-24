import NavBar from '@/components/ui/NavBar';
import { MapPin, GraduationCap, Code, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I&apos;m John Rugemalila, a Computer Science student at the University of Chicago 
              passionate about building innovative software solutions that solve real-world problems.
            </p>
          </header>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Background */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Background</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I&apos;m currently pursuing my B.A. in Computer Science at the University of Chicago, 
                with expected graduation in May 2027. My academic journey has been focused on 
                building a strong foundation in algorithms, data structures, and software development.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through coursework in Data Structures & Algorithms, Software Development, Computer Systems, 
                and Discrete Math, I&apos;ve developed both theoretical knowledge and practical skills 
                that I apply to real-world projects.
              </p>
            </div>

            {/* Interests */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-red-500" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Interests</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                I&apos;m passionate about full-stack development, system design, and creating 
                scalable applications. I particularly enjoy working on projects that have 
                social impact and can make a difference in people&apos;s lives.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond coding, I&apos;m interested in AI/ML applications, open-source software, 
                and exploring how technology can address real-world challenges in education, 
                healthcare, and social justice.
              </p>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="bg-white rounded-lg border border-gray-200 p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-green-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">What I Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Full-Stack Development</h3>
                <p className="text-gray-700">
                  Building end-to-end web applications using modern frameworks like React, Next.js, 
                  and Spring Boot with databases like MongoDB and PostgreSQL.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">System Programming</h3>
                <p className="text-gray-700">
                  Developing low-level systems and tools in languages like Go and C, focusing on 
                  performance, concurrency, and efficient resource utilization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research & Impact</h3>
                <p className="text-gray-700">
                  Contributing to research projects and building tools that have real-world impact, 
                  particularly in areas like education, healthcare, and community empowerment.
                </p>
              </div>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-blue-600" size={20} />
              <span className="text-blue-800 font-medium">Currently in Chicago, IL</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Open to Opportunities
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in new challenges, internships, and collaborations. 
              Whether it&apos;s a software engineering role, research opportunity, or an 
              interesting project, I&apos;d love to hear from you.
            </p>
            <a
              href="mailto:johnruge@uchicago.edu"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 