'use client';

import Link from 'next/link';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl hover:border-gray-300 transition-all duration-300 group h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
          {project.title}
        </h3>
        <div className="flex items-center text-gray-600 text-sm">
          <Calendar size={16} className="mr-2" />
          {project.date}
        </div>
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