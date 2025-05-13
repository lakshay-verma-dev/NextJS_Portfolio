// components/GitHubStreak.tsx
"use client";
import { useEffect, useState } from "react";

export default function GitHubStreak() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <img
      src="https://streak-stats.demolab.com/?user=lakshay-verma-dev&theme=radical"
      alt="Lakshay Verma's GitHub streak"
      className="mx-auto rounded-lg shadow-2xl w-full transition-transform"
      referrerPolicy="no-referrer"
    />
  );
}
