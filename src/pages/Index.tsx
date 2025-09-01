
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
        <meta name="description" content="Soluções completas em instalações e reparos para sua casa ou negócio. Especialistas em aquecedores a gás, máquinas de lavar e muito mais." />
        <link rel="canonical" href="https://www.meudominio.com/" />
        <meta property="og:title" content="Gás Masters | Instalação e Manutenção" />
        <meta property="og:description" content="Soluções completas em instalações e reparos para sua casa ou negócio. Atendimento 24h com técnicos certificados." />
        <meta property="og:url" content="https://www.meudominio.com/" />
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
        <Footer />
        <FloatingWhatsAppButton phoneNumber="5521970128342" />
      </div>
    </>
  );
};

export default Index;
