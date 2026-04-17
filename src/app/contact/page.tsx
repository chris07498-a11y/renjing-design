"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* ==========================================
            [左側]：聯絡資訊與表單 (文字體感提升 30%)
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-16"
        >
          {/* 聯絡資訊 */}
          <section className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#2A2825] leading-tight">期待聽到您的聲音</h2>
            <div className="space-y-6 text-[17px] md:text-[18px] tracking-widest leading-relaxed text-[#2A2825]/90">
              <p className="font-medium">電話：+886 (0) 2 1234 5678</p>
              <p className="font-medium">電子郵件：info@renjingdesign.com</p>
              <p className="pt-4">地址：台北市大安區某處禪意巷弄 108 號</p>
              <p className="text-[#2A2825]/70 leading-loose max-w-lg">
                我們的工作室致力於將藝術融入生活空間。
                如果您有任何關於空間美學、家具選配或室內設計的需求，
                歡迎隨時與我們聯絡。
              </p>
            </div>
          </section>

          {/* 聯絡表單 */}
          <form className="space-y-10 pt-4">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-70">名字 (必修)</label>
                <input type="text" className="contact-input" />
              </div>
              <div className="space-y-3">
                <label className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-70">姓氏 (必修)</label>
                <input type="text" className="contact-input" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-70">電子郵件 (必修)</label>
              <input type="email" className="contact-input" />
            </div>

            <div className="space-y-3">
              <label className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-70">訊息簡述 (必修)</label>
              <textarea rows={4} className="contact-input resize-none" />
            </div>

            <button type="submit" className="pt-6 text-[14px] tracking-[0.5em] uppercase font-bold hover:opacity-50 transition-all flex items-center group">
              發送訊息 
              <span className="ml-6 transform group-hover:translate-x-3 transition-transform text-xl">→</span>
            </button>
          </form>
        </motion.div>

        {/* 右側地圖與照片保持原樣 (已在框架中) */}
        <div className="space-y-10">
          <div className="aspect-square bg-stone-200/50 relative overflow-hidden border border-[#2A2825]/5">
             <iframe 
                className="w-full h-full grayscale contrast-110 opacity-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.012!2d121.54!3d25.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAxJzQ4LjAiTiAxMjHCsDMyJzI0LjAiRQ!5e0!3m2!1szh-TW!2stw!4v1620000000000!5m2!1szh-TW!2stw"
                style={{ border: 0 }}
                loading="lazy"
             />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[3/4] bg-stone-300 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800" className="object-cover w-full h-full grayscale-[20%]" alt="detail 1" />
            </div>
            <div className="aspect-[3/4] bg-stone-300 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800" className="object-cover w-full h-full grayscale-[20%]" alt="detail 2" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}