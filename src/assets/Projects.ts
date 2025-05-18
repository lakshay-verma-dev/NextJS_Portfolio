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
    description: "A modern, responsive portfolio showcasing my work and skills.",
    detailedInfo: {
      overview: "A comprehensive portfolio website built with modern web technologies to showcase my projects, skills, and experience. The site features smooth animations, responsive design, and a clean user interface.",
      features: [
        "Dark/Light theme toggle with system preference detection",
        "Smooth page transitions and scroll animations",
        "Responsive design for all device sizes",
        "Interactive project showcase with detailed modals",
        "Performance optimized with Next.js and Image optimization"
      ],
      challenges: [
        "Implementing complex animations while maintaining performance",
        "Creating a seamless dark/light theme transition",
        "Optimizing images and assets for fast loading"
      ],
      learnings: [
        "Advanced Framer Motion animations and transitions",
        "Next.js 13+ App Router implementation",
        "Tailwind CSS best practices and responsive design",
        "Performance optimization techniques"
      ],
      role: "Full Stack Developer",
      duration: "2 months",
      impact: "Improved portfolio presentation and user engagement"
    },
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "https://github.com/lakshay-verma-dev/NextJS_Portfolio",
    live: "https://lakshayverma-portfolio.vercel.app",
    tag: "Complete",
    type: "personal",
    imageUrl: "/projects/portfolio.png"
  },
  {
    id: "personal-002",
    title: "Book Inventory Management System",
    description: "A comprehensive system for managing book inventory with secure transactions.",
    detailedInfo: {
      overview: "A full-stack application for managing book inventory, sales, and purchases with secure payment processing and user authentication. The system helps bookstores manage their inventory efficiently.",
      features: [
        "Secure user authentication and authorization",
        "Real-time inventory tracking and updates",
        "Stripe payment integration for secure transactions",
        "Admin dashboard with analytics and reporting",
        "Search and filter functionality for books"
      ],
      challenges: [
        "Implementing secure payment processing",
        "Managing real-time inventory updates",
        "Creating an intuitive admin interface"
      ],
      learnings: [
        "Stripe API integration and payment processing",
        "MongoDB database design and optimization",
        "Redux state management for complex data",
        "Secure authentication implementation"
      ],
      role: "Full Stack Developer",
      duration: "3 months",
      impact: "Streamlined inventory management process"
    },
    tech: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Stripe"
    ],
    github: "https://github.com/lakshay-verma-dev/inventory-hub",
    live: "https://inventory-hub-1.onrender.com",
    tag: "Complete",
    type: "personal",
    imageUrl: "/projects/inventory.png"
  },
  {
    id: "personal-003",
    title: "Store Sync",
    description: "A modern file storage solution with advanced features.",
    detailedInfo: {
      overview: "A Dropbox-inspired file storage and sharing platform with advanced features like real-time synchronization, secure authentication, and optimized image handling.",
      features: [
        "Secure file upload and storage",
        "Real-time file synchronization",
        "Image optimization and processing",
        "User authentication with Clerk",
        "File sharing and collaboration"
      ],
      challenges: [
        "Implementing real-time file sync",
        "Optimizing image uploads and processing",
        "Managing secure file storage"
      ],
      learnings: [
        "Next.js 13+ App Router and Server Components",
        "Clerk authentication implementation",
        "ImageKit integration for image optimization",
        "Drizzle ORM with Neon database"
      ],
      role: "Full Stack Developer",
      duration: "2 months",
      impact: "Efficient file management and sharing solution"
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
    description: "Real-time monitoring system for options trading.",
    detailedInfo: {
      overview: "A comprehensive trading platform for monitoring options market data in real-time, providing notifications and role-based dashboards for different user types.",
      features: [
        "Real-time market data updates",
        "Customizable trading alerts",
        "Role-based access control",
        "Advanced analytics dashboard",
        "Automated trade execution"
      ],
      challenges: [
        "Handling real-time market data streams",
        "Implementing complex trading algorithms",
        "Ensuring system reliability and uptime"
      ],
      learnings: [
        "Real-time data processing with WebSocket",
        "Python FastAPI backend development",
        "AWS EC2 deployment and scaling",
        "PostgreSQL database optimization"
      ],
      role: "Full Stack Developer",
      duration: "6 months",
      impact: "Improved trading efficiency and decision making"
    },
    tech: [
      "React",
      "Redux",
      "Python",
      "FastAPI",
      "Bootstrap",
      "PostgreSQL",
      "AWS EC2"
    ],
    github: "",
    live: "",
    tag: "Work",
    type: "company",
    imageUrl: "/projects/trading.png"
  }
];
