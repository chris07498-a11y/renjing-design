"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#2A2825]">
      {/* 沉浸式背景大圖：緩緩縮放動畫，營造呼吸感 */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop" 
          alt="Ren.jing Hero" 
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.8]"
        />
      </motion.div>

      {/* 核心標語區：將透明度降至極致，營造「浮於空氣」的體感 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="space-y-10"
        >
          {/* 上方小字：降為 30% 透明，極致低調 */}
          <p className="text-[12px] md:text-[14px] tracking-[0.8em] uppercase text-white/30">
            Ren.jing design Portfolio
          </p>

          {/* 主標題： Everything is Considered 改為 40% 透明度 */}
          <h1 className="font-serif text-6xl md:text-9xl italic leading-[1.1] tracking-tight text-white/40">
            Everything is <br /> 
            {/* 強調字：Artfully 改為更虛幻的 20% 透明度，營造層次感 */}
            <span className="text-white/20 not-italic font-light">Artfully</span> Considered.
          </h1>

          {/* 下滑指引：禪意垂直線，同步降低存在感 */}
          <div className="pt-24 flex flex-col items-center">
            <motion.div 
              animate={{ height: [0, 80, 0], opacity: [0, 0.3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] bg-white/30"
            />
          </div>
        </motion.div>
      </div>

      {/* 視覺壓制：淡淡的紙張紋理蒙層，增加照片厚度 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
    </section>
  );
}