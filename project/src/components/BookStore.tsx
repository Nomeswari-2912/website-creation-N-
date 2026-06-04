import { ShoppingCart, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'info@nimbusgurus.in',
    link: 'mailto:info@nimbusgurus.in',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 12345 67890',
    link: 'tel:+911234567890',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'India',
    link: 'https://www.google.com/maps/search/India',
  },
];

export default function BookStore() {
  const [activeStep, setActiveStep] = useState('1');
  const howItWorksSteps = [
    { step: '1', title: 'Browse Books', desc: 'Explore our catalog of available books', details: 'Browse a curated collection of books available through our store. Choose your titles and add them to your request list.' },
    { step: '2', title: 'Place Request', desc: 'Submit your book request through our website', details: 'Fill out the quick request form to ask for the books you need. Our team will prepare them from the pickup location immediately.' },
    { step: '3', title: 'Quick Dispatch', desc: 'We prepare your order from our location', details: 'Once your request is received, we pack the books and hand them over to a delivery person from our location.' },
    { step: '4', title: 'Fast Delivery', desc: 'Our delivery person brings books to you', details: 'Your books are delivered directly to your address by a trusted delivery person for reliable and convenient service.' },
  ];

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
            Book Store
          </h1>
          <p className="text-xl text-slate-600">
            Browse, Order & Get Books Delivered to Your Location
          </p>
        </div>

        {/* Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 animate-slide-up">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Pickup Location</h2>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg mb-4">
              We deliver books from the location mentioned on our website via a trusted delivery person directly to students who have placed a request.
            </p>
            <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
              <p className="text-sm text-slate-600 mb-2">Our Location:</p>
              <p className="text-xl font-bold text-slate-900 mb-4">NimbusGurus Office</p>
              <p className="text-slate-600 leading-relaxed">
                Our main office location from where all book orders are dispatched. Fast and reliable delivery to students across the campus.
              </p>
            </div>
          </div>

          {/* Map Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Find Us on Map</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 border-2 border-slate-200">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.123456!2d77.5941!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d5f7c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sIndia!5e0!3m2!1sen!2sin!4v1234567890"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20 animate-slide-up">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How It Works</h2>
          <div className="space-y-4">
            {howItWorksSteps.map((item) => (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(item.step)}
                className={`w-full text-left flex gap-4 p-4 rounded-lg border transition-colors ${
                  activeStep === item.step
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  activeStep === item.step ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {howItWorksSteps.find((item) => item.step === activeStep)?.title}
            </h3>
            <p className="text-slate-700">
              {howItWorksSteps.find((item) => item.step === activeStep)?.details}
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white mb-20 animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Book Store?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📚', title: 'Wide Selection', desc: 'Curated collection of books for all interests' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'Quick dispatch from our verified location' },
              { icon: '✅', title: 'Reliable Service', desc: 'Trusted delivery to students on campus' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-slate-900 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Ready to Order Books?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <a
                  key={idx}
                  href={info.link}
                  target={info.icon === MapPin ? '_blank' : undefined}
                  rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                  className="text-center flex flex-col items-center hover:opacity-80 transition-opacity"
                >
                  <div className="bg-blue-600 p-4 rounded-lg mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  <p className="text-blue-300 hover:text-blue-100">{info.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
