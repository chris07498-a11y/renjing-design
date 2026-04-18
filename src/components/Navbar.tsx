"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative w-full px-8 md:px-16 flex items-center h-[90px] bg-transparent">
      
      {/* 左側 Logo：調整 Breakpoint 到 lg (1024px) */}
      <div className="relative z-50 flex-shrink-0 flex items-center">
        
        {/* 📱 平板 & 手機 (1024px 以下) 顯示小 LOGO */}
        <Link href="/" className="lg:hidden block hover:opacity-70 transition-opacity">
          <div className="w-10 h-10 rounded-full border border-[#2A2825] flex items-center justify-center font-serif italic text-xl text-[#2A2825]">
            R
          </div>
        </Link>

        {/* 💻 電腦版 (1024px 以上) 才顯示完整英文字 */}
        <Link 
          href="/" 
          className="hidden lg:block text-2xl font-serif italic tracking-tighter text-[#2A2825] hover:opacity-70 transition-opacity whitespace-nowrap"
        >
          Ren.jing design
        </Link>
      </div>

      {/* 絕對居中選單：維持原樣，讓空間更寬敞 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
        <div className="flex items-center space-x-6 md:space-x-12 pointer-events-auto">
          
          <Link href="/about" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">關於</span>
            <span className="nav-link-sub ml-2">/ ABOUT</span>
          </Link>
          
          <Link href="/services" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">服務</span>
            <span className="nav-link-sub ml-2">/ SERVICES</span>
          </Link>
          
          <Link href="/works" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">案例</span>
            <span className="nav-link-sub ml-2">/ WORKS</span>
          </Link>
          
          <Link href="/contact" className="nav-link-group flex items-baseline">
            <span className="text-[13px] tracking-[0.1em] text-[#2A2825]">聯絡</span>
            <span className="nav-link-sub ml-2">/ CONTACT</span>
          </Link>
          
        </div>
      </div>

      <div className="flex-1 invisible" />
    </nav>
  );
}