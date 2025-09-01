import { useEffect } from "react";
import { generateSitemap } from "../components/Sitemap";

const SitemapPage = () => {
  useEffect(() => {
    // Set content type to XML
    const sitemapXml = generateSitemap();
    
    // Create and download the sitemap
    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // If running in production, you might want to serve this differently
    console.log("Sitemap XML generated:", sitemapXml);
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      <p className="text-gray-600">
        O sitemap foi gerado. Verifique o console para visualizar o XML.
      </p>
    </div>
  );
};

export default SitemapPage;