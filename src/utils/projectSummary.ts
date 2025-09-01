import { BAIRROS_DATA } from "../data/neighborhoods";
import { getSampleUrls, getTotalPages } from "../components/Sitemap";

export const generateProjectSummary = () => {
  const totalPages = getTotalPages();
  const sampleUrls = getSampleUrls();
  
  // Contar páginas por zona
  const pageCounts = {
    rioTotal: 0,
    niteroiTotal: 0,
    byZone: {} as Record<string, number>
  };
  
  Object.entries(BAIRROS_DATA).forEach(([cityKey, cityData]) => {
    Object.entries(cityData.zones).forEach(([zoneName, neighborhoods]) => {
      const count = neighborhoods.length;
      pageCounts.byZone[`${cityData.name} - ${zoneName}`] = count;
      
      if (cityKey === 'rio') {
        pageCounts.rioTotal += count;
      } else {
        pageCounts.niteroiTotal += count;
      }
    });
  });

  return {
    totalPages,
    neighborhoodPages: totalPages - 1, // Excluindo a home
    sampleUrls,
    pageCounts,
    features: [
      "✅ Todas as páginas criadas com SEO otimizado",
      "✅ H1 customizado por bairro",
      "✅ Meta titles e descriptions únicos",
      "✅ URLs canônicas configuradas",  
      "✅ JSON-LD Schema (HVACBusiness + Breadcrumbs)",
      "✅ Bloco 'onde atendemos' adicionado a todas as páginas",
      "✅ Interlinking completo entre bairros",
      "✅ Sitemap atualizado",
      "✅ Robots.txt configurado",
      "✅ Responsivo e acessível"
    ]
  };
};