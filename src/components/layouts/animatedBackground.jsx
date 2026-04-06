import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../layouts/component.css"

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    const bubbles = bubblesRef.current;

    // floating animation
    bubbles.forEach((bubble) => {
      gsap.to(bubble, {
        y: "random(-300, 300)",
        x: "random(-300, 300)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // mouse interaction
    const handleMouseMove = (e) => {
      bubbles.forEach((bubble) => {
        const rect = bubble.getBoundingClientRect();
        const dx = e.clientX - rect.left;
        const dy = e.clientY - rect.top;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          gsap.to(bubble, {
            x: `+=${dx * -0.05}`,
            y: `+=${dy * -0.05}`,
            duration: 0.5,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          className="bubble"
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;