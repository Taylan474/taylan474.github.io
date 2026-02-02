import { useLanguage } from "../context/LanguageContext";

function Thesis() {
  const { t } = useLanguage();

  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans min-h-screen">
      <div className="px-6 py-16 max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("thesis.title")}{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              {t("thesis.overview")}
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("thesis.subtitle")}
          </p>
        </div>

        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">{t("thesis.projectGoal")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("thesis.projectGoalText")}
          </p>
        </section>

        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">{t("thesis.whyImportant")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("thesis.whyImportantText")}
          </p>
        </section>

        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">{t("thesis.whatIsYolo")}</h2>
          <p className="text-gray-300 leading-relaxed">
            {t("thesis.whatIsYoloText")}
          </p>
        </section>

       
        <section className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-2xl font-semibold mb-6 text-purple-400">{t("thesis.exampleImages")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-xl border border-gray-700/50">
              <img src="/images/thesis/yolo-detection-1.png" alt="YOLO Example 1" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="overflow-hidden rounded-xl border border-gray-700/50">
              <img src="/images/thesis/yolo-detection-2.png" alt="YOLO Example 2" className="w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </section>

        <div className="text-center pt-6">
          <a
            href="/thesis.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            {t("thesis.viewFullThesis")}
          </a>
        </div>
      </div>
    </main>
  );
}

export default Thesis;
