'use client';

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}

const getStatusColor = (status: Project['status']) => {
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

const getStatusLabel = (status: Project['status']) => {
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

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1 pr-4">
          {project.title}
        </h3>
        <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(project.status)} whitespace-nowrap`}>
          {getStatusLabel(project.status)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 flex-1 text-lg">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={18} />
              <span className="font-medium">GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={18} />
              <span className="font-medium">Live</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
        >
          <span>View Details</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;