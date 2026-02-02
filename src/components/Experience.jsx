import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t("experience.sth.title"),
      company: t("experience.sth.company"),
      type: t("experience.sth.type"),
      period: t("experience.sth.period"),
      location: t("experience.sth.location"),
      current: true,
      description: t("experience.sth.tasks"),
      skills: ["Process Automation", "Excel", "Customer Relations", "Team Leadership"]
    },
    {
      title: t("experience.alukon.title"),
      company: t("experience.alukon.company"),
      type: t("experience.alukon.type"),
      period: t("experience.alukon.period"),
      location: t("experience.alukon.location"),
      current: false,
      description: t("experience.alukon.tasks"),
      skills: ["Python", "YOLO", "Computer Vision", "Machine Learning", "OpenCV"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{t("experience.title")}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t("experience.subtitle")}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-violet-500 to-gray-800" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-4 ${
                  exp.current
                    ? "bg-purple-500 border-purple-300 animate-pulse"
                    : "bg-violet-500 border-violet-300"
                } ${
                  index % 2 === 0
                    ? "left-0 md:-right-2 md:left-auto"
                    : "left-0 md:-left-2"
                } transform -translate-x-1/2 md:translate-x-0`}
              />

              {/* Card */}
              <div className="ml-6 md:ml-0 p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-colors">
                {/* Current badge */}
                {exp.current && (
                  <span className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-semibold rounded-full">
                    {t("experience.currentPosition")}
                  </span>
                )}

                {/* Title & Company */}
                <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                <div className="flex items-center gap-2 text-purple-400 font-medium mb-3">
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-purple-400 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {skill}
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

export default Experience;
