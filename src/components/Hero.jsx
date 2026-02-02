import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-900 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-700/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-800/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          {t("hero.greeting")}{" "}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Taylan
          </span>
        </h1>

        {/* Subtitle with role */}
        <div className="mb-6">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            {t("hero.role")}
          </p>
          <p className="text-lg text-gray-500 mt-2">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {t("hero.description")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            {t("hero.viewWork")}
          </a>
          <a
            href="mailto:taylanoezdabak44@gmail.com"
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full border border-gray-700 transition-all duration-300 hover:scale-105"
          >
            {t("hero.getInTouch")}
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Taylan474"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/taylan-oezdabak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800/50 hover:bg-blue-600 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:taylanoezdabak44@gmail.com"
            className="p-3 bg-gray-800/50 hover:bg-purple-600 rounded-full text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

export default Hero;
