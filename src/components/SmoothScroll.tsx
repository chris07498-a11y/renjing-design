"use client";

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1,         // 數值越小越絲滑（0.05 - 0.15 為佳）
      duration: 1.5,      // 滾動持續時間
      smoothWheel: true,
    }}>
      {children}
    </ReactLenis>
  );
}