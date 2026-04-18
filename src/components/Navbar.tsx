"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full px-8 md:px-16 flex items-center h-[90px] bg-transparent">
      
      {/* ==========================================
          [左側 Logo 區域]：響應式變形控制
          ========================================== */}
      <div className="relative z-50 flex-shrink-0 flex items-center">
        
        {/* 📱 📱 行動端 & 平板直向 (顯示為小 LOGO Icon)
            邏輯：預設顯示 (block)，在 md Breakpoint 以上隱藏 (md:hidden) */}
        <Link href="/" className="md:hidden block hover:opacity-70 transition-opacity">
          {/* 臨時代替品：精緻的圓形 "R" 字 */}
          {/* 大王若有 LOGO 圖片，可將此 div 換成 <img src="/path/to/logo.svg" className="h-9 w-auto" /> */}
          <div className="w-10 h-10 rounded-full border border-[#2A2825] flex items-center justify-center font-serif italic text-xl text-[#2A2825]">
            R
          </div>
        </Link>

        {/* 💻 💻 桌上型電腦 & 平板橫向 (顯示為完整的英文字體)
            邏輯：預設隱藏 (hidden)，在 md Breakpoint 以上顯示 (md:block) */}
        <Link 
          href="/" 
          className="hidden md:block text-xl md:text-2xl font-serif italic tracking-tighter text-[#2A2825] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Ren.jing design
        </Link>
      </div>

      {/* ==========================================
          [絕對居中選單]：保持不變，但調整空間感
          ========================================== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
        <div className="flex items-center space-x-6 md:space-x-12 lg:space-x-16 pointer-events-auto">
          
          <Link href="/about" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">關於</span>
            <span className="nav-link-sub ml-2 whitespace-nowrap">/ ABOUT</span>
          </Link>
          
          <Link href="/services" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">服務</span>
            <span className="nav-link-sub ml-2 whitespace-nowrap">/ SERVICES</span>
          </Link>
          
          <Link href="/works" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">案例</span>
            <span className="nav-link-sub ml-2 whitespace-nowrap">/ WORKS</span>
          </Link>
          
          <Link href="/contact" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">聯絡</span>
            <span className="nav-link-sub ml-2 whitespace-nowrap">/ CONTACT</span>
          </Link>
          
        </div>
      </div>

      {/* 右側平衡區：輔助絕對置中 */}
      <div className="flex-1 invisible" />
    </nav>
  );
}