const projectsData = [
  {
    title: 'Unity 认证考试平台',
    description: '项目管理/产品化/商务合作',
    tags: ['项目管理', '产品化', '商务合作'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI 辅助诊断系统',
    description: '大模型/医疗健康/算法协同',
    tags: ['大模型', '医疗健康', '算法协同'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: '医院 HIS 数据治理平台',
    description: 'AI 工作流/Dify/数据治理',
    tags: ['AI 工作流', 'Dify', '数据治理'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: '算力盒子 - 摩尔线程合作',
    description: '生态合作/硬件产品/国产算力',
    tags: ['生态合作', '硬件产品', '国产算力'],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          项目展示
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  📦
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
