const awardsData = [
  {
    title: '国家奖学金',
    year: '2024-2025',
    icon: '🏆',
  },
  {
    title: '校长奖学金',
    year: '本科生最高荣誉',
    icon: '🎓',
  },
  {
    title: '中国国际大学生创新创业大赛铜奖',
    year: '',
    icon: '🥉',
  },
  {
    title: '开源与智能创新技术实验室优秀学员',
    year: '',
    icon: '⭐',
  },
];

export default function Awards() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          荣誉奖项
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awardsData.map((award, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{award.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {award.title}
                  </h3>
                  {award.year && (
                    <p className="text-indigo-600 font-medium">
                      {award.year}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
