"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { translate, type Locale } from "./translations";

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

function translateTextNodes(root: Element, locale: Locale) {
  if (locale === "en") {
    const all = root.querySelectorAll("[data-original]");
    all.forEach((el) => {
      const orig = el.getAttribute("data-original");
      if (orig) {
        el.textContent = orig;
        el.removeAttribute("data-original");
      }
    });
    return;
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent?.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (["SCRIPT", "STYLE", "INPUT", "TEXTAREA", "IFRAME", "SVG", "PATH"].includes(tag)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodesToTranslate: { node: Text; original: string }[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const text = node.textContent?.trim();
    if (text && text.length > 1 && !/^\d/.test(text)) {
      nodesToTranslate.push({ node, original: text });
    }
  }

  for (const { node, original } of nodesToTranslate) {
    const key = STRING_TO_KEY[original];
    if (key) {
      const translated = translate(key, locale);
      if (translated && translated !== original) {
        if (!node.parentElement?.hasAttribute("data-original")) {
          node.parentElement?.setAttribute("data-original", original);
        }
        node.textContent = translated;
        continue;
      }
    }

    const fullText = node.textContent || "";
    for (const [english, k] of Object.entries(STRING_TO_KEY)) {
      if (fullText.includes(english)) {
        const translated = translate(k, locale);
        if (translated && translated !== english) {
          if (!node.parentElement?.hasAttribute("data-original")) {
            node.parentElement?.setAttribute("data-original", fullText);
          }
          node.textContent = fullText.replace(english, translated);
          break;
        }
      }
    }
  }
}

export default function DomTranslator() {
  const { locale } = useLanguage();
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const run = () => {
      if (document.body) {
        translateTextNodes(document.body, locale);
      }
    };
    const t = setTimeout(run, 100);

    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new MutationObserver(() => {
      translateTextNodes(document.body, locale);
    });
    observerRef.current.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(t);
      observerRef.current?.disconnect();
    };
  }, [locale]);

  return null;
}
