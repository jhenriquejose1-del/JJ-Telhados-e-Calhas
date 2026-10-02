export const COMPANY_INFO = {
  name: "JJ Telhados e Calhas",
  foundingYear: 1985,
  experienceYears: "Mais de 40 anos",
  phoneDisplay: "(51) 99638-2009",
  phoneRaw: "+5551996382009",
  whatsappDisplay: "(51) 98922-5253",
  whatsappNumber: "5551989225253",
  whatsappDefaultMsg: "Olá, gostaria de um orçamento",
  address: "Atendimento em Porto Alegre, Canoas, Novo Hamburgo e Região Metropolitana - RS",
  hours: "Segunda a Sábado: 07:30 às 18:30 (Plantão WhatsApp)",
  email: "jjtelhadosecalhas1958@gmail.com",
  logoUrl: "/LOGO CERTA.jpeg",
  heroImageUrl: "/src/assets/images/hero_telhado_1790968043087.jpg"
};

/**
 * Fires GA4 custom conversion events for WhatsApp and Phone calls
 */
export function trackWhatsAppClick(label = "botao_whatsapp", serviceName?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_whatsapp", {
      event_category: "contato",
      event_label: label,
      service: serviceName || "geral"
    });
  }
}

export function trackPhoneClick(label = "telefone") {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_ligacao", {
      event_category: "contato",
      event_label: label
    });
  }
}

export function getWhatsAppUrl(customMessage?: string) {
  const msg = customMessage || COMPANY_INFO.whatsappDefaultMsg;
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export const CITIES_SERVED = [
  { name: "Porto Alegre", highlight: "Capital & Todos os Bairros", badge: "Atendimento Imediato" },
  { name: "Canoas", highlight: "Centro, Mathias Velho, Marechal Rondon", badge: "Equipe Local" },
  { name: "Novo Hamburgo", highlight: "Canudos, Hamburgo Velho, Lomba Grande", badge: "Equipe Local" },
  { name: "São Leopoldo", highlight: "Centro, Feitoria, Scharlau", badge: "Atendimento Rápido" },
  { name: "Esteio & Sapucaia", highlight: "Residencial e Industrial", badge: "Rota Diária" },
  { name: "Gravataí & Cachoeirinha", highlight: "Região Central e Parques Industriais", badge: "Rota Diária" },
  { name: "Alvorada & Viamão", highlight: "Condomínios e Residências", badge: "Atendimento Rápido" },
  { name: "Eldorado do Sul & Guaíba", highlight: "Zona Urbana e Rural", badge: "Sob Agendamento" },
];

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  materials: string[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "calhas",
    title: "Instalação de Calhas",
    shortDesc: "Calhas sob medida em corte contínuo para evitar vazamentos e proteger sua alvenaria.",
    fullDesc: "Produzimos e instalamos calhas moldadas com maquinário próprio em chapas galvanizadas e galvalume. Nossas emendas são duplamente vedadas e soldadas para garantir escoamento perfeito das chuvas fortes do Sul.",
    image: "/servico 1.jpeg",
    features: [
      "Calhas moldadas sem emendas desnecessárias",
      "Alta capacidade de vazão para tempestades",
      "Fixação reforçada com suportes reforçados",
      "Pintura eletrostática opcional (diversas cores)"
    ],
    materials: ["Aço Galvanizado Z275", "Galvalume", "Alumínio Naval"],
    ctaText: "Pedir Orçamento"
  },
  {
    id: "telhados",
    title: "Reforma de Telhados",
    shortDesc: "Substituição de telhas quebradas, reforço estrutural de madeira ou metal e alinhamento completo.",
    fullDesc: "Mais de 40 anos recuperando e modernizando telhados residenciais, comerciais e industriais. Corrigimos caimento inadequado, eliminamos pontos de infiltração crônicos e trocamos telhas antigas por opções modernas e térmicas.",
    image: "/servico 12.jpeg",
    features: [
      "Troca e alinhamento de telhas cerâmicas, fibrocimento e metal",
      "Tratamento e reforço de vigamento e ripas",
      "Substituição de cumeeiras e contra-rufos",
      "Garantia total contra goteiras em contrato"
    ],
    materials: ["Telhas Sanduíche Termoacústicas", "Cerâmica Esmaltada", "Telhas Metálicas Trapezoidais"],
    ctaText: "Pedir Orçamento"
  },
  {
    id: "funilaria",
    title: "Funilaria sob Medida",
    shortDesc: "Peças exclusivas dobradas com precisão industrial para cantos, claraboias e chaminés.",
    fullDesc: "Unimos a precisão das dobras industriais em maquinário pesado ao cuidado artesanal na montagem mecânica. Desenvolvemos peças especiais para solucionar os desafios de vedação mais complexos da arquitetura contemporânea.",
    image: "/servico 3.jpeg",
    features: [
      "Dobras computadorizadas com ângulos exatos",
      "Peças sob medida para fachadas e platibandas",
      "Coifas, chapéus de chaminé e exaustores eólicos",
      "Acabamento estético refinado que valoriza o imóvel"
    ],
    materials: ["Galvalume AZM150", "Chapas de Inox 304", "Alumínio Anodizado"],
    ctaText: "Pedir Orçamento"
  },
  {
    id: "rufos-condutores",
    title: "Rufos e Condutores",
    shortDesc: "Proteção máxima para platibandas, paredes de divisa e descidas de água pluvial sem respingos.",
    fullDesc: "Os rufos (pingadeira e de encosto) evitam que a água infiltre entre a parede e o telhado, prevenindo mofo, bolor e rachaduras estruturais. Os condutores canalizam a água com rapidez até a rede de escoamento.",
    image: "/servico 4.jpeg",
    features: [
      "Rufos de encosto com corte e fixação emborrachada",
      "Rufos de capa para platibandas com pingadeira dupla",
      "Condutores verticais com bocais de alto escoamento",
      "Vedações com poliuretano PU industrial UV-resistente"
    ],
    materials: ["Aço Zincado 0.50mm e 0.65mm", "Vedantes de PU Importados"],
    ctaText: "Pedir Orçamento"
  },
  {
    id: "impermeabilizacao",
    title: "Impermeabilização",
    shortDesc: "Mantas asfálticas, membranas líquidas e vedação elástica de lajes, calhas embutidas e encontros.",
    fullDesc: "Diagnóstico preciso e eliminação definitiva de goteiras e umidade por capilaridade. Aplicamos mantas aluminizadas e membranas impermeáveis elásticas de última geração com alta resistência ao sol e à dilatação térmica.",
    image: "/servico 5.jpeg",
    features: [
      "Impermeabilização de calhas de concreto embutidas",
      "Aplicação de manta asfáltica e poliuréia",
      "Tratamento selante de trincas e furos em telhas",
      "Laudo e teste de estanqueidade pós-aplicação"
    ],
    materials: ["Manta Asfáltica Poliéster 4mm", "Resinas Acrílicas Elastoméricas"],
    ctaText: "Pedir Orçamento"
  },
  {
    id: "toldos",
    title: "Toldos e Coberturas",
    shortDesc: "Coberturas metálicas, policarbonato e toldos sob medida com alta proteção solar e contra chuvas.",
    fullDesc: "Desenvolvimento e montagem de estruturas personalizadas em policarbonato, lona e telhas galvanizadas para garagens, entradas e áreas gourmet.",
    image: "/toldo.jpeg",
    features: [
      "Estruturas em alumínio e aço carbono",
      "Proteção contra raios UV e intempéries",
      "Projetos residenciais e comerciais sob medida",
      "Instalação rápida com fixação segura"
    ],
    materials: ["Policarbonato Alveolar e Compacto", "Perfis de Alumínio", "Lona Sintética"],
    ctaText: "Pedir Orçamento"
  }
];

export interface GalleryItem {
  id: number;
  title: string;
  category: "calhas" | "telhados" | "funilaria" | "impermeabilizacao";
  categoryLabel: string;
  image: string;
  description: string;
  location: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Telhado Colonial de Alto Padrão",
    category: "telhados",
    categoryLabel: "Telhados",
    image: "/src/assets/images/hero_telhado_1790968043087.jpg",
    description: "Reforma completa e substituição de telhas cerâmicas com alinhamento a laser em condomínio fechado.",
    location: "Novo Hamburgo, RS"
  },
  {
    id: 2,
    title: "Instalação de Calhas Galvanizadas e Condutores",
    category: "calhas",
    categoryLabel: "Calhas e Rufos",
    image: "/src/assets/images/servico_calhas_1790968052872.jpg",
    description: "Montagem mecânica de calha estrutural de alta vazão com escoamento direto e junções vedadas com PU.",
    location: "Porto Alegre, RS (Bela Vista)"
  },
  {
    id: 3,
    title: "Cobertura Termoacústica e Reforma Estrutural",
    category: "telhados",
    categoryLabel: "Telhados",
    image: "/src/assets/images/servico_reforma_1790968062340.jpg",
    description: "Substituição de cobertura antiga por telhas trapezoidais e recuperação do vigamento de apoio.",
    location: "Canoas, RS"
  },
  {
    id: 4,
    title: "Rufos de Encosto em Platibanda Predial",
    category: "funilaria",
    categoryLabel: "Funilaria Sob Medida",
    image: "/src/assets/images/servico_funilaria_1790968072142.jpg",
    description: "Dobra industrial sob medida com rufo de sobreposição para vedação contra vento e chuva torrencial.",
    location: "Porto Alegre, RS (Moinhos de Vento)"
  },
  {
    id: 5,
    title: "Impermeabilização e Vedação Técnica",
    category: "impermeabilizacao",
    categoryLabel: "Impermeabilização",
    image: "/src/assets/images/servico_impermeabilizacao_1790968089874.jpg",
    description: "Aplicação de manta e membrana elastomérica em pontos de emenda e cumeeiras para contenção total de água.",
    location: "São Leopoldo, RS"
  },
  {
    id: 6,
    title: "Rufo Pingadeira Dupla e Acabamento Arquitetônico",
    category: "calhas",
    categoryLabel: "Calhas e Rufos",
    image: "/src/assets/images/servico_funilaria_1790968072142.jpg",
    description: "Peças de fechamento perimetral para platibanda com pintura protetiva eletrostática.",
    location: "Porto Alegre, RS (Zona Sul)"
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Eduardo Meneghetti",
    role: "Proprietário Residencial",
    city: "Porto Alegre (Bairro Petrópolis)",
    text: "Após uma tempestade muito forte meu telhado começou a vazar na sala. A JJ Telhados fez a vistoria no mesmo dia e em 48 horas trocaram os rufos e instalaram calhas novas de corte contínuo. Trabalho impecável e sem uma gota de água desde então!",
    rating: 5,
    service: "Calhas e Rufos"
  },
  {
    name: "Silvana M. Dornelles",
    role: "Síndica de Condomínio",
    city: "Canoas (Centro)",
    text: "Contratamos a JJ para a reforma das calhas e platibandas do prédio. O contrato com garantia formal e a pontualidade da equipe com NR35 passaram muita segurança para todos os moradores. Recomendo de olhos fechados.",
    rating: 5,
    service: "Reforma Predial"
  },
  {
    name: "Roberto L. Silveira",
    role: "Diretor Comercial",
    city: "Novo Hamburgo",
    text: "Empresa de tradição com mais de 40 anos que você nota no atendimento. As dobras dos rufos sob medida ficaram milimetricamente perfeitas no nosso pavilhão. Melhor custo-benefício da região.",
    rating: 5,
    service: "Funilaria Sob Medida"
  }
];

export const FAQS = [
  {
    q: "Qual é a garantia oferecida nos serviços da JJ Telhados e Calhas?",
    a: "Todos os nossos serviços contam com garantia formal descrita em contrato. Nossas peças galvanizadas e galvalume possuem tratamento anticorrosivo de fábrica e a montagem conta com vedantes industriais certificados."
  },
  {
    q: "Como funciona a vistoria e o orçamento?",
    a: "O orçamento é 100% gratuito e ágil! Você entra em contato pelo nosso WhatsApp (51) 98922-5253 ou ligação (51) 99638-2009. Agendamos a vistoria técnica no seu imóvel para medir e avaliar a melhor solução técnica sem compromisso."
  },
  {
    q: "Quais cidades vocês atendem?",
    a: "Atendemos Porto Alegre, Canoas, Novo Hamburgo, São Leopoldo, Esteio, Sapucaia do Sul, Cachoeirinha, Gravataí, Alvorada, Viamão, Eldorado do Sul e toda a Região Metropolitana."
  },
  {
    q: "Qual material é melhor: Galvanizado, Galvalume ou Alumínio?",
    a: "O Galvalume (liga de alumínio, zinco e silício) e o aço galvanizado Z275 são os mais recomendados pela alta durabilidade contra o clima do Rio Grande do Sul e custo-benefício excelente. Na vistoria, analisamos a inclinação e a agressividade climática do local para indicar o ideal."
  },
  {
    q: "A equipe possui treinamento para trabalho em altura?",
    a: "Sim! Toda a nossa equipe é capacitada com certificação NR-35 (Trabalho em Altura) e utiliza todos os EPIs e Linhas de Vida necessários, garantindo total segurança para a sua família e patrimônio."
  }
];
