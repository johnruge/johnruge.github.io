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
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {project.title}
              </h1>
              <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(project.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{project.technologies.length} Technologies</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          {/* Project Content */}
          <article className="bg-white rounded-lg border border-gray-200 p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </article>

          {/* Back to Projects */}
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={20} />
              View All Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 