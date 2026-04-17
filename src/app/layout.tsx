"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

// ==========================================
// [01] RootLayout 核心結構 (大咪註解：掛載檢查與層級鎖定)
// ==========================================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className="antialiased selection:bg-stone-800/20">
        {!mounted ? (
          /* 初始化載入背景，防止閃爍 */
          <div className="min-h-screen bg-[#B5AC97]" />
        ) : (
          <>
            {/* Navbar 必須在 Scroll 容器之外 */}
            <Navbar />
            <SmoothScroll>
              <main className="pt-20">
                {children}
              </main>
            </SmoothScroll>
          </>
        )}
      </body>
    </html>
  );
}