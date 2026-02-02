import { GraduationCap, Briefcase, Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-white text-center">{t("about.title")}</h2>

        <div className="space-y-8">
          {/* Main intro */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("about.intro")} <span className="text-white font-semibold">{t("about.softwareEngineer")}</span> {t("about.specializingIn")}{" "}
              <span className="text-purple-400 font-semibold">{t("about.mlSystems")}</span> {t("about.and")}{" "}
              <span className="text-violet-400 font-semibold">{t("about.computerVision")}</span>
              {t("about.introEnd")}
            </p>
          </div>

          {/* Key highlights grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white">{t("about.education")}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t("about.educationText")}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                  <Briefcase size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white">{t("about.currently")}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t("about.currentlyText")}
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-violet-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-white">{t("about.focus")}</h3>
              </div>
              <p className="text-gray-400 text-sm">
                {t("about.focusText")}
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center pt-4">
            <p className="text-gray-400 mb-6">
              {t("about.callToAction")}
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full border border-purple-500/30 text-purple-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="font-medium">{t("about.openTo")}</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
