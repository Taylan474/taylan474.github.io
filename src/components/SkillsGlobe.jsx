import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

function SkillsGlobe() {
  const containerRef = useRef(null);
  const tagCloudRef = useRef(null);

  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Java",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "Git",
    "Docker",
    "SQL",
    "MongoDB",
    "HTML",
    "CSS",
    "REST APIs",
    "C#",
    "Vite",
    "Flutter",
    "Firebase",
    "Linux",
    "PostgreSQL",
  ];

  useEffect(() => {
    if (containerRef.current && !tagCloudRef.current) {
      const container = containerRef.current;
      
      // Clear any existing content
      container.innerHTML = "";
      
      // Create the tag cloud
      tagCloudRef.current = TagCloud(container, skills, {
        radius: 200,
        maxSpeed: "normal",
        initSpeed: "normal",
        direction: 135,
        keep: true,
      });
    }

    return () => {
      if (tagCloudRef.current) {
        // TagCloud doesn't have a built-in destroy method
        // So we just clear the container
        if (containerRef.current) {
          containerRef.current.innerHTML = "";
        }
        tagCloudRef.current = null;
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-purple-950/20 to-gray-900" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Drag and spin the globe to explore my technical skills
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* 3D Globe */}
          <div className="relative">
            {/* Glow effect behind globe */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 blur-3xl rounded-full" />
            
            <div
              ref={containerRef}
              className="tagcloud relative z-10"
              style={{
                color: "#a855f7",
                fontFamily: "inherit",
              }}
            />
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4 max-w-sm">
            <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                5+
              </div>
              <div className="text-gray-400 text-sm mt-1">Languages</div>
            </div>
            
            <div className="bg-gradient-to-br from-violet-900/40 to-violet-950/40 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                4+
              </div>
              <div className="text-gray-400 text-sm mt-1">Years Coding</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-900/40 to-indigo-950/40 backdrop-blur-sm rounded-xl p-6 border border-indigo-500/20 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                1-2
              </div>
              <div className="text-gray-400 text-sm mt-1">Years Professional</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/40 to-indigo-950/40 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                20+
              </div>
              <div className="text-gray-400 text-sm mt-1">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles for TagCloud */}
      <style>{`
        .tagcloud {
          display: inline-block;
          font-weight: 600;
          letter-spacing: 0.05em;
          font-family: inherit;
        }
        
        .tagcloud--item {
          cursor: pointer;
          transition: all 0.15s ease;
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        .tagcloud--item:hover {
          color: #c084fc !important;
          text-shadow: 0 0 20px rgba(192, 132, 252, 0.8), 0 0 40px rgba(192, 132, 252, 0.4);
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}

export default SkillsGlobe;
