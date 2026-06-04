import { Code, BookOpen, Smartphone, PenTool, Database, Zap, X } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const serviceCategories = [
    {
      title: 'Learning Platform',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Building Your Wings Digitally',
      details: 'Comprehensive online learning platform with interactive courses, certifications, and hands-on training modules designed to skill up your team.',
    },
    {
      title: 'IT Training',
      icon: Zap,
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'I Am On The Right Path',
      details: 'Personalized IT training programs covering cloud computing, cybersecurity, DevOps, and modern development practices.',
    },
    {
      title: 'Native / Cloud App Development',
      icon: Smartphone,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The Digital Empowerment',
      details: 'Custom mobile and cloud applications built with latest technologies including React Native, Flutter, AWS, and Azure.',
    },
    {
      title: 'Content Development',
      icon: PenTool,
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Collaborating the World',
      details: 'Professional content creation services including technical documentation, copywriting, video production, and multimedia assets.',
    },
  ];

  const allServices = [
    { icon: BookOpen, name: 'Learning Platform', details: 'Online courses and training modules' },
    { icon: Code, name: 'Web App Development', details: 'Full-stack web applications using React, Node.js, and modern frameworks' },
    { icon: Smartphone, name: 'Mobile App Development', details: 'iOS and Android apps with native performance' },
    { icon: Zap, name: 'IT Training', details: 'Hands-on IT certification and skill development' },
    { icon: Database, name: 'Product Development', details: 'End-to-end product strategy and development' },
    { icon: PenTool, name: 'ZOHO CRM Implementation', details: 'Custom CRM setup, integration, and automation' },
    { icon: BookOpen, name: 'Content Development', details: 'Technical and creative content creation' },
    { icon: Code, name: 'Quality Engineering', details: 'QA testing, automation, and quality assurance' },
  ];

  return (
    <section className="pt-32 pb-20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-900 animate-slide-up">
            Core Service Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-xl h-48 mb-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 text-center group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 text-center mt-1">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-center mb-12 text-slate-900">
            All Our Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedService(service)}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow animate-slide-up cursor-pointer hover:bg-blue-50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {selectedService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in">
              <div className="flex items-start justify-between p-6 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  {selectedService.icon && (
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <selectedService.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{selectedService.title || selectedService.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                {selectedService.image && (
                  <img
                    src={selectedService.image}
                    alt={selectedService.title || selectedService.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <p className="text-slate-600 mb-4">
                  {selectedService.details || 'Professional service tailored to your needs.'}
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
