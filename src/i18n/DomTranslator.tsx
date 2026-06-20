"use client";

import { useEffect, useRef, useCallback } from "react";
import { useLanguage } from "./LanguageContext";
import { translate, type Locale } from "./translations";

// English UI string → translation key
const STRING_TO_KEY: Record<string, string> = {
  // ── Navigation ──
  "Home": "home",
  "Products": "products",
  "Services": "services",
  "About": "about",
  "Contact Us": "contactUs",
  "Call Us": "callUs",
  "Get In Touch": "getInTouch",
  "Any Question?": "anyQuestion",

  // ── Hero / CTA ──
  "Explore Products": "exploreProducts",
  "Contact Us Now": "contactUsNow",
  "Start A Project": "startAProject",
  "Let's Discuss": "letsDiscuss",
  "Learn More": "learnMore",
  "Read More": "readMore",
  "View All": "viewAll",
  "View All Products": "viewAllProducts",
  "View All Services": "viewAllServices",

  // ── About ──
  "About AGRL": "aboutAGRL",
  "Over 25 Years of Industrial Supply Excellence": "over25Years",
  "Our Mission": "ourMission",
  "Who We Are": "whoWeAre",
  "About Us More": "aboutUsMore",
  "Founded in 2000": "foundedText",
  "Our Story": "ourStory",

  // ── Services / Product Categories ──
  "Our Product Categories": "ourProductCategories",
  "Comprehensive Industrial Solutions": "comprehensiveIndustrialSolutions",
  "Raw Materials": "rawMaterials",
  "Industrial Chemicals": "industrialChemicals",
  "Inks & Pigments": "inksAndPigments",
  "Coatings & Paints": "coatingsAndPaints",
  "Plastics & Polymers": "plasticsAndPolymers",

  // ── Features ──
  "Material Quality": "materialQuality",
  "Material Product": "materialProduct",
  "Premium Quality Raw Materials": "premiumQualityRawMaterials",
  "Strict Quality Inspection": "strictQualityInspection",
  "Bulk Supply & Timely Delivery": "bulkSupplyAndTimelyDelivery",
  "Safe Handling & Storage": "safeHandlingAndStorage",
  "Expert Technical Consultation": "expertTechnicalConsultation",
  "Competitive Pricing & Value": "competitivePricingAndValue",

  // ── Product Names ──
  "Calcium Carbonate (CaCO3)": "calciumCarbonate",
  "Stone Dust": "stoneDust",
  "Kaolinite": "kaolinite",
  "Acrylic PVA": "acrylicPVA",
  "Titanium Dioxide": "titaniumDioxide",
  "HPMC": "hpmc",
  "Cellulose Ethers": "celluloseEthers",
  "Sulphur Powder": "sulphurPowder",
  "Emulsion Paints": "emulsionPaints",
  "Tex Coat Paints": "texCoatPaints",
  "Plastic Buckets": "plasticBuckets",

  // ── Process ──
  "How We Deliver": "howWeDeliver",
  "Our Supply Chain Process": "ourSupplyChainProcess",
  "Sourcing & Procurement": "sourcingAndProcurement",
  "Quality Assurance & Testing": "qualityAssuranceAndTesting",
  "Delivery & Support": "deliveryAndSupport",

  // ── Team ──
  "Our Leadership Team": "ourLeadershipTeam",
  "Meet Our AGRL Team": "meetOurTeam",
  "Managing Director": "managingDirector",
  "Operations Manager": "operationsManager",
  "Sales Director": "salesDirector",
  "Supply Chain Lead": "supplyChainLead",
  "Quality Control Manager": "qualityControlManager",

  // ── Footer ──
  "Our Location": "ourLocation",
  "Follow Us": "followUs",
  "Say Hello": "sayHello",
  "Copyright": "copyright",
  "Head Office - Abuja": "headOfficeAbuja",
  "Branch Office": "branchOffice",
  "Company Links": "companyLinks",
  "Career Links": "careerLinks",
  "News & Updates": "newsAndUpdates",

  // ── FAQ ──
  "Frequently Asked Questions": "frequentlyAskedQuestions",
  "Ask A Question": "askAQuestion",

  // ── Blog ──
  "Our Blog & Articles": "ourBlog",
  "Industry Insights": "industryInsights",
  "Factory Trends": "factoryTrends",

  // ── Contact ──
  "Send Us a Message": "sendUsMessage",
  "Your Name": "yourName",
  "Your Email": "yourEmail",
  "Your Phone": "yourPhone",
  "Your Message": "yourMessage",
  "Submit Now": "submitNow",
  "Get In Touch With Us": "getInTouchWithUs",

  // ── Map / Locations ──
  "Our Office Locations": "ourOfficeLocations",
  "Contact Us For Directions": "contactUsForDirections",

  // ── Misc / Business ──
  "Partner With AGRL Today": "partnerWithUs",
  "Your Trusted Partner in Industrial Chemicals, Paints & Raw Materials": "trustedPartner",
  "Quality Products": "qualityProducts",
  "Reliable Service": "reliableService",
  "Our Clients": "ourClients",
  "Our Process": "ourProcess",
  "Our Products": "ourProducts",
  "General Contracting": "generalContracting",
  "Imports": "imports",
  "Exports": "exports",
  "Supply Excellence": "supplyExcellence",
  "AD Asperia Per Astra": "motto",

  // ── Chatbot ──
  "Chat with AGRL": "chatTitle",
  "Type your message...": "chatPlaceholder",
  "Sending...": "chatSending",
  "Language": "selectLanguage",

  // ── Uppercase / style variants ──
  "GET IN TOUCH": "getInTouch",
  "SAY HELLO": "sayHello",
  "OUR MISSION": "ourMission",
  "WHO WE ARE": "whoWeAre",
  "HEAD OFFICE - ABUJA": "headOfficeAbuja",
  "BRANCH OFFICE": "branchOffice",
  "CONTACT US": "contactUs",
  "HOME": "home",
  "PRODUCTS": "products",
  "SERVICES": "services",
  "ABOUT": "about",
  "VIEW ALL": "viewAll",
  "READ MORE": "readMore",
  "LEARN MORE": "learnMore",
  "EXPLORE PRODUCTS": "exploreProducts",
  "OUR PRODUCTS": "ourProducts",
  "OUR LOCATION": "ourLocation",
  "FOLLOW US": "followUs",
  "RAW MATERIALS": "rawMaterials",
  "INDUSTRIAL CHEMICALS": "industrialChemicals",
  "INKS & PIGMENTS": "inksAndPigments",
  "COATINGS & PAINTS": "coatingsAndPaints",
  "PLASTICS & POLYMERS": "plasticsAndPolymers",
};

const EXCLUDED_TAGS = new Set([
  "SCRIPT", "STYLE", "INPUT", "TEXTAREA", "IFRAME", "SVG", "PATH", "NOSCRIPT", "CODE", "PRE",
]);

const EXCLUDED_SELECTORS = "[data-no-translate], script, style, input, textarea, iframe, svg, path, noscript, code, pre";

function dispatchTranslationEvent(state: "start" | "end") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("agrl-translation", { detail: { state } }));
}

export default function DomTranslator() {
  const { locale } = useLanguage();
  const observerRef = useRef<MutationObserver | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const isTranslatingRef = useRef(false);
  const lastLocaleRef = useRef<Locale>("en");

  const applyTranslation = useCallback((targetLocale: Locale) => {
    if (typeof document === "undefined" || !document.body) return;
    if (isTranslatingRef.current) return;

    isTranslatingRef.current = true;
    dispatchTranslationEvent("start");

    // Disconnect observer to prevent loops
    observerRef.current?.disconnect();

    try {
      // Step 1: Restore all previously translated elements to English
      const marked = Array.from(document.body.querySelectorAll("[data-i18n-marked]"));
      marked.forEach((el) => {
        const original = el.getAttribute("data-i18n-original");
        if (original !== null) {
          el.textContent = original;
        }
        el.removeAttribute("data-i18n-marked");
        el.removeAttribute("data-i18n-original");
      });

      // If switching to English, we're done
      if (targetLocale === "en") {
        lastLocaleRef.current = targetLocale;
        return;
      }

      // Step 2: Walk DOM and translate all matching text nodes
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;
          if (EXCLUDED_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
          if (parent.closest(EXCLUDED_SELECTORS)) return NodeFilter.FILTER_REJECT;
          const text = node.textContent || "";
          if (!text.trim()) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const nodesToProcess: { node: Text; parent: Element }[] = [];
      let currentNode: Node | null;
      while ((currentNode = walker.nextNode())) {
        const textNode = currentNode as Text;
        const parent = textNode.parentElement;
        if (parent) {
          nodesToProcess.push({ node: textNode, parent });
        }
      }

      // Step 3: Translate each text node
      for (const { node, parent } of nodesToProcess) {
        const originalText = (node.textContent || "").trim();
        if (!originalText || originalText.length < 2) continue;

        // Try exact match first
        const key = STRING_TO_KEY[originalText];
        if (key) {
          const translated = translate(key, targetLocale);
          if (translated && translated !== originalText) {
            parent.setAttribute("data-i18n-marked", "true");
            parent.setAttribute("data-i18n-original", originalText);
            parent.textContent = translated;
            continue;
          }
        }

        // Try partial match: check if text contains any translatable strings
        let hasTranslation = false;
        for (const [englishStr, translationKey] of Object.entries(STRING_TO_KEY)) {
          if (originalText.includes(englishStr)) {
            const translated = translate(translationKey, targetLocale);
            if (translated && translated !== englishStr) {
              const newText = originalText.replace(englishStr, translated);
              if (newText !== originalText) {
                parent.setAttribute("data-i18n-marked", "true");
                parent.setAttribute("data-i18n-original", originalText);
                parent.textContent = newText;
                hasTranslation = true;
                break;
              }
            }
          }
        }

        if (hasTranslation) continue;
      }

      lastLocaleRef.current = targetLocale;
    } finally {
      isTranslatingRef.current = false;
      dispatchTranslationEvent("end");

      // Reconnect observer after a short delay to avoid immediate re-trigger
      setTimeout(() => {
        if (observerRef.current && document.body) {
          observerRef.current.observe(document.body, { childList: true, subtree: true });
        }
      }, 100);
    }
  }, []);

  // Effect: Apply translation when locale changes
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Debounce to prevent rapid successive translations
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      applyTranslation(locale);
    }, 150);

    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [locale, applyTranslation]);

  // Effect: Set up MutationObserver for dynamic content
  useEffect(() => {
    if (typeof document === "undefined" || !document.body) return;

    observerRef.current = new MutationObserver((mutations) => {
      // Skip if we're currently translating
      if (isTranslatingRef.current) return;

      // Check if any mutations added visible text content
      const hasNewText = mutations.some((mutation) => {
        if (mutation.type !== "childList") return false;
        return Array.from(mutation.addedNodes).some((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            return !!(node.textContent || "").trim();
          }
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as Element;
            if (el.closest(EXCLUDED_SELECTORS)) return false;
            return el.textContent && el.textContent.trim().length > 0;
          }
          return false;
        });
      });

      if (hasNewText) {
        // Debounce and re-translate
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = window.setTimeout(() => {
          applyTranslation(locale);
        }, 300);
      }
    });

    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [locale, applyTranslation]);

  return null;
}
