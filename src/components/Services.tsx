
import { useState, useEffect } from "react";
import { Flame, Droplet, WrenchIcon, ThermometerIcon, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    icon: <Flame size={32} className="text-gas-orange" />,
    title: "Instalação e Conserto de Aquecedores",
    description: "Manutenção preventiva e corretiva para todos os modelos de aquecedores a gás.",
    color: "from-gas-orange/20 to-gas-orange/5",
  },
  {
    icon: <WrenchIcon size={32} className="text-gas-blue" />,
    title: "Conserto de Máquina de Lavar",
    description: "Diagnóstico preciso e reparo eficiente para sua máquina de lavar voltar a funcionar.",
    color: "from-gas-blue/20 to-gas-blue/5",
  },
  {
    icon: <Flame size={32} className="text-gas-orange" />,
    title: "Conversão de Gás para Fogões",
    description: "Adaptação segura do seu fogão para diferentes tipos de gás, seguindo todas as normas.",
    color: "from-gas-orange/20 to-gas-orange/5",
  },
  {
    icon: <Droplet size={32} className="text-gas-blue" />,
    title: "Desentupimento",
    description: "Desentupimento de pias, esgotos e caixa de gordura com equipamentos modernos.",
    color: "from-gas-blue/20 to-gas-blue/5",
  },
  {
    icon: <WrenchIcon size={32} className="text-gas-orange" />,
    title: "Aplicação de Resina Naturgy",
    description: "Aplicação especializada de resina Naturgy para vedações e reparos.",
    color: "from-gas-orange/20 to-gas-orange/5",
  },
  {
    icon: <ThermometerIcon size={32} className="text-gas-blue" />,
    title: "Ar Condicionado",
    description: "Instalação, revisão e conserto de sistemas de ar condicionado residenciais e comerciais.",
    color: "from-gas-blue/20 to-gas-blue/5",
  },
];

const ServicesSection = () => {
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          setAnimatedItems(prev => [...prev, index]);
        }
      });
    }, { threshold: 0.1 });

    const items = document.querySelectorAll(".service-item");
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-gas-blue/15 to-gas-blue/5 rounded-full blur-3xl z-0 animate-float-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-gas-orange/15 to-gas-orange/5 rounded-full blur-3xl z-0 animate-float" style={{ animationDelay: "3s" }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-gas-orange/5 via-transparent to-gas-blue/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gas-dark mb-4">
            Nossos <span className="text-gradient-primary">Serviços</span>
          </h2>
          <p className="text-gray-800 text-lg font-medium">
            Oferecemos soluções completas para sua casa ou negócio com técnicos altamente qualificados e atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-item card-glassmorphism p-8 rounded-2xl transition-all duration-700 shadow-lg hover:shadow-2xl relative overflow-hidden group ${
                animatedItems.includes(index) ? "animate-bounce-in" : "opacity-0"
              } ${hoveredItem === index ? 'floating-card scale-105' : ''}`}
              data-index={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`bg-gradient-to-br ${service.color} p-5 rounded-2xl inline-block mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gas-dark mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
              <a 
                href="#contato" 
                className="flex items-center text-gas-orange hover:text-gas-blue transition-colors font-semibold group/link"
              >
                Solicitar este serviço
                <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
              </a>
              
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gas-orange via-gas-blue to-gas-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {hoveredItem === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contato" 
            className="btn-gradient px-12 py-4 rounded-full font-bold text-lg shadow-2xl glow-orange hover:scale-110 transition-all duration-300 inline-block"
          >
            Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
