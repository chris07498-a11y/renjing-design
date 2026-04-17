export default function ServicesPage() {
  const services = [
    { title: "空間設計 / Space Planning", desc: "提供住宅、私人別墅及藝術展場的全案設計。" },
    { title: "軟裝陳設 / Soft Furnishing", desc: "全球藝術家具選品、花藝及材質氛圍營造。" },
    { title: "施工監督 / Construction Supervision", desc: "確保每一處細節都如同設計稿般完美落地。" },
  ];

  return (
    <div className="min-h-screen pt-48 pb-20 px-8 md:px-20 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-serif italic mb-16 text-[#2A2825]">服務範圍 / Services</h1>
      <div className="space-y-20">
        {services.map((s, index) => (
          <div key={index} className="border-t border-[#2A2825]/10 pt-10">
            <h2 className="text-2xl font-medium mb-4">{s.title}</h2>
            <p className="text-[16px] tracking-widest text-[#2A2825]/60 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}