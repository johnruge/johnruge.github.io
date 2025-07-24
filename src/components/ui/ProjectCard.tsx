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
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 group">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
          {getStatusLabel(project.status)}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">GitHub</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </a>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors ml-auto"
        >
          <span className="text-sm font-medium">Details →</span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard; 