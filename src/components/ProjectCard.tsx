"use client"; // 告訴系統這是要在客戶端施展的魔法

import { motion } from "framer-motion";

export default function ProjectCard({ title, category, imageUrl }: { title: string; category: string; imageUrl: string }) {
  return (
    <motion.div 
      // 初始狀態：往下掉一點點、透明度為 0
      initial={{ opacity: 0, y: 40 }}
      // 當它進入視線範圍時：回到原位、透明度變 1
      whileInView={{ opacity: 1, y: 0 }}
      // 設定過場時間：絲滑的 0.8 秒，帶點優雅的減速
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      // 確保只在第一次滑到時觸發，不會滑上去又消失
      viewport={{ once: true, margin: "-100px" }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700" />
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="font-serif italic text-2xl text-stone-800 tracking-tight">{title}</h3>
        <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mt-3 font-light">{category}</p>
      </div>
    </motion.div>
  );
}