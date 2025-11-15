import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  B2M,
  Lasmap,
  ozsayin,
  css,
  reactjs,
  ozsayinweb,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "DevOps Enthusiast",
    icon: mobile,
  },
  {
    title: "Automation Learner",
    icon: backend,
  },
  {
    title: "Medical AI Researcher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI Medical Research Intern",
    company_name: "LASMAP",
    icon: Lasmap,
    iconBg: "#383E56",
    date: "Jun 2025 - Sep 2025",
    points: [
      "Researching MRD and AI in healthcare, analyzing clinical and biological datasets to support feature delivery in predictive health software.",
      "Engineering features, cleaning data, and applying ML algorithms for disease prediction, contributing to software upgrades that enhance accuracy.",
      "Building, evaluating, and optimizing predictive models (Python, Scikit-learn) using metrics such as accuracy and AUC to improve user interface insights for clinicians.",
    ],
  },
  {
    title: "Frontend Development Intern",
    company_name: "Ozsayin HVAC Technologies",
    icon: ozsayin,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Sep 2025",
    points: [
      "Built and optimized company’s main web interface with React.js, TailwindCSS, Framer Motion, ensuring secure data flows and UI validation.",
      "Designed modular components and enforced input validation rules to enhance client-side data integrity.",
      "Collaborated cross-functionally to document UI/UX flows and ensure alignment with backend data constraints.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "B2M-IT",
    icon: B2M,
    iconBg: "#383E56",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Developed microservices using Spring Boot, incorporating authentication, authorization, and secure endpoints (REST, GraphQL).",
      "Applied core software architecture principles using REST & GraphQL APIs.",
      "Familiar with Spring Security and CI/CD concepts."
    ],
  },
  
];



const projects = [
  {
    name: "Microservices Content Moderation System",
    description:
      "A scalable microservices-based content moderation platform that automatically detects and classifies inappropriate content using REST, GraphQL, Kafka, gRPC, and Docker.",
    tags: [
      {
        name: "REST",
        color: "blue-text-gradient",
      },
      {
        name: "Kafka",
        color: "green-text-gradient",
      },
      {
        name: "gRPC",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "white-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SaraGhabri/Content-Moderation-Platform-MircoservicesProject.git",
  },
  {
    name: "Diabetic Kidney Disease Predictive Model",
    description:
      "Classification models for medical datasets, improving diagnostic insights for Diabetic Kidney Diseases early detection.‌",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "Albuminurie",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ozsayin HVAC Technologies Website",
    description:
      "A responsive, component-based frontend for the company’s website using React.js and TailwindCSS.‌Ensuring scalable structure via Git feature‌ branching.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "github-actions",
        color: "pink-text-gradient",
      },
    ],
    image: ozsayinweb,
    source_code_link: "https://github.com/SaraGhabri/ozsayin-frontend.git",
  },
  {
    name: "Product Management Store",
    description:
      "A role-based web application with authentication, CRUD operations, and session-based access control.‌",
    tags: [
      {
        name: "JAVA",
        color: "blue-text-gradient",
      },
      {
        name: "Servlets/JSP",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
