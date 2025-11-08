import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import WhereWeServe from "../components/WhereWeServe";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Gás Masters | Instalação e Manutenção";
    
    // Update favicon if needed
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/lovable-uploads/ce115eaf-2fdf-4042-9922-1a585df1cad6.png';
      document.head.appendChild(link);
    }
    
    // Apply light theme
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <>
      <Helmet>
        <title>Gás Masters | Instalação e Manutenção</title>
        <meta name="description" content="Assistência técnica especializada em instalação, manutenção e conserto de aquecedores a gás. Especialistas Rinnai, Lorenzetti, Bosch e outras marcas líderes do mercado no Rio de Janeiro." />
        <link rel="canonical" href="https://www.gasmasters.com.br/" />
        <meta property="og:title" content="Gás Masters | Instalação e Manutenção" />
        <meta property="og:description" content="Assistência técnica especializada em instalação, manutenção e conserto de aquecedores a gás. Especialistas Rinnai, Lorenzetti, Bosch e outras marcas líderes do mercado no Rio de Janeiro." />
        <meta property="og:url" content="https://www.gasmasters.com.br/" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="overflow-hidden bg-white">
        <Header />
        <Hero />
        <ServicesSection />
        <Features />
        <Testimonials />
        <ContactSection />
        <WhereWeServe />

        {/* ⬇️ SUA NOVA SEÇÃO DE ENDEREÇO VAI AQUI ⬇️ */}
        <section className="endereco-section">
          <h2>Endereço</h2>
          <p>
            R. Cel. Cota, 92 - Méier, Rio de Janeiro - RJ, 20735-280
          </p>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2988738214967!2d-43.291756024689754!3d-22.902344579258134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997dc6ae4b27b1%3A0x7b121a6cafe9463a!2sAUTORIZADA%20RINNAI!5e0!3m2!1spt-BR!2sbr!4v1762537430442!5m2!1spt-BR!2sbr" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        {/* ⬆️ FIM DA SEÇÃO ⬆️ */}

        <Footer />
        <FloatingWhatsAppButton phoneNumber="5521970128342" />
      </div>
    </>
  );
};

export default Index;
