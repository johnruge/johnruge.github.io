import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';
import NavBar from '@/components/ui/NavBar';
import { getProjectBySlug, getProjects } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-development':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'done':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'live':
        return 'Live';
      case 'in-development':
        return 'In Development';
      case 'done':
        return 'Done';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-800 mb-12 transition-colors text-lg font-medium"
          >
            <ArrowLeft size={24} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="bg-white rounded-2xl border border-gray-200 p-10 mb-12 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex-1">
                {project.title}
              </h1>
              <span className={`px-6 py-3 rounded-full font-medium border text-lg whitespace-nowrap ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-600">
              <div className="flex items-center gap-3">
                <Calendar size={20} />
                <span className="text-lg">{new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long'
                })}</span>
              </div>
              <div className="flex items-center gap-3">
                <Tag size={20} />
                <span className="text-lg">{project.technologies.length} Technologies</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 text-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-lg"
                >
                  <Github size={24} />
                  View Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg"
                >
                  <ExternalLink size={24} />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          {/* Project Content */}
          <article className="bg-white rounded-2xl border border-gray-200 p-10 md:p-12 shadow-sm mb-12">
            <div
              className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-base prose-li:text-lg prose-p:text-lg prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </article>

          {/* Back to Projects */}
          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-colors text-lg"
            >
              <ArrowLeft size={24} />
              View All Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}