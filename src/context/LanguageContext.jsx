import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return saved || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hey, I'm",
      role: "Software Engineer (ML Systems)",
      subtitle: "Machine Learning & Computer Vision | Python, Java, Docker | Full Stack Integration",
      description: "Computer science graduate with a passion for building creative, useful projects. Specializing in AI-powered systems and production-ready solutions. Always curious, always learning.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    about: {
      title: "About Me",
      intro: "I'm a",
      softwareEngineer: "Software Engineer",
      specializingIn: "specializing in",
      mlSystems: "Machine Learning Systems",
      and: "and",
      computerVision: "Computer Vision",
      introEnd: ", with a strong foundation in full-stack development. My work bridges the gap between cutting-edge AI technologies and practical, scalable applications that solve real-world problems.",
      education: "Education",
      educationText: "B.Sc. in Computer Science from Hochschule Hof - University of Applied Sciences",
      currently: "Currently",
      currentlyText: "Working at S.T.H while actively seeking new opportunities in AI/ML and Software Development",
      focus: "Focus",
      focusText: "Passionate about AI, Machine Learning, and building practical applications",
      callToAction: "I'm always excited to take on creative and meaningful projects. Whether it's building end-to-end ML pipelines, developing full-stack applications, or creating production-ready solutions with emphasis on performance and scalability.",
      openTo: "Open to new opportunities",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey in software development and beyond.",
      currentPosition: "Current Position",
      sth: {
        title: "IT Support & Operations Assistant",
        company: "S.T.H Wohnungsauflösungen",
        type: "Family-Owned Company (Services & Logistics)",
        period: "May 2025 - Present",
        location: "Germany",
        tasks: [
          "Support preparation and execution of customer orders with focus on administrative and technical processes",
          "Create, maintain, and partially automate quotations and invoices for streamlined operations",
          "Handle written customer correspondence and optimize internal processes using digital tools (Word, Excel)",
          "Perform lead worker tasks including employee onboarding, coordination, and supervision",
          "Participate in physically demanding operational work alongside administrative duties"
        ],
      },
      alukon: {
        title: "AI/ML Intern - Bachelor's Thesis",
        company: "Alukon KG",
        type: "Industrial Manufacturing",
        period: "October 2024 - February 2025",
        location: "Germany",
        tasks: [
          "Developed sophisticated proof of concept for AI/ML project in production and quality assurance",
          "Tested and evaluated various identification methods to improve production safety and process quality",
          "Created prototype achieving very high accuracy in product component detection",
          "Drastically reduced defective production rate through intelligent quality control system",
          "Project now serves as foundation for company-wide implementation"
        ],
      },
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "A comprehensive toolkit built through years of learning and hands-on project experience.",
      languages: "Languages",
      aiMl: "AI & Machine Learning",
      webDev: "Web Development",
      databases: "Databases",
      devops: "DevOps & Cloud",
      testing: "Testing",
      stats: {
        languages: "Programming Languages",
        frameworks: "Frameworks & Libraries",
        professional: "Professional Experience",
        yearsCoding: "Years Coding",
      },
    },
    projects: {
      title: "Projects",
      subtitle: "A collection of projects I've built, from full-stack applications to machine learning systems. Click on any project to learn more.",
      featured: "Featured",
      comingSoon: "More Coming Soon",
      comingSoonText: "Always working on new projects and ideas",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      viewThesis: "View Thesis",
      techStack: "Tech Stack",
      highlights: "Highlights",
      screenshots: "Screenshots",
      viewImages: "View",
      images: "images",
      clickToEnlarge: "Click to enlarge",
      collaborationWith: "Collaboration with",
      featuredProject: "Featured Project",
      more: "more",
    },
    footer: {
      madeBy: "Made by Taylan",
    },
    thesis: {
      title: "Bachelor's Thesis",
      overview: "Overview",
      subtitle: "Real-Time Object Detection System for Industrial Quality Assurance",
      projectGoal: "Project Goal",
      projectGoalText: "The goal of this thesis was to design and implement a prototype system that uses machine learning to automatically verify the correct use of parts in Alukon's production process. The system needed to distinguish between similar-looking components in real-time and detect incorrect part usage before final assembly or coating.",
      whyImportant: "Why Product Identification is Important at Alukon",
      whyImportantText: "Alukon KG manufactures a wide range of components for roller shutters, insect screens, and sun protection systems in various sizes and materials. Accurate identification and coating of individual parts is crucial for maintaining consistent quality, especially since many parts are visually similar in shape and surface.",
      whatIsYolo: "What is YOLO?",
      whatIsYoloText: "YOLO (You Only Look Once) is a real-time object detection algorithm that analyzes images and identifies objects with high speed and accuracy. It is well-suited for industrial applications where fast decision-making is essential.",
      exampleImages: "Example Images from the Project",
      viewFullThesis: "View Full Thesis (PDF)",
    },
    projectsData: {
      winterService: {
        title: "Winter Service Manager",
        description: "Full-stack application for managing winter road maintenance operations with real-time tracking and automated billing. Built for real-world use by winter maintenance service teams.",
        highlights: [
          "Real-time status tracking for street clearing operations across multiple cities",
          "Automated invoice generation with PDF export and customizable pricing",
          "Mobile-first design with offline capabilities and touch-optimized interfaces",
          "Role-based access control with granular permission management",
          "Comprehensive time tracking with automatic overtime calculation",
          "300+ unit and integration tests ensuring reliability"
        ]
      },
      chess: {
        title: "Real-Time Chess Game",
        description: "A multiplayer chess game using Socket.IO and React. Real-time sync and resignation support.",
        highlights: [
          "Full-featured chess game with move validation",
          "Real-time multiplayer functionality",
          "Clean, responsive interface for seamless gameplay",
          "Game state management and move history"
        ]
      },
      thesis: {
        title: "Real-Time Object Detection System",
        description: "AI/ML production quality assurance system developed during university internship at Alukon KG. A machine learning prototype using YOLOv11 to verify correct part usage in production lines.",
        highlights: [
          "Computer vision-based quality control for manufacturing processes",
          "Product component detection with very high accuracy",
          "Drastically reduced defective production rate through automated inspection",
          "Real-time processing for integration into production line",
          "Serves as foundation for company-wide implementation"
        ]
      },
      pomodoro: {
        title: "Pomodoro Studying App",
        description: "Productivity application implementing the Pomodoro Technique for effective study sessions. Custom study and break intervals.",
        highlights: [
          "Customizable timer intervals for focused work sessions",
          "Break reminders and session tracking",
          "Clean, distraction-free interface",
          "Progress tracking and statistics"
        ]
      },
      flappyblink: {
        title: "FlapPyBlink - Eye-Controlled Game",
        description: "Innovative human-computer interaction system using computer vision for game control. A collaboration project integrating OpenCV-based eye-blink detection into FlapPyBird.",
        highlights: [
          "OpenCV-based eye-blink detection with real-time facial landmark tracking",
          "Calibration system for personalized detection thresholds",
          "Low-latency input processing for responsive gameplay",
          "Frame buffering and smoothing algorithms"
        ]
      },
      codeacademy: {
        title: "CodeAcademy - Interactive Learning Platform",
        description: "Collaborative project to create an interactive coding education platform emphasizing hands-on learning. Features isolated code execution using Docker containers.",
        highlights: [
          "Isolated code execution using Docker containers for multi-language support",
          "Dynamic content management with HTML parsing and syntax highlighting",
          "Automated assessment engine with gamification (XP, achievements, progress tracking)",
          "RESTful API with token-based authentication"
        ]
      }
    },
  },
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      skills: "Fähigkeiten",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hey, ich bin",
      role: "Software Engineer (ML Systeme)",
      subtitle: "Machine Learning & Computer Vision | Python, Java, Docker | Full Stack Integration",
      description: "Informatik-Absolvent mit einer Leidenschaft für kreative, nützliche Projekte. Spezialisiert auf KI-gestützte Systeme und produktionsreife Lösungen. Immer neugierig, immer am Lernen.",
      viewWork: "Meine Arbeit",
      getInTouch: "Kontakt",
    },
    about: {
      title: "Über mich",
      intro: "Ich bin ein",
      softwareEngineer: "Software Engineer",
      specializingIn: "spezialisiert auf",
      mlSystems: "Machine Learning Systeme",
      and: "und",
      computerVision: "Computer Vision",
      introEnd: ", mit einer starken Grundlage in Full-Stack-Entwicklung. Meine Arbeit verbindet modernste KI-Technologien mit praktischen, skalierbaren Anwendungen, die reale Probleme lösen.",
      education: "Ausbildung",
      educationText: "B.Sc. in Informatik an der Hochschule Hof - Hochschule für Angewandte Wissenschaften",
      currently: "Aktuell",
      currentlyText: "Tätig bei S.T.H und aktiv auf der Suche nach neuen Möglichkeiten im Bereich KI/ML und Softwareentwicklung",
      focus: "Fokus",
      focusText: "Begeistert von KI, Machine Learning und der Entwicklung praktischer Anwendungen",
      callToAction: "Ich freue mich immer auf kreative und bedeutungsvolle Projekte. Ob es darum geht, End-to-End ML-Pipelines zu erstellen, Full-Stack-Anwendungen zu entwickeln oder produktionsreife Lösungen mit Fokus auf Leistung und Skalierbarkeit zu schaffen.",
      openTo: "Offen für neue Möglichkeiten",
    },
    experience: {
      title: "Berufserfahrung",
      subtitle: "Mein beruflicher Werdegang in der Softwareentwicklung und darüber hinaus.",
      currentPosition: "Aktuelle Position",
      sth: {
        title: "IT-Support & Operations Assistant",
        company: "S.T.H Wohnungsauflösungen",
        type: "Familienunternehmen (Dienstleistungen & Logistik)",
        period: "Mai 2025 - Heute",
        location: "Deutschland",
        tasks: [
          "Unterstützung bei der Vorbereitung und Durchführung von Aufträgen mit Fokus auf administrative und technische Abläufe",
          "Erstellung, Pflege und teilweise Automatisierung von Angeboten und Rechnungen für optimierte Abläufe",
          "Bearbeitung der schriftlichen Kundenkorrespondenz und Optimierung interner Prozesse mit digitalen Tools (Word, Excel)",
          "Vorarbeiterähnliche Tätigkeiten wie Einarbeitung, Koordination und Kontrolle von Mitarbeitern",
          "Regelmäßige Mitwirkung bei körperlich anspruchsvoller operativer Arbeit"
        ],
      },
      alukon: {
        title: "KI/ML Praktikant - Bachelorarbeit",
        company: "Alukon KG",
        type: "Industrielle Fertigung",
        period: "Oktober 2024 - Februar 2025",
        location: "Deutschland",
        tasks: [
          "Entwicklung eines anspruchsvollen Proof of Concept für ein KI-/ML-Projekt im Bereich Produktion und Qualitätssicherung",
          "Test und Bewertung verschiedener Identifikationsmethoden zur Steigerung von Produktionssicherheit und Prozessqualität",
          "Erstellung eines Prototypen mit höchster Genauigkeit bei der Erkennung von Produktteilen",
          "Drastische Senkung der Quote von Fehlproduktionen durch intelligentes Qualitätskontrollsystem",
          "Die Arbeit dient nun als Grundlage für die unternehmensweite Projektumsetzung"
        ],
      },
    },
    skills: {
      title: "Fähigkeiten & Technologien",
      subtitle: "Ein umfassendes Toolkit, aufgebaut durch Jahre des Lernens und praktischer Projekterfahrung.",
      languages: "Programmiersprachen",
      aiMl: "KI & Machine Learning",
      webDev: "Webentwicklung",
      databases: "Datenbanken",
      devops: "DevOps & Cloud",
      testing: "Testing",
      stats: {
        languages: "Programmiersprachen",
        frameworks: "Frameworks & Bibliotheken",
        professional: "Berufserfahrung",
        yearsCoding: "Jahre Programmieren",
      },
    },
    projects: {
      title: "Projekte",
      subtitle: "Eine Sammlung von Projekten, die ich erstellt habe - von Full-Stack-Anwendungen bis hin zu Machine-Learning-Systemen. Klicke auf ein Projekt für mehr Details.",
      featured: "Highlight",
      comingSoon: "Mehr kommt bald",
      comingSoonText: "Immer an neuen Projekten und Ideen arbeitend",
      viewCode: "Code ansehen",
      liveDemo: "Live Demo",
      viewThesis: "Zur Thesis",
      techStack: "Tech-Stack",
      highlights: "Highlights",
      screenshots: "Screenshots",
      viewImages: "Zeige",
      images: "Bilder",
      clickToEnlarge: "Klicken zum Vergrößern",
      collaborationWith: "Zusammenarbeit mit",
      featuredProject: "Highlight-Projekt",
      more: "mehr",
    },
    footer: {
      madeBy: "Erstellt von Taylan",
    },
    thesis: {
      title: "Bachelorarbeit",
      overview: "Übersicht",
      subtitle: "Echtzeit-Objekterkennungssystem für industrielle Qualitätssicherung",
      projectGoal: "Projektziel",
      projectGoalText: "Das Ziel dieser Arbeit war die Konzeption und Implementierung eines Prototypsystems, das maschinelles Lernen nutzt, um die korrekte Verwendung von Teilen im Produktionsprozess von Alukon automatisch zu überprüfen. Das System musste ähnlich aussehende Komponenten in Echtzeit unterscheiden und falsche Teileverwendung vor der Endmontage oder Beschichtung erkennen.",
      whyImportant: "Warum Produktidentifikation bei Alukon wichtig ist",
      whyImportantText: "Alukon KG fertigt eine breite Palette von Komponenten für Rollläden, Insektenschutz und Sonnenschutzsysteme in verschiedenen Größen und Materialien. Die genaue Identifizierung und Beschichtung einzelner Teile ist entscheidend für die Aufrechterhaltung einer gleichbleibenden Qualität, zumal viele Teile in Form und Oberfläche optisch ähnlich sind.",
      whatIsYolo: "Was ist YOLO?",
      whatIsYoloText: "YOLO (You Only Look Once) ist ein Echtzeit-Objekterkennungsalgorithmus, der Bilder analysiert und Objekte mit hoher Geschwindigkeit und Genauigkeit identifiziert. Er eignet sich gut für industrielle Anwendungen, bei denen schnelle Entscheidungen erforderlich sind.",
      exampleImages: "Beispielbilder aus dem Projekt",
      viewFullThesis: "Vollständige Thesis ansehen (PDF)",
    },
    projectsData: {
      winterService: {
        title: "Winterdienst-Manager",
        description: "Full-Stack-Anwendung zur Verwaltung von Winterdienst-Einsätzen mit Echtzeit-Tracking und automatisierter Rechnungsstellung. Entwickelt für den realen Einsatz durch Winterdienst-Teams.",
        highlights: [
          "Echtzeit-Statusverfolgung für Räumeinsätze in mehreren Städten",
          "Automatische Rechnungserstellung mit PDF-Export und anpassbarer Preisgestaltung",
          "Mobile-First-Design mit Offline-Fähigkeiten und touch-optimierten Oberflächen",
          "Rollenbasierte Zugriffskontrolle mit granularer Rechteverwaltung",
          "Umfassende Zeiterfassung mit automatischer Überstundenberechnung",
          "300+ Unit- und Integrationstests für Zuverlässigkeit"
        ]
      },
      chess: {
        title: "Echtzeit-Schachspiel",
        description: "Ein Multiplayer-Schachspiel mit Socket.IO und React. Echtzeit-Synchronisation und Aufgabe-Unterstützung.",
        highlights: [
          "Vollständiges Schachspiel mit Zugvalidierung",
          "Echtzeit-Multiplayer-Funktionalität",
          "Saubere, responsive Oberfläche für nahtloses Spielen",
          "Spielstandsverwaltung und Zughistorie"
        ]
      },
      thesis: {
        title: "Echtzeit-Objekterkennungssystem",
        description: "KI/ML-Qualitätssicherungssystem für die Produktion, entwickelt während des Praktikums bei Alukon KG. Ein Machine-Learning-Prototyp mit YOLOv11 zur Überprüfung der korrekten Teileverwendung in Produktionslinien.",
        highlights: [
          "Computer-Vision-basierte Qualitätskontrolle für Fertigungsprozesse",
          "Produktkomponentenerkennung mit sehr hoher Genauigkeit",
          "Drastische Reduzierung der Fehlproduktionsrate durch automatisierte Inspektion",
          "Echtzeitverarbeitung für die Integration in die Produktionslinie",
          "Dient als Grundlage für die unternehmensweite Implementierung"
        ]
      },
      pomodoro: {
        title: "Pomodoro Lern-App",
        description: "Produktivitäts-App basierend auf der Pomodoro-Technik für effektive Lernsessions. Anpassbare Lern- und Pausenintervalle.",
        highlights: [
          "Anpassbare Timer-Intervalle für fokussierte Arbeitssessions",
          "Pausenerinnerungen und Session-Tracking",
          "Saubere, ablenkungsfreie Oberfläche",
          "Fortschrittsverfolgung und Statistiken"
        ]
      },
      flappyblink: {
        title: "FlapPyBlink - Augengesteuertes Spiel",
        description: "Innovatives Mensch-Computer-Interaktionssystem mit Computer Vision zur Spielsteuerung. Ein Kollaborationsprojekt zur Integration von OpenCV-basierter Augenzwinkererkennung in FlapPyBird.",
        highlights: [
          "OpenCV-basierte Augenzwinkererkennung mit Echtzeit-Gesichtspunktverfolgung",
          "Kalibrierungssystem für personalisierte Erkennungsschwellenwerte",
          "Eingabeverarbeitung mit niedriger Latenz für reaktionsschnelles Gameplay",
          "Frame-Pufferung und Glättungsalgorithmen"
        ]
      },
      codeacademy: {
        title: "CodeAcademy - Interaktive Lernplattform",
        description: "Kollaboratives Projekt zur Erstellung einer interaktiven Coding-Lernplattform mit Fokus auf praktisches Lernen. Mit isolierter Code-Ausführung durch Docker-Container.",
        highlights: [
          "Isolierte Code-Ausführung mit Docker-Containern für Multi-Sprachen-Unterstützung",
          "Dynamisches Content-Management mit HTML-Parsing und Syntax-Highlighting",
          "Automatisierte Bewertungs-Engine mit Gamification (XP, Erfolge, Fortschrittsverfolgung)",
          "RESTful API mit Token-basierter Authentifizierung"
        ]
      }
    },
  },
};

export { translations };
