import { useState } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../data/projectsData";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiMaximize2 } from "react-icons/fi";
import ProjectModal from "./ProjectModal";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const projects = useProjects();

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{t("projects.title")}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects
            .filter((project) => !project.hidden && !project.comingSoon)
            .map((project, index) => (
              <div
                key={index}
                onClick={() => openModal(project)}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 border border-gray-700/50 hover:border-purple-500/30 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold rounded-full">
                    {t("projects.featured")}
                  </div>
                )}

                {/* Expand icon */}
                <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMaximize2 size={16} />
                </div>

                {/* Image Section */}
                <div className={`relative overflow-hidden ${project.featured ? "h-64 md:h-80" : "h-48 md:h-56"}`}>
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800 text-white text-2xl font-bold">
                      {project.title}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-800/80 text-xs text-gray-300 px-2.5 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 5 && (
                        <span className="bg-gray-800/80 text-xs text-gray-400 px-2.5 py-1 rounded-full">
                          +{project.tech.length - 5} {t("projects.more")}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Quick action buttons */}
                  <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub size={16} />
                        {t("projects.viewCode")}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        {t("projects.liveDemo")}
                      </a>
                    )}
                    {project.route && (
                      <Link
                        to={project.route}
                        className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <FiExternalLink size={16} />
                        {t("projects.viewThesis")}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}

          {/* Coming Soon Card */}
          <div className="relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden border border-dashed border-gray-700 flex items-center justify-center min-h-[300px]">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-400 mb-2">{t("projects.comingSoon")}</h3>
              <p className="text-gray-500 text-sm">
                {t("projects.comingSoonText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}

export default Projects;
