import { BAIRROS_DATA } from "../data/neighborhoods";

// Função para gerar sitemap XML
export const generateSitemap = () => {
  const baseUrl = "https://www.meudominio.com";
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Adicionar todas as páginas de bairro
  Object.entries(BAIRROS_DATA).forEach(([cityKey, cityData]) => {
    Object.values(cityData.zones).forEach((neighborhoods) => {
      neighborhoods.forEach((neighborhood) => {
        sitemap += `
  <url>
    <loc>${baseUrl}/${cityData.slug}/${neighborhood.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
      });
    });
  });

  sitemap += `
</urlset>`;

  return sitemap;
};

// Função para contar total de páginas
export const getTotalPages = () => {
  let total = 1; // Home page
  
  Object.entries(BAIRROS_DATA).forEach(([cityKey, cityData]) => {
    Object.values(cityData.zones).forEach((neighborhoods) => {
      total += neighborhoods.length;
    });
  });
  
  return total;
};

// Função para gerar URLs de exemplo
export const getSampleUrls = () => {
  const baseUrl = "https://www.meudominio.com";
  const samples: string[] = [];
  
  // 2 URLs do Centro do Rio
  samples.push(`${baseUrl}/rj/centro`);
  samples.push(`${baseUrl}/rj/saude`);
  
  // 2 URLs da Zona Sul do Rio
  samples.push(`${baseUrl}/rj/copacabana`);
  samples.push(`${baseUrl}/rj/ipanema`);
  
  // 2 URLs da Zona Norte do Rio
  samples.push(`${baseUrl}/rj/tijuca`);
  samples.push(`${baseUrl}/rj/maracana`);
  
  // 2 URLs da Zona Oeste do Rio
  samples.push(`${baseUrl}/rj/campo-grande`);
  samples.push(`${baseUrl}/rj/barra-da-tijuca`);
  
  // 2 URLs de Niterói
  samples.push(`${baseUrl}/niteroi/icarai`);
  samples.push(`${baseUrl}/niteroi/centro`);
  
  return samples;
};