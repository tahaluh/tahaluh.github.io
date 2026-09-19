const translationsToEnglish = new Map([
  ['Pular para o conteúdo', 'Skip to content'],
  ['Abrir menu', 'Open menu'],
  ['Sobre', 'About'],
  ['Experiência', 'Experience'],
  ['Trabalho', 'Work'],
  ['Projetos', 'Projects'],
  ['Contato', 'Contact'],
  ['Baixar CV', 'Download résumé'],
  ['Software Engineer em João Pessoa, Brasil', 'Software Engineer in João Pessoa, Brazil'],
  ['Eu construo sistemas que conectam', 'I build systems that connect'],
  ['IA', 'AI'],
  ['produto', 'product'],
  ['e', 'and'],
  ['engenharia', 'engineering'],
  ['Sou Thauã Magalhães, desenvolvedor de software e estudante de Engenharia da Computação na UFPB. Transformo problemas complexos em produtos claros, confiáveis e prontos para uso real.', 'I am Thauã Magalhães, a software engineer and Computer Engineering student at UFPB. I turn complex problems into clear, reliable products built for real-world use.'],
  ['Ver projetos', 'View projects'],
  ['Falar comigo', 'Contact me'],
  ['RAG e agentes', 'RAG and agents'],
  ['React e Node.js', 'React and Node.js'],
  ['Cloud e dados', 'Cloud and data'],
  ['Engenharia que sai do protótipo e chega à produção', 'Engineering that moves from prototype to production'],
  ['100 mil+', '100K+'],
  ['conversas únicas em uma plataforma com IA', 'unique conversations on an AI platform'],
  ['~4 milhões', '~4 million'],
  ['de webhooks processados por dia', 'webhooks processed per day'],
  ['menos rejeições em um fluxo de saúde', 'fewer rejections in a healthcare workflow'],
  ['3 edições', '3 editions'],
  ['como juiz da OBR', 'as an OBR judge'],
  ['01 / SOBRE', '01 / ABOUT'],
  ['Curiosidade técnica com responsabilidade de produto.', 'Technical curiosity with product responsibility.'],
  ['Minha trajetória começou no curso técnico em Informática do IFRN e ganhou novas camadas na Engenharia da Computação. Hoje trabalho entre software, inteligência artificial, dados e sistemas que precisam funcionar de verdade.', 'My journey began with a technical degree in Computing at IFRN and expanded through Computer Engineering. Today I work across software, artificial intelligence, data, and systems that need to perform in the real world.'],
  ['Minha experiência recente passa por IA generativa, produtos educacionais, analytics em escala e sistemas que apoiam operações técnicas. Já trabalhei com RAG, aplicações multimodais, ingestão de milhões de eventos diários, ferramentas internas e automação de processos.', 'My recent experience spans generative AI, educational products, analytics at scale, and systems that support technical operations. I have worked with RAG, multimodal applications, ingestion of millions of daily events, internal tools, and process automation.'],
  ['Gosto de projetos em que entender o problema é tão importante quanto escrever o código. Isso aparece no produto, na arquitetura e também nos meus experimentos com redes, computação gráfica, processamento de imagens, compressão e sistemas embarcados.', 'I enjoy projects where understanding the problem matters as much as writing the code. That approach shapes the product, the architecture, and my experiments with networks, computer graphics, image processing, compression, and embedded systems.'],
  ['02 / EXPERIÊNCIA', '02 / EXPERIENCE'],
  ['Produtos, IA e operações em escala.', 'Products, AI, and operations at scale.'],
  ['Experiência ponta a ponta, da descoberta do problema ao monitoramento em produção.', 'End-to-end experience, from problem discovery to production monitoring.'],
  ['Dez 2023 até hoje', 'Dec 2023 to present'],
  ['Ilhas Cayman · Remoto', 'Cayman Islands · Remote'],
  ['Desenvolvimento do principal produto da empresa, uma plataforma de chat com IA que integra múltiplos modelos, RAG e entradas multimodais para criar e publicar jogos.', 'Development of the company\'s core product, an AI chat platform that combines multiple models, RAG, and multimodal inputs to create and publish games.'],
  ['Mais de 100 mil conversas únicas processadas com interações contextualizadas.', 'More than 100K unique conversations processed with contextual interactions.'],
  ['Dashboards em tempo real para métricas de negócio, transações e inconsistências de carteira.', 'Real-time dashboards for business metrics, transactions, and wallet inconsistencies.'],
  ['Moderação automatizada de usuários e conteúdo gerado com critérios de qualidade e conformidade.', 'Automated moderation of users and generated content using quality and compliance criteria.'],
  ['Out 2025 até hoje', 'Oct 2025 to present'],
  ['Osasco, SP · Remoto', 'Osasco, SP · Remote'],
  ['Fundação 1Bi · AprendiZAP', 'Fundação 1Bi · AprendiZAP'],
  ['Desenvolvimento e evolução do ecossistema AprendiZAP, com atuação principalmente na plataforma educacional e em ferramentas usadas por professores, escolas e pelo time interno.', 'Development and evolution of the AprendiZAP ecosystem, focused on the educational platform and tools used by teachers, schools, and the internal team.'],
  ['Implementação de funcionalidades no frontend e backend do AprendiZAP.', 'Implemented frontend and backend features for AprendiZAP.'],
  ['Integrações, dados, suporte técnico e evolução de fluxos internos.', 'Integrations, data, technical support, and improvements to internal workflows.'],
  ['Participação no planejamento e na entrega de novos produtos educacionais.', 'Contributed to planning and delivering new educational products.'],
  ['Integrações', 'Integrations'],
  ['Dados', 'Data'],
  ['Fev 2026 a Ago 2026', 'Feb 2026 to Aug 2026'],
  ['Remoto', 'Remote'],
  ['Criação de uma plataforma de ingestão, análise e automação de operações de cold email, transformando um grande volume de webhooks em métricas e ações para melhorar campanhas.', 'Built a platform for ingesting, analyzing, and automating cold email operations, turning a high volume of webhooks into metrics and actions that improve campaigns.'],
  ['Arquitetura capaz de processar cerca de 4 milhões de webhooks por dia.', 'Architecture capable of processing approximately 4 million webhooks per day.'],
  ['Análises sobre entrega, abertura, cliques, falhas e desempenho de envios.', 'Analytics for delivery, opens, clicks, failures, and sending performance.'],
  ['Dashboards, relatórios e automações para melhorar a operação e o desempenho de campanhas.', 'Dashboards, reports, and automations to improve operations and campaign performance.'],
  ['Escala', 'Scale'],
  ['2025 · Projeto', '2025 · Project'],
  ['Natal, RN · Remoto', 'Natal, RN · Remote'],
  ['Desenvolvimento de funcionalidades para organizar regras, cálculos e resultados de engenharia relacionados a sistemas de proteção contra descargas atmosféricas.', 'Developed features to organize engineering rules, calculations, and results for lightning protection systems.'],
  ['Fluxos de dimensionamento, planos de cobertura e verificação de limites.', 'Sizing workflows, coverage plans, and limit validation.'],
  ['Consolidação de resultados em relatórios técnicos.', 'Consolidated results into technical reports.'],
  ['Tradução de planilhas e regras especializadas para funcionalidades de software.', 'Translated spreadsheets and specialized rules into software features.'],
  ['Engenharia', 'Engineering'],
  ['Automação', 'Automation'],
  ['Relatórios', 'Reports'],
  ['Regras de negócio', 'Business rules'],
  ['Out 2022 a Dez 2023', 'Oct 2022 to Dec 2023'],
  ['Construção e modernização de sistemas para operações de saúde, com foco em confiabilidade, integração entre serviços e redução de trabalho manual.', 'Built and modernized systems for healthcare operations, focusing on reliability, service integration, and reducing manual work.'],
  ['Fluxo de validação que reduziu o processamento de dias para minutos.', 'Validation workflow that reduced processing time from days to minutes.'],
  ['Redução de 50% na rejeição de solicitações enviadas a planos de saúde.', 'Reduced rejection of requests submitted to health insurers by 50%.'],
  ['Introdução de testes de integração e correção de vulnerabilidades em sistemas legados.', 'Introduced integration tests and fixed vulnerabilities in legacy systems.'],
  ['Testes', 'Testing'],
  ['03 / TRABALHO APLICADO', '03 / APPLIED WORK'],
  ['Software conectado a problemas reais.', 'Software connected to real-world problems.'],
  ['Alguns contextos em que participei da construção de produtos, ferramentas internas e operações digitais.', 'A selection of products, internal tools, and digital operations I helped build.'],
  ['Analytics e automação para cold email', 'Analytics and automation for cold email'],
  ['Plataforma criada para receber eventos em alta escala, analisar o desempenho dos envios e automatizar melhorias nas operações de cold email.', 'A platform built to receive events at scale, analyze sending performance, and automate improvements across cold email operations.'],
  ['webhooks por dia', 'webhooks per day'],
  ['Ingestão e processamento de eventos de entrega, abertura, clique, devolução e falha.', 'Ingestion and processing of delivery, open, click, bounce, and failure events.'],
  ['Dashboards e relatórios para investigar campanhas e acompanhar indicadores.', 'Dashboards and reports for investigating campaigns and tracking metrics.'],
  ['Automações operacionais para melhorar campanhas, com reprocessamento e observabilidade.', 'Operational automations for improving campaigns, with replay and observability.'],
  ['Alta escala', 'High scale'],
  ['PRODUTO COM IA', 'AI PRODUCT'],
  ['Games, communities e experiências com IA', 'Games, communities, and AI experiences'],
  ['Construção e evolução de uma plataforma de chat multimodal que usa RAG e diferentes APIs de inteligência artificial para gerar jogos em JavaScript.', 'Built and evolved a multimodal chat platform that uses RAG and multiple AI APIs to generate JavaScript games.'],
  ['Entradas de texto, imagem e áudio com respostas contextualizadas.', 'Text, image, and audio inputs with contextual responses.'],
  ['Mais de 100 mil conversas únicas processadas pela plataforma.', 'More than 100K unique conversations processed by the platform.'],
  ['Dashboards operacionais, detecção de inconsistências e moderação automatizada.', 'Operational dashboards, inconsistency detection, and automated moderation.'],
  ['IA multimodal', 'Multimodal AI'],
  ['Observabilidade', 'Observability'],
  ['ENGENHARIA', 'ENGINEERING'],
  ['Fundação 1Bi', 'Fundação 1Bi'],
  ['Ecossistema AprendiZAP', 'AprendiZAP ecosystem'],
  ['Desenvolvimento e manutenção full-stack de produtos educacionais voltados a professores, escolas e acesso a conteúdo de qualidade.', 'Full-stack development and maintenance of educational products for teachers, schools, and access to quality content.'],
  ['Evolução do AprendiZAP Professores, AprendiZAP Escolas e ContentiZAP.', 'Evolution of AprendiZAP Professores, AprendiZAP Escolas, and ContentiZAP.'],
  ['Frontend, backend, integrações, dados e suporte técnico.', 'Frontend, backend, integrations, data, and technical support.'],
  ['Ferramentas internas e participação no planejamento das entregas.', 'Internal tools and participation in delivery planning.'],
  ['Educação', 'Education'],
  ['Liga Contra o Câncer', 'Liga Contra o Câncer'],
  ['Projeto desenvolvido via Acelerabit', 'Project delivered through Acelerabit'],
  ['Digitalização de fluxos ligados ao tratamento e à comunicação com convênios, reduzindo etapas manuais e tornando as solicitações mais consistentes.', 'Digitized workflows related to treatment and communication with health insurers, reducing manual steps and making requests more consistent.'],
  ['Validação e envio de formulários para planos de saúde.', 'Validation and submission of forms to health insurers.'],
  ['Processamento reduzido de dias para minutos.', 'Processing time reduced from days to minutes.'],
  ['Queda de 50% na rejeição das solicitações e mais estabilidade nas integrações.', '50% fewer rejected requests and more stable integrations.'],
  ['Saúde', 'Healthcare'],
  ['Fluxos e relatórios técnicos', 'Technical workflows and reports'],
  ['Trabalho em funcionalidades para organizar cálculos, regras e resultados de engenharia em fluxos mais claros e rastreáveis.', 'Developed features that organize engineering calculations, rules, and results into clearer, traceable workflows.'],
  ['Dimensionamento e consolidação de resultados técnicos.', 'Sizing and consolidation of technical results.'],
  ['Planos de cobertura e verificação de limites.', 'Coverage plans and limit validation.'],
  ['Transformação de planilhas e regras de negócio em funcionalidades de software.', 'Turned spreadsheets and business rules into software features.'],
  ['04 / PROJETOS', '04 / PROJECTS'],
  ['Construindo para aprender, operar e compartilhar.', 'Building to learn, operate, and share.'],
  ['Todos os repositórios', 'All repositories'],
  ['AO VIVO', 'LIVE'],
  ['Equipe Atlas', 'Team Atlas'],
  ['PROJETO 01', 'PROJECT 01'],
  ['Gerenciador open source e offline-first para torneios da Olimpíada Brasileira de Robótica. Organiza equipes, arenas, notas, fórmulas e ranking em tempo real dentro de uma rede local.', 'An open-source, offline-first manager for Brazilian Robotics Olympiad tournaments. It organizes teams, arenas, scores, formulas, and real-time rankings over a local network.'],
  ['Ver no GitHub', 'View on GitHub'],
  ['PROJETO 02', 'PROJECT 02'],
  ['Laboratório visual para protocolos de transferência confiável sobre UDP, com pacotes em tempo real, perda, corrupção, replay e comparação de desempenho.', 'A visual laboratory for reliable data transfer protocols over UDP, featuring real-time packets, loss, corruption, replay, and performance comparisons.'],
  ['PROJETO 03', 'PROJECT 03'],
  ['Extensão publicada no VS Code Marketplace para alternar perfis autorizados do Codex, acompanhar limites e manter conversas e sessões compartilhadas.', 'A VS Code Marketplace extension for switching authorized Codex profiles, tracking limits, and keeping conversations and sessions shared.'],
  ['Código', 'Code'],
  ['Guias', 'Guides'],
  ['Mapas', 'Maps'],
  ['Vagas', 'Opportunities'],
  ['PROJETO 04', 'PROJECT 04'],
  ['Plataforma open source que centraliza guias, laboratórios, mapas e oportunidades do Centro de Informática da UFPB.', 'An open-source platform that brings together guides, laboratories, maps, and opportunities from UFPB\'s Computer Science Center.'],
  ['Abrir projeto', 'Open project'],
  ['EMBARCADOS', 'EMBEDDED'],
  ['Computador de bordo', 'Onboard computer'],
  ['Firmware e placa-portadora compacta para RP2040 e sensor BMP180, com leitura não bloqueante por I²C e evolução planejada para telemetria e paraquedas.', 'Firmware and a compact carrier board for the RP2040 and BMP180 sensor, with non-blocking I²C readings and planned support for telemetry and parachute deployment.'],
  ['Ver projeto', 'View project'],
  ['ALGORITMOS', 'ALGORITHMS'],
  ['Compressor PPMC', 'PPMC compressor'],
  ['Implementação de Prediction by Partial Matching com codificação aritmética, compressão, descompressão e experimentos sobre o corpus Silesia.', 'Implementation of Prediction by Partial Matching with arithmetic coding, compression, decompression, and experiments on the Silesia corpus.'],
  ['05 / POSSIBILIDADES', '05 / CAPABILITIES'],
  ['O que posso construir com você.', 'What I can build with you.'],
  ['Da primeira hipótese ao sistema em produção, com decisões técnicas conectadas ao objetivo do produto.', 'From the first hypothesis to a production system, with technical decisions tied to the product goal.'],
  ['Produtos com IA', 'AI products'],
  ['Assistentes, busca semântica, RAG, agentes, fluxos multimodais e ferramentas internas baseadas em conhecimento.', 'Assistants, semantic search, RAG, agents, multimodal workflows, and knowledge-based internal tools.'],
  ['Avaliação, moderação e observabilidade', 'Evaluation, moderation, and observability'],
  ['LangChain e LangGraph', 'LangChain and LangGraph'],
  ['Qdrant, FAISS e Elasticsearch', 'Qdrant, FAISS, and Elasticsearch'],
  ['Plataformas full-stack', 'Full-stack platforms'],
  ['SaaS, painéis administrativos, sistemas operacionais e experiências web responsivas com arquitetura sustentável.', 'SaaS, admin dashboards, operational systems, and responsive web experiences with maintainable architecture.'],
  ['APIs, autenticação e testes', 'APIs, authentication, and testing'],
  ['React, Next.js e Node.js', 'React, Next.js, and Node.js'],
  ['PostgreSQL, MongoDB e Redis', 'PostgreSQL, MongoDB, and Redis'],
  ['Dados e operações', 'Data and operations'],
  ['Dashboards, detecção de inconsistências, métricas de negócio e automações que tornam operações mais visíveis.', 'Dashboards, inconsistency detection, business metrics, and automations that make operations more visible.'],
  ['Pipelines e integrações', 'Pipelines and integrations'],
  ['Monitoramento em tempo real', 'Real-time monitoring'],
  ['Grafana e Sentry', 'Grafana and Sentry'],
  ['Protótipos de engenharia', 'Engineering prototypes'],
  ['Experimentos que aproximam software e mundo físico, de firmware e sensores a simulações interativas.', 'Experiments that connect software and the physical world, from firmware and sensors to interactive simulations.'],
  ['RP2040, sensores e I²C', 'RP2040, sensors, and I²C'],
  ['Redes e computação gráfica', 'Networks and computer graphics'],
  ['C, C++ e Python', 'C, C++, and Python'],
  ['06 / FORMAÇÃO E RECONHECIMENTO', '06 / EDUCATION AND RECOGNITION'],
  ['Engenharia, matemática e educação tecnológica.', 'Engineering, mathematics, and technology education.'],
  ['A base acadêmica amplia meu repertório para pensar software além da interface. Algoritmos, arquitetura, redes, eletrônica e matemática se encontram nos projetos que escolho desenvolver.', 'My academic background broadens how I think about software beyond the interface. Algorithms, architecture, networks, electronics, and mathematics come together in the projects I choose to build.'],
  ['Engenharia da Computação', 'Computer Engineering'],
  ['Universidade Federal da Paraíba, UFPB', 'Federal University of Paraíba, UFPB'],
  ['Técnico em Informática', 'Technical Degree in Computing'],
  ['Instituto Federal do Rio Grande do Norte, IFRN', 'Federal Institute of Rio Grande do Norte, IFRN'],
  ['Juiz da Olimpíada Brasileira de Robótica', 'Judge at the Brazilian Robotics Olympiad'],
  ['Três edições em etapas regionais e estaduais', 'Three editions across regional and state stages'],
  ['Medalhista na Olimpíada Brasileira de Matemática', 'Medalist at the Brazilian Mathematics Olympiad'],
  ['OBMEP, com participação nos programas PIC e PICME do IMPA', 'OBMEP, with participation in IMPA\'s PIC and PICME programs'],
  ['07 / FERRAMENTAS', '07 / TOOLKIT'],
  ['Um repertório amplo, sem perder o foco.', 'A broad toolkit without losing focus.'],
  ['Linguagens', 'Languages'],
  ['TypeScript, JavaScript, Python, SQL, C e C++', 'TypeScript, JavaScript, Python, SQL, C, and C++'],
  ['Produto web', 'Web products'],
  ['React, Next.js, Node.js, NestJS, tRPC e APIs', 'React, Next.js, Node.js, NestJS, tRPC, and APIs'],
  ['IA e dados', 'AI and data'],
  ['LangChain, LangGraph, Qdrant, FAISS, Elasticsearch e Pandas', 'LangChain, LangGraph, Qdrant, FAISS, Elasticsearch, and Pandas'],
  ['Infraestrutura', 'Infrastructure'],
  ['Docker, AWS, Firebase, Grafana, Sentry e GitHub Actions', 'Docker, AWS, Firebase, Grafana, Sentry, and GitHub Actions'],
  ['Bancos de dados', 'Databases'],
  ['PostgreSQL, MySQL, MongoDB, Redis, SQLite e Prisma', 'PostgreSQL, MySQL, MongoDB, Redis, SQLite, and Prisma'],
  ['Idiomas', 'Languages'],
  ['Português nativo, inglês fluente e espanhol intermediário', 'Native Portuguese, fluent English, and intermediate Spanish'],
  ['08 / CONTATO', '08 / CONTACT'],
  ['Tem um problema interessante para resolver?', 'Have an interesting problem to solve?'],
  ['Posso ajudar a transformar uma ideia, processo ou desafio técnico em um produto que as pessoas realmente consigam usar.', 'I can help turn an idea, process, or technical challenge into a product people can actually use.'],
  ['Enviar um e-mail', 'Send an email'],
  ['Falar no WhatsApp', 'Message me on WhatsApp'],
  ['Construído com HTML, CSS e JavaScript. Hospedado no GitHub Pages.', 'Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.'],
  ['Voltar ao topo ↑', 'Back to top ↑'],
  ['Currículo PT', 'Résumé EN'],
]);

const translatableTextNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
  acceptNode(node) {
    const value = node.nodeValue.trim();
    const parentTag = node.parentElement?.tagName;
    return value && parentTag !== 'SCRIPT' && parentTag !== 'STYLE' && translationsToEnglish.has(value)
      ? NodeFilter.FILTER_ACCEPT
      : NodeFilter.FILTER_REJECT;
  },
});

while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  const portuguese = node.nodeValue.trim();
  translatableTextNodes.push({ node, portuguese, english: translationsToEnglish.get(portuguese) });
}

const languageToggle = document.querySelector('[data-language-toggle]');
const resumeLinks = document.querySelectorAll('[data-resume-link]');
const whatsappLinks = document.querySelectorAll('[data-whatsapp-link]');
const languageFromQuery = new URLSearchParams(window.location.search).get('lang');
const savedLanguage = window.localStorage.getItem('portfolio-language');
const browserLanguage = (navigator.languages?.[0] || navigator.language || 'en').toLowerCase();
let currentLanguage = ['pt', 'en'].includes(languageFromQuery)
  ? languageFromQuery
  : (['pt', 'en'].includes(savedLanguage) ? savedLanguage : (browserLanguage.startsWith('pt') ? 'pt' : 'en'));

const localizedAttributes = [
  ['.brand', 'aria-label', 'Ir para o início', 'Go to the top'],
  ['.main-nav', 'aria-label', 'Navegação principal', 'Main navigation'],
  ['.hero-stack', 'aria-label', 'Principais áreas de atuação', 'Main areas of expertise'],
  ['.portrait-frame img', 'alt', 'Retrato profissional de Thauã Magalhães', 'Professional portrait of Thauã Magalhães'],
  ['a[href="https://github.com/tahaluh/Valhalla"]', 'aria-label', 'Abrir Valhalla no GitHub', 'Open Valhalla on GitHub'],
];

const localizedMeta = {
  pt: {
    description: 'Portfólio de Thauã Magalhães, Software Engineer e estudante de Engenharia da Computação. IA aplicada, RAG, produtos full-stack, dados e sistemas embarcados.',
    social: 'IA aplicada, produtos full-stack e engenharia para transformar problemas complexos em sistemas úteis.',
  },
  en: {
    description: 'Portfolio of Thauã Magalhães, Software Engineer and Computer Engineering student. Applied AI, RAG, full-stack products, data, and embedded systems.',
    social: 'Applied AI, full-stack products, and engineering that turns complex problems into useful systems.',
  },
};

const setTextNodeLanguage = ({ node, portuguese, english }, language) => {
  const leadingSpace = node.nodeValue.match(/^\s*/)?.[0] || '';
  const trailingSpace = node.nodeValue.match(/\s*$/)?.[0] || '';
  node.nodeValue = `${leadingSpace}${language === 'en' ? english : portuguese}${trailingSpace}`;
};

const applyLanguage = (language) => {
  currentLanguage = language;
  document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  translatableTextNodes.forEach((entry) => setTextNodeLanguage(entry, language));

  localizedAttributes.forEach(([selector, attribute, portuguese, english]) => {
    document.querySelector(selector)?.setAttribute(attribute, language === 'en' ? english : portuguese);
  });

  const metadata = localizedMeta[language];
  document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.social);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.social);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'pt' ? 'pt_BR' : 'en_US');

  if (languageToggle) {
    languageToggle.textContent = language === 'pt' ? 'EN' : 'PT';
    languageToggle.setAttribute('aria-label', language === 'pt' ? 'Switch to English' : 'Mudar para português');
  }

  resumeLinks.forEach((link) => {
    link.href = language === 'pt'
      ? './assets/cv-thaua-magalhaes-pt.pdf'
      : './assets/resume-thaua-magalhaes-en.pdf';
  });

  const whatsappMessage = language === 'pt'
    ? 'Olá, Thauã! Conheci seu trabalho pelo portfólio.'
    : 'Hi, Thauã! I found your work through your portfolio.';
  whatsappLinks.forEach((link) => {
    link.href = `https://wa.me/5583986535102?text=${encodeURIComponent(whatsappMessage)}`;
  });
};

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  window.localStorage.setItem('portfolio-language', nextLanguage);
  applyLanguage(nextLanguage);
});

applyLanguage(currentLanguage);

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const header = document.querySelector('[data-header]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    });
  });
}

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.delay || 0) * 90;
      window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  reveals.forEach((element) => observer.observe(element));
}
