import NavBar from '@/components/ui/NavBar';
import ProjectsContent from '@/components/ProjectsContent';
import { getProjects } from '@/lib/projects';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <ProjectsContent projects={projects} />
    </div>
  );
}