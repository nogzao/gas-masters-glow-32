
import { MessageCircle, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de solicitar um orçamento." 
}: FloatingWhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  const [isVisible, setIsVisible] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Random interval to toggle urgent state to create attention
    const urgentInterval = setInterval(() => {
      setIsUrgent(prev => !prev);
    }, 2000);
    
    window.addEventListener("scroll", handleScroll);
    // Set initial state
    setTimeout(() => setIsVisible(true), 1500);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(urgentInterval);
    };
  }, []);
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
    }`}>
      {/* Urgent notice */}
      <div className={`bg-white py-2 px-4 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 transition-all duration-300 ${
        isUrgent ? 'bg-red-50 text-red-600 scale-105' : 'bg-white text-gray-700 scale-100'
      }`}>
        <AlertTriangle size={16} className={isUrgent ? 'text-red-500' : 'text-gas-orange'} />
        <span>Atendimento 24h</span>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 hover:scale-110 border-2 border-white group"
        aria-label="Contato via WhatsApp"
      >
        <div className="absolute w-full h-full rounded-full bg-green-400 animate-ping opacity-30"></div>
        <img 
          src="/lovable-uploads/e0420840-fc98-4e01-970d-b6032ea9a5fd.png" 
          alt="WhatsApp" 
          className="w-6 h-6 group-hover:animate-pulse"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
