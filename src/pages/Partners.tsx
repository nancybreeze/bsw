import { Users, Building2, Globe, Award, Mail } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      category: '国际合作机构',
      icon: Globe,
      organizations: [
        {
          name: '斯坦福大学医学院',
          country: '美国',
          collaboration: '联合开展白首乌药理学和临床研究',
        },
        {
          name: '东京大学药学部',
          country: '日本',
          collaboration: '天然产物化学与活性成分研究合作',
        },
        {
          name: '首尔国立大学',
          country: '韩国',
          collaboration: '传统药用植物基因组学研究',
        },
        {
          name: '慕尼黑工业大学',
          country: '德国',
          collaboration: '代谢组学分析与生物信息学合作',
        },
      ],
    },
    {
      category: '国内合作单位',
      icon: Building2,
      organizations: [
        {
          name: '中国科学院植物研究所',
          location: '北京',
          collaboration: '植物资源与功能基因组学研究',
        },
        {
          name: '北京大学医学部',
          location: '北京',
          collaboration: '药理学研究与新药开发',
        },
        {
          name: '中国中医科学院',
          location: '北京',
          collaboration: '中药现代化研究与临床应用',
        },
        {
          name: '复旦大学生命科学学院',
          location: '上海',
          collaboration: '分子生物学与细胞生物学研究',
        },
        {
          name: '南京农业大学',
          location: '江苏',
          collaboration: '药用植物栽培与育种技术',
        },
        {
          name: '广州中医药大学',
          location: '广东',
          collaboration: '中药资源开发与质量控制',
        },
      ],
    },
  ];

  const funding = [
    {
      name: '国家自然科学基金',
      projects: ['白首乌基因组学研究', '药用成分生物合成机制研究'],
      icon: Award,
    },
    {
      name: '国家重点研发计划',
      projects: ['中药现代化关键技术研究'],
      icon: Award,
    },
    {
      name: '省级科技计划项目',
      projects: ['白首乌种质资源保护与利用', '白首乌产业化技术研发'],
      icon: Award,
    },
  ];

  const opportunities = [
    {
      title: '博士后研究岗位',
      description: '招聘植物基因组学、药理学、生物信息学等方向的博士后研究人员',
      requirements: ['已获得博士学位', '具有相关研究背景', '发表过高水平学术论文'],
    },
    {
      title: '国际访问学者',
      description: '欢迎国内外学者来访交流，开展短期或长期合作研究',
      requirements: ['具有明确的研究计划', '与本中心研究方向相关', '良好的学术背景'],
    },
    {
      title: '产学研合作',
      description: '寻求企业合作伙伴，共同推动白首乌产品开发与产业化',
      requirements: ['相关领域企业', '有产品开发能力', '重视研发投入'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Users className="w-12 h-12" />
            <h1 className="text-5xl font-bold">合作伙伴</h1>
          </div>
          <p className="text-xl opacity-90">携手合作，共创未来</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {partners.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className="mb-16">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {section.organizations.map((org, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{org.name}</h3>
                    <div className="text-sm text-emerald-600 font-semibold mb-3">
                      {org.country || org.location}
                    </div>
                    <p className="text-gray-600">{org.collaboration}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">科研资助</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {funding.map((fund, index) => {
              const Icon = fund.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
                >
                  <Icon className="w-10 h-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{fund.name}</h3>
                  <ul className="space-y-2">
                    {fund.projects.map((project, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center">合作机会</h2>
          <p className="text-xl text-center mb-12 opacity-90">
            我们期待与更多研究机构和企业建立合作关系
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-3">{opp.title}</h3>
                <p className="mb-4 opacity-90">{opp.description}</p>
                <div className="space-y-2">
                  <div className="text-sm font-semibold opacity-90">基本要求：</div>
                  <ul className="space-y-1">
                    {opp.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="mr-2">•</span>
                        <span className="opacity-90">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>联系我们讨论合作</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
