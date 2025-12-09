import { Calendar, Award, Users, FileText, Newspaper } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      date: '2024-12-05',
      category: '研究成果',
      icon: Award,
      title: '白首乌基因组测序项目圆满完成',
      content: '历时三年的白首乌全基因组测序项目顺利完成。该项目采用了第三代测序技术，获得了高质量的参考基因组序列。基因组大小约500Mb，共鉴定出30,247个蛋白质编码基因。相关数据已成功上传至NCBI数据库，为全球研究人员提供开放访问。这一成果将极大推动白首乌的分子生物学研究和品种改良工作。',
      image: 'https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: '2024-11-20',
      category: '学术活动',
      icon: Users,
      title: '2024白首乌研究国际研讨会成功举办',
      content: '由本中心主办的"2024白首乌研究国际研讨会"在北京顺利召开，会议为期三天，吸引了来自中国、美国、日本、韩国等15个国家和地区的200余名专家学者参会。会议围绕白首乌基因组学、药理学、栽培技术等主题进行了深入交流，发布了多项重要研究成果，促进了国际学术合作。',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: '2024-11-10',
      category: '研究突破',
      icon: Award,
      title: '白首乌抗氧化药物临床试验获重大进展',
      content: '由本中心与多家医疗机构合作开展的白首乌提取物抗氧化药物Ⅱ期临床试验取得积极成果。试验结果显示，该药物在改善氧化应激相关指标方面表现出显著效果，安全性良好，未出现严重不良反应。这一突破为白首乌的临床应用开辟了新途径，有望为抗衰老和慢性疾病预防提供新的治疗选择。',
      image: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: '2024-10-15',
      category: '论文发表',
      icon: FileText,
      title: '重要研究成果在Nature Plants发表',
      content: '本中心研究团队在国际顶级期刊Nature Plants上发表了题为"白首乌基因组揭示药用植物次生代谢产物生物合成的进化机制"的研究论文。该研究通过比较基因组学分析，阐明了白首乌中重要药用成分的生物合成途径及其进化起源，为药用植物资源的开发利用提供了理论基础。',
      image: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: '2024-09-28',
      category: '合作项目',
      icon: Users,
      title: '与国际知名研究机构建立战略合作关系',
      content: '本中心与美国斯坦福大学、日本东京大学、中国科学院等多家国际知名研究机构签署了战略合作协议。合作内容包括联合开展白首乌功能基因组学研究、药理活性物质发现、以及青年学者交流培养等。这标志着白首乌研究进入了国际化、系统化的新阶段。',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      date: '2024-09-05',
      category: '资源建设',
      icon: Award,
      title: '白首乌种质资源库正式启用',
      content: '经过两年的建设，白首乌国家级种质资源库正式启用。资源库收集保存了来自全国各地的500余份白首乌种质资源，建立了完整的表型数据和基因型数据库。资源库配备了先进的保存设施和管理系统，将为白首乌的遗传改良和资源保护提供重要支撑。',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const upcomingEvents = [
    { date: '2025-01-15', title: '白首乌药理学研究进展报告会' },
    { date: '2025-02-20', title: '春季学术沙龙：基因编辑在药用植物中的应用' },
    { date: '2025-03-10', title: '国际合作项目启动仪式' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Newspaper className="w-12 h-12" />
            <h1 className="text-5xl font-bold">最新进展</h1>
          </div>
          <p className="text-xl opacity-90">关注白首乌研究的最新动态与成果</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {newsItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-emerald-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-semibold">{item.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-semibold">{item.category}</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{item.content}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">即将举行的活动</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-emerald-500 pl-4 py-2 hover:bg-gray-50 transition-all rounded-r"
                  >
                    <div className="text-sm text-emerald-600 font-semibold mb-1">
                      {event.date}
                    </div>
                    <div className="text-gray-900 font-medium">{event.title}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">订阅更新</h4>
                <p className="text-gray-600 text-sm mb-4">
                  获取最新的研究动态和学术活动信息
                </p>
                <input
                  type="email"
                  placeholder="输入您的邮箱"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold transition-all">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
