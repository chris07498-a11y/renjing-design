"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // Google Form 提交 URL (保持不變)
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVcXACK3sXODmljpHefs7IqnA84v5B8xAv7ZqGvd1ywRreAQ/formResponse";

    const data = new URLSearchParams();
    
    // 密鑰對接：對應大王的 Google 表單 Entry ID
    data.append("entry.2129238773", formData.get("lastName") as string); // 姓氏
    data.append("entry.769400335", formData.get("firstName") as string); // 名字
    data.append("entry.801095376", formData.get("email") as string);    // 信箱
    data.append("entry.373242632", formData.get("phone") as string);    // 電話 (新增)
    data.append("entry.1588108219", formData.get("message") as string); // 訊息內容

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("提交失敗", error);
      alert("暫時無法傳送，請直接撥打電話聯繫我們。");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F0ED] px-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#2A2825]">感謝您的諮詢</h2>
          <p className="tracking-[0.3em] text-[#2A2825]/60">我們已收到您的名帖，將儘速回覆。</p>
          <button onClick={() => window.location.href = "/"} className="pt-10 underline underline-offset-8 opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest text-sm">返回首頁</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-20 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* ==========================================
            [左側]：聯絡資訊與表單
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-16"
        >
          {/* 聯絡資訊 - 這裡已經幫大王補齊資訊 */}
          <section className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#2A2825] leading-tight">期待聽到您的聲音</h2>
            <div className="space-y-6 text-[17px] md:text-[18px] tracking-widest leading-relaxed text-[#2A2825]/90">
              <p className="font-medium">電話：+886 (0) 4 2496 2073</p>
              <p className="font-medium">電子郵件：Ren.jingpro.com</p>
              <p className="pt-4">地址：台中市大里區仁化路843號</p>
              <p className="text-[#2A2825]/70 leading-loose max-w-lg">
                「仁菁」—— 取名諧音自陶潛名句：「結廬在人境，而無車馬喧。」
                我們深信，真正的奢華是在繁華市中心，為您構築一處安放靈魂的靜謐之境。
                不論是空間美學的雕琢、家具選配的品味，或是完整的室內設計規劃，
                仁菁在此靜候，邀您一同開啟這場關於質感的歸家旅程。
              </p>
            </div>
          </section>

          {/* 聯絡表單 */}
          <form onSubmit={handleSubmit} className="space-y-10 pt-4">
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-40">Last Name / 姓氏</label>
                <input required name="lastName" type="text" className="contact-input w-full border-b border-black/10 py-2 bg-transparent outline-none focus:border-black transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-40">First Name / 名字</label>
                <input required name="firstName" type="text" className="contact-input w-full border-b border-black/10 py-2 bg-transparent outline-none focus:border-black transition-colors" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-40">Email / 電子郵件</label>
                <input required name="email" type="email" className="contact-input w-full border-b border-black/10 py-2 bg-transparent outline-none focus:border-black transition-colors" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-40">Phone / 聯絡電話</label>
                <input required name="phone" type="tel" className="contact-input w-full border-b border-black/10 py-2 bg-transparent outline-none focus:border-black transition-colors" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] tracking-[0.2em] uppercase font-semibold opacity-40">Message / 需求簡述</label>
              <textarea required name="message" rows={4} className="contact-input w-full border-b border-black/10 py-2 bg-transparent outline-none focus:border-black transition-colors resize-none" />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="pt-6 text-[14px] tracking-[0.5em] uppercase font-bold hover:opacity-50 transition-all flex items-center group disabled:opacity-30"
            >
              {isLoading ? "傳送中..." : "發送訊息"}
              <span className="ml-6 transform group-hover:translate-x-3 transition-transform text-xl">→</span>
            </button>
          </form>
        </motion.div>

        {/* 右側地圖與照片保持原樣 */}
        <div className="space-y-10">
          <div className="aspect-square bg-stone-200/50 relative overflow-hidden border border-[#2A2825]/5">
             <iframe 
                className="w-full h-full grayscale contrast-110 opacity-80"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.481615703943!2d120.6725225!3d24.1205398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693cf72382903b%3A0x60032b406e9c938a!2zNDA05Y-w5Lit5biC5Y2X5Y2A6IiI5aSn6LevOTjomZ8!5e0!3m2!1szh-TW!2stw!4v1713420000000!5m2!1szh-TW!2stw"
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