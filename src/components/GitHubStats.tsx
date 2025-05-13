// components/GitHubStats.tsx
"use client";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <img
      src="https://github-readme-stats.vercel.app/api?username=lakshay-verma-dev&show_icons=true&theme=radical"
      alt="Lakshay Verma's GitHub stats"
      className="mx-auto rounded-lg shadow-2xl w-full transition-transform"
      referrerPolicy="no-referrer"
    />
  );
}
