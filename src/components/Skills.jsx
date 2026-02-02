import { useState } from "react";
import {
  Code,
  Database,
  Server,
  Settings,
  Brain,
  Globe,
  TestTube,
  Cloud,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      title: t("skills.languages"),
      skills: ["Python", "Java", "JavaScript", "TypeScript", "Dart", "SQL", "PHP"]
    },
    {
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      title: t("skills.aiMl"),
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "OpenCV", "YOLO", "Pandas", "NumPy", "Matplotlib", "Computer Vision"]
    },
    {
      icon: Globe,
      color: "from-amber-500 to-orange-500",
      title: t("skills.webDev"),
      skills: ["React", "Node.js", "FastAPI", "Flask", "Laravel", "Flutter", "Bootstrap", "TailwindCSS", "Three.js", "Socket.IO", "HTML/CSS"]
    },
    {
      icon: Database,
      color: "from-orange-500 to-amber-500",
      title: t("skills.databases"),
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQLite", "REST APIs"]
    },
    {
      icon: Cloud,
      color: "from-cyan-500 to-blue-500",
      title: t("skills.devops"),
      skills: ["Docker", "Git", "GitHub Actions", "AWS", "Vercel", "Netlify", "CI/CD"]
    },
    {
      icon: TestTube,
      color: "from-red-500 to-rose-500",
      title: t("skills.testing"),
      skills: ["Vitest", "Testing Library", "Unit Testing", "Integration Testing"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">{t("skills.title")}</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          {t("skills.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;

            return (
              <div
                key={index}
                className={`relative group p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-purple-500/50 scale-105"
                    : "bg-gray-900/50 border-gray-700/50 hover:border-gray-600"
                }`}
                onClick={() => setActiveCategory(isActive ? null : index)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon and title */}
                <div className="relative flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="relative flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              5+
            </div>
            <div className="text-gray-400 text-sm mt-1">{t("skills.stats.languages")}</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              10+
            </div>
            <div className="text-gray-400 text-sm mt-1">{t("skills.stats.frameworks")}</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              1-2 yrs
            </div>
            <div className="text-gray-400 text-sm mt-1">{t("skills.stats.professional")}</div>
          </div>
          <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-700/50">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              4+
            </div>
            <div className="text-gray-400 text-sm mt-1">{t("skills.stats.yearsCoding")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
