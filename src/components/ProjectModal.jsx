import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiX, FiUsers, FiCheck, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";

function ProjectModal({ project, isOpen, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const { t } = useLanguage();

  // Get images array (supports both single image and images array)
  const getImages = () => {
    if (project?.images && project.images.length > 0) {
      return project.images;
    } else if (project?.image) {
      return [project.image];
    }
    return [];
  };

  const images = getImages();
  const isLightboxOpen = lightboxIndex !== null;

  // Reset lightbox when project changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [project]);

  const openLightbox = (index = 0) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          onClose();
        }
      } else if (isLightboxOpen) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isLightboxOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <>
      {/* Main Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          {/* Main hero image - clickable to open lightbox */}
          {images.length > 0 && (
            <div
              className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl cursor-pointer group"
              onClick={() => openLightbox(0)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
              <img
                src={images[0]}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {project.featured && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-sm font-semibold rounded-full">
                  {t("projects.featuredProject")}
                </span>
              )}
              
              {/* Click to view hint */}
              {images.length > 1 && (
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiImage size={16} />
                  <span>{t("projects.viewImages")} {images.length} {t("projects.images")}</span>
                </div>
              )}
              {images.length === 1 && (
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiImage size={16} />
                  <span>{t("projects.clickToEnlarge")}</span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {project.title}
            </h3>

            {/* Collaborator badge */}
            {project.collaborator && (
              <div className="flex items-center gap-2 mb-4 text-gray-400">
                <FiUsers size={16} />
                <span className="text-sm">
                  {t("projects.collaborationWith")} {project.collaborator}
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            {project.tech && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {t("projects.techStack")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 text-sm rounded-lg border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {t("projects.highlights")}
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <FiCheck className="flex-shrink-0 mt-1 text-purple-400" size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-700">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
                >
                  <FaGithub size={20} />
                  {t("projects.viewCode")}
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium rounded-lg transition-colors"
                >
                  <FiExternalLink size={20} />
                  {t("projects.liveDemo")}
                </a>
              )}
              {project.route && (
                <Link
                  to={project.route}
                  onClick={onClose}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-medium rounded-lg transition-colors"
                >
                  <FiExternalLink size={20} />
                  {t("projects.viewThesis")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <FiX size={28} />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next image"
              >
                <FiChevronRight size={32} />
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={images[lightboxIndex]}
            alt={`${project.title} screenshot ${lightboxIndex + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Thumbnail strip at bottom */}
          {images.length > 1 && (
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-xl max-w-[90vw] overflow-x-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all ${
                    index === lightboxIndex
                      ? "border-purple-500 scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ProjectModal;
