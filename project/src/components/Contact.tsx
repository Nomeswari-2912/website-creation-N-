import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const apiBase = import.meta.env.VITE_API_BASE?.trim();
  const isProductionNoBackend = import.meta.env.PROD && !apiBase;
  const apiUrl = apiBase ? `${apiBase.replace(/\/$/, '')}/contact` : '/api/contact';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    if (isProductionNoBackend) {
      setSubmitted(true);
      setSuccessMessage('Message received successfully');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitting(false);
      return;
    }

    try {
      setError('');
      setSuccessMessage('');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let result: { message?: string } = {};
      try {
        result = JSON.parse(text);
      } catch {
        result = { message: text || 'Unable to send your message.' };
      }

      if (!response.ok) {
        throw new Error(result.message || 'Unable to send your message.');
      }

      setSubmitted(true);
      setSuccessMessage('Message received successfully');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      if (err instanceof TypeError || err.message?.includes('Failed to fetch')) {
        setError(
          apiBase
            ? 'Unable to reach the contact server. Make sure the backend is running and VITE_API_BASE is correct.'
            : 'Contact API is not configured in production. Please configure a backend.'
        );
      } else {
        setError(err.message || 'Unable to send your message. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

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
  ];

  return (
    <section className="pt-32 pb-20">
      <div className="section-container">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900">
            Get In Touch
          </h1>
          <p className="text-xl text-slate-600">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 animate-slide-up">
            <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const isExternal = info.link.startsWith('http');
                return (
                  <a
                    key={index}
                    href={info.link}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-600">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg p-8 text-white space-y-4">
              <h3 className="text-2xl font-bold">Ready to Transform Your Business?</h3>
              <p className="text-blue-50">
                Let's discuss how NimbusGurus can help you achieve your digital goals. Our team is ready to support your journey.
              </p>
              <div className="flex items-center gap-2 text-blue-100">
                <Send className="w-5 h-5" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 animate-slide-up">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  {successMessage || "Thank you for your message! We'll get back to you soon."}
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-semibold">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center animate-slide-up">
          <h2 className="text-3xl font-bold mb-4">Have Questions or want to Connect with Us?</h2>
          <a
            href="mailto:info@nimbusgurus.in"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 transition-colors"
          >
            Write to info@nimbusgurus.in
          </a>
        </div>
      </div>
    </section>
  );
}
