export default function AboutPage() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-8 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-serif italic mb-16 text-[#2A2825]">關於仁菁 / About</h1>
      <div className="space-y-12 text-[18px] tracking-[0.2em] leading-loose text-[#2A2825]/80">
        <p className="font-light">「仁菁」取自陶潛詩句：結廬在仁菁，而無車馬喧。</p>
        <p className="font-light">
          我們深信，好的設計不應只是視覺的裝飾，而是居住者靈魂的安放之處。
          透過對材質的極致挑剔、光影的精確捕捉，我們在喧囂的城市中，為您開闢一方純粹的「仁菁」。
        </p>
        <div className="pt-10">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200" className="w-full grayscale-[20%]" alt="studio vibe" />
        </div>
      </div>
    </div>
  );
}