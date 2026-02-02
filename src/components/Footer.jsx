import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer
      id="contact"
      className="py-8 px-6 md:px-10 bg-gradient-to-t from-gray-900 to-black border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left content */}
          <p className="text-sm text-gray-500 mb-4 md:mb-0 text-center md:text-left">
            © {currentYear} · {t("footer.madeBy")}
          </p>

          {/* Social icons on the right */}
          <div className="flex gap-6 text-gray-400">
            <a
              href="mailto:taylanoezdabak44@gmail.com"
              className="hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} strokeWidth={1.8} />
            </a>
            <a
              href="https://github.com/Taylan474"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} strokeWidth={1.8} />
            </a>
            <a
              href="https://linkedin.com/in/taylan-oezdabak/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
