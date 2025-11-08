
import { Phone, Mail, MapPin, AlertTriangle } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-radial from-gas-orange/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gas-dark mb-4">
            Entre em <span className="text-gas-orange">Contato</span>
          </h2>
          <p className="text-gray-700">
            Nossa equipe está pronta para lhe atender.
            Atendemos em toda região metropolitana do Rio de Janeiro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* CTA Section with Urgency Banner */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in border border-gray-200">
            {/* Urgency Banner */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-md flex items-center gap-3 animate-pulse">
              <AlertTriangle size={24} className="text-red-500" />
              <div>
                <h3 className="font-bold text-red-700">Atendimento Urgente</h3>
                <p className="text-red-600 text-sm">Problema com gás ou vazamento? Atendemos em até 40 minutos!</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center py-10 space-y-6">
              <div className="bg-green-100 p-4 rounded-full mb-2">
                <Phone size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Precisa de ajuda?</h3>
              <p className="text-center text-gray-600 mb-6">
                Entre em contato conosco via WhatsApp para um atendimento rápido e personalizado.
                Estamos prontos para resolver seu problema!
              </p>
              
              {/* CTA de Urgência */}
              <div className="w-full space-y-4">
                <WhatsAppButton 
                  phoneNumber="5521970128342"
                  message="URGENTE! Preciso de atendimento imediato!" 
                  variant="cta"
                  showText="Atendimento Emergencial ⚠️"
                />
                
                <div className="text-center text-sm text-red-600 animate-pulse">
                  Tempo médio de resposta: menos de 5 minutos
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>
              <p className="text-gray-700 mb-8">
                Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas.
                Nossa equipe está pronta para atender você!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/10 p-3 rounded-full">
                  <Phone size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">WhatsApp</h4>
                  <WhatsAppButton 
                    phoneNumber="5521970128342"
                    message="Olá! Vim do site e gostaria de mais informações."
                    variant="outline" 
                  />
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/10 p-3 rounded-full">
                  <Mail size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">Email</h4>
                  <a href="mailto:contato@gasmasters.com.br" className="text-gray-600 hover:text-gas-orange transition-colors">
                    contato@gasmasters.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/10 p-3 rounded-full">
                  <Mail size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">Email</h4>
                  <a href="mailto:contato@gasmasters.com.br" className="text-gray-600 hover:text-gas-orange transition-colors">
                    contato@gasmasters.com.br
                  </a>
                </div>
              </div>  
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/10 p-3 rounded-full">
                  <MapPin size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-1">Atendemos</h4>
                  <p className="text-gray-600">
                    Rio de Janeiro e Região Metropolitana
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200 animate-on-scroll">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Horário de Atendimento</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda - Sexta</span>
                  <span className="text-gray-800 font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="text-gray-800 font-medium">8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Emergências</span>
                  <span className="text-gas-orange font-medium">24 horas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
