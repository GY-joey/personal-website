const timelineData = [
  {
    year: '2025',
    title: '深耕大模型',
    description: '医疗/教育 AI 落地',
    icon: '🎯',
  },
  {
    year: '2024',
    title: '跨界 AI 产品',
    description: '主导 Unity 认证从 0 到 1',
    icon: '🚀',
  },
  {
    year: '2023',
    title: '辩论队队长',
    description: '锤炼逻辑与表达',
    icon: '🎤',
  },
  {
    year: '2022',
    title: '广告学入门',
    description: 'GPA 3.9（专业前 5%）',
    icon: '🎓',
  },
];

export default function Timeline() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          成长历程
        </h2>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-indigo-200"></div>
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 ml-12 md:ml-0">
                  <div
                    className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
