"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-8 md:px-16 relative flex items-center h-[90px]">
      {/* 左側 Logo：固定在左 */}
      <div className="relative z-20">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-serif italic tracking-tighter text-[#2A2825] hover:opacity-70 transition-opacity"
        >
          Ren.jing design
        </Link>
      </div>

      {/* 絕對居中選單：無視 Logo 長度，永遠對齊螢幕中心 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center space-x-8 md:space-x-12 pointer-events-auto">
          <Link href="/about" className="nav-link-group">
            <span className="text-[13px] tracking-[0.1em]">關於</span>
            <span className="nav-link-sub">/ ABOUT</span>
          </Link>
          <Link href="/services" className="nav-link-group">
            <span className="text-[13px] tracking-[0.1em]">服務</span>
            <span className="nav-link-sub">/ SERVICES</span>
          </Link>
          <Link href="/works" className="nav-link-group">
            <span className="text-[13px] tracking-[0.1em]">案例</span>
            <span className="nav-link-sub">/ WORKS</span>
          </Link>
          <Link href="/contact" className="nav-link-group">
            <span className="text-[13px] tracking-[0.1em]">聯絡</span>
            <span className="nav-link-sub">/ CONTACT</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}