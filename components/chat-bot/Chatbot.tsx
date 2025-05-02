"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import React from "react";

const ChatWidget = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const { data } = useSession();
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    if (data?.user?.email) {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_CHAT}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        });
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: data.response },
        ]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: `Something went wrong! Error: ${error}` },
        ]);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `no session, please login to use chat` },
      ]);
    }
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          {isOpen && (
            <div className="w-80 h-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute bottom-90 right-0"
              >
                <i className=" ri-close-circle-fill ri-2x"></i>
              </button>
              <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 my-2 rounded-xl max-w-xs text-sm ${
                      msg.role === "user"
                        ? "bg-[#E6F7FF] text-[#008CBA] self-end"
                        : "bg-[#F0FFF4] text-[#4CAF50] self-start"
                    }`}
                  >
                    {msg.role === "user" ? (
                      <i className="ri-chat-ai-fill ri-2x"></i>
                    ) : (
                      <i className="ri-robot-3-line ri-2x"></i>
                    )}
                    {`: ${msg.content}`}
                  </div>
                ))}
              </div>
              <div className="p-2 border-t flex gap-4 items-center">
                <input
                  className="p-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#008CBA] placeholder-[#008CBA] text-[#333]"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type a message..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bottom-2 right-1"
        >
          <i className="bg-blue-600 text-white rounded-full p-3 shadow-lg ri-chat-4-line ri-2x"></i>
        </button>
      )}
    </>
  );
};
export default ChatWidget;
