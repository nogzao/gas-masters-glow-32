
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Silva",
    location: "Copacabana, RJ",
    text: "Tive um problema com meu aquecedor no fim de semana e a Gás Masters atendeu rapidamente. Técnico muito educado e resolveu o problema em menos de 1 hora.",
    rating: 5,
  },
  {
    name: "Carla Mendes",
    location: "Ipanema, RJ",
    text: "Contratei para fazer a conversão do meu fogão e fiquei muito satisfeita com a qualidade do serviço. Preço justo e trabalho impecável.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    location: "Leblon, RJ",
    text: "Minha máquina de lavar estava com problema há semanas. Chamei a Gás Masters e eles diagnosticaram e resolveram o problema no mesmo dia.",
    rating: 4.5,
  },
  {
    name: "Juliana Costa",
    location: "Barra da Tijuca, RJ",
    text: "Tive um problema de entupimento na pia da cozinha. A equipe da Gás Masters foi muito profissional e eficiente, resolvendo rapidamente.",
    rating: 5,
  },
  {
    name: "Fernando Oliveira",
    location: "Botafogo, RJ",
    text: "Excelente atendimento! Precisava de um técnico urgente para meu fogão e eles chegaram em 30 minutos. Problema resolvido com agilidade e competência.",
    rating: 5,
  },
  {
    name: "Mariana Santos",
    location: "Flamengo, RJ",
    text: "Serviço de primeira qualidade. Fizeram a manutenção do meu aquecedor a gás e explicaram tudo detalhadamente. Recomendo para todos!",
    rating: 4.5,
  },
  {
    name: "Lucas Ferreira",
    location: "Tijuca, RJ",
    text: "Estava sem água quente há dias. A Gás Masters resolveu o problema do aquecedor rapidamente e o preço foi muito justo. Equipe muito profissional.",
    rating: 5,
  },
  {
    name: "Ana Paula",
    location: "Laranjeiras, RJ",
    text: "Tive uma emergência com vazamento de gás e eles atenderam imediatamente. Técnicos super capacitados e cuidadosos. Me senti muito segura.",
    rating: 5,
  },
  {
    name: "Ricardo Gomes",
    location: "Vila Isabel, RJ",
    text: "Ótimo custo-benefício! Fizeram a conversão do meu fogão para gás natural com muita eficiência. Trabalho limpo e bem executado.",
    rating: 4.5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const nextTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setAnimating(false);
    }, 500);
  };

  const prevTestimonial = () => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Enhanced background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/20 to-blue-50/20 z-[-2]"></div>
      <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 80% 30%, rgba(249, 115, 22, 0.08) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)'}} />
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-gas-orange/10 to-gas-orange/5 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-gas-blue/10 to-gas-blue/5 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gas-dark mb-4">
            O que nossos <span className="text-gradient-primary">clientes</span> dizem
          </h2>
          <p className="text-gray-800 text-lg font-medium">
            A satisfação dos nossos clientes é nossa prioridade. 
            Confira alguns depoimentos de quem já utilizou nossos serviços.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Enhanced Testimonial card */}
            <div 
              className={`card-glassmorphism p-10 md:p-12 rounded-3xl shadow-2xl relative z-10 transition-all duration-700 border border-white/50 ${
                animating ? "opacity-0 scale-90 rotate-1" : "opacity-100 scale-100 rotate-0"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gas-orange via-gas-blue to-gas-orange flex items-center justify-center text-3xl font-bold text-white mb-4 shadow-xl animate-bounce-in">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="mb-2">
                    <h4 className="text-gas-dark font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-700 text-sm font-medium">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => {
                      const rating = testimonials[currentIndex].rating;
                      const isFilled = i < Math.floor(rating);
                      const isHalf = i === Math.floor(rating) && rating % 1 !== 0;
                      
                      return (
                        <div key={i} className="relative">
                          <Star 
                            size={18} 
                            fill={isFilled ? "#F97316" : "none"}
                            className={`${isFilled ? "text-gas-orange" : "text-gray-400"} transition-all duration-300 hover:scale-125`}
                          />
                          {isHalf && (
                            <Star 
                              size={18} 
                              fill="#F97316"
                              className="text-gas-orange absolute top-0 left-0 transition-all duration-300 hover:scale-125"
                              style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <p className="text-gray-800 text-xl italic relative leading-relaxed font-medium">
                    <span className="text-gradient-primary text-5xl absolute -top-8 -left-4 font-bold">"</span>
                    {testimonials[currentIndex].text}
                    <span className="text-gradient-primary text-5xl absolute -bottom-12 right-0 font-bold">"</span>
                  </p>
                </div>
              </div>
              
              {/* Enhanced Navigation dots */}
              <div className="flex justify-center gap-3 mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      currentIndex === index 
                        ? "bg-gradient-to-r from-gas-orange to-gas-blue w-8 shadow-lg" 
                        : "bg-gray-400 w-3 hover:bg-gray-600"
                    }`}
                    aria-label={`Ver depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Enhanced Background decoration */}
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-gas-orange/25 to-gas-orange/10 rounded-full blur-3xl z-0 animate-float-slow"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-gas-blue/25 to-gas-blue/10 rounded-full blur-3xl z-0 animate-float" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-br from-gas-orange/20 to-transparent rounded-full blur-2xl z-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
