import { useEffect } from "react";
import { CheckCircle, Clock, Award, Users } from "lucide-react";
const Features = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial load

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
  return <section id="sobre" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50/30 via-white to-gray-50/30">
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/20 z-[-2]"></div>
      <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 20%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)'}} />
      
      {/* Enhanced animated gradients */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-radial from-gas-blue/15 to-transparent animate-pulse"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-radial from-gas-orange/10 to-transparent animate-pulse" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column with features */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gas-dark mb-6">
                Por que escolher a <span className="text-gradient-primary">Gás Masters</span>?
              </h2>
              <p className="text-gray-800 mb-8 text-lg font-medium leading-relaxed">
                Há mais de 10 anos levando soluções completas, segurança e tranquilidade para nossos clientes.
                Nossa equipe técnica é altamente qualificada e preparada para resolver qualquer problema.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <Clock size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gas-dark mb-1">Atendimento Rápido</h3>
                  <p className="text-gray-800">
                    Equipe disponível 24/7 para atendimentos emergenciais. Chegamos em até 40 minutos na sua residência.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <Award size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gas-dark mb-1">Garantia de Serviço</h3>
                  <p className="text-gray-800">
                    Todos os nossos serviços possuem garantia. Trabalhamos com as melhores peças e equipamentos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <Users size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gas-dark mb-1">Profissionais Qualificados</h3>
                  <p className="text-gray-800">
                    Técnicos certificados com anos de experiência no mercado de reparos e manutenção.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column with enhanced stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-glassmorphism p-8 rounded-2xl shadow-lg animate-on-scroll group card-hover border border-white/40 relative overflow-hidden">
              <div className="text-5xl font-extrabold text-gas-orange mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-lg text-gray-800 font-semibold">Anos de experiência</div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gas-orange/10 rounded-full blur-xl group-hover:bg-gas-orange/20 transition-colors duration-300"></div>
            </div>
            
            <div className="card-glassmorphism p-8 rounded-2xl shadow-lg animate-on-scroll group card-hover border border-white/40 relative overflow-hidden" style={{
            animationDelay: "200ms"
          }}>
              <div className="text-5xl font-extrabold text-gas-blue mb-3 group-hover:scale-110 transition-transform duration-300">5000+</div>
              <div className="text-lg text-gray-800 font-semibold">Clientes satisfeitos</div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gas-blue/10 rounded-full blur-xl group-hover:bg-gas-blue/20 transition-colors duration-300"></div>
            </div>
            
            <div className="card-glassmorphism p-8 rounded-2xl shadow-lg animate-on-scroll group card-hover border border-white/40 relative overflow-hidden" style={{
            animationDelay: "400ms"
          }}>
              <div className="text-5xl font-extrabold text-gas-blue mb-3 group-hover:scale-110 transition-transform duration-300">24h</div>
              <div className="text-lg text-gray-800 font-semibold">Atendimento</div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gas-blue/10 rounded-full blur-xl group-hover:bg-gas-blue/20 transition-colors duration-300"></div>
            </div>
            
            <div style={{
            animationDelay: "600ms"
          }} className="card-glassmorphism p-8 rounded-2xl shadow-lg animate-on-scroll group card-hover border border-white/40 relative overflow-hidden">
              <div className="text-5xl font-extrabold text-gas-orange mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-lg text-gray-800 font-semibold">Satisfação garantida</div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gas-orange/10 rounded-full blur-xl group-hover:bg-gas-orange/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;