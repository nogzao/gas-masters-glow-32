
import { useState } from "react";
import { Phone, Mail, Send, MapPin } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to a backend API
    console.log("Form data:", formData);
    
    // Simulating submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve."
    });
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gas-dark z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-radial from-gas-orange/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em <span className="text-gas-orange">Contato</span>
          </h2>
          <p className="text-gray-300">
            Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
            Atendemos em toda região metropolitana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 animate-fade-in">
            {formStatus?.submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10">
                <div className="bg-green-500/20 p-4 rounded-full mb-4">
                  <Send size={32} className="text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Obrigado!</h3>
                <p className="text-center text-gray-300">{formStatus.message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gas-orange transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gas-orange transition-colors"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gas-orange transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-white mb-2">Serviço Desejado</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gas-orange transition-colors"
                  >
                    <option value="" disabled>Selecione um serviço</option>
                    <option value="aquecedor">Instalação/Conserto de Aquecedor</option>
                    <option value="maquina">Conserto de Máquina de Lavar</option>
                    <option value="fogao">Conversão de Gás para Fogão</option>
                    <option value="desentupimento">Desentupimento</option>
                    <option value="resina">Aplicação de Resina Naturgy</option>
                    <option value="ar-condicionado">Ar Condicionado</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gas-orange transition-colors"
                    placeholder="Descreva seu problema ou necessidade"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gas-orange to-gas-orange/80 text-white py-3 rounded-lg font-medium hover:from-gas-orange hover:to-gas-orange transition-all glow-orange"
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <p className="text-gray-300 mb-8">
                Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas.
                Nossa equipe está pronta para atender você!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <Phone size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Telefone</h4>
                  <a href="tel:+5521970128342" className="text-gray-300 hover:text-gas-orange transition-colors">
                    (21) 97012-8342
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <Mail size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                  <a href="mailto:contato@gasmasters.com.br" className="text-gray-300 hover:text-gas-orange transition-colors">
                    contato@gasmasters.com.br
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 animate-on-scroll">
                <div className="bg-gas-orange/20 p-3 rounded-full">
                  <MapPin size={24} className="text-gas-orange" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Atendemos</h4>
                  <p className="text-gray-300">
                    Rio de Janeiro e Região Metropolitana
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 glass p-6 rounded-xl animate-on-scroll">
              <h4 className="text-xl font-bold text-white mb-4">Horário de Atendimento</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda - Sexta</span>
                  <span className="text-white font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado</span>
                  <span className="text-white font-medium">8:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Emergências</span>
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

export default ContactForm;
