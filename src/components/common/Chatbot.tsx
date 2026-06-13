"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const HF_TOKEN = process.env.NEXT_PUBLIC_HF_TOKEN || "";

const SYSTEM_PROMPT = `You are an AI assistant for Akaraka Global Resources Limited (AGRL), a leading Nigerian industrial chemicals, paints, inks, raw materials and general contracting company founded in May 2000 by Chinebu Longinus Chigozie. 

Key facts about AGRL:
- Headquarters: Zone C6, No.351 International Building Materials Market, Dei-Dei, Abuja, F.C.T., Nigeria
- Branch: Akaraka Plaza, Beside Zenith Bank, Mararaba Building Materials
- Phone: +234-816-617-5684
- Email: akarakaglobalresources@yahoo.com
- Motto: AD Asperia Per Astra

Products and Services:
1. Raw Materials: Freedom CaCO3 (calcium carbonate), stone dust (marble dust), kaolinite, Zecarb CaCO3
2. Chemicals: Acrylic PVA, titanium dioxide, Hecellose, Cellulose ether, HPMC, Natrosol hydroxy ethyl cellulose, sulphur powder, formaline, Antiscal chemical
3. Inks & Pigments: Confineous blue/red/yellow/green/black inks, yellow/red/black/blue/green oxide pigments
4. Coatings & Paints: Confineous emulsion paint, screening paint, stain paint, tex coat paint
5. Plastics & Polymers: 20-liter, 12-liter, and 4-liter buckets

Keep responses short and helpful. If asked about pricing, suggest contacting the sales team. If asked something unrelated to AGRL, politely redirect to how you can help with AGRL products and services.`;

export default function Chatbot() {
  const { locale, t: tr } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("agrl_chat");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem("agrl_chat", JSON.stringify(messages.slice(-50)));
    } catch {}
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-10).map((m) => ({ role: m.role === "user" ? "user" : "assistant", content: m.content })),
        { role: "user", content: text },
      ];

      const response = await fetch(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": HF_TOKEN ? `Bearer ${HF_TOKEN}` : "",
          },
          body: JSON.stringify({
            inputs: {
              past_user_inputs: [],
              generated_responses: [],
              text: `${SYSTEM_PROMPT}\n\nUser: ${text}\nAssistant:`,
            },
          }),
        }
      );

      let reply: string;
      if (response.ok) {
        const data = await response.json();
        reply = data.generated_text || data[0]?.generated_text || "Thank you for your message! How else can I assist you with AGRL products?";
        if (reply.includes("Assistant:")) {
          reply = reply.split("Assistant:").pop()!.trim();
        }
      } else {
        reply = tr("chatError");
      }

      const assistantMsg: Message = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: tr("chatError") }]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, tr]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    { en: "What products do you sell?", fr: "Quels produits vendez-vous ?", ha: "Wadanne kayayyaki kuke sayarwa?", yo: "Àwọn ọjà wo ni ẹ ń tà?", ig: "Kedu ngwaahịa ị na-ere?" },
    { en: "Where is your office?", fr: "Où se trouve votre bureau ?", ha: "Ina ofishinku yake?", yo: "Níbo ni ọ́fìsì yín wà?", ig: "Ebee ka ụlọ ọrụ gị dị?" },
    { en: "How can I place an order?", fr: "Comment passer une commande ?", ha: "Yaya zan yi oda?", yo: "Báwo ni mo ṣe lè paṣẹ?", ig: "Kedu ka m ga-esi nye iwu?" },
    { en: "Do you deliver nationwide?", fr: "Livrez-vous dans tout le pays ?", ha: "Kuna kai wa ko'ina cikin ƙasa?", yo: "Ṣé ẹ ń fi ránṣẹ́ káàkiri orílẹ̀-èdè?", ig: "Ị na-ebuga na mba niile?" },
  ];

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9998,
          width: open ? "0" : "56px",
          height: open ? "0" : "56px",
          borderRadius: "50%",
          background: "#c8102e",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(200,16,46,0.35)",
          transition: "all 0.3s ease",
          overflow: "hidden",
          opacity: open ? 0 : 1,
          transform: open ? "scale(0.5)" : "scale(1)",
        }}
        aria-label="Chat with AGRL"
      >
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </button>

      {/* Chat window */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9997,
          width: open ? "380px" : "0",
          height: open ? "520px" : "0",
          maxHeight: "calc(100vh - 100px)",
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "all 0.3s ease",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(20px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "#c8102e",
            color: "#fff",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: "15px" }}>{tr("chatTitle")}</div>
              <div style={{ fontSize: "11px", opacity: 0.8 }}>
                {loading ? tr("chatSending") : "Online"}
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
              fontSize: "20px",
              padding: "4px 8px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            background: "#f9fafb",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {messages.length === 0 && (
            <div style={{ textAlign: "center", padding: "20px 10px" }}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>👋</div>
              <p style={{ color: "#666", fontSize: "13px", lineHeight: 1.6, fontFamily: "var(--font-dmsans), sans-serif" }}>
                {tr("chatWelcome")}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px", justifyContent: "center" }}>
                {quickReplies.map((qr, i) => {
                  const text = (qr as Record<string, string>)[locale] || qr.en;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(text);
                        setTimeout(() => inputRef.current?.focus(), 100);
                      }}
                      style={{
                        background: "#fff",
                        border: "1px solid #e5e7eb",
                        borderRadius: "16px",
                        padding: "6px 14px",
                        fontSize: "12px",
                        fontFamily: "var(--font-dmsans), sans-serif",
                        color: "#333",
                        cursor: "pointer",
                        transition: "border-color 0.15s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c8102e")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e5e7eb")}
                    >
                      {text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div
                style={{
                  maxWidth: "85%",
                  padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: msg.role === "user" ? "#c8102e" : "#fff",
                  color: msg.role === "user" ? "#fff" : "#333",
                  border: msg.role === "user" ? "none" : "1px solid #e5e7eb",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  fontFamily: "var(--font-dmsans), sans-serif",
                  wordBreak: "break-word",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px 16px 16px 4px",
                  padding: "12px 16px",
                }}
              >
                <div style={{ display: "flex", gap: "4px" }}>
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%", background: "#bbb",
                    animation: "chatDot 1.4s ease-in-out infinite",
                  }} />
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%", background: "#bbb",
                    animation: "chatDot 1.4s ease-in-out 0.2s infinite",
                  }} />
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%", background: "#bbb",
                    animation: "chatDot 1.4s ease-in-out 0.4s infinite",
                  }} />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEnd} />
        </div>

        {/* Input */}
        <div
          style={{
            padding: "12px 16px",
            borderTop: "1px solid #eee",
            display: "flex",
            gap: "8px",
            background: "#fff",
          }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={tr("chatPlaceholder")}
            style={{
              flex: 1,
              border: "1px solid #e5e7eb",
              borderRadius: "20px",
              padding: "10px 16px",
              fontSize: "13px",
              fontFamily: "var(--font-dmsans), sans-serif",
              outline: "none",
              background: "#f9fafb",
            }}
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: input.trim() && !loading ? "#c8102e" : "#e5e7eb",
              border: "none",
              cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.15s",
              flexShrink: 0,
            }}
          >
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1={22} y1={2} x2={11} y2={13} />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>

        <style jsx>{`
          @keyframes chatDot {
            0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
            40% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
}
