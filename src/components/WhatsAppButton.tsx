


interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  showText?: string | boolean;
  variant?: "default" | "cta" | "outline";
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de solicitar um orçamento.", 
  showText = true,
  variant = "default" 
}: WhatsAppButtonProps) => {
  const formattedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  
  const getButtonClasses = () => {
    const baseClasses = "flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg";
    
    switch (variant) {
      case "cta":
        return `${baseClasses} bg-gradient-to-r from-gas-orange to-gas-orange/80 text-white font-medium px-6 py-3 rounded-full hover:scale-105 hover:from-gas-orange/90 hover:to-gas-orange`;
      case "outline":
        return `${baseClasses} bg-white/80 backdrop-blur-sm border-2 border-gas-orange text-gas-orange hover:bg-gas-orange/5 px-6 py-3 rounded-full`;
      default:
        return `${baseClasses} bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full`;
    }
  };
  
  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={getButtonClasses()}
    >
      <img 
        src="/lovable-uploads/e0420840-fc98-4e01-970d-b6032ea9a5fd.png" 
        alt="WhatsApp" 
        className="w-5 h-5 animate-pulse"
      />
      {showText && <span>{typeof showText === 'string' ? showText : "Fale Conosco"}</span>}
    </a>
  );
};

export default WhatsAppButton;
