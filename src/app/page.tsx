import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, MapPin, Calendar, ChevronRight } from 'lucide-react';
import NavBar from '@/components/ui/NavBar';
import ProjectCard from '@/components/ui/ProjectCard';
import { getFeaturedProjects } from '@/lib/projects';
import SeeFeaturedProjectsButton from '@/components/SeeFeaturedProjectsButton';

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="min-h-screen bg-white">
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
              I&apos;m John Rugemalila / John Ruge (&quot;Roo-geh&quot;) <br />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0">
                I&apos;m a rising junior at the University of Chicago majoring in Computer Science, passionate about
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
                className="px-6 py-2 rounded-lg border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-medium text-base shadow-sm transition-all duration-200"
              >
                View Projects
              </Link>
              <Link
                href="/resume"
                className="px-6 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 font-medium text-base shadow-sm transition-all duration-200"
              >
                View Resume
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-6 mb-8">
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

      {/* See Featured Projects Button */}
      <div className="flex justify-center w-full pb-12">
        <SeeFeaturedProjectsButton />
      </div>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5l font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recent projects I&apos;ve worked on.
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
              className="inline-flex flex-col items-center gap-1 px-6 py-2 rounded-lg border border-blue-200 bg-white text-blue-700 hover:bg-blue-50 hover:border-blue-300 font-medium text-base shadow-sm transition-all duration-200"
            >
              <span>View All Projects</span>
              <ChevronRight className="mt-1" size={22} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col items-center space-y-2">
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
                <Link href="/resume" className="text-gray-600 hover:text-gray-900">Resume</Link>
              </div>
            </div>

            {/* Connect */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/johnruge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/john-rugemalila"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:johnruge@uchicago.edu"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Built With */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Built With</h3>
              <p className="text-gray-600">Next.js & Tailwind CSS</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-600">© 2025 John Ruge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
