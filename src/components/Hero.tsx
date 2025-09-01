import { ArrowRight, CheckCircle, AlarmClock } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import { useEffect, useState } from "react";
interface HeroProps {
  customH1?: string;
  neighborhood?: string;
  city?: string;
}
const Hero = ({
  customH1,
  neighborhood,
  city
}: HeroProps) => {
  const [animatedTexts, setAnimatedTexts] = useState<string[]>([]);
  const keyFeatures = ["Atendimento emergencial 24h", "Técnicos certificados", "Garantia em todos os serviços"];
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedTexts([]);
      keyFeatures.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedTexts(prev => [...prev, keyFeatures[index]]);
        }, index * 400);
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/20 to-orange-50/20 z-[-2]"></div>
      <div className="absolute inset-0" style={{
      background: 'radial-gradient(circle at 30% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)'
    }} />
      
      {/* Enhanced Animated gradient shapes */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-gas-orange/15 to-gas-orange/5 rounded-full blur-3xl animate-float-slow z-[-1]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-gas-blue/15 to-gas-blue/5 rounded-full blur-3xl animate-float z-[-1]" style={{
      animationDelay: "3s"
    }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-gas-orange/5 via-transparent to-gas-blue/5 rounded-full blur-3xl animate-float-slow z-[-1]" style={{
      animationDelay: "1.5s"
    }}></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gas-dark leading-tight">
              {customH1 ? <span className="inline-block text-gradient-primary drop-shadow-sm">
                  {customH1}
                </span> : <>
                  <span className="inline-block text-gradient-primary drop-shadow-sm">
                    Soluções Completas
                  </span>
                  <br />
                  <span className="text-gas-dark">para sua casa ou negócio</span>
                </>}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-lg">
              {neighborhood && city ? `Especialistas em instalação e conserto de aquecedores, máquinas de lavar, 
                fogões, desentupimentos, e sistemas de ar condicionado em ${neighborhood} e região.` : "Especialistas em instalação e conserto de aquecedores, máquinas de lavar, fogões, desentupimentos, e sistemas de ar condicionado."}
            </p>
            
            <div className="space-y-3">
              {keyFeatures.map((feature, index) => <div key={index} className={`flex items-center gap-2 transition-all duration-500 ${animatedTexts.includes(feature) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                  <CheckCircle size={20} className="text-gas-orange" />
                  <span className="text-gray-700">{feature}</span>
                </div>)}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <WhatsAppButton phoneNumber="5521970128342" message="Olá! Gostaria de solicitar um orçamento." showText="Solicitar Orçamento" variant="cta" />
              <a href="#servicos" className="btn-gradient border-0 px-8 py-3 rounded-full font-medium text-center transition-all duration-300 flex items-center justify-center gap-2 group glow-blue">
                Conheça Nossos Serviços
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative animate-fade-in-up">
            
            
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gas-blue/20 to-gas-blue/5 w-40 h-40 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -top-6 -left-6 bg-gradient-to-br from-gas-orange/20 to-gas-orange/5 w-40 h-40 rounded-full blur-3xl animate-float" style={{
            animationDelay: "2s"
          }}></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;