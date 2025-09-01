import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Hero from "./Hero";
import ServicesSection from "./Services";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";
import WhereWeServe from "./WhereWeServe";
import { BAIRROS_DATA, generateNeighborhoodSEO, generateHVACSchema, generateBreadcrumbsSchema } from "../data/neighborhoods";

const NeighborhoodPage = () => {
  const { city, neighborhood } = useParams<{ city: string; neighborhood: string }>();
  
  console.log('NeighborhoodPage params:', { city, neighborhood });
  
  // Encontrar dados do bairro
  const cityData = city === 'rj' ? BAIRROS_DATA.rio : BAIRROS_DATA.niteroi;
  console.log('City data:', cityData);
  
  const neighborhoodData = Object.values(cityData.zones)
    .flat()
    .find(n => n.slug === neighborhood);
    
  console.log('Neighborhood data:', neighborhoodData);
  console.log('Available neighborhoods:', Object.values(cityData.zones).flat().map(n => n.slug));
    
  if (!neighborhoodData) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Bairro não encontrado</h1>
        <p>Procurando por: {neighborhood} em {city}</p>
        <p>Bairros disponíveis: {Object.values(cityData.zones).flat().map(n => n.slug).join(', ')}</p>
      </div>
    );
  }

  const seoData = generateNeighborhoodSEO(neighborhoodData.name, cityData.name);
  const schemaData = generateHVACSchema(neighborhoodData.name, cityData.name, seoData.canonical);
  const breadcrumbsData = generateBreadcrumbsSchema(neighborhoodData.name, cityData.name, seoData.canonical);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Apply light theme
    document.body.classList.remove('dark');
    document.documentElement.classList.remove('dark');
    
    // Update favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/lovable-uploads/ce115eaf-2fdf-4042-9922-1a585df1cad6.png';
      document.head.appendChild(link);
    }
  }, [city, neighborhood]); // Dependency array includes params to trigger on route change

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.canonical} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsData)}
        </script>
      </Helmet>
      
      <div className="overflow-hidden bg-white">
        <Header />
        <Hero 
          customH1={seoData.h1}
          neighborhood={neighborhoodData.name}
          city={cityData.name}
        />
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

export default NeighborhoodPage;