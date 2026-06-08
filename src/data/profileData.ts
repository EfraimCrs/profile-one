
export const profileInfo = {
  name: "Efraim Crs",
  fullName: "Efraim da Conceição Rodrigues Silva",
  role: "ADS | Desenvolvedor Web | Estudante de Geotecnologias",
  location: "São Luís, Maranhão, Brasil",
  stats: {
    posts: 3,
    repositories: 40,
  },
  about: "Olá meu nome é Efraim, atualmente atuando como Web Developer & QA. Cursando Análise e Desenvolvimento de Sistemas (ADS), e aprimorando meus conhecimentos através de cursos complementares na Alura."
};

export const projects = [
  {
    id: "orcamento-app",
    title: "Gere PDFs em vez de em Word",
    description: "Projeto criado com o intuito de desenvolvimento pessoal, focado em aprender e aplicar as melhores práticas de desenvolvimento web moderno, utilizando Next.js, TypeScript, Tailwind CSS... O objetivo é criar um sistema de orçamentos comerciais que seja simples e eficiente.",
    stacks: ["logos:react", "logos:nextjs-icon", "logos:typescript-icon", "logos:tailwindcss-icon", "logos:css-3"],
    githubUrl: "https://github.com/EfraimCrs/orc-saas",
    liveUrl: "https://linkedin.projeto.orc-saas.com.br",
    image: "/projects/orcamento.png" // Você vai colocar a imagem real na pasta public/projects
  },
  {
    id: "cv-ultra",
    title: "CV-ULTRA",
    description: "Este é o seu ULTRA-PERFIL. Deixe o Word no passado. Construa currículos de alta performance com tecnologia ATS e design de elite, diretamente do seu navegador.",
    stacks: ["logos:react", "logos:nextjs-icon", "logos:typescript-icon"],
    githubUrl: "https://github.com/EfraimCrs/cv-saas",
    liveUrl: "#",
    image: "/projects/cvultra.png"
  },
  {
    id: "monibank",
    title: "MoniBank",
    description: "Landing page responsiva desenvolvida com HTML, CSS e JavaScript para divulgação de serviços financeiros e investimentos.",
    stacks: ["logos:html-5", "logos:css-3", "logos:javascript"],
    githubUrl: "#",
    liveUrl: "#",
    image: "/projects/monibank.png"
  }
];