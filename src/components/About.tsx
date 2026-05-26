import { CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Customer Centric Approach',
      description: 'We put our customers at the heart of everything we do, building solutions that truly address their needs and create lasting value.',
    },
    {
      icon: Lightbulb,
      title: 'Long-term Thinking',
      description: 'We plan for sustainable growth, balancing immediate results with long-term vision to ensure continued success and innovation.',
    },
    {
      icon: Heart,
      title: 'Passion to Invent',
      description: 'Innovation is in our DNA. We continuously push boundaries to create solutions that are ahead of the curve and transformative.',
    },
  ];

  const achievements = [
    { metric: '100+', label: 'Projects Delivered' },
    { metric: '500+', label: 'Professionals Trained' },
    { metric: '50+', label: 'Team Members' },
    { metric: '10+', label: 'Years Experience' },
  ];

  return (
    <section className="pt-32 pb-20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
            About NimbusGurus
          </h1>
          <p className="text-xl text-slate-600">
            Powering the Digital Future Through Innovation and Excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <p className="text-slate-600 leading-relaxed">
              NimbusGurus is founded on the belief that everyone deserves the opportunity to become a world-class transformative leader. We are dreamers who empower people with knowledge and skillsets to pursue unique career paths and achieve their fullest potential.
            </p>
            <p className="text-slate-600 leading-relaxed">
              With a powerful combination of expertise in web, mobile, and IT solutions, we deliver quality services that build confidence and trust. Our work is guided by our North Star motto: "Powering the digital future" — providing context and meaning to every project we undertake.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We're a growing team with a remarkable combination of skills and a shared passion for digital innovation. Our commitment to excellence ensures that every stakeholder receives promises we can deliver.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 bg-gradient-to-r from-blue-50 to-teal-50 p-12 rounded-2xl animate-slide-up">
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
              <p className="text-slate-600 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white p-12 rounded-2xl space-y-6 animate-slide-up">
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-lg leading-relaxed text-slate-200">
            To empower individuals and organizations with innovative digital solutions while maintaining the highest standards of quality, integrity, and customer satisfaction. We believe in creating lasting impact through technology and human potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-700">
            <div>
              <h3 className="font-bold text-teal-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Our 10X Thinking Mindset
              </h3>
              <p className="text-slate-300">
                We don't just improve incrementally. Our three core mantras guide us to think bigger, dream larger, and create transformative solutions that deliver exponential value.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-teal-400 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Your Digital Roadmap
              </h3>
              <p className="text-slate-300">
                We partner with you to design and execute your digital transformation journey, ensuring every step moves you closer to your vision of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
