export interface ChallengeData {
  id: string;
  title: string;
  project: string;
  shortDescription: string;
  fullDescription: string;
  solution: string;
}

export const challenges: ChallengeData[] = [
  // =======================
  // Trading Software (Work)
  // =======================
  {
    id: "aws-nginx-ec2",
    title: "Setting Up Backend on AWS EC2 with NGINX",
    project: "Trade Monitoring Software",
    shortDescription:
      "Faced server accessibility issues due to CORS, firewall, and reverse proxy misconfiguration...",
    fullDescription:
      "During deployment of the trading backend on EC2, I encountered major challenges with NGINX reverse proxy, port exposure, and CORS headers not aligning between frontend and backend.",
    solution:
      "Configured NGINX correctly as a reverse proxy, adjusted AWS EC2 security groups, and fixed CORS issues with appropriate headers in the backend API.",
  },
  {
    id: "dhan-api-integration",
    title: "Live Market Data Using Dhan API",
    project: "Trade Monitoring Software",
    shortDescription:
      "Struggled with real-time trade data due to API rate limits and inconsistent responses...",
    fullDescription:
      "Needed to integrate Dhan API for real-time option prices. Faced trouble with API authentication, polling strategies, and formatting the data efficiently for charts and tables.",
    solution:
      "Implemented request throttling, optimized the polling strategy using `setInterval`, and cached data to reduce calls. Used a charting lib with a fallback strategy for API failures.",
  },

  // ==============================
  // Book Inventory (Personal)
  // ==============================
  {
    id: "user-role-dashboard",
    title: "Role-Based Dashboard and Access Control",
    project: "Book Inventory Management System",
    shortDescription:
      "Difficulty handling different dashboard views based on user roles (admin, manager)...",
    fullDescription:
      "Faced challenges creating scalable layouts for different user roles and protecting routes based on those roles. Ensured secure JWT validation on both client and server sides.",
    solution:
      "Created a role-based context provider, used protected routes with middleware, and stored JWT securely in cookies. Conditional rendering was added for each dashboard section.",
  },
  {
    id: "auth-lifecycle",
    title: "Auth System with JWT and Refresh Tokens",
    project: "Book Inventory Management System",
    shortDescription:
      "Issues with token expiration, session handling, and multi-device login...",
    fullDescription:
      "Initially struggled to persist user sessions correctly across devices and refresh expired tokens without exposing vulnerabilities.",
    solution:
      "Implemented refresh tokens in HttpOnly cookies, used short-lived access tokens, and added route guards. Bcrypt was used for password security.",
  },

  // =========================================
  // Personal Portfolio Website (Personal)
  // =========================================
  {
    id: "tailwind-framer",
    title: "Framer Motion and Tailwind Layout Bugs",
    project: "Personal Portfolio Website",
    shortDescription:
      "Animations caused layout shifts and performance issues on mobile devices...",
    fullDescription:
      "Faced a challenge integrating Framer Motion with Tailwind in a responsive setup. Transitions and layout animations were heavy on mobile devices.",
    solution:
      "Used Tailwind's responsive utilities to limit animations on smaller screens. Optimized framer-motion layout usage and removed redundant transitions.",
  },

  // ============================
  // Store Sync (In Progress)
  // ============================
  {
    id: "storage-architecture",
    title: "Planning Scalable File Storage Architecture",
    project: "Store Sync",
    shortDescription:
      "Finding the right balance between cost-effective storage and access performance...",
    fullDescription:
      "Since Store Sync is a file storage app, choosing the right combination of image CDN (ImageKit), database (Neon/PostgreSQL), and file delivery strategy was challenging.",
    solution:
      "Researched best practices for CDN integration. Designed backend API that separates metadata from actual file URLs. Used signed URLs and access tokens to prevent abuse.",
  },
];
