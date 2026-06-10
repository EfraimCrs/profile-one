
export const profileInfo = {
  name: "Efraim Crs",
  fullName: "Efraim da Conceição Rodrigues Silva",
  avatarUrl: "/myperfil.png",
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
export const stacksData = [
  {
    category: "Frontend",
    icons: ["logos:html-5", "logos:css-3", "logos:javascript", "logos:react", "logos:nextjs-icon", "logos:tailwindcss-icon", "logos:bootstrap", "logos:material-ui"]
  },
  {
    category: "Backend",
    icons: ["logos:typescript-icon", "logos:nodejs-icon", "logos:python", "logos:nestjs"]
  },
  {
    category: "APIs",
    icons: ["logos:graphql"]
  },
  {
    category: "Banco de Dados",
    icons: ["logos:postgresql", "logos:mongodb-icon", "logos:redis", "logos:postgis"]
  },
  {
    category: "ORM",
    icons: ["simple-icons:prisma", "logos:sequelize"]
  },
  {
    category: "Sistema Operacional",
    icons: ["logos:linux-tux", "logos:ubuntu"]
  },
  {
    category: "Geotecnologias",
    icons: ["simple-icons:qgis", "mdi:layers-triple"]
  },
  {
    category: "Inteligência Artificial",
    icons: ["simple-icons:openai", "logos:google-gemini", "logos:claude-icon"] 
  },
  {
    category: "Outros apps",
    icons: ["logos:postman-icon", "logos:figma", "logos:visual-studio-code"]
  }
];
  export const educationData = [
  {
    institution: "UNIASSELVI",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "nov de 2024 - fev de 2027",
    icon: "mdi:school"
  }
];

export const certificatesData = [
  {
    id: "figma-design",
    title: "Figma: design de interfaces para web e mobile",
    image: "/certificates/cert-figma.png"
  },
  {
    id: "desenvolvimento-front-end",
    title: "Desenvolvimento Front-end: cursos para criar aplicações web com HTML, CSS e JavaScript",
    image: "/certificates/cert-frontend.png"
  },
  {
    id: "css-avancado",
    title: "CSS avançado: implementando designs com Grid, Flexbox e Sass",
    image: "/certificates/cert-css.png"
  },
  {
    id: "javascript-completo",
    title: "Desenvolva aplicações Web com JavaScript",
    image: "/certificates/cert-javascript.png"
  },
  {
    id: "javascript-web",
    title: "Desenvolva aplicações Web em JavaScript com tarefas concorrentes e orientadas a objetos",
    image: "/certificates/cert-javascript-web.png"
  },
  {
    id: "fullstack-javascript",
    title: "Full stack JavaScript: crie um projeto com React e Node.js",
    image: "/certificates/cert-fullstack.png"
  },
  {
    id: "bootstrap-5",
    title: "Bootstrap 5: desenvolvimento de websites responsivos e atrativos",
    image: "/certificates/cert-bootstrap.png"
  },
  {
    id: "autenticacao-testes-seguranca-nodejs",
    title: "Autenticação, testes e segurança em Node.js",
    image: "/certificates/cert-nodejs.png"
  },
  {
    id: "apis-nodejs-express",
    title: "APIs com Node.js e Express",
    image: "/certificates/cert-apis.png"
  },
];
export const contactData = {
  email: "efraimcrsdev@gmail.com",
  lattesUrl: "https://lattes.cnpq.br/7094421619684005"
};