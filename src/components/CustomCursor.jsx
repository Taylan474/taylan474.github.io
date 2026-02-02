import { useEffect, useState, useRef } from "react";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const trailRef = useRef([]);
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    let animationId;
    let lastTime = Date.now();

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Add to trail with timestamp
      const now = Date.now();
      trailRef.current.push({ x: e.clientX, y: e.clientY, time: now });
      
      // Keep only last 8 points
      if (trailRef.current.length > 8) {
        trailRef.current = trailRef.current.slice(-8);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      trailRef.current = [];
      forceUpdate(n => n + 1);
    };
    
    const handleMouseEnter = () => setIsVisible(true);

    const handlePointerCheck = (e) => {
      const hoveredElement = e.target;
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement);
        setIsPointer(
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.closest("a") ||
          hoveredElement.closest("button")
        );
      }
    };

    // Animation loop for cleaning up trail
    const animate = () => {
      const now = Date.now();
      const oldLength = trailRef.current.length;
      
      // Remove points older than 200ms
      trailRef.current = trailRef.current.filter(point => now - point.time < 200);
      
      // Only trigger re-render if trail changed
      if (trailRef.current.length !== oldLength) {
        forceUpdate(n => n + 1);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handlePointerCheck);
    
    animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handlePointerCheck);
      cancelAnimationFrame(animationId);
      trailRef.current = [];
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const trail = trailRef.current;

  return (
    <>
      {/* Trail particles */}
      {trail.map((point, index) => (
        <div
          key={`${point.time}-${index}`}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: point.x,
            top: point.y,
            width: `${4 + index * 0.5}px`,
            height: `${4 + index * 0.5}px`,
            background: `rgba(168, 85, 247, ${0.1 + index * 0.08})`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      
      {/* Main cursor glow */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Outer glow ring */}
        <div
          className={`absolute rounded-full transition-all duration-300 ${
            isPointer ? "scale-150" : "scale-100"
          }`}
          style={{
            width: "40px",
            height: "40px",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        />
        
        {/* Star/sparkle effect */}
        <div
          className={`absolute transition-all duration-200 ${
            isPointer ? "scale-125" : "scale-100"
          }`}
          style={{
            width: "12px",
            height: "12px",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        >
          {/* Center dot */}
          <div
            className="absolute rounded-full animate-pulse"
            style={{
              width: "6px",
              height: "6px",
              background: "linear-gradient(135deg, #a855f7, #6366f1)",
              boxShadow: "0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #6366f1",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          
          {/* Star points */}
          {[0, 45, 90, 135].map((rotation) => (
            <div
              key={rotation}
              className="absolute"
              style={{
                width: "2px",
                height: "10px",
                background: "linear-gradient(to bottom, transparent, #a855f7, transparent)",
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

export default CustomCursor;
