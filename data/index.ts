export const navItems = [
  { name: "Home", link: "#home"},
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Testemunhos", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Eu priorizo a colaboração com o cliente, promovendo comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou muito flexível com comunicações em diferentes horários",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Meu desenvolvimento",
    description: "Estou sempre tentando melhorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de tecnologia com paixão por desenvolvimento.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Atualmente desenvolvendo Projetos Next.JS com IA",
    description: "O que ando fazendo",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Você quer iniciar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gerador de Sites React.JS",
    des: "Desenvolva seus próprios projetos web sem escrver nenhuma linha de código.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://up-code.vercel.app/",
  },
  {
    id: 2,
    title: "Game Marketplace",
    des: "Venda ou compre skins de maneira fácil e rápida.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://game-marketplace2.vercel.app/",
  },
  {
    id: 3,
    title: "IntVoice | AI",
    des: "Realize entrevistas completas com o poder da IA, para se preparar para entrevistas Reais.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://interview-ecru-kappa.vercel.app/",
  },
  {
    id: 4,
    title: "Legatto",
    des: "Um ecommerce incrível para vender tudo o que puder imaginar",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://ecommerce-next15-one.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Trabalhar com o Henrique foi um prazer absoluto. Seu profissionalismo, pontualidade e dedicação em entregar resultados excepcionais foram evidentes durante todo o projeto. O entusiasmo do Henrique por cada aspecto do desenvolvimento realmente se destaca. Se você busca elevar seu website e fortalecer sua marca, o Henrique é o parceiro ideal.",
    name: "Michael Johnson",
    title: "Diretor da AlphaStream Technologies",
  },
  {
    quote:
      "A colaboração com o Henrique superou todas as expectativas. Sua capacidade de resposta rápida e atenção aos detalhes foram cruciais para o sucesso do nosso projeto. Recomendo fortemente seus serviços para quem busca qualidade e comprometimento.",
    name: "Carlos Mendes",
    title: "CEO da TechVision Brasil",
  },
  {
    quote:
      "Henrique demonstrou um profundo conhecimento técnico e criatividade na solução de problemas complexos. Seu trabalho foi fundamental para transformar nossa visão em realidade digital. Um profissional altamente capacitado e dedicado.",
    name: "Ana Souza",
    title: "Gerente de Projetos na InovaWeb",
  },
  {
    quote:
      "O diferencial do Henrique está na sua combinação rara de habilidades técnicas e compreensão das necessidades do negócio. Nosso projeto foi entregue antes do prazo e com qualidade superior ao esperado. Parceiro confiável para projetos desafiadores.",
    name: "Roberto Fernandes",
    title: "CTO da Digital Solutions",
  },
  {
    quote:
      "Como cliente recorrente do Henrique, posso afirmar que sua consistência na entrega de trabalhos de alta qualidade é impressionante. Transformou completamente nossa presença digital com soluções inovadoras e eficientes.",
    name: "Juliana Almeida",
    title: "Diretora de Marketing na WebPrime",
  },
];
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Fullstack Junior",
    desc: "Desenvolvi sistemas web completos com React.js (frontend) e Node.js (backend), incluindo integração com API do Gemini IA para features inteligentes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desenvolvedor Mobile",
    desc: "Criei apps com React Native integrados ao Gemini IA para processamento de linguagem natural e geração de conteúdo dinâmico.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projeto Freelance com IA",
    desc: "Desenvolvi solução completa utilizando Gemini IA para análise de dados em tempo real, com dashboard React e backend em Node e Java.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Desenvolvedor Fullstack",
    desc: "Liderança em projetos com IA generativa, implementando Gemini IA para personalização de conteúdo e automação de processos.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: 'https://github.com/Paulos19'
  },
  {
    id: 3,
    img: "/link.svg",
    href: 'https://www.linkedin.com/in/paulo-henrique20'
  },
];
