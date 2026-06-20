export interface KnowledgeEntry {
  question: string;
  keywords: string[];
  answer: string;
}

const companyKnowledge: KnowledgeEntry[] = [
  {
    question: "What products do you sell?",
    keywords: ["product", "sell", "material", "chemical", "paint", "ink", "coating", "plastic", "polymer", "catalogue", "list", "items", "what do you have", "what do you offer", "kayayyaki", "ọjà", "ngwaahịa", "产品", "produit", "producto"],
    answer: "We supply a comprehensive range of industrial products:\n\n1) Calcium Carbonate, Stone Dust (Marble Dust) & Kaolinite\n2) Acrylic PVA Emulsion, Titanium Dioxide, Hecellose, Cellulose Ether, Natrosol, HPMC\n3) Antiscal Chemical, Formaline & Ammonia\n4) Inks Paste (Black, Red, Yellow, Blue, Green), Inks Gloss (all colours), Oxide Pigments (Yellow, Red, Black, Blue, Green)\n5) Confineous Coating Paints (Emulsion, Screening, Satin, Tex Coat, Silk Coat, Stucco, Sandtex, Matt, Top Bond, Granada/Gravitex)\n6) Plastic Buckets (20L, 18L, 17L, 12L, 4L)\n\nFor details on any product, visit our Services page or call us."
  },
  {
    question: "Tell me about Calcium Carbonate?",
    keywords: ["calcium", "carbonate", "caco3", "limestone", "marble dust", "stone dust", "kaolinite", "kaolin"],
    answer: "We supply premium-grade Calcium Carbonate (CaCO3) in fine, medium, and coarse powders. It is used in paint manufacturing, plastics, rubber, construction, and filler applications. We also supply Stone Dust (Marble Dust) and Kaolinite clay for industrial use. All products are quality-tested for purity and particle size before dispatch. Contact us for pricing and minimum order quantities."
  },
  {
    question: "What chemicals do you distribute?",
    keywords: ["acrylic", "pva", "titanium dioxide", "tio2", "hecellose", "cellulose", "ether", "natrosol", "hpmc", "antiscal", "formaline", "ammonia"],
    answer: "Our chemical distribution includes: Acrylic PVA Emulsion, Titanium Dioxide (Rutile & Anatase grades), Hecellose, Natrosol, Antiscal Chemical, Formaline, and Ammonia Solution. We maintain large warehouse stock in Abuja for immediate dispatch. Bulk and retail quantities available."
  },
  {
    question: "What inks and pigments do you have?",
    keywords: ["ink", "pigment", "oxide", "colour", "color", "printing", "black", "red", "yellow", "blue", "green", "paste", "gloss", "confineous"],
    answer: "We supply Confineous Inks Paste (Black, Red, Yellow, Blue, Green) and Confineous Inks Gloss (Black, Red, Yellow, Blue, Green). Our oxide pigments include Yellow Oxide, Red Oxide, Black Oxide, Blue Oxide, and Green Oxide — suitable for paint, coating, and construction material colouration. Every batch is tested for colour strength and consistency."
  },
  {
    question: "What paints and coatings do you sell?",
    keywords: ["paint", "coating", "emulsion", "screening", "satin", "tex coat", "silk coat", "stucco", "sandtex", "matt", "top bond", "granada", "gravitex", "confineous"],
    answer: "Our Confineous Coating Paint range includes: Interior — Emulsion, Screening, Satin, Silk Coat, Matt. Exterior — Tex Coat, Sandtex, Stucco, Granada/Gravitex. Specialty — Top Bond primer/sealer, Stone Texture, Waterproof Coatings. All formulated for Nigerian weather conditions with durable, quality finishes."
  },
  {
    question: "What plastic products do you have?",
    keywords: ["plastic", "bucket", "polymer", "container", "litre", "liter", "20l", "18l", "17l", "12l", "4l", "polypropylene", "hdpe"],
    answer: "We supply durable plastic buckets in 20 Litre, 18 Litre, 17 Litre, 12 Litre, and 4 Litre capacities — heavy-duty industrial-grade containers suitable for paint, chemicals, and general use. We also stock PP (Polypropylene), HDPE, and LDPE raw polymer resins. Matching lids available for all sizes. Bulk discounts available."
  },
  {
    question: "What are your prices?",
    keywords: ["price", "cost", "quote", "how much", "rate", "pricing", "expensive", "cheap", "discount", "bulk", "nawa", "eló", "ego", "价格", "多少钱", "precio", "tarif", "combien"],
    answer: "Prices vary by product and quantity. We offer competitive wholesale pricing with volume discounts on bulk orders. For specific product pricing or a quotation, please contact our sales team: 📞 0816-617-5684 | 0901-598-9177 or 📧 akarakaglobalresources@yahoo.com. Bulk procurement clients can save 15-30% compared to standard rates."
  },
  {
    question: "Where are you located?",
    keywords: ["location", "address", "office", "where", "find", "direction", "map", "situated", "located", "branch", "head office", "dei-dei", "mararaba", "abuja", "zauda", "pazar", "ina", "wuri", "ibi", "地点", "在哪", "地址", "ubicación", "adresse"],
    answer: "🏢 Head Office: Plot No D1160 Zauda Pazar & S/Gari Layout, Abuja, F.C.T.\n📦 Collection Point: Zone C8 Shop NO.6 International Building Materials Market, Dei-Dei, Abuja, F.C.T.\n🏬 Branch Office: Akaraka Plaza, Beside Zenith Bank, Mararaba Building Materials\n\n📞 Call us: 0816-617-5684 | 0901-598-9177"
  },
  {
    question: "Do you deliver?",
    keywords: ["deliver", "ship", "logistics", "transport", "delivery", "nationwide", "shipping", "send", "courier", "arrive", "how long", "isa", "kawo", "ìfijiṣẹ́", "inyefe", "配送", "送货", "entrega", "livraison"],
    answer: "Yes! We deliver nationwide across Nigeria. Abuja orders typically arrive within 24-48 hours. Nationwide deliveries take 3-7 working days. We also offer import/export logistics for international sourcing. Our Dei-Dei warehouse maintains substantial stock for immediate dispatch."
  },
  {
    question: "How do I place an order?",
    keywords: ["order", "buy", "purchase", "get", "want", "need", "place order", "how can i order", "i want to buy", "oda", "saya", "下单", "购买", "pedido", "commande"],
    answer: "To place an order:\n1. Call us at 0816-617-5684 or 0901-598-9177\n2. Email akarakaglobalresources@yahoo.com\n3. Visit our office at Zauda Pazar & S/Gari Layout, Abuja\n\nOur team will guide you through product selection, pricing, and delivery."
  },
  {
    question: "What quality standards do you follow?",
    keywords: ["quality", "standard", "certif", "test", "guarantee", "original", "genuine", "pure", "grade", "specification", "safety", "expire", "inganci", "dídára", "质量", "品质", "calidad", "qualité"],
    answer: "All AGRL products meet Nigerian industrial standards. Every batch undergoes rigorous quality testing for purity, particle size, chemical composition, colour strength, and consistency before dispatch. We provide Certificates of Analysis (CoA) with every shipment. Our quality systems include batch traceability and supplier audit programmes."
  },
  {
    question: "Who is AGRL?",
    keywords: ["who", "about", "company", "agrl", "akaraka", "history", "founded", "ceo", "chinebu", "motto", "vision", "mission", "what is agrl", "game da", "nípa", "maka", "关于", "关于我们", "公司", "acerca", "qui"],
    answer: "Akaraka Global Resources Limited (AGRL) has been a trusted supplier of industrial chemicals, paints, inks, and raw materials in Nigeria since 2000. Founded by Chinebu Longinus Chigozie, we have over 25 years of experience serving the Nigerian manufacturing sector. Our motto: AD Asperia Per Astra (Through Hardships to the Stars). We are headquartered in Abuja with a branch in Mararaba."
  },
  {
    question: "How can I contact you?",
    keywords: ["contact", "phone", "email", "call", "reach", "number", "whatsapp", "message", "mail", "talk to", "speak with", "tuntuɓe", "kpọtụrụ", "kàn sí", "联系", "联系方式", "contacto", "téléphone"],
    answer: "📞 Sales: 0816-617-5684\n📞 Customer Service: 0901-598-9177\n📧 Email: akarakaglobalresources@yahoo.com\n\nVisit us: Plot No D1160 Zauda Pazar & S/Gari Layout, Abuja, F.C.T.\n\nOur team is available Monday to Saturday, 8:00 AM to 5:00 PM."
  },
  {
    question: "What services do you offer?",
    keywords: ["service", "import", "export", "contracting", "consultation", "supply chain", "quality assurance", "quality control", "bulk procurement", "formulation", "blending", "testing", "sourcing"],
    answer: "AGRL offers 12 comprehensive services:\n1) Raw Materials Supply\n2) Industrial Chemicals Distribution\n3) Inks & Pigments Sales\n4) Coatings & Paints Supply\n5) Plastics & Polymers\n6) Import & Export Services\n7) General Contracting\n8) Technical Consultation\n9) Supply Chain Management\n10) Quality Assurance & Testing\n11) Bulk Procurement Services\n12) Product Formulation & Blending\n\nVisit our Services page for details on each."
  },
  {
    question: "Do you offer technical consultation?",
    keywords: ["consult", "technical", "advice", "formulation", "blend", "custom", "develop", "help", "guide", "recommend", "expert"],
    answer: "Yes! Our technical consultation service provides expert guidance on chemical formulations, material selection, and industrial process optimisation. We can help with paint formulation, pigment dispersion, viscosity adjustment, quality control setup, and production workflow analysis. Contact us to discuss your specific needs."
  },
  {
    question: "What are your opening hours?",
    keywords: ["open", "close", "hours", "time", "working", "monday", "saturday", "sunday", "when are you open", "business hours"],
    answer: "We are open Monday to Saturday, 8:00 AM to 5:00 PM. We are closed on Sundays and public holidays."
  },
  {
    question: "Do you export products?",
    keywords: ["export", "import", "international", "ship", "overseas", "abroad", "west africa", "foreign", "global"],
    answer: "Yes, we provide import and export services. We source chemicals from international suppliers across Asia, Europe, and the Middle East, and export Nigerian raw materials to West African markets. Our logistics team handles all documentation, customs clearance, and freight forwarding."
  },
];

export default companyKnowledge;
