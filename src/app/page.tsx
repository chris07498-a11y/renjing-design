import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* --------------------------------------------------------
          [01] Hero Section - 第一屏
          -------------------------------------------------------- */}
      <Hero />

      {/* --------------------------------------------------------
          [02] Project Grid Section - 第二屏：畫廊網格
          -------------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto px-6 py-32 md:py-56">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-x-16 md:gap-y-48">
          
          <ProjectCard 
            title="Quiet Sanctuary" 
            category="Residential Design / London" 
            imageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop" 
          />
          
          {/* 非對稱排版：中段卡片下移 */}
          <div className="md:mt-48 lg:mt-80"> 
            <ProjectCard 
              title="The Curator's Loft" 
              category="Interior Curation / Paris" 
              imageUrl="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1200&auto=format&fit=crop" 
            />
          </div>

          <ProjectCard 
            title="Velvet Harmony" 
            category="Furniture Concept / Milan" 
            imageUrl="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1200&auto=format&fit=crop" 
          />
        </div>
      </section>

      {/* --------------------------------------------------------
          [03] Footer - 頁尾 (美美註解：加大字級與 IG 藝術入口)
          -------------------------------------------------------- */}
      <footer className="w-full py-40 border-t border-[#2A2825]/10 flex flex-col items-center space-y-12">
        {/* 品牌 Logo：加大尺寸提升大氣感 */}
        <div className="font-serif italic text-3xl md:text-4xl text-[#2A2825]">
          Ren.jing design
        </div>

        {/* Instagram 連結：極簡文字設計 */}
        <div className="flex flex-col items-center group">
          <a 
            href="https://www.instagram.com/ren.jingpro/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative"
          >
            <span className="text-[14px] tracking-[0.6em] uppercase text-[#2A2825] opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              Instagram
            </span>
            {/* 懸停時生長的優雅裝飾線 */}
            <div className="mt-2 h-[1px] w-0 bg-[#2A2825] group-hover:w-full transition-all duration-700 ease-in-out mx-auto" />
          </a>
        </div>

        {/* 版權與年份：字級同步提升，確保大王閱覽不費力 */}
        <p className="text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-[#2A2825]/40 text-center">
          © 2026 Ren.jing design & Partners / All Rights Reserved
        </p>
      </footer>
    </div>
  );
}