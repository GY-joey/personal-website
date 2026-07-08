export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="text-center text-white">
        <div className="mb-4 flex justify-center gap-2">
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
            🎨 广告人
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
            🤖 AI 产品
          </span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm">
            🎤 辩论队长
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          我是甘悦
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          从广告到 AI，用创意定义产品。用逻辑说服世界，用设计打动人心。
        </p>
      </div>
    </section>
  );
}
