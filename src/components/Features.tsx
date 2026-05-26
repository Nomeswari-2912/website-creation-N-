import { Network, Zap, Layers, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Network,
      title: 'Customer Centric Approach',
      description: 'With the customer centric approach ingrained in our DNA we work harmoniously to satisfy our customers',
    },
    {
      icon: Zap,
      title: 'Long term thinking',
      description: 'On a day-to-day basis we strive to achieve customer delight by aligning our customers\' short term and long-term expectations',
    },
    {
      icon: Layers,
      title: 'Innovation, Resilience & Agility',
      description: 'As the world transforms to a new normal our always-on learning agenda drives our commitment to our customers and communities on continuous improvement and providing an adaptive',
    },
    {
      icon: Smartphone,
      title: 'Social Responsibility',
      description: 'We aim to elevate a nation, one placement at a time by training and recruiting underprivileged candidates from the remote regions of India and taking the lead in churning out first generation engineers.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            WHY WE ARE THE BEST
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Find our special unique features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We design your business...We help you grow digitally...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
