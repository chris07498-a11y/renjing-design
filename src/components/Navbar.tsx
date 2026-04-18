"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full px-8 md:px-16 flex items-center h-[90px] bg-transparent">
      
      {/* 左側 Logo：加上 flex-1 確保它佔據左側空間並靠左對齊 */}
      <div className="flex-1 flex justify-start relative z-20">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-serif italic tracking-tighter text-[#2A2825] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Ren.jing design
        </Link>
      </div>

      {/* 絕對居中選單：inset-0 配合 flex justify-center，無視 Logo 長度 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex items-center space-x-6 lg:space-x-12 pointer-events-auto">
          <Link href="/about" className="nav-link-group group">
            <span className="text-[12px] md:text-[13px] tracking-[0.1em] block text-center">關於</span>
            <span className="nav-link-sub opacity-30 group-hover:opacity-100 transition-opacity block text-[10px] text-center">/ ABOUT</span>
          </Link>
          <Link href="/services" className="nav-link-group group">
            <span className="text-[12px] md:text-[13px] tracking-[0.1em] block text-center">服務</span>
            <span className="nav-link-sub opacity-30 group-hover:opacity-100 transition-opacity block text-[10px] text-center">/ SERVICES</span>
          </Link>
          <Link href="/works" className="nav-link-group group">
            <span className="text-[12px] md:text-[13px] tracking-[0.1em] block text-center">案例</span>
            <span className="nav-link-sub opacity-30 group-hover:opacity-100 transition-opacity block text-[10px] text-center">/ WORKS</span>
          </Link>
          <Link href="/contact" className="nav-link-group group">
            <span className="text-[12px] md:text-[13px] tracking-[0.1em] block text-center">聯絡</span>
            <span className="nav-link-sub opacity-30 group-hover:opacity-100 transition-opacity block text-[10px] text-center">/ CONTACT</span>
          </Link>
        </div>
      </div>

      {/* 右側佔位：為了平衡 Flex 佈局，放一個空的 flex-1 */}
      <div className="flex-1 hidden md:block" />
    </nav>
  );
}