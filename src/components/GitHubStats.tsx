"use client";
import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [isClient, setIsClient] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {hasError ? (
        <p className="text-red-500 text-center">
          Unable to load GitHub stats. Try again later.
        </p>
      ) : (
        <img
          src="https://github-readme-stats.vercel.app/api?username=lakshay-verma-dev&show_icons=true&theme=radical"
          alt="Lakshay Verma's GitHub stats"
          className="w-full max-w-[600px] h-[100%] object-contain mx-auto rounded-lg shadow-2xl transition-transform"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      )}
    </>
  );
}
