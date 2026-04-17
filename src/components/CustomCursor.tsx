"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 使用 Spring 物理效果，讓游標移動時帶有一種「絲滑的重量感」
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // 監聽是否有移入「可互動元素」
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .group')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 主游標：一個精緻的半透明圓環 */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-stone-800 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(45, 43, 40, 0.1)" : "rgba(45, 43, 40, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* 中心點：穩重的定位感 */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-stone-800 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}