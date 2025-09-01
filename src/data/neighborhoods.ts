// Dados completos dos bairros do Rio de Janeiro e Niterói
// Baseados em dados oficiais das prefeituras

export interface Neighborhood {
  name: string;
  slug: string;
}

export interface City {
  name: string;
  slug: string;
  zones: Record<string, Neighborhood[]>;
}

// Função para criar slug a partir do nome do bairro
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-'); // Substitui espaços por hífens
};

// Criar array de bairros com slugs
const createNeighborhoods = (names: string[]): Neighborhood[] => {
  return names.map(name => ({
    name,
    slug: createSlug(name)
  }));
};

export const BAIRROS_DATA: Record<string, City> = {
  rio: {
    name: "Rio de Janeiro",
    slug: "rj",
    zones: {
      "Centro": createNeighborhoods([
        "Centro", "Saúde", "Gamboa", "Santo Cristo", "Cidade Nova", 
        "Estácio", "Rio Comprido", "Santa Teresa", "Lapa", "Glória",
        "Catete"
      ]),
      "Zona Sul": createNeighborhoods([
        "Copacabana", "Ipanema", "Leblon", "Botafogo", "Flamengo", "Laranjeiras", 
        "Urca", "Humaitá", "Lagoa", "Jardim Botânico", "Gávea", "São Conrado"
      ]),
      "Zona Norte": createNeighborhoods([
        "Tijuca", "Maracanã", "Praça da Bandeira", "São Cristóvão",
        "Benfica", "Mangueira", "Caju", "Grajaú", "Vila Isabel", "Andaraí",
        "Madureira", "Turiaçu", "Rocha Miranda", "Honório Gurgel", "Oswaldo Cruz",
        "Bento Ribeiro", "Marechal Hermes", "Deodoro", "Vila Militar", "Campo dos Afonsos",
        "Jardim Sulacap", "Magalhães Bastos", "Méier", "Cachambi", "Todos os Santos",
        "Encantado", "Água Santa", "Piedade", "Abolição", "Pilares", "Del Castilho",
        "Inhaúma", "Engenho da Rainha", "Tomás Coelho", "Jacaré", "Sampaio",
        "Riachuelo", "Rocha", "São Francisco Xavier"
      ]),
      "Zona Oeste": createNeighborhoods([
        "Campo Grande", "Cosmos", "Inhoaíba", "Bangu", "Realengo", "Padre Miguel",
        "Senador Camará", "Santíssimo", "Senador Vasconcelos", "Paciência", 
        "Santa Cruz", "Sepetiba", "Guaratiba", "Pedra de Guaratiba", "Barra de Guaratiba",
        "Barra da Tijuca", "Recreio dos Bandeirantes", "Jacarepaguá", "Freguesia",
        "Pechincha", "Taquara", "Tanque", "Praça Seca", "Vila Valqueire", "Anil",
        "Gardênia Azul", "Curicica", "Camorim", "Vargem Grande", "Vargem Pequena",
        "Grumari", "Itanhangá", "Joá"
      ])
    }
  },
  niteroi: {
    name: "Niterói",
    slug: "niteroi", 
    zones: {
      "Niterói": createNeighborhoods([
        "Icaraí", "Santa Rosa", "Centro", "Ingá", "São Francisco", "Charitas",
        "Jurujuba", "Fátima", "Vital Brazil", "Flexal", "São Domingos", "Pé Pequeno",
        "Baldeador", "Santana", "Cachoeiras", "Viradouro", "Barreto", "Engenhoca",
        "Porto da Madama", "Tenente Jardim", "Caramujo", "Várzea das Moças",
        "Fonseca", "Cubango", "Sapê", "Maceió", "Matapaca", "Cantagalo",
        "Vila Progresso", "Cafubá", "Piratininga", "Camboinhas", "Itaipu",
        "Itacoatiara", "Engenho do Mato", "Jacaré", "Rio do Ouro", "Maria Antônia",
        "Maravista", "Pendotiba", "Badu", "Largo da Batalha", "Ititioca"
      ])
    }
  }
};

// Função para gerar dados SEO por bairro
export const generateNeighborhoodSEO = (neighborhood: string, city: string) => {
  const serviceCurto = "Conserto de aquecedores a gás";
  const nomeMarca = "Gás Masters";
  
  return {
    title: `${serviceCurto} em ${neighborhood} | ${nomeMarca}`,
    description: `Assistência técnica em aquecedores a gás em ${neighborhood} – atendimento rápido, técnicos certificados. Agende pelo WhatsApp.`,
    h1: `${serviceCurto} em ${neighborhood} (${city})`,
    canonical: `https://www.meudominio.com/${city === "Rio de Janeiro" ? "rj" : "niteroi"}/${createSlug(neighborhood)}`
  };
};

// Função para gerar JSON-LD Schema
export const generateHVACSchema = (neighborhood: string, city: string, canonical: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Gás Masters",
    "description": `Assistência técnica especializada em aquecedores a gás em ${neighborhood}`,
    "areaServed": {
      "@type": "City",
      "name": city
    },
    "url": canonical,
    "telephone": "+5521970128342",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": neighborhood,
      "addressRegion": city === "Rio de Janeiro" ? "RJ" : "RJ"
    }
  };
};

// Função para gerar Breadcrumbs JSON-LD
export const generateBreadcrumbsSchema = (neighborhood: string, city: string, canonical: string) => {
  const citySlug = city === "Rio de Janeiro" ? "rj" : "niteroi";
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://www.meudominio.com/"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": city,
        "item": `https://www.meudominio.com/${citySlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": neighborhood,
        "item": canonical
      }
    ]
  };
};