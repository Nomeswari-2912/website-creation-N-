import { Layers3, Menu, X, Home, Briefcase, Info, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: any) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', Icon: Home },
    { id: 'services', label: 'Our Services', Icon: Briefcase },
    { id: 'about', label: 'About Us', Icon: Info },
    { id: 'contact', label: 'Contact Us', Icon: Mail },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setShowMobileMenu(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-xl border-b border-slate-200/50 z-50 shadow-lg">
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg group-hover:shadow-lg transition-all">
              <Layers3 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">NimbusGurus</h1>
              <p className="text-xs text-teal-600 font-semibold tracking-wide">Powering the Digital Future</p>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 shadow-lg ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 shadow-xl scale-[1.01]'
                    : 'bg-gradient-to-r from-blue-600 to-teal-500/90 hover:from-blue-500 hover:to-teal-500 hover:shadow-xl'
                }`}
              >
                <item.Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {showMobileMenu && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-slate-200 pt-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 shadow-xl'
                    : 'bg-gradient-to-r from-blue-600 to-teal-500/90 hover:from-blue-500 hover:to-teal-500 hover:shadow-xl'
                }`}
              >
                <item.Icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
