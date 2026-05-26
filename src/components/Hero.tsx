import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onServicesClick?: () => void;
}

export default function Hero({ onServicesClick }: HeroProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden relative">
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl translate-x-1/4"></div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                Premium Digital Solutions
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Building Consumer Grade <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Web, Mobile & IT Solutions</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We are dreamers who believe in empowering people with the knowledge and skillsets to become world-class transformative leaders.
              </p>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <p className="font-medium">
                The quality services we provide build confidence and trust. Our motto of "Powering the digital future" guides us as our North Star.
              </p>
              <p className="font-bold text-lg">
                Our mantras: <span className="text-blue-600">Customer centric</span>, <span className="text-teal-600">Long-term thinking</span>, <span className="text-blue-600">Passion to invent</span>
              </p>
            </div>

            <button
              onClick={onServicesClick}
              className="btn-secondary flex items-center gap-2 group animate-slide-up text-lg font-bold px-8 py-4 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: '0.2s' }}
            >
              Explore Services
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="relative h-96 lg:h-full min-h-96 animate-float" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-300 to-blue-600 rounded-3xl opacity-25 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-teal-500 rounded-3xl h-full flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white space-y-6">
                  <div className="text-8xl animate-bounce">🚀</div>
                  <h3 className="text-4xl font-bold">Digital Innovation</h3>
                  <p className="text-blue-100 text-lg font-semibold">Powering the digital future...</p>
                </div>
              </div>
              <svg className="absolute w-full h-full opacity-20" viewBox="0 0 400 400">
                <circle cx="50" cy="60" r="30" fill="rgba(255,255,255,0.3)" />
                <circle cx="300" cy="100" r="50" fill="rgba(255,255,255,0.2)" />
                <circle cx="100" cy="300" r="40" fill="rgba(255,255,255,0.25)" />
                <circle cx="350" cy="320" r="35" fill="rgba(255,255,255,0.15)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
