
import { Facebook, Instagram, MessageCircle, Mail, ArrowUp } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="relative bg-gray-50 pt-16 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.05),transparent)] z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.05),transparent)] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          <div>
            <div className="mb-6">
              <span className="text-gas-dark text-2xl font-bold">
                <span className="text-gas-orange">Gás</span> Masters
              </span>
            </div>
            <p className="text-gray-600 mb-6">
              Soluções completas em instalações e reparos para sua casa ou negócio. 
              Atendemos com qualidade e compromisso.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gas-orange/20 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-gas-dark" />
              </a>
              <a 
                href="#" 
                className="bg-gray-100 hover:bg-gas-orange/20 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-gas-dark" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Instalação de Aquecedores
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Conserto de Máquina de Lavar
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Conversão de Gás para Fogões
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Desentupimento
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Ar Condicionado
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-600 hover:text-gas-orange transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-800 font-bold text-lg mb-6">Entre em Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle size={20} className="text-green-500 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">WhatsApp</p>
                  <WhatsAppButton 
                    phoneNumber="5521970128342"
                    variant="outline"
                  />
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-gas-orange mt-1" />
                <a href="mailto:contato@gasmasters.com.br" className="text-gray-600 hover:text-gas-orange transition-colors">
                  contato@gasmasters.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Gás Masters. Todos os direitos reservados.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center bg-gas-orange hover:bg-gas-orange/90 p-3 rounded-full transition-colors"
            aria-label="Voltar para o topo"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
