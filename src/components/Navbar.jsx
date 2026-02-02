import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: "about", label: t("nav.about") },
    { id: "experience", label: t("nav.experience") },
    { id: "skills", label: t("nav.skills") },
    { id: "projects", label: t("nav.projects") },
    { id: "contact", label: t("nav.contact") },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/");

      // Scroll after the page renders
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="w-full py-4 px-6 md:px-8 flex justify-between items-center bg-black/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800/50">
      {/* Logo */}
      <Link
        to="/"
        onClick={(e) => {
          if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="text-xl md:text-2xl font-bold text-white hover:text-purple-400 transition-colors"
      >
        Taylan Özdabak
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-gray-400">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="hover:text-white transition-colors py-2 px-1 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      {/* Language toggle & Mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700 rounded-full text-sm text-gray-300 hover:text-white transition-colors border border-gray-700"
          aria-label="Toggle language"
        >
          <Globe size={16} />
          <span className="font-medium">{language.toUpperCase()}</span>
        </button>

        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
