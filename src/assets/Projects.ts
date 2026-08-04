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
      overview: "A responsive, animated frontend portfolio built with Next.js and TypeScript. Features include GitHub/LeetCode integrations, an interactive resume viewer, custom cursor, and a contact form",
      features: [
        "Built entirely with Next.js and TypeScript",
        "Interactive Resume Viewer in modal",
        "Scroll-based animations with Framer Motion",
        "GitHub & LeetCode integration",
        "Custom animated cursor",
        "Contact form with EmailJS"
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
        "UI design with Tailwind CSS and Bootstrap"
      ],
      role: "Frontend Developer",
      duration: "15 days",
      impact: "Improved personal branding and interactive user experience"
    },
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "EmailJS", "Bootstrap"],
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
      "Tailwind CSS",
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
    title: "Taekwondo Super League (TSL)",
    description:
      "Full-stack sports league management platform with multi-role registrations, admin dashboard, and auction flows.",
    detailedInfo: {
      overview:
        "Developed a full-stack sports league management platform for Taekwondo Super League with athlete, coach, referee, team manager, sponsor, and auction registrations. Includes a dynamic admin dashboard, team and media management, Cloudinary integration, REST APIs, and production deployment using Railway with Cloudflare DNS.",
      features: [
        "Multi-role registration for athletes, coaches, referees, team managers, and sponsors",
        "Auction registration and league workflow management",
        "Dynamic admin dashboard for operations and oversight",
        "Team and media management with Cloudinary",
        "REST APIs and production deployment on Railway with Cloudflare DNS",
      ],
      challenges: [
        "Designing role-based registration and access flows",
        "Managing media assets at scale with Cloudinary",
        "Deploying and configuring production infrastructure with Railway and Cloudflare",
      ],
      learnings: [
        "Full-stack league platform architecture with Next.js and Node.js",
        "Cloudinary media workflows",
        "Production DNS and deployment with Railway and Cloudflare",
      ],
      role: "Full Stack Developer",
      duration: "Contract / Client Project",
      impact:
        "Enabled end-to-end league operations from registration to team and media management in production at tslind.com",
    },
    tech: [
      "React.js",
      "Next.js",
      "Lovable AI",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Cloudinary",
      "Railway",
      "Cloudflare DNS",
    ],
    live: "https://tslind.com",
    tag: "Work",
    type: "company",
  },
  {
    id: "company-002",
    title: "Skor – Safe Rental Platform",
    description:
      "Bilingual (ES/EN) rental transparency platform connecting tenants and landlords with portals and dashboards.",
    detailedInfo: {
      overview:
        "Bilingual (ES/EN) rental transparency platform connecting tenants and landlords. Developed tenant and landlord portals with authentication, interactive feature walkthroughs, and real-time dashboards.",
      features: [
        "Tenant and landlord portals with authentication",
        "Bilingual experience (Spanish / English)",
        "Interactive feature walkthroughs for onboarding",
        "Real-time dashboards for rental transparency",
        "Responsive design across devices",
      ],
      challenges: [
        "Building dual-role portals with clear user journeys",
        "Supporting bilingual UI without breaking UX",
        "Designing guided walkthroughs that aid adoption",
      ],
      learnings: [
        "Multi-role rental product UX",
        "Feature walkthrough patterns for complex apps",
        "Responsive dashboard design for real-estate workflows",
      ],
      role: "Frontend Developer",
      duration: "Company Project",
      impact:
        "Improved transparency and onboarding for tenants and landlords at app.skortorent.com",
    },
    tech: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "Responsive Design",
      "Feature Walkthroughs",
    ],
    live: "https://app.skortorent.com",
    tag: "Work",
    type: "company",
  },
  {
    id: "company-003",
    title: "EquiCare – Horse Management Platform",
    description:
      "Horse management platform for owners and stable managers with profiles, feed tracking, and event calendars.",
    detailedInfo: {
      overview:
        "Horse management platform for horse owners and stable managers. Developed stable management, horse profiles, feed tracking, a custom calendar-based event management system, and responsive dashboards to streamline daily operations.",
      features: [
        "Stable management for owners and managers",
        "Horse profiles and operational records",
        "Feed tracking workflows",
        "Custom calendar-based event management",
        "Responsive operational dashboards",
      ],
      challenges: [
        "Modeling complex stable and horse operational data",
        "Building a flexible calendar for equestrian events",
        "Keeping dashboards clear for daily stable workflows",
      ],
      learnings: [
        "Domain-driven frontend for livestock/stable ops",
        "Calendar and event UX patterns",
        "Next.js and TypeScript for structured product UI",
      ],
      role: "Frontend Developer",
      duration: "Company Project",
      impact:
        "Streamlined daily stable operations for horse owners and managers at app.equicare.com.au",
    },
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    live: "https://app.equicare.com.au",
    tag: "Work",
    type: "company",
  },
  {
    id: "company-004",
    title: "Liquid of Life – Water Filtration Store",
    description:
      "Shopify e-commerce store with custom themes, Liquid sections, and optimized shopping experiences.",
    detailedInfo: {
      overview:
        "Developed a complete Shopify e-commerce store by building custom themes, reusable Liquid sections, dynamic product templates, collection pages, and cart enhancements, delivering a responsive and optimized shopping experience.",
      features: [
        "Custom Shopify theme development",
        "Reusable Liquid sections and blocks",
        "Dynamic product and collection templates",
        "Cart enhancements for conversion",
        "Responsive and optimized storefront experience",
      ],
      challenges: [
        "Building flexible Liquid components for reuse",
        "Balancing design fidelity with Shopify constraints",
        "Optimizing storefront performance and UX",
      ],
      learnings: [
        "Shopify theme and Liquid architecture",
        "E-commerce templates and section systems",
        "Storefront performance and conversion patterns",
      ],
      role: "Shopify / Frontend Developer",
      duration: "Company Project",
      impact:
        "Delivered a complete responsive storefront for water filtration products at liquidoflife.net",
    },
    tech: ["Shopify", "Liquid", "Theme Customization"],
    live: "https://liquidoflife.net",
    tag: "Work",
    type: "company",
  },
  {
    id: "company-005",
    title: "ChampsBase – Sports Betting & Casino Guide",
    description:
      "Global multi-language sports betting and casino guide with SEO-optimised, locale-aware pages.",
    detailedInfo: {
      overview:
        "Global multi-language sports betting and casino guide. Developed SEO-optimised, locale-aware pages across five markets with affiliate integrations, dynamic content rendering, and responsible-gaming sections.",
      features: [
        "Multi-language support (EN / FR / ES / PT-BR / PT-PT)",
        "SEO-optimised locale-aware pages",
        "Affiliate integrations and dynamic content",
        "Responsible-gaming sections",
        "Responsive Next.js frontends with Tailwind CSS",
      ],
      challenges: [
        "Maintaining consistent UX across five locales",
        "SEO and routing for multi-market content",
        "Integrating affiliate and dynamic content safely",
      ],
      learnings: [
        "Multi-locale Next.js content architecture",
        "SEO patterns for international affiliate sites",
        "Responsible-gaming and compliance content structure",
      ],
      role: "Frontend Developer",
      duration: "Company Project",
      impact:
        "Shipped a multi-market guide experience at champsbase.com across five languages",
    },
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Multi-language (EN/FR/ES/PT-BR/PT-PT)",
    ],
    live: "https://champsbase.com",
    tag: "Work",
    type: "company",
  },
  {
    id: "company-006",
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

