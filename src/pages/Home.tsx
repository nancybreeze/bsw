import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Leaf, BookOpen, TrendingUp } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Microscope,
      title: '基因组学研究',
      description: '深入研究白首乌的基因组结构与功能',
    },
    {
      icon: Leaf,
      title: '药理学研究',
      description: '探索白首乌的药理特性与临床应用',
    },
    {
      icon: BookOpen,
      title: '植物资源',
      description: '白首乌的栽培技术与资源开发',
    },
  ];

  const news = [
    {
      date: '2024-12-05',
      title: '白首乌基因组测序项目完成',
      summary: '我中心成功完成白首乌全基因组测序，相关数据已上传至NCBI数据库。',
    },
    {
      date: '2024-11-20',
      title: '国际学术会议成功举办',
      summary: '白首乌研究国际研讨会在本中心顺利召开，吸引了来自15个国家的专家学者参与。',
    },
    {
      date: '2024-11-10',
      title: '新药研发取得突破',
      summary: '基于白首乌提取物的抗氧化药物临床试验取得积极成果。',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            白首乌研究中心
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Cynanchum auriculatum Research Center
          </p>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            通过整合基因组学、药理学及相关领域研究<br />推动白首乌的深度开发与多学科合作
          </p>
          <Link
            to="/research"
            className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            <span>探索研究成果</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">我们的使命</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            展示白首乌的综合性研究成果，促进白首乌在医药、保健等领域的应用研究与产业开发，
            推动学术交流与多学科合作，为人类健康事业做出贡献。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-emerald-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">最新动态</h2>
            </div>
            <Link
              to="/news"
              className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-1"
            >
              <span>查看更多</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-emerald-500 pl-6 py-4 hover:bg-gray-50 transition-all rounded-r-lg"
              >
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
