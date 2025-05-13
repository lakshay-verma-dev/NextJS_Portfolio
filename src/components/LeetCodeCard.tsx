// components/LeetCodeCard.tsx
"use client";
import { useEffect, useState } from "react";

export default function LeetCodeCard() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <img
      src="https://leetcard.jacoblin.cool/lakshay_03?ext=png&theme=dark"
      alt="Lakshay Verma's LeetCode Stats"
      className="rounded-lg shadow-2xl border-4 border-yellow-400 dark:border-yellow-500"
      width={700}
      height={300}
      referrerPolicy="no-referrer"
    />
  );
}
