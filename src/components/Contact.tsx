const contactInfo = [
  {
    icon: '📧',
    label: '邮箱',
    value: 'i634@foxmail.com',
    href: 'mailto:i634@foxmail.com',
  },
  {
    icon: '💬',
    label: '微信',
    value: '待补充',
    href: '#',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '待补充',
    href: '#',
  },
  {
    icon: '📍',
    label: '所在地',
    value: '武汉',
    href: '#',
  },
];

export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          联系我
        </h2>
        <p className="text-xl text-white/80 mb-12">
          有合作意向或想聊聊？随时欢迎联系我！
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-white/60 text-sm mb-1">{item.label}</div>
              <div className="text-white font-medium">{item.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
