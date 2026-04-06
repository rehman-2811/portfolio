// Cursor.jsx (fixed)
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import '../sections/section.css'

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }; // current position
    const mouse = { x: pos.x, y: pos.y }; // target mouse

    // mousemove listener
    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", move);

    // GSAP ticker subscription
    const ticker = gsap.ticker.add(() => {
      // dot follows exactly
      gsap.set(dot, { x: mouse.x, y: mouse.y });

      // ring follows slowly with easing
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;
      gsap.set(ring, { x: pos.x, y: pos.y });
    });

    // cleanup function
    return () => {
      window.removeEventListener("mousemove", move);
      gsap.ticker.remove(ticker); // ✅ remove only this subscription
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default Cursor;