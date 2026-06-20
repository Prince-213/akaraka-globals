import { NextResponse } from "next/server";
import companyKnowledge from "@/data/chatbotKnowledge";

const GROQ_KEY = process.env.GROQ_API_KEY;

function buildPrompt(question: string): string {
  const kb = companyKnowledge
    .map((e, i) => `${i + 1}. Q: ${e.question}\n   A: ${e.answer}`)
    .join("\n\n");

  return `You are a professional customer support assistant for Akaraka Global Resources Limited (AGRL), a Nigerian supplier of industrial chemicals, paints, inks, raw materials, coatings, and plastics since 2000.

RULES:
- Answer ONLY using the company knowledge below.
- If the answer is NOT in the knowledge, say: "I don't have that information. Please email akarakaglobalresources@yahoo.com or call 0816-617-5684."
- Be concise and helpful. Never invent information.

COMPANY KNOWLEDGE:
${kb}

Customer question: ${question}`;
}

async function callGroq(question: string): Promise<string> {
  console.log("[Groq] Calling Llama 3.3 70B...");
  const start = Date.now();

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: buildPrompt(question) },
          { role: "user", content: question },
        ],
        temperature: 0.2,
        max_tokens: 400,
      }),
    });

    console.log(`[Groq] Status: ${res.status} (${Date.now() - start}ms)`);

    if (!res.ok) {
      const err = await res.text();
      console.error("[Groq] Error:", err.slice(0, 300));
      return "";
    }

    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content || "";
    console.log(`[Groq] Answer: ${text.length} chars`);
    return text.trim();
  } catch (err: any) {
    console.error("[Groq] Fetch error:", err.message);
    return "";
  }
}

export async function POST(request: Request) {
  const reqStart = Date.now();
  console.log("[API] Request received");

  try {
    const { question } = await request.json();
    console.log("[API] Q:", question?.slice(0, 100));
    if (!question?.trim()) return NextResponse.json({ answer: "Please ask a question." });

    // Try Groq if key configured
    if (GROQ_KEY && GROQ_KEY !== "your_groq_key_here") {
      const answer = await callGroq(question);
      if (answer && answer.length >= 10) {
        console.log(`[API] Groq success (${Date.now() - reqStart}ms)`);
        return NextResponse.json({ answer, source: "groq" });
      }
      console.log("[API] Groq failed, falling back");
    }

    // Local KB fallback
    const { findBestAnswer } = await import("@/i18n/chatKnowledgeBase");
    const result = findBestAnswer(question);
    return NextResponse.json({
      answer: result.answer || "I don't have that information. Please email akarakaglobalresources@yahoo.com or call 0816-617-5684.",
      source: result.answer ? "kb" : "fallback",
    });
  } catch (err: any) {
    console.error("[API] Error:", err.message);
    return NextResponse.json(
      { answer: "Something went wrong. Call 0816-617-5684 for help.", source: "error" },
      { status: 200 }
    );
  }
}
