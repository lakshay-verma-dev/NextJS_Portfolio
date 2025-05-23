export type ProjectDetail = {
  overview: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  role: string;
  duration: string;
  impact?: string;
};

export type Project = {
  id: string;
  title: string;
  description: string; // Short description for card
  detailedInfo: ProjectDetail; // Detailed information for modal
  tech: string[];
  github?: string;
  live?: string;
  tag?: string;
  type?: "personal" | "company";
  imageUrl?: string;
};

export const personalProjects: Project[] = [
  {
    id: "personal-001",
    title: "Personal Portfolio Website",
    description: "A modern Next.js and TypeScript portfolio showcasing my frontend skills and contributions.",
    detailedInfo: {
      overview: "A responsive, animated frontend portfolio built with Next.js and TypeScript. Features include GitHub/LeetCode integrations, an interactive resume viewer, custom cursor, and a contact form with toast notifications.",
      features: [
        "Built entirely with Next.js and TypeScript",
        "Interactive Resume Viewer in modal",
        "Scroll-based animations with Framer Motion",
        "GitHub & LeetCode integration",
        "Custom animated cursor",
        "Contact form with EmailJS, NodeMailer & Toastify"
      ],
      challenges: [
        "Building smooth animations with performance",
        "Dynamic GitHub/LeetCode data integration",
        "Ensuring responsiveness across devices"
      ],
      learnings: [
        "Type-safe development with TypeScript",
        "Framer Motion for scroll-based animations",
        "Next.js App Router usage with TypeScript",
        "Frontend form integration with EmailJS and feedback flow",
        "UI design with Tailwind CSS and shadcn/ui"
      ],
      role: "Frontend Developer",
      duration: "15 days",
      impact: "Improved personal branding and interactive user experience"
    },
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui", "EmailJS", "Toastify"],
    github: "https://github.com/lakshay-verma-dev/NextJS_Portfolio",
    live: "https://lakshayverma-portfolio.vercel.app",
    tag: "Complete",
    type: "personal",
    imageUrl: "/projects/portfolio.png"
  },
  
  {
    id: "personal-002",
    title: "Book Inventory Management System",
    description: "Full-stack app for book inventory with secure authentication and payment processing.",
    detailedInfo: {
      overview: "A full-stack system to manage book inventory, sales, and user activities with secure login and online payments.",
      features: [
        "Secure login with JWT and OTP via NodeMailer",
        "Add, edit, delete, and search books in real time",
        "Stripe integration for secure payments",
        "Admin dashboard with sales analytics",
        "Responsive UI with form validations"
      ],
      challenges: [
        "Securing user authentication and payment flows",
        "Efficient database querying",
        "Building dynamic admin dashboards"
      ],
      learnings: [
        "Authentication using JWT and NodeMailer",
        "Integrating Stripe and handling secure transactions",
        "Form validations and performance optimization",
        "Using Redux Toolkit for state management"
      ],
      role: "Full Stack Developer",
      duration: "2 months",
      impact: "Streamlined book management for sellers and buyers"
    },
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "NodeMailer",
      "Stripe",
      "Bootstrap",
      "Render"
    ],
    github: "https://github.com/lakshay-verma-dev/inventory-hub",
    live: "https://inventory-hub-1.onrender.com",
    tag: "Complete",
    type: "personal",
    imageUrl: "/projects/inventory.png"
  },
  {
    id: "personal-003",
    title: "Store Sync (Droply)",
    description: "Dropbox-inspired file sharing app with real-time sync and image optimization.",
    detailedInfo: {
      overview: "Droply is a cloud storage platform inspired by Dropbox. It supports real-time file sync, image optimization, and user access management. Built using Next.js App Router with server actions, it's optimized for performance and scalability.",
      features: [
        "Secure file upload and storage",
        "Real-time synchronization of files",
        "Image optimization with ImageKit",
        "Authentication using Clerk",
        "Role-based access and file sharing",
        "Progressive file upload indicators"
      ],
      challenges: [
        "Achieving real-time sync using server actions",
        "Handling image uploads and optimization seamlessly",
        "Balancing frontend responsiveness with backend processing"
      ],
      learnings: [
        "Deep integration of Clerk for auth",
        "Using ImageKit for CDN-level image transformation",
        "Database operations with Drizzle ORM and Neon",
        "Next.js Server Components and RSC patterns"
      ],
      role: "Full Stack Developer (Frontend Focused)",
      duration: "In Progress",
      impact: "A modern file sharing solution under development to streamline file access and collaboration"
    },
    tech: ["Next.js", "Clerk", "ImageKit", "Drizzle", "Neon", "Zod"],
    github: "https://github.com/lakshay-verma-dev/StoreSync",
    live: "",
    tag: "In Progress",
    type: "personal",
    imageUrl: "/projects/storesync.png"
  }
];


export const companyProjects: Project[] = [
  {
    id: "company-001",
    title: "Trade Monitoring Software",
    description:
      "Real-time monitoring system for options trading with Dhan API and Telegram bot alerts.",
    detailedInfo: {
      overview:
        "A robust trading analytics platform designed to track real-time market data for options trading. Integrated with Dhan API for live price data and Telegram Bot API for instant trade alerts and stop loss/target updates. Features role-based dashboards for analysts and admins with performance monitoring and trade execution capabilities.",
      features: [
        "Real-time market data tracking using Dhan API",
        "Instant trade notifications via Telegram Bot API",
        "Role-based dashboard for analysts and admins",
        "Automated stop-loss and target alert system",
        "Advanced analytics dashboard with trade history",
        "Responsive UI optimized for traders",
      ],
      challenges: [
        "Efficiently handling real-time data streams",
        "Maintaining high system reliability and uptime",
        "Integrating external APIs securely and effectively",
      ],
      learnings: [
        "Real-time data processing with WebSocket and APIs",
        "Integrating Dhan API and Telegram Bot for automation",
        "FastAPI backend development and optimization",
        "Deploying and scaling backend on AWS EC2 with DuckDB and PostgreSQL",
      ],
      role: "Full Stack Developer",
      duration: "6 months",
      impact:
        "Enabled faster trading decisions and improved transparency with real-time insights and alerts",
    },
    tech: [
      "React",
      "Redux",
      "Python",
      "FastAPI",
      "Bootstrap",
      "PostgreSQL",
      "DuckDB",
      "Dhan API",
      "Telegram Bot API",
      "AWS EC2",
    ],
    github: "",
    live: "",
    tag: "Work",
    type: "company",
    imageUrl: "/projects/trading.png",
  },
];

