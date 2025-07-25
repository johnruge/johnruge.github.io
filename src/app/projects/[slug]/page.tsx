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
        return 'bg-green-100 text-green-800';
      case 'in-development':
        return 'bg-yellow-100 text-yellow-800';
      case 'done':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
    <div className="min-h-screen bg-white">
      <NavBar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-12 font-medium"
          >
            ← Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">
                {project.title}
              </h1>
              <span className={`px-3 py-1 rounded-full text-base ${getStatusColor(project.status)}`}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            <p className="text-lg text-gray-600 mb-6">
              {project.description}
            </p>

            {/* Project Meta */}
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span className="text-base">{project.date}</span>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 rounded-lg text-gray-700 text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-4 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-base hover:bg-blue-700 transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
          </div>

          {/* Project Content */}
          <article className="prose prose-base max-w-none">
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </article>
        </div>
      </main>
    </div>
  );
}