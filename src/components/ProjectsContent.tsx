'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/projects';

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [activeFilter, setActiveFilter] = useState<'all' | Project['status']>('all');

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.status === activeFilter));
    }
  }, [activeFilter, projects]);

  const getFilterCount = (status: 'all' | Project['status']) => {
    if (status === 'all') return projects.length;
    return projects.filter(project => project.status === status).length;
  };

  const filters = [
    { key: 'all' as const, label: 'All', count: getFilterCount('all') },
    { key: 'live' as const, label: 'Live', count: getFilterCount('live') },
    { key: 'in-development' as const, label: 'In Development', count: getFilterCount('in-development') },
    { key: 'done' as const, label: 'Done', count: getFilterCount('done') },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter.label}
                <span className="ml-2 opacity-75">
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-300 text-8xl mb-8">📂</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No projects found
              </h3>
              <p className="text-xl text-gray-600 max-w-md mx-auto">
                {activeFilter === 'all'
                  ? "I haven&apos;t added any projects yet."
                  : `No projects with "${filters.find(f => f.key === activeFilter)?.label}" status.`
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}