import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface Project {
  slug: string;
  title: string;
  description: string;
  status: 'live' | 'in-development' | 'done';
  technologies: string[];
  github?: string;
  liveUrl?: string;
  date: string;
  featured: boolean;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects(): Promise<Project[]> {
  // Get file names under /content/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjectsData = await Promise.all(
    fileNames
      .filter(name => name.endsWith('.md'))
      .map(async (fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the slug and content
        return {
          slug,
          content: contentHtml,
          title: matterResult.data.title,
          description: matterResult.data.description,
          status: matterResult.data.status,
          technologies: matterResult.data.technologies || [],
          github: matterResult.data.github,
          liveUrl: matterResult.data.liveUrl,
          date: matterResult.data.date,
          featured: matterResult.data.featured || false,
        } as Project;
      })
  );

  // Sort projects by date (newest first)
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      content: contentHtml,
      title: matterResult.data.title,
      description: matterResult.data.description,
      status: matterResult.data.status,
      technologies: matterResult.data.technologies || [],
      github: matterResult.data.github,
      liveUrl: matterResult.data.liveUrl,
      date: matterResult.data.date,
      featured: matterResult.data.featured || false,
    } as Project;
  } catch {
    return null;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter(project => project.featured);
}

export async function getProjectsByStatus(status: Project['status']): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter(project => project.status === status);
} 