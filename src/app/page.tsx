import Link from 'next/link';
import Image from 'next/image';
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
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-full md:w-[400px] flex justify-center md:justify-start mb-8 md:mb-0">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
              <Image
                src="/john_.jpg"
                alt="John Rugemalila profile"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          {/* Hero Description */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
              Habari, Karibu!! <br />
              I'm John Rugemalila / John Ruge ("Roo-geh") <br />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
                I'm a rising junior at the University of Chicago majoring in Computer Science, passionate about
                Software Engineering. I love building scalable solutions and tackling complex problems. Always
                eager to learn, collaborate, and create impactful technology.
            </p>
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-gray-600 mb-10">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span className="text-lg">Chicago, IL</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span className="text-lg">Available for opportunities</span>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-10">
              <Link
                href="/projects"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-lg"
              >
                View Resume
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://github.com/johnruge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <Github size={24} className="text-gray-700" />
              </a>
              <a
                href="https://linkedin.com/in/john-rugemalila"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <Linkedin size={24} className="text-gray-700" />
              </a>
              <a
                href="mailto:johnruge@uchicago.edu"
                className="p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <Mail size={24} className="text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              My recent work in software development, from full-stack applications
              to system programming and algorithmic implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              View All Projects
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {[
              'Java', 'Go', 'Python', 'TypeScript', 'React', 'Next.js',
              'Spring Boot', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git'
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-gray-200 rounded-xl px-6 py-4 text-lg font-medium text-gray-700 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg"
          >
            View Full Resume
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Together</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m always interested in new opportunities and collaborations.
            Feel free to reach out if you&apos;d like to discuss a project or just say hello.
          </p>
          <a
            href="mailto:johnruge@uchicago.edu"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            <Mail size={24} />
            Get In Touch
          </a>
        </div>
      </footer>
    </div>
  );
}
