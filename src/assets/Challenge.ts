export interface ChallengeData {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
  solution: string;
}

export const challenges: ChallengeData[] = [
  {
    id: "aws-deploy",
    title: "Deploying Full Stack App to AWS",
    date: "March 2024",
    shortDescription:
      "Faced issues with CORS and server environment configuration...",
    fullDescription:
      "Faced multiple issues including CORS configuration, firewall settings, and EC2 networking. Learned how to correctly set environment variables and handle HTTP headers in production.",
    solution:
      "Used nginx as a reverse proxy. Configured security groups on AWS EC2. Solved CORS by setting proper headers on the backend and whitelisting frontend origin.",
  },
  {
    id: "redux-toolkit",
    title: "Mastering Redux Toolkit",
    date: "February 2024",
    shortDescription:
      "Initially struggled with async thunks and state normalization...",
    fullDescription:
      "Had trouble understanding how async thunks work and how to structure slices effectively. Normalizing deeply nested data was challenging.",
    solution:
      "Studied the RTK docs and used createEntityAdapter for normalization. Applied middleware and async thunk best practices with clear loading states.",
  },
  {
    id: "auth-system",
    title: "Building a Scalable Auth System",
    date: "January 2024",
    shortDescription:
      "Faced edge cases like token expiration and password reset...",
    fullDescription:
      "Issues with session handling, secure token storage, and multi-device login. Explored cookie-based vs. token-based auth methods.",
    solution:
      "Used JWT with refresh tokens stored in HttpOnly cookies. Used bcrypt for hashing and handled edge cases with proper token lifecycle logic.",
  },
  {
    id: "tailwind-motion",
    title: "Responsive UI With Tailwind & Framer Motion",
    date: "December 2023",
    shortDescription:
      "Created a dynamic interface with animations and responsive layouts...",
    fullDescription:
      "Faced layout shifting bugs and performance issues on low-end devices due to excessive animations and transitions.",
    solution:
      "Optimized layout using Tailwind’s responsive utilities. Used framer-motion’s `layout` prop and limited use of heavy animations on mobile.",
  },
];
