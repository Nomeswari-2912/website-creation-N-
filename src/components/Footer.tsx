import { Layers3, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: any) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    links: [
      { label: 'About Us', action: 'about' },
      { label: 'Services', action: 'services' },
      { label: 'Contact Us', action: 'contact' },
    ],
    services: [
      'Learning Platform',
      'Web App Development',
      'Mobile App Development',
      'IT Training',
      'Product Development',
      'ZOHO CRM Implementation',
      'Content Development',
      'Quality Engineering',
    ],
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-teal-500 p-2 rounded-lg">
                <Layers3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">NimbusGurus</h3>
                <p className="text-sm text-slate-400">Powering the Digital Future</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              The main mantras of NimbusGurus: <span className="text-teal-400 font-semibold">Customer centric approach</span>, <span className="text-teal-400 font-semibold">Long-term thinking</span>, and <span className="text-teal-400 font-semibold">Passion to invent</span> align with our 10X thinking mindset. We accomplish this through our digital roadmap.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links</h4>
            <ul className="space-y-3">
              {footerLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate(link.action)}
                    className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.label}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <p className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer text-sm">
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              Copyright {currentYear} NimbusGurus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="mailto:info@nimbusgurus.in"
                className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
