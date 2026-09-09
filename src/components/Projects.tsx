import type { ReactNode } from "react";
import {
  ExternalLink,
  CreditCard,
  Users,
  Sparkles,
  Camera,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { projects, type ProjectIcon } from "../data";

interface ProjectsProps {
  visible: boolean;
}

const PROJECT_ICONS: Record<ProjectIcon, ReactNode> = {
  payments: <CreditCard className="w-10 h-10" />,
  community: <Users className="w-10 h-10" />,
  ai: <Sparkles className="w-10 h-10" />,
  vision: <Camera className="w-10 h-10" />,
  recommend: <TrendingUp className="w-10 h-10" />,
};

export default function Projects({ visible }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-950/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 bg-brand flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-white/90 group-hover:scale-110 transition-transform duration-300">
                    {PROJECT_ICONS[project.icon]}
                  </div>
                )}
                {project.live && (
                  <span className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    Live
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-black/50 transition-all duration-300">
                  {project.live && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-6 h-6 text-gray-900" />
                    </a>
                  )}
                  {!project.live && !project.link && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-6 h-6 text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                {project.live && project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold mb-3 inline-block group-hover:text-brand transition-colors"
                  >
                    {project.title}
                  </a>
                ) : (
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                )}
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
