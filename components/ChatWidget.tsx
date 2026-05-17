"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "init",
  role: "assistant",
  content:
    "Hallo! 👋 Ich bin **Pilot**, der KI-Assistent von KundenPilot.\n\nIch helfe Ihnen herauszufinden, wie wir Ihr Unternehmen mit KI-Automatisierung voranbringen können – und ich bin selbst der Beweis, dass unsere Chatbots funktionieren. 😊\n\nWomit kann ich Ihnen helfen?",
  timestamp: new Date(),
};

const QUICK_REPLIES = [
  "Was ist KundenPilot?",
  "Wie funktioniert der Chatbot?",
  "Für welche Branchen?",
  "Demo anfragen 🚀",
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-6 h-6 flex-shrink-0">
        <Image src="/logo.png" alt="Bot" width={24} height={24} className="rounded-full" />
      </div>
      <div className="flex items-center gap-1 px-4 py-3 bg-white rounded-2xl rounded-tl-sm shadow-sm border border-slate-100">
        <span
          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <span
          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
          style={{ animationDelay: "160ms" }}
        />
        <span
          className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
          style={{ animationDelay: "320ms" }}
        />
      </div>
    </div>
  );
}

function BotMessage({ content }: { content: string }) {
  const formatted = content
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
  return (
    <div className="flex items-end gap-2">
      <div className="w-6 h-6 flex-shrink-0">
        <Image src="/logo.png" alt="Pilot" width={24} height={24} className="rounded-full" />
      </div>
      <div
        className="max-w-[78%] bg-white text-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: formatted }}
      />
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[78%] bg-blue-700 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm leading-relaxed">
        {content}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quickRepliesShown, setQuickRepliesShown] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show notification badge after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      setQuickRepliesShown(false);
      setShowBadge(false);

      const userMessage: Message = {
        id: `u-${Date.now()}`,
        role: "user",
        content: text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      try {
        const allMessages = [...messages, userMessage];
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: allMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        const data = await res.json();

        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            role: "assistant",
            content:
              data.reply ||
              "Entschuldigung, bitte versuchen Sie es erneut oder schreiben Sie uns auf WhatsApp.",
            timestamp: new Date(),
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            role: "assistant",
            content:
              "Entschuldigung, ich habe gerade technische Schwierigkeiten. Schreiben Sie uns direkt auf WhatsApp: https://wa.me/4917687910568 🙏",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Chat Window ── */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[370px] max-w-[calc(100vw-24px)] bg-white rounded-2xl shadow-2xl shadow-slate-900/25 border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ height: "530px" }}
      >
        {/* Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-3 flex-shrink-0">
          <div className="relative flex-shrink-0">
            <Image
              src="/logo.png"
              alt="KundenPilot"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm">Pilot</p>
            <p className="text-slate-400 text-xs">KundenPilot KI-Assistent · Online</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-800"
            aria-label="Chat schließen"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Privacy bar */}
        <div className="bg-blue-50 border-b border-blue-100 px-4 py-1.5 flex items-center justify-center gap-1.5 flex-shrink-0">
          <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs text-blue-600">
            Vertraulich · DSGVO-konform ·{" "}
            <a href="/datenschutz" className="underline" target="_blank">
              Datenschutz
            </a>
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50">
          {messages.map((msg) =>
            msg.role === "user" ? (
              <UserMessage key={msg.id} content={msg.content} />
            ) : (
              <BotMessage key={msg.id} content={msg.content} />
            )
          )}

          {/* Quick replies – only after initial message */}
          {quickRepliesShown && messages.length === 1 && !isLoading && (
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply}
                  onClick={() => sendMessage(reply)}
                  className="bg-white border border-blue-200 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-400 transition-colors shadow-sm"
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {isLoading && <TypingIndicator />}

          <div ref={messagesEndRef} />
        </div>

        {/* Escalation bar */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex items-center justify-between gap-2 flex-shrink-0">
          <p className="text-xs text-slate-400">Lieber mit einem Menschen?</p>
          <a
            href="https://wa.me/4917687910568"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#25D366] font-semibold hover:text-green-700 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="px-3 pb-3 pt-2 bg-white flex gap-2 flex-shrink-0"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nachricht schreiben..."
            disabled={isLoading}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-60 transition-shadow"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-blue-700 hover:bg-blue-600 disabled:bg-slate-200 text-white disabled:text-slate-400 p-2.5 rounded-xl transition-colors flex-shrink-0"
            aria-label="Senden"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* ── Toggle Button ── */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBadge(false);
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-2xl shadow-slate-900/40 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label={isOpen ? "Chat schließen" : "Chat öffnen"}
      >
        {/* Notification badge */}
        {showBadge && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </span>
        )}

        <div
          className={`transition-all duration-300 ${isOpen ? "scale-0 opacity-0 absolute" : "scale-100 opacity-100"}`}
        >
          <Image src="/logo.png" alt="KundenPilot Chat" width={42} height={42} className="rounded-full" />
        </div>
        <div
          className={`transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>
    </>
  );
}
