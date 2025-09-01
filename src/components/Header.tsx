
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-2xl border-b border-white/20" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 transition-all duration-300 hover:scale-110 group">
          <img 
            src="/lovable-uploads/24c08c65-6841-41cf-8506-ddb4abbe439f.png" 
            alt="Gás Masters Logo" 
            className="h-12 filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["servicos", "sobre", "depoimentos", "contato"].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="relative text-gas-dark hover:text-gas-orange transition-colors font-medium after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gas-orange after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <WhatsAppButton 
            phoneNumber="5521970128342"
            showText="Fale Conosco" 
            variant="default" 
          />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gas-dark p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
        {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden card-glassmorphism backdrop-blur-lg shadow-2xl p-6 m-4 rounded-2xl border border-white/30 animate-slide-up">
          <nav className="flex flex-col space-y-4">
            {["servicos", "sobre", "depoimentos", "contato"].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-gas-dark hover:text-gas-orange transition-all duration-300 font-semibold px-4 py-3 hover:bg-white/20 rounded-xl text-center group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="group-hover:scale-105 inline-block transition-transform duration-300">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </a>
            ))}
            <div className="pt-2">
              <WhatsAppButton 
                phoneNumber="5521970128342"
                showText="Fale Conosco"
                variant="default" 
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
