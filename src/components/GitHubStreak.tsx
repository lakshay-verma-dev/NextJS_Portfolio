"use client";
import { useEffect, useState } from "react";

export default function GitHubStreak() {
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
          Failed to load GitHub streak stats.
        </p>
      ) : (
        <img
          src="https://streak-stats.demolab.com/?user=lakshay-verma-dev&theme=radical"
          alt="Lakshay Verma's GitHub streak"
          className="w-full max-w-[600px] h-[100%] object-contain mx-auto rounded-lg shadow-2xl transition-transform"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      )}
    </>
  );
}
