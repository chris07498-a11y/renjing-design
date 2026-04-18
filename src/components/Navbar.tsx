"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full px-8 md:px-16 flex items-center h-[90px] bg-transparent">
      
      {/* 左側 Logo：z-50 確保在最上層，且不霸佔中間空間 */}
      <div className="relative z-50 flex-shrink-0">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-serif italic tracking-tighter text-[#2A2825] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Ren.jing design
        </Link>
      </div>

      {/* 絕對居中選單：恢復大王最愛的「橫向佈局」與「專屬字體類名」 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
        <div className="flex items-center space-x-8 md:space-x-12 pointer-events-auto">
          
          <Link href="/about" className="nav-link-group flex items-center">
            <span className="text-[13px] tracking-[0.1em]">關於</span>
            <span className="nav-link-sub ml-2">/ ABOUT</span>
          </Link>
          
          <Link href="/services" className="nav-link-group flex items-center">
            <span className="text-[13px] tracking-[0.1em]">服務</span>
            <span className="nav-link-sub ml-2">/ SERVICES</span>
          </Link>
          
          <Link href="/works" className="nav-link-group flex items-center">
            <span className="text-[13px] tracking-[0.1em]">案例</span>
            <span className="nav-link-sub ml-2">/ WORKS</span>
          </Link>
          
          <Link href="/contact" className="nav-link-group flex items-center">
            <span className="text-[13px] tracking-[0.1em]">聯絡</span>
            <span className="nav-link-sub ml-2">/ CONTACT</span>
          </Link>
          
        </div>
      </div>

      {/* 右側平衡：隱形佔位確保中間選單在視覺上絕對精準 */}
      <div className="flex-1 invisible" />
    </nav>
  );
}