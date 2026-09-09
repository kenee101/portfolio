import dexxifyImg from "./assets/dexxify.jpg";
import reetrackImg from "./assets/reetrack.jpg";

export const GITHUB_URL = "https://github.com/kenee101";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/elijah-usih-396b4b257/";
export const EMAIL = "keneusih@gmail.com";

export const NAV_ITEMS = [
  ["Home", "home"],
  ["Expertise", "expertise"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

export interface Pillar {
  title: string;
  description: string;
  tags: string[];
}

export const pillars: Pillar[] = [
  {
    title: "Backend & APIs",
    description:
      "Production REST APIs and services in Go and Java, with Python and TypeScript across the stack — comfortable owning everything from routing to auth to background jobs.",
    tags: [
      "Go",
      "Java",
      "Python",
      "TypeScript",
      "Gin",
      "Spring Boot",
      "NestJS",
      "FastAPI",
      ".NET",
      "REST",
      "gRPC",
      "WebSocket",
    ],
  },
  {
    title: "Data, Infra & Reliability",
    description:
      "Designing schemas and data flows across SQL and NoSQL stores, with Kafka for messaging and Docker for reproducible deploys — and building in retries, graceful degradation, and clean shutdowns so a single dependency failure doesn't take the app down.",
    tags: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Kafka",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    title: "AI & Full-Stack",
    description:
      "Applying TensorFlow, OpenCV, and LangChain to real problems — retrieval-augmented generation, computer vision, tool-orchestrating assistants — plus the Next.js and React Native to ship the client side when a project calls for it.",
    tags: [
      "TensorFlow",
      "OpenCV",
      "LangChain",
      "Next.js",
      "React",
      "React Native",
    ],
  },
];

export interface TimelineEntry {
  kind: "work" | "education";
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

export const timeline: TimelineEntry[] = [
  {
    kind: "work",
    title: "Backend Engineer",
    org: "OmniRetail Technology Limited (OMNI)",
    period: "July 2026 – Present",
    bullets: [
      "Develop and maintain Go-based backend services for Omni's fintech platform (Traction), supporting payments, virtual accounts, POS terminal management, loans, invoicing, and merchant operations.",
      "Build and maintain REST APIs using Gorilla Mux and Negroni, backed by MongoDB, across multiple business and payment domains.",
      "Work across a multi-bank/PSP integration layer connecting Providus, Wema, VFD, OmniPay, Paystack, Kuda, Globus, and FSDH for virtual account provisioning and fund transfers.",
      "Improved system reliability by implementing Kafka connection retries with backoff, graceful dependency degradation, panic recovery, and graceful shutdown for HTTP servers and background consumers.",
      "Collaborate in a Git/Bitbucket-based engineering workflow, contributing through feature branches, pull requests, code reviews, debugging, and production issue resolution.",
    ],
  },
  {
    kind: "education",
    title: "B.Eng. Computer Engineering",
    org: "Covenant University, Nigeria",
    period: "January 2021 – October 2025",
    bullets: [
      "First Class Honours, CGPA 4.69/5.0.",
      "Relevant coursework: Software Development, Applied Computer Programming, Computer Networking & Security, Cryptography, Artificial Intelligence, Embedded Systems, Microprocessor Systems.",
    ],
  },
];

export type ProjectIcon =
  | "payments"
  | "community"
  | "ai"
  | "vision"
  | "recommend";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIcon;
  image?: string;
  link?: string;
  live: boolean;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Dexxify",
    description:
      "Crypto payments SaaS for African businesses with API-driven checkout, payment links, wallet generation, crypto-to-fiat conversion, transaction processing, webhooks, merchant dashboards, and automated settlement.",
    tags: ["NestJS", "PostgreSQL", "Redis", "Docker", "SSE"],
    icon: "payments",
    image: dexxifyImg,
    link: "https://dexxify.com",
    live: true,
    github: GITHUB_URL,
  },
  {
    title: "ReeTrack",
    description:
      "SaaS platform for community management with automated subscription billing, member tracking, payment processing, secure APIs, RBAC, and multi-tenant workflows.",
    tags: ["Next.js", "NestJS", "BullMQ", "Redis", "PostgreSQL", "WebSocket"],
    icon: "community",
    image: reetrackImg,
    link: "https://reetrack.com",
    live: true,
    github: GITHUB_URL,
  },
  // {
  //   title: "Genesis",
  //   description:
  //     "AI assistant using RAG, vector embeddings, semantic search, tool orchestration, and multi-step task execution with external data sources.",
  //   tags: ["Python", "FastAPI", "PostgreSQL", "FAISS", "LangChain", "LangGraph"],
  //   icon: "ai",
  //   live: false,
  //   github: GITHUB_URL,
  // },
  // {
  //   title: "TraVISS",
  //   description:
  //     "Real-time traffic detection and tracking system using YOLOv11 to estimate and categorize vehicle density from live camera feeds.",
  //   tags: ["Python", "YOLO", "OpenCV", "FastAPI", "PostgreSQL"],
  //   icon: "vision",
  //   live: false,
  //   github: GITHUB_URL,
  // },
  // {
  //   title: "RecommendIQ",
  //   description:
  //     "Association-rule-learning recommendation engine for discovering product purchase patterns and generating recommendations.",
  //   tags: ["Python", "Pandas", "scikit-learn", "PostgreSQL", "FastAPI"],
  //   icon: "recommend",
  //   live: false,
  //   github: GITHUB_URL,
  // },
];
