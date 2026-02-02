import { useLanguage } from "../context/LanguageContext";

// Hook to get translated projects
export function useProjects() {
  const { t } = useLanguage();

  return [
    {
      id: "winterService",
      title: t("projectsData.winterService.title"),
      description: t("projectsData.winterService.description"),
      image: "/images/winter-service/1.png",
      images: [
        "/images/winter-service/1.png",
        "/images/winter-service/2.png",
        "/images/winter-service/3.png",
        "/images/winter-service/4.png",
        "/images/winter-service/5.png",
        "/images/winter-service/6.png",
        "/images/winter-service/7.png",
        "/images/winter-service/8.png",
        "/images/winter-service/9.png",
        "/images/winter-service/10.png",
        "/images/winter-service/11.png",
        "/images/winter-service/12.png",
        "/images/winter-service/13.png",
        "/images/winter-service/14.png",
        "/images/winter-service/15.png",
        "/images/winter-service/16.png",
        "/images/winter-service/17.png",
        "/images/winter-service/18.png",
        "/images/winter-service/19.png",
        "/images/winter-service/20.png",
        "/images/winter-service/21.png",
        "/images/winter-service/22.png",
        "/images/winter-service/23.png",
        "/images/winter-service/24.png"
      ],
      tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite", "jsPDF", "Vitest"],
      github: "https://github.com/Taylan474/winter-service-manager",
      live: "https://winterdienst-manager.vercel.app/",
      featured: true,
      highlights: t("projectsData.winterService.highlights")
    },
    {
      id: "chess",
      title: t("projectsData.chess.title"),
      description: t("projectsData.chess.description"),
      image: "/images/chess/1.png",
      images: [
        "/images/chess/1.png",
        "/images/chess/2.png",
        "/images/chess/3.png",
        "/images/chess/4.png"
      ],
      tech: ["React", "JavaScript", "Socket.IO", "HTML/CSS"],
      github: "https://github.com/Taylan474/chess-website/tree/main",
      highlights: t("projectsData.chess.highlights")
    },
    {
      id: "thesis",
      title: t("projectsData.thesis.title"),
      description: t("projectsData.thesis.description"),
      image: "/images/thesis/preview.png",
      images: [
        "/images/thesis/preview.png",
        "/images/thesis/yolo-detection-2.png"
      ],
      tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Machine Learning"],
      route: "/thesis",
      hidden: false,
      highlights: t("projectsData.thesis.highlights")
    },
    {
      id: "pomodoro",
      title: t("projectsData.pomodoro.title"),
      description: t("projectsData.pomodoro.description"),
      image: "/images/pomodoro/preview.png",
      images: [
        "/images/pomodoro/preview.png",
        "/images/pomodoro/settings.png"
      ],
      tech: ["React", "JavaScript"],
      github: "https://github.com/Taylan474/pomodoro-studying-app",
      highlights: t("projectsData.pomodoro.highlights")
    },
    {
      id: "flappyblink",
      title: t("projectsData.flappyblink.title"),
      description: t("projectsData.flappyblink.description"),
      tech: ["Python", "OpenCV"],
      github: "https://github.com/sero583/FlapPyBlink",
      collaborator: "@sero583",
      highlights: t("projectsData.flappyblink.highlights")
    },
    {
      id: "codeacademy",
      title: t("projectsData.codeacademy.title"),
      description: t("projectsData.codeacademy.description"),
      image: "/images/codeacademy/1.png",
      images: [
        "/images/codeacademy/1.png",
        "/images/codeacademy/2.png",
        "/images/codeacademy/3.png",
        "/images/codeacademy/4.png",
        "/images/codeacademy/5.png",
        "/images/codeacademy/6.png",
        "/images/codeacademy/7.png",
        "/images/codeacademy/8.png",
        "/images/codeacademy/9.png"
      ],
      tech: ["Laravel", "React", "Docker", "PHP", "MySQL", "JavaScript", "Java", "Python"],
      github: "https://github.com/sero583/PraktikumSWE-CodeAcademy",
      collaborator: "@sero583 & team",
      highlights: t("projectsData.codeacademy.highlights")
    },
    {
      comingSoon: true,
      image: "/images/coming-soon.png"
    }
  ];
}

// Keep default export for backwards compatibility (English fallback)
const projects = [
  {
    title: "Winter Service Manager",
    description: "Full-stack application for managing winter road maintenance operations with real-time tracking and automated billing. Built for real-world use by winter maintenance service teams.",
    image: "/images/winter-service/1.png",
    images: [
      "/images/winter-service/1.png",
      "/images/winter-service/2.png",
      "/images/winter-service/3.png",
      "/images/winter-service/4.png",
      "/images/winter-service/5.png",
      "/images/winter-service/6.png",
      "/images/winter-service/7.png",
      "/images/winter-service/8.png",
      "/images/winter-service/9.png",
      "/images/winter-service/10.png",
      "/images/winter-service/11.png",
      "/images/winter-service/12.png",
      "/images/winter-service/13.png",
      "/images/winter-service/14.png",
      "/images/winter-service/15.png",
      "/images/winter-service/16.png",
      "/images/winter-service/17.png",
      "/images/winter-service/18.png",
      "/images/winter-service/19.png",
      "/images/winter-service/20.png",
      "/images/winter-service/21.png",
      "/images/winter-service/22.png",
      "/images/winter-service/23.png",
      "/images/winter-service/24.png"
    ],
    tech: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vite", "jsPDF", "Vitest"],
    github: "https://github.com/Taylan474/winter-service-manager",
    live: "https://winterdienst-manager.vercel.app/",
    featured: true,
    highlights: [
      "Real-time status tracking for street clearing operations across multiple cities",
      "Automated invoice generation with PDF export and customizable pricing",
      "Mobile-first design with offline capabilities and touch-optimized interfaces",
      "Role-based access control with granular permission management",
      "Comprehensive time tracking with automatic overtime calculation",
      "300+ unit and integration tests ensuring reliability"
    ]
  },
  {
    title: "Real-Time Chess Game",
    description: "A multiplayer chess game using Socket.IO and React. Real-time sync and resignation support.",
    image: "/images/chess/1.png",
    images: [
      "/images/chess/1.png",
      "/images/chess/2.png",
      "/images/chess/3.png",
      "/images/chess/4.png"
    ],
    tech: ["React", "JavaScript", "Socket.IO", "HTML/CSS"],
    github: "https://github.com/Taylan474/chess-website/tree/main",
    highlights: [
      "Full-featured chess game with move validation",
      "Real-time multiplayer functionality",
      "Clean, responsive interface for seamless gameplay",
      "Game state management and move history"
    ]
  },
  {
    title: "Real-Time Object Detection System",
    description: "AI/ML production quality assurance system developed during university internship at Alukon KG. A machine learning prototype using YOLOv11 to verify correct part usage in production lines.",
    image: "/images/thesis/preview.png",
    images: [
      "/images/thesis/preview.png",
      "/images/thesis/yolo-detection-2.png"
    ],
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Machine Learning"],
    route: "/thesis",
    hidden: false,
    highlights: [
      "Computer vision-based quality control for manufacturing processes",
      "Product component detection with very high accuracy",
      "Drastically reduced defective production rate through automated inspection",
      "Real-time processing for integration into production line",
      "Serves as foundation for company-wide implementation"
    ]
  },
  {
    title: "Pomodoro Studying App",
    description: "Productivity application implementing the Pomodoro Technique for effective study sessions. Custom study and break intervals.",
    image: "/images/pomodoro/preview.png",
    images: [
      "/images/pomodoro/preview.png",
      "/images/pomodoro/settings.png"
    ],
    tech: ["React", "JavaScript"],
    github: "https://github.com/Taylan474/pomodoro-studying-app",
    highlights: [
      "Customizable timer intervals for focused work sessions",
      "Break reminders and session tracking",
      "Clean, distraction-free interface",
      "Progress tracking and statistics"
    ]
  },
  {
    title: "FlapPyBlink - Eye-Controlled Game",
    description: "Innovative human-computer interaction system using computer vision for game control. A collaboration project integrating OpenCV-based eye-blink detection into FlapPyBird.",
    tech: ["Python", "OpenCV"],
    github: "https://github.com/sero583/FlapPyBlink",
    collaborator: "@sero583",
    highlights: [
      "OpenCV-based eye-blink detection with real-time facial landmark tracking",
      "Calibration system for personalized detection thresholds",
      "Low-latency input processing for responsive gameplay",
      "Frame buffering and smoothing algorithms"
    ]
  },
  {
    title: "CodeAcademy - Interactive Learning Platform",
    description: "Collaborative project to create an interactive coding education platform emphasizing hands-on learning. Features isolated code execution using Docker containers.",
    image: "/images/codeacademy/1.png",
    images: [
      "/images/codeacademy/1.png",
      "/images/codeacademy/2.png",
      "/images/codeacademy/3.png",
      "/images/codeacademy/4.png",
      "/images/codeacademy/5.png",
      "/images/codeacademy/6.png",
      "/images/codeacademy/7.png",
      "/images/codeacademy/8.png",
      "/images/codeacademy/9.png"
    ],
    tech: ["Laravel", "React", "Docker", "PHP", "MySQL", "JavaScript", "Java", "Python"],
    github: "https://github.com/sero583/PraktikumSWE-CodeAcademy",
    collaborator: "@sero583 & team",
    highlights: [
      "Isolated code execution using Docker containers for multi-language support",
      "Dynamic content management with HTML parsing and syntax highlighting",
      "Automated assessment engine with gamification (XP, achievements, progress tracking)",
      "RESTful API with token-based authentication"
    ]
  },
  {
    comingSoon: true,
    image: "/images/coming-soon.png"
  }
];

export default projects;
