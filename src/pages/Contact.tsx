import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: '地址',
      content: '中国北京市海淀区中关村大街100号',
      detail: '白首乌研究中心',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'info@cynanres.org',
      detail: 'research@cynanres.org',
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '+86 10 1234 5678',
      detail: '传真：+86 10 1234 5679',
    },
    {
      icon: Clock,
      title: '办公时间',
      content: '周一至周五 9:00 - 17:30',
      detail: '节假日休息',
    },
  ];

  const departments = [
    {
      name: '基因组学研究室',
      email: 'genomics@cynanres.org',
      contact: '李教授',
    },
    {
      name: '药理学研究室',
      email: 'pharmacology@cynanres.org',
      contact: '王教授',
    },
    {
      name: '资源开发部',
      email: 'resources@cynanres.org',
      contact: '张主任',
    },
    {
      name: '国际合作办公室',
      email: 'international@cynanres.org',
      contact: '刘主任',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Mail className="w-12 h-12" />
            <h1 className="text-5xl font-bold">联系我们</h1>
          </div>
          <p className="text-xl opacity-90">欢迎咨询与合作</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">发送消息</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    主题 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="请输入消息主题"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    消息内容 *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="请详细描述您的问题或需求"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center space-x-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>发送消息</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 mb-1">{info.content}</p>
                      <p className="text-gray-500 text-sm">{info.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-900">各部门联系方式</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{dept.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <Mail className="w-4 h-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-gray-600 hover:text-emerald-600 break-all"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="text-gray-500">联系人：{dept.contact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">访客须知</h3>
          <div className="space-y-3 text-gray-700">
            <p>• 如需来访参观或学术交流，请提前一周通过邮件或电话预约</p>
            <p>• 合作洽谈请联系国际合作办公室</p>
            <p>• 学术咨询请直接联系相关研究室</p>
            <p>• 我们通常会在1-2个工作日内回复您的咨询</p>
          </div>
        </div>
      </div>
    </div>
  );
}
