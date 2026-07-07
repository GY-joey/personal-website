export default function About() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          关于我
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
            <span className="text-8xl">👩‍💻</span>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              嗨，我是甘悦。一个广告学专业出身的 AI 产品经理，也是江汉大学辩论队队长。广告教会我洞察人性、讲述故事；辩论训练了我的逻辑思维与表达能力；AI 让我能把创意和技术落地成真实的产品。目前专注于大模型在医疗、教育等场景的落地实践。相信好的产品经理，是技术与人之间的翻译官。
            </p>
            <div className="flex gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">3.9</div>
                <div className="text-sm text-gray-500">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-gray-500">项目经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-500">用心交付</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
