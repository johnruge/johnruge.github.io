import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import NavBar from '@/components/ui/NavBar';
import ProjectCard from '@/components/ui/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  John Rugemalila
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                A Computer Science graduate from the University of Chicago, passionate about building 
                innovative software solutions. I specialize in full-stack development, system design, 
                and creating scalable applications that solve real-world problems.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Chicago, IL</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Available for opportunities</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/resume"
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Download Resume
                </Link>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/johnruge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href="https://linkedin.com/in/john-rugemalila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Linkedin size={20} className="text-gray-700" />
                </a>
                <a
                  href="mailto:johnruge@uchicago.edu"
                  className="p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="mt-12 lg:mt-0 lg:col-span-5">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center text-6xl font-bold text-gray-400">
                    JR
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">React</span>
                </div>
                <div className="absolute bottom-20 left-10 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-purple-600">TS</span>
                </div>
                <div className="absolute top-1/2 right-0 w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-green-600">Go</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent work in software development, from full-stack applications 
              to system programming and algorithmic implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              View All Projects
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Technical Expertise
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Java', 'Go', 'Python', 'TypeScript', 'React', 'Next.js',
              'Spring Boot', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
            >
              View Full Resume
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Together</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and collaborations. 
            Feel free to reach out if you&apos;d like to discuss a project or just say hello.
          </p>
          <a
            href="mailto:johnruge@uchicago.edu"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
      </footer>
    </div>
  );
}
