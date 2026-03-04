import ProjectCard from '@/components/ui/ProjectCard';
import { Project } from '@/lib/projects';

interface ProjectsContentProps {
  projects: Project[];
}

export default function ProjectsContent({ projects }: ProjectsContentProps) {
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

      {/* Projects Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
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
                I haven&apos;t added any projects yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}