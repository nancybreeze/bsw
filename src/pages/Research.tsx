import { Dna, Beaker, Sprout, Brain, ExternalLink } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      icon: Dna,
      title: '基因组学研究',
      subtitle: 'Genomics Research',
      description: '基因组学是白首乌研究的核心领域，通过全基因组测序、基因注释和比较基因组学分析，我们深入理解白首乌的遗传特性和进化机制。',
      highlights: [
        '完成白首乌全基因组测序（基因组大小约500Mb）',
        '鉴定了超过30,000个蛋白质编码基因',
        '构建了高质量的参考基因组数据库',
        '开展了转录组学和表观遗传学研究',
      ],
      links: [
        { name: 'NCBI基因组数据库', url: 'https://www.ncbi.nlm.nih.gov/genome' },
        { name: '基因组浏览器', url: '#' },
        { name: '相关文献', url: '#' },
      ],
    },
    {
      icon: Beaker,
      title: '药理学研究',
      subtitle: 'Pharmacology Research',
      description: '白首乌具有丰富的药理活性成分，我们系统研究其抗氧化、抗衰老、免疫调节等多种药理作用，为临床应用提供科学依据。',
      highlights: [
        '鉴定了20余种活性化合物（多糖、皂苷、黄酮等）',
        '证实了显著的抗氧化和清除自由基作用',
        '发现了免疫调节和抗炎效果',
        '开展了多项临床前研究和安全性评价',
      ],
      links: [
        { name: '药理实验数据', url: '#' },
        { name: '临床试验信息', url: '#' },
        { name: '化合物数据库', url: '#' },
      ],
    },
    {
      icon: Sprout,
      title: '植物资源与应用',
      subtitle: 'Plant Resources & Applications',
      description: '研究白首乌的植物学特性、生态分布和栽培技术，开发高效的种植模式和资源利用方案，推动白首乌产业的可持续发展。',
      highlights: [
        '建立了标准化栽培技术体系',
        '优化了育苗和田间管理方案',
        '开发了品质评价和质量控制标准',
        '建设了种质资源库和示范基地',
      ],
      links: [
        { name: '栽培技术指南', url: '#' },
        { name: '种质资源信息', url: '#' },
        { name: '产品开发', url: '#' },
      ],
    },
    {
      icon: Brain,
      title: '其他研究领域',
      subtitle: 'Other Research Areas',
      description: '整合细胞生物学、分子生物学、生物信息学等多学科方法，全面探索白首乌的生物学机制和应用潜力。',
      highlights: [
        '细胞生物学和信号转导研究',
        '代谢组学和蛋白质组学分析',
        '生物信息学工具开发',
        '跨学科合作研究项目',
      ],
      links: [
        { name: '研究工具', url: '#' },
        { name: '数据分析平台', url: '#' },
        { name: '合作项目', url: '#' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">研究方向</h1>
          <p className="text-xl opacity-90">探索白首乌的多维度研究领域</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-teal-600 p-10 flex flex-col justify-center items-center text-white">
                    <Icon className="w-20 h-20 mb-6" />
                    <h2 className="text-3xl font-bold text-center mb-2">{area.title}</h2>
                    <p className="text-emerald-50 text-center">{area.subtitle}</p>
                  </div>

                  <div className="md:w-2/3 p-10">
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {area.description}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">研究亮点</h3>
                    <ul className="space-y-3 mb-6">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">相关资源</h3>
                    <div className="flex flex-wrap gap-3">
                      {area.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-all"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
