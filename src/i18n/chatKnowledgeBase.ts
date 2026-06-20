import companyKnowledge from "@/data/chatbotKnowledge";
import type { KnowledgeEntry } from "@/data/chatbotKnowledge";

export type Intent =
  | "greeting"
  | "products"
  | "pricing"
  | "location"
  | "delivery"
  | "order"
  | "quality"
  | "about"
  | "contact"
  | "thanks"
  | "services"
  | "hours"
  | "fallback";

const responseKeyMap: Record<Intent, string> = {
  greeting: "cbGreeting",
  products: "cbProducts",
  pricing: "cbPricing",
  location: "cbLocation",
  delivery: "cbDelivery",
  order: "cbOrder",
  quality: "cbQuality",
  about: "cbAbout",
  contact: "cbContact",
  thanks: "cbThanks",
  services: "cbProducts",
  hours: "cbContact",
  fallback: "cbFallback",
};

const specificIntents: { intent: Intent; keywords: string[]; weight: number }[] = [
  {
    intent: "greeting",
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "how are you", "what's up", "help", "assist", "welcome", "hola", "bonjour", "salut", "sannu", "ndewo", "你好", "您好"],
    weight: 1.2,
  },
  {
    intent: "thanks",
    keywords: ["thank", "thanks", "appreciate", "grateful", "good job", "well done", "na gode", "daalụ", "ẹ ṣéun", "谢谢", "gracias", "merci"],
    weight: 1.3,
  },
  {
    intent: "hours",
    keywords: ["open", "close", "hours", "time", "working", "monday", "saturday", "sunday", "when are you open", "business hours", "schedule"],
    weight: 1.15,
  },
  {
    intent: "services",
    keywords: ["service", "import", "export", "contracting", "consultation", "supply chain", "quality assurance", "bulk procurement", "formulation", "blending"],
    weight: 1.05,
  },
];

function tokenize(input: string): string[] {
  return input.toLowerCase().replace(/[^\w\s\u00C0-\u017F\u4e00-\u9fa5]/g, " ").split(/\s+/).filter(Boolean);
}

function scoreEntry(entry: KnowledgeEntry, tokens: string[]): number {
  let score = 0;
  for (const kw of entry.keywords) {
    const kwLower = kw.toLowerCase();
    const kwTokens = tokenize(kw);
    const matches = kwTokens.filter((t) => tokens.includes(t)).length;
    if (matches === kwTokens.length && kwTokens.length > 0) {
      score += 1.5;
    } else if (matches > 0) {
      score += 0.5 * (matches / kwTokens.length);
    }
  }
  return score;
}

function scoreSpecific(intent: { keywords: string[]; weight: number }, tokens: string[]): number {
  let score = 0;
  for (const kw of intent.keywords) {
    const kwLower = kw.toLowerCase();
    if (tokens.join(" ") === kwLower) score += intent.weight * 3;
    else if (tokens.join(" ").includes(kwLower)) score += intent.weight * 1.5;
    else {
      const kwTokens = tokenize(kw);
      const matches = kwTokens.filter((t) => tokens.includes(t)).length;
      if (matches === kwTokens.length && kwTokens.length > 0) score += intent.weight;
      else if (matches > 0) score += intent.weight * 0.4 * (matches / kwTokens.length);
    }
  }
  return score;
}

export function findBestAnswer(input: string): { answer: string; intent: Intent } {
  const tokens = tokenize(input);
  if (tokens.length === 0) return { answer: "", intent: "fallback" };

  let bestEntry: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of companyKnowledge) {
    const s = scoreEntry(entry, tokens);
    if (s > bestScore) {
      bestScore = s;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore >= 1.0) {
    const intent = bestEntry.keywords.some((k) => ["price", "cost", "quote", "how much", "rate"].includes(k.toLowerCase())) ? "pricing"
      : bestEntry.keywords.some((k) => ["location", "address", "office", "where"].includes(k.toLowerCase())) ? "location"
      : bestEntry.keywords.some((k) => ["deliver", "ship", "logistics"].includes(k.toLowerCase())) ? "delivery"
      : bestEntry.keywords.some((k) => ["order", "buy", "purchase"].includes(k.toLowerCase())) ? "order"
      : bestEntry.keywords.some((k) => ["quality", "standard", "certif", "test"].includes(k.toLowerCase())) ? "quality"
      : bestEntry.keywords.some((k) => ["contact", "phone", "email", "call"].includes(k.toLowerCase())) ? "contact"
      : bestEntry.keywords.some((k) => ["who", "about", "company", "agrl", "history"].includes(k.toLowerCase())) ? "about"
      : bestEntry.keywords.some((k) => ["open", "close", "hours"].includes(k.toLowerCase())) ? "hours"
      : bestEntry.keywords.some((k) => ["service", "import", "export"].includes(k.toLowerCase())) ? "services"
      : "products";
    return { answer: bestEntry.answer, intent };
  }

  let specificIntent: Intent = "fallback";
  let specificScore = 0;
  for (const si of specificIntents) {
    const s = scoreSpecific(si, tokens);
    if (s > specificScore) { specificScore = s; specificIntent = si.intent; }
  }

  if (specificScore >= 0.8) return { answer: "", intent: specificIntent };
  return { answer: "", intent: "fallback" };
}

export function getResponseKey(intent: Intent): string {
  return responseKeyMap[intent];
}

export { companyKnowledge };
