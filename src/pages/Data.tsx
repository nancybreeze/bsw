import { Database, Download, ExternalLink, FileText, BarChart3 } from 'lucide-react';

export default function Data() {
  const datasets = [
    {
      category: '基因组数据',
      icon: Database,
      items: [
        {
          name: '白首乌参考基因组 v1.0',
          description: '高质量组装的白首乌全基因组序列，包含30,247个蛋白质编码基因',
          size: '485 MB',
          format: 'FASTA',
          date: '2024-12-01',
          link: 'https://www.ncbi.nlm.nih.gov/genome',
        },
        {
          name: '基因组注释文件',
          description: '基因结构注释、功能注释和GO/KEGG通路信息',
          size: '156 MB',
          format: 'GFF3/GTF',
          date: '2024-12-01',
          link: '#',
        },
        {
          name: '转录组测序数据',
          description: '不同组织和发育阶段的RNA-seq数据（12个样本）',
          size: '28 GB',
          format: 'FASTQ',
          date: '2024-11-15',
          link: 'https://www.ncbi.nlm.nih.gov/sra',
        },
      ],
    },
    {
      category: '药理学数据',
      icon: BarChart3,
      items: [
        {
          name: '活性化合物数据库',
          description: '白首乌中鉴定的23种主要活性化合物的结构和性质信息',
          size: '12 MB',
          format: 'SDF/CSV',
          date: '2024-10-20',
          link: '#',
        },
        {
          name: '抗氧化活性实验数据',
          description: 'DPPH、ABTS等多种抗氧化指标的实验原始数据',
          size: '45 MB',
          format: 'Excel/CSV',
          date: '2024-09-30',
          link: '#',
        },
        {
          name: '药代动力学数据',
          description: '主要活性成分的体内吸收、分布、代谢和排泄数据',
          size: '8 MB',
          format: 'CSV',
          date: '2024-08-15',
          link: '#',
        },
      ],
    },
    {
      category: '表型数据',
      icon: FileText,
      items: [
        {
          name: '种质资源表型数据',
          description: '500份白首乌种质资源的形态学、生理学表型数据',
          size: '22 MB',
          format: 'Excel/CSV',
          date: '2024-09-05',
          link: '#',
        },
        {
          name: '栽培试验数据',
          description: '不同栽培条件下的生长发育和产量数据',
          size: '18 MB',
          format: 'CSV',
          date: '2024-07-10',
          link: '#',
        },
      ],
    },
  ];

  const databases = [
    {
      name: 'NCBI - National Center for Biotechnology Information',
      description: '白首乌基因组和转录组数据已上传至NCBI公共数据库',
      url: 'https://www.ncbi.nlm.nih.gov/',
    },
    {
      name: 'Ensembl Plants',
      description: '植物基因组浏览器和比较基因组学工具',
      url: 'https://plants.ensembl.org/',
    },
    {
      name: 'KEGG PATHWAY Database',
      description: '基因功能和代谢通路信息',
      url: 'https://www.genome.jp/kegg/',
    },
    {
      name: 'PubChem',
      description: '化合物结构和生物活性数据',
      url: 'https://pubchem.ncbi.nlm.nih.gov/',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Database className="w-12 h-12" />
            <h1 className="text-5xl font-bold">研究数据</h1>
          </div>
          <p className="text-xl opacity-90">开放共享，推动白首乌研究的发展</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
          <h3 className="text-lg font-bold text-blue-900 mb-2">数据使用说明</h3>
          <p className="text-blue-800">
            本中心提供的所有数据均遵循开放科学原则，供学术研究使用。
            使用数据时请注明出处并遵守相关数据使用协议。如需商业用途，请联系我们获取授权。
          </p>
        </div>

        {datasets.map((dataset, index) => {
          const Icon = dataset.icon;
          return (
            <div key={index} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{dataset.category}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dataset.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">文件大小：</span>
                        <span className="font-semibold text-gray-700">{item.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">格式：</span>
                        <span className="font-semibold text-gray-700">{item.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">更新日期：</span>
                        <span className="font-semibold text-gray-700">{item.date}</span>
                      </div>
                    </div>

                    <a
                      href={item.link}
                      className="flex items-center justify-center space-x-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg transition-all"
                    >
                      <Download className="w-4 h-4" />
                      <span>下载数据</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">相关数据库</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {databases.map((db, index) => (
              <a
                key={index}
                href={db.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-all">
                    {db.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-all" />
                </div>
                <p className="text-gray-600 text-sm">{db.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
