"use client";

import { useState } from "react";
import { chatbot } from "@/assets/Chatbot";
import { MessageCircle } from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);

  const handleQuestionClick = (q: string, a: string) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: q },
      { from: "bot", text: a },
    ]);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {!isOpen ? (
        <Tooltip.Provider delayDuration={100}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center 
                shadow-[0_0_15px_3px_rgba(192,132,252,0.8)] 
               
                transition duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="right"
                className="rounded bg-black px-2 py-1 ml-2 text-white text-sm shadow-md z-50"
              >
                Ask Chatbot
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ) : (
        <div className="relative w-80 max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
              💬 Chatbot
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-sm text-red-500 hover:text-red-700 font-bold"
            >
              ✖
            </button>
          </div>

          <div className="space-y-2">
            {chatbot.map(({ question, answer }, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(question, answer)}
                className="w-full text-left bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 p-2 rounded-md hover:bg-purple-100 dark:hover:bg-purple-800 transition"
              >
                {question}
              </button>
            ))}
          </div>

          <div className="mt-4 max-h-48 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 dark:scrollbar-thumb-purple-600">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 text-sm rounded-md max-w-[85%] ${
                  msg.from === "user"
                    ? "ml-auto bg-purple-200 dark:bg-purple-700 text-right"
                    : "mr-auto bg-gray-200 dark:bg-gray-700 text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
