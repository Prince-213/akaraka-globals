export interface DeliveryItem {
  category?: string
  items: string
}

export interface ServiceDetail {
  slug: string
  title: string
  subtitle: string
  intro: string[]
  whatWeDeliver: {
    description: string
    list: DeliveryItem[]
  }
  faqs: { q: string; a: string }[]
  process: { step: string; title: string; text: string }[]
  benefits: { title: string; text: string }[]
  images: { main: string; thumb: string }
}

const serviceDetails: Record<string, ServiceDetail> = {
  "raw-materials-supply": {
    slug: "raw-materials-supply",
    title: "Raw Materials Supply & Industrial Minerals",
    subtitle: "Premium Industrial Raw Materials for Manufacturing",
    intro: [
      "At Akaraka Global Resources Limited, we specialise in the supply and distribution of premium industrial raw materials and minerals for the Nigerian manufacturing sector. With over 25 years of sourcing experience, we deliver consistent quality that manufacturers trust.",
      "Our strategic headquarters in Abuja and branch network ensure timely delivery of calcium carbonate, stone dust, kaolinite, and other essential raw materials to paint, plastics, and construction industries across Nigeria. Every batch undergoes rigorous quality testing before dispatch.",
    ],
    whatWeDeliver: {
      description:
        "We supply a comprehensive range of raw materials and industrial minerals sourced from trusted local and international suppliers. Our quality assurance protocols ensure every shipment meets Nigerian industrial standards.",
      list: [
        { category: "Minerals & Fillers", items: "Calcium Carbonate (CaCO3), Stone Dust (Marble Dust), Kaolinite" },
        { category: "Industrial Chemicals", items: "Acrylic PVA Emulsion, Titanium Dioxide (TiO2), Hecellose, Natrosol" },
        { category: "Processing Aids", items: "Antiscal Chemical, Formaline, Ammonia" },
      ],
    },
    faqs: [
      { q: "What grades of calcium carbonate do you supply?", a: "We supply multiple grades of CaCO3 including fine, medium, and coarse powders suitable for paint, plastics, rubber, and construction applications. Contact us with your specific particle size requirements." },
      { q: "Do you supply stone dust for construction?", a: "Yes, our marble dust and stone dust products are ideal for construction, terrazzo, and industrial filler applications. Available in bulk quantities with nationwide delivery." },
      { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product. We accommodate both small-scale manufacturers and large industrial buyers. Contact our sales team for specific product MOQs." },
    ],
    process: [
      { step: "01", title: "Requirement Analysis", text: "We assess your raw material specifications, volume needs, and quality requirements to match you with the right products." },
      { step: "02", title: "Material Sourcing & Quality Check", text: "We source from vetted suppliers and conduct quality testing on every batch before dispatch to ensure consistency." },
      { step: "03", title: "Delivery & After-Sales Support", text: "Timely delivery across Abuja and nationwide with dedicated after-sales support for all your raw material needs." },
    ],
    benefits: [
      { title: "Consistent Quality", text: "Every batch tested for purity, particle size distribution, and chemical composition." },
      { title: "Competitive Pricing", text: "Direct sourcing and bulk procurement ensure you get the best market rates." },
      { title: "Reliable Supply", text: "Established supplier relationships guarantee uninterrupted material availability." },
      { title: "Technical Support", text: "Our team provides guidance on material selection and optimal usage for your application." },
    ],
    images: { main: "/assets/img/sections/raw-materials.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "industrial-chemicals": {
    slug: "industrial-chemicals",
    title: "Industrial Chemicals Distribution",
    subtitle: "Specialty Chemicals for Diverse Industries",
    intro: [
      "AGRL is a leading distributor of industrial and specialty chemicals in Nigeria. From acrylic PVA emulsions used in paint manufacturing to titanium dioxide for high-opacity coatings, our chemical portfolio powers production lines across the country.",
      "We maintain strategic partnerships with international chemical manufacturers, enabling us to offer competitive pricing, consistent quality, and reliable supply. Our Abuja warehouse stocks a wide range of chemicals ready for immediate dispatch.",
    ],
    whatWeDeliver: {
      description:
        "Our chemical distribution network supplies high-grade industrial chemicals essential for paint, coatings, textile, and manufacturing industries.",
      list: [
        { category: "Emulsions & Binders", items: "Acrylic PVA Emulsion, Styrene Acrylic, Pure Acrylic, Vinyl Acetate Ethylene" },
        { category: "Pigments & Opacifiers", items: "Titanium Dioxide (Rutile & Anatase), Yellow Oxide, Red Oxide, Black Oxide, Blue Oxide, Green Oxide" },
        { category: "Cellulose Derivatives", items: "Hecellose, Natrosol" },
        { category: "Processing Chemicals", items: "Antiscal Chemical, Formaline, Ammonia Solution" },
      ],
    },
    faqs: [
      { q: "What types of PVA emulsion do you stock?", a: "We stock acrylic PVA emulsion for interior and exterior paint formulations, available in different solid content percentages. Bulk and retail quantities available." },
      { q: "Do you supply titanium dioxide in large volumes?", a: "Yes, we supply both rutile and anatase grades of TiO2 in 25kg bags and bulk quantities with nationwide delivery." },
      { q: "Can you advise on chemical formulations?", a: "Our technical team can provide guidance on chemical selection and basic formulation ratios for your specific application." },
    ],
    process: [
      { step: "01", title: "Chemical Specification", text: "We work with you to identify the exact chemical specifications, grades, and quantities needed for your production." },
      { step: "02", title: "Inventory & Quality Verification", text: "Our stocked chemicals undergo quality verification. For specialty orders, we coordinate with partner manufacturers for timely procurement." },
      { step: "03", title: "Safe Handling & Delivery", text: "Proper packaging, handling, and timely delivery with safety data sheets provided for all chemical products." },
    ],
    benefits: [
      { title: "Wide Product Range", text: "Comprehensive portfolio of industrial chemicals under one roof." },
      { title: "Quality Assured", text: "All chemicals tested to meet Nigerian industrial standards before dispatch." },
      { title: "Inventory Ready", text: "Large warehouse stock means faster order fulfilment and reduced lead times." },
      { title: "Technical Expertise", text: "Our chemists provide formulation support and product recommendations." },
    ],
    images: { main: "/assets/img/sections/industrial-chemicals-distribution.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "inks-and-pigments": {
    slug: "inks-and-pigments",
    title: "Inks, Pigments & Colorants Supply",
    subtitle: "Vibrant Inks and Pigments for Printing & Industrial Applications",
    intro: [
      "AGRL supplies a comprehensive range of printing inks and industrial pigments to manufacturers across Nigeria. Our confineous ink series and pigment portfolio deliver vibrant, consistent colour performance for textile, packaging, and industrial printing applications.",
      "From flexographic and gravure inks to high-performance oxide pigments, we provide colour solutions that meet the demanding requirements of modern production lines. Every batch is tested for colour strength, viscosity, and consistency.",
    ],
    whatWeDeliver: {
      description:
        "Our inks and pigments portfolio covers the full spectrum of printing and colouration needs for industrial and commercial applications.",
      list: [
        { category: "Inks Paste", items: "Black, Red, Yellow, Blue, Green — high-viscosity paste inks for various printing processes" },
        { category: "Inks Gloss", items: "Black, Red, Yellow, Blue, Green — gloss-finish inks for premium print applications" },
        { category: "Industrial Pigments", items: "Yellow Oxide, Red Oxide, Black Oxide, Blue Oxide, Green Oxide — high-performance inorganic pigments" },
      ],
    },
    faqs: [
      { q: "What types of inks do you supply?", a: "We supply both ink paste and ink gloss variants in black, red, yellow, blue, and green. Suitable for flexographic, gravure, and screen printing." },
      { q: "Are your pigments suitable for paint manufacturing?", a: "Yes, our oxide pigments (yellow, red, black, blue, green) are widely used in paint, coating, and construction material colouration." },
      { q: "Do you offer custom colour matching?", a: "We can coordinate custom colour matching for bulk orders. Contact our team with your specifications." },
    ],
    process: [
      { step: "01", title: "Colour Consultation", text: "Discuss your printing process, substrate, and colour requirements with our technical team." },
      { step: "02", title: "Product Selection & Sampling", text: "We recommend the right ink or pigment formulation and provide samples for your evaluation." },
      { step: "03", title: "Bulk Supply & Support", text: "Consistent bulk supply with ongoing technical support for colour consistency and application." },
    ],
    benefits: [
      { title: "Colour Consistency", text: "Stringent quality control ensures batch-to-batch colour uniformity." },
      { title: "Wide Colour Range", text: "Full spectrum of colours available in both paste and gloss ink formats." },
      { title: "Fast Delivery", text: "Stocked products dispatched quickly for urgent production needs." },
      { title: "Technical Guidance", text: "Ink and pigment selection advice for optimal printing results." },
    ],
    images: { main: "/assets/img/sections/ink-pigment.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "coatings-and-paints": {
    slug: "coatings-and-paints",
    title: "Coatings & Paints Supply",
    subtitle: "Confineous Coating Solutions for Residential & Industrial Use",
    intro: [
      "Akaraka Global Resources supplies a comprehensive range of confineous coating paints for residential, commercial, and industrial applications. Our portfolio includes emulsions, textured finishes, and protective coatings designed for the Nigerian climate and construction standards.",
      "From interior silk and matt finishes to exterior weather-resistant sandtex and gravitex coatings, we provide complete coating solutions backed by technical expertise and reliable supply.",
    ],
    whatWeDeliver: {
      description:
        "Our confineous coating paint range covers all interior and exterior surface finishing needs with premium quality formulations.",
      list: [
        { category: "Interior Coatings", items: "Emulsion, Screening, Satin, Silk Coat, Matt" },
        { category: "Exterior & Textured Coatings", items: "Tex Coat, Sandtex, Stucco, Granada/Gravitex" },
        { category: "Specialty Finishes", items: "Top Bond (primer/sealer), Stone Texture, Waterproof Coatings" },
      ],
    },
    faqs: [
      { q: "What is confineous coating paint?", a: "Confineous coatings are premium-grade paints formulated for superior coverage, durability, and finish. Our range includes emulsions, textured coats, and specialty finishes for all surface types." },
      { q: "Do you supply paint for exterior walls?", a: "Yes, our Tex Coat, Sandtex, Stucco, and Gravitex products are specifically formulated for exterior durability and weather resistance." },
      { q: "Can you advise on the right paint for my project?", a: "Absolutely. Our team can recommend the appropriate coating system based on your surface type, environment, and desired finish." },
    ],
    process: [
      { step: "01", title: "Project Assessment", text: "We evaluate your surface type, environment, and aesthetic requirements to recommend the right coating system." },
      { step: "02", title: "Product Selection & Quotation", text: "Receive a detailed quotation with recommended products, quantities, and application guidance." },
      { step: "03", title: "Supply & Application Support", text: "Timely delivery of coating products with technical support for proper application and finishing." },
    ],
    benefits: [
      { title: "Complete Range", text: "All interior and exterior coating products available from a single supplier." },
      { title: "Proven Durability", text: "Formulations tested for Nigerian weather conditions and long-term performance." },
      { title: "Colour Options", text: "Wide range of colours and tinting capabilities to match any design requirement." },
      { title: "Bulk Supply", text: "Competitive pricing for large-scale residential and commercial projects." },
    ],
    images: { main: "/assets/img/sections/emulsion-text-coat-paint.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "plastics-and-polymers": {
    slug: "plastics-and-polymers",
    title: "Plastics & Polymers Supply",
    subtitle: "Quality Plastic Containers and Polymer Products",
    intro: [
      "AGRL supplies durable plastic and polymer products for industrial, commercial, and household use. Our plastic bucket range in various capacities serves the paint, chemical, and food industries across Nigeria.",
      "Manufactured to high standards, our plastic products combine durability with practical design. We offer competitive wholesale pricing and reliable nationwide delivery.",
    ],
    whatWeDeliver: {
      description:
        "Our plastic product range includes durable buckets and containers in multiple capacities suitable for diverse industrial and commercial applications.",
      list: [
        { category: "Plastic Buckets", items: "20 Litre, 18 Litre, 17 Litre, 12 Litre, 4 Litre — heavy-duty industrial-grade containers" },
        { category: "Polymer Materials", items: "PP (Polypropylene), HDPE (High-Density Polyethylene), LDPE — raw polymer resins" },
      ],
    },
    faqs: [
      { q: "What sizes of plastic buckets do you stock?", a: "We stock 20L, 18L, 17L, 12L, and 4L plastic buckets suitable for paint, chemicals, and general industrial use." },
      { q: "Are your buckets food-grade?", a: "We offer both industrial-grade and food-grade plastic containers. Please specify your requirement when ordering." },
      { q: "Do you supply bucket lids separately?", a: "Yes, matching lids are available for all bucket sizes. Contact us for pricing." },
    ],
    process: [
      { step: "01", title: "Size & Quantity Selection", text: "Choose from our range of bucket sizes and specify your quantity requirements." },
      { step: "02", title: "Order Processing", text: "We confirm stock availability, provide a quotation, and process your order." },
      { step: "03", title: "Delivery & Logistics", text: "Carefully packed and delivered to your location with options for bulk shipping." },
    ],
    benefits: [
      { title: "Multiple Sizes", text: "Comprehensive size range from 4L to 20L to meet diverse packaging needs." },
      { title: "Industrial Grade", text: "Durable construction suitable for chemical and paint packaging." },
      { title: "Bulk Discounts", text: "Volume-based pricing with significant savings on large orders." },
      { title: "Nationwide Delivery", text: "Reliable logistics network ensures your order arrives on time, anywhere in Nigeria." },
    ],
    images: { main: "/assets/img/sections/plastics-polymers.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "import-export": {
    slug: "import-export",
    title: "Import & Export Services",
    subtitle: "Global Sourcing and International Trade Logistics",
    intro: [
      "Akaraka Global Resources provides professional import and export services connecting Nigerian businesses with global chemical and raw material markets. We handle the complexities of international trade so you can focus on your core business.",
      "From customs clearance and documentation to freight forwarding and last-mile delivery, our experienced logistics team ensures smooth cross-border transactions for industrial chemicals, raw materials, and finished products.",
    ],
    whatWeDeliver: {
      description:
        "Our import and export division manages complete international trade logistics for industrial and chemical products.",
      list: [
        { category: "Import Services", items: "International sourcing, supplier verification, freight forwarding, customs clearance, warehousing" },
        { category: "Export Services", items: "Export documentation, shipping coordination, quality certification, destination logistics" },
        { category: "Trade Finance", items: "Letter of credit facilitation, payment terms negotiation, currency risk management" },
      ],
    },
    faqs: [
      { q: "Can you source chemicals from international suppliers?", a: "Yes, we have established relationships with chemical manufacturers across Asia, Europe, and the Middle East for competitive sourcing." },
      { q: "How long does the import process take?", a: "Typical import timelines range from 4-8 weeks depending on origin country, shipping method, and customs clearance. We handle all documentation to minimise delays." },
      { q: "Do you help with Nigerian customs clearance?", a: "Absolutely. Our team manages all customs documentation, duty calculations, and clearance procedures for smooth import processing." },
    ],
    process: [
      { step: "01", title: "Requirement & Feasibility", text: "We assess your import/export requirements, identify optimal suppliers or buyers, and evaluate trade feasibility." },
      { step: "02", title: "Logistics & Documentation", text: "We handle all trade documentation, shipping arrangements, insurance, and regulatory compliance." },
      { step: "03", title: "Delivery & Handover", text: "Complete cargo tracking, customs clearance, and final delivery to your specified location." },
    ],
    benefits: [
      { title: "Global Network", text: "Established relationships with suppliers and logistics partners worldwide." },
      { title: "Regulatory Expertise", text: "Deep knowledge of Nigerian import/export regulations and customs procedures." },
      { title: "End-to-End Service", text: "Complete trade management from sourcing to final delivery." },
      { title: "Cost Optimisation", text: "Competitive freight rates and efficient customs processing to minimise costs." },
    ],
    images: { main: "/assets/img/sections/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "general-contracting": {
    slug: "general-contracting",
    title: "General Contracting Services",
    subtitle: "Comprehensive Supply & Project Contracting",
    intro: [
      "AGRL offers comprehensive general contracting services for construction and industrial projects. We combine our extensive material supply capabilities with project management expertise to deliver complete solutions for our clients.",
      "From material procurement and logistics coordination to on-site supply management, we ensure your project has the right materials at the right time — keeping your construction timeline on track and within budget.",
    ],
    whatWeDeliver: {
      description:
        "Our contracting services integrate material supply with project management for seamless construction and industrial project execution.",
      list: [
        { category: "Material Supply", items: "Complete construction and industrial material procurement and delivery to site" },
        { category: "Project Management", items: "Supply scheduling, inventory management, and on-site coordination" },
        { category: "Logistics Support", items: "Just-in-time delivery, site storage solutions, and material handling" },
      ],
    },
    faqs: [
      { q: "What types of projects do you contract for?", a: "We serve construction, industrial, and manufacturing projects requiring bulk material supply and project logistics coordination." },
      { q: "Can you handle large-scale project supply?", a: "Yes, we have the capacity to manage material supply for major construction and industrial projects with scheduled deliveries." },
      { q: "Do you offer project-based pricing?", a: "We provide custom quotations based on project scope, material requirements, and delivery schedule. Contact us for a project assessment." },
    ],
    process: [
      { step: "01", title: "Project Consultation", text: "We assess your project scope, material requirements, timeline, and budget." },
      { step: "02", title: "Supply Planning & Procurement", text: "Developing a detailed supply plan with scheduled deliveries aligned to your construction phases." },
      { step: "03", title: "Execution & Site Support", text: "Coordinated material delivery and on-site supply management throughout your project duration." },
    ],
    benefits: [
      { title: "Single Supplier", text: "One point of contact for all your project material needs." },
      { title: "Schedule Adherence", text: "Timely deliveries aligned with your project timeline and milestones." },
      { title: "Cost Control", text: "Bulk procurement and efficient logistics help keep your project within budget." },
      { title: "Quality Assurance", text: "All supplied materials meet project specifications and quality standards." },
    ],
    images: { main: "/assets/img/sections/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "technical-consultation": {
    slug: "technical-consultation",
    title: "Technical Consultation Services",
    subtitle: "Expert Guidance for Chemical & Industrial Processes",
    intro: [
      "Our technical consultation service provides expert guidance on chemical formulations, material selection, and industrial process optimisation. With decades of industry experience, our team helps manufacturers improve product quality, reduce costs, and optimise production efficiency.",
      "Whether you are developing a new paint formulation, troubleshooting production issues, or seeking to improve your supply chain, AGRL's technical consultants bring practical, actionable solutions to your business.",
    ],
    whatWeDeliver: {
      description:
        "Our technical consultation services address the full spectrum of chemical and industrial production challenges.",
      list: [
        { category: "Formulation Support", items: "Paint and coating formulation guidance, pigment dispersion optimisation, viscosity and rheology adjustment" },
        { category: "Process Optimisation", items: "Production workflow analysis, quality control system setup, waste reduction strategies" },
        { category: "Material Selection", items: "Raw material evaluation, alternative sourcing recommendations, cost-performance analysis" },
      ],
    },
    faqs: [
      { q: "What industries do you provide consultation for?", a: "We specialise in paint and coatings, plastics, construction chemicals, and general industrial manufacturing." },
      { q: "How are consultation services billed?", a: "Consultation can be project-based, retainer, or included as value-added service for our supply partners. Contact us to discuss your needs." },
      { q: "Can you help with new product development?", a: "Yes, our technical team can assist with R&D formulation, product testing, and scale-up from lab to production." },
    ],
    process: [
      { step: "01", title: "Initial Assessment", text: "We evaluate your current processes, challenges, and objectives to define the consultation scope." },
      { step: "02", title: "Analysis & Recommendations", text: "Our technical team analyses your requirements and provides detailed recommendations with actionable steps." },
      { step: "03", title: "Implementation Support", text: "We support you through implementation, providing follow-up guidance and adjustments as needed." },
    ],
    benefits: [
      { title: "Industry Expertise", text: "Decades of hands-on experience in chemical and industrial manufacturing." },
      { title: "Practical Solutions", text: "Actionable recommendations tailored to your specific production environment." },
      { title: "Cost Savings", text: "Optimise formulations and processes to reduce material and production costs." },
      { title: "Quality Improvement", text: "Enhance product consistency and performance with expert guidance." },
    ],
    images: { main: "/assets/img/sections/technical-consultation.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "supply-chain-management": {
    slug: "supply-chain-management",
    title: "Supply Chain Management",
    subtitle: "End-to-End Supply Chain Solutions for Industry",
    intro: [
      "AGRL provides comprehensive supply chain management services that ensure the uninterrupted flow of raw materials and chemicals to your production facilities. We manage procurement, inventory, warehousing, and logistics so you can focus on manufacturing.",
      "Our strategic Abuja location and established logistics network across Nigeria enable us to offer reliable, cost-effective supply chain solutions tailored to your operational requirements.",
    ],
    whatWeDeliver: {
      description:
        "Our supply chain management covers the complete journey from supplier to production line with efficiency and reliability.",
      list: [
        { category: "Procurement", items: "Supplier identification, price negotiation, purchase order management, quality specification enforcement" },
        { category: "Inventory & Warehousing", items: "Safety stock management, warehouse storage, inventory tracking, just-in-time replenishment" },
        { category: "Logistics & Distribution", items: "Last-mile delivery, route optimisation, multi-location distribution, expedited shipping" },
      ],
    },
    faqs: [
      { q: "Can you manage our entire raw material supply chain?", a: "Yes, we offer end-to-end supply chain management from supplier sourcing through to delivery at your production facility." },
      { q: "How do you ensure supply reliability?", a: "We maintain safety stock, diversify supplier sources, and use proactive inventory monitoring to prevent supply disruptions." },
      { q: "Do you offer just-in-time delivery?", a: "Yes, we can implement JIT delivery schedules aligned with your production planning to minimise your inventory holding costs." },
    ],
    process: [
      { step: "01", title: "Supply Chain Audit", text: "We analyse your current supply chain, identifying bottlenecks, risks, and optimisation opportunities." },
      { step: "02", title: "Solution Design", text: "Designing a tailored supply chain solution with defined KPIs, inventory levels, and delivery schedules." },
      { step: "03", title: "Ongoing Management", text: "Continuous monitoring, optimisation, and reporting to ensure your supply chain performs at its best." },
    ],
    benefits: [
      { title: "Reduced Downtime", text: "Proactive inventory management prevents production stoppages due to material shortages." },
      { title: "Lower Inventory Costs", text: "Optimise stock levels and reduce working capital tied up in inventory." },
      { title: "Single Point of Contact", text: "One partner managing your entire raw material supply chain." },
      { title: "Scalable Solutions", text: "Supply chain capabilities that grow with your business and production volumes." },
    ],
    images: { main: "/assets/img/sections/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "quality-assurance": {
    slug: "quality-assurance",
    title: "Quality Assurance & Testing",
    subtitle: "Rigorous Quality Control for Industrial Materials",
    intro: [
      "Quality is the foundation of everything we do at AGRL. Our quality assurance and testing services ensure that every raw material, chemical, and product we supply meets the highest standards of purity, consistency, and performance.",
      "We employ systematic testing protocols and quality control procedures throughout our supply chain — from supplier assessment and incoming inspection to final dispatch verification.",
    ],
    whatWeDeliver: {
      description:
        "Our quality assurance programme encompasses comprehensive testing and verification at every stage of the supply process.",
      list: [
        { category: "Material Testing", items: "Chemical composition analysis, particle size distribution, purity assessment, moisture content testing" },
        { category: "Performance Testing", items: "Viscosity measurement, colour strength evaluation, opacity testing, dispersion quality checks" },
        { category: "Quality Systems", items: "Batch traceability, certificate of analysis (CoA), supplier audit programmes, quality documentation" },
      ],
    },
    faqs: [
      { q: "Do you provide certificates of analysis?", a: "Yes, every batch we supply comes with a Certificate of Analysis (CoA) documenting the key quality parameters tested." },
      { q: "What testing methods do you use?", a: "We employ industry-standard testing methods including spectrophotometry, particle size analysis, viscometry, and wet chemistry techniques." },
      { q: "Can you test custom material specifications?", a: "Yes, we can test against your specific material specifications and quality parameters. Contact us to discuss your requirements." },
    ],
    process: [
      { step: "01", title: "Incoming Inspection", text: "All materials received undergo preliminary quality checks against agreed specifications." },
      { step: "02", title: "Laboratory Testing", text: "Comprehensive laboratory analysis of key quality parameters with documented results." },
      { step: "03", title: "Release & Certification", text: "Materials meeting specifications are released with CoA. Non-conforming materials are rejected or reworked." },
    ],
    benefits: [
      { title: "Consistent Quality", text: "Systematic testing ensures every delivery meets the same high standards." },
      { title: "Full Traceability", text: "Complete batch traceability from supplier to your production line." },
      { title: "Risk Reduction", text: "Proactive quality control minimises production issues caused by substandard materials." },
      { title: "Documentation", text: "Comprehensive quality documentation for your records and compliance needs." },
    ],
    images: { main: "/assets/img/sections/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "bulk-procurement": {
    slug: "bulk-procurement",
    title: "Bulk Procurement Services",
    subtitle: "Large-Volume Sourcing at Competitive Wholesale Pricing",
    intro: [
      "AGRL's bulk procurement service leverages our extensive supplier network and purchasing power to secure industrial raw materials and chemicals at the most competitive wholesale prices. We specialise in large-volume orders for manufacturers and industrial consumers.",
      "By consolidating procurement, negotiating directly with manufacturers, and optimising logistics, we deliver significant cost savings to our clients while maintaining the highest quality standards.",
    ],
    whatWeDeliver: {
      description:
        "Our bulk procurement solutions deliver cost-effective, large-volume supply of industrial materials and chemicals.",
      list: [
        { category: "Volume Sourcing", items: "Calcium Carbonate (bulk bags/sacks), Titanium Dioxide (pallet quantities), PVA Emulsion (drum/IBC), industrial chemicals in bulk" },
        { category: "Price Negotiation", items: "Direct manufacturer pricing, volume discount structures, long-term supply agreements" },
        { category: "Bulk Logistics", items: "Full truckload shipping, container import, bulk break and distribution, warehouse storage" },
      ],
    },
    faqs: [
      { q: "What is the minimum order for bulk pricing?", a: "Bulk pricing typically starts from 1-tonne orders for minerals like CaCO3 and pallet quantities for chemicals. Contact us for product-specific threshold details." },
      { q: "How much can I save with bulk procurement?", a: "Clients typically save 15-30% compared to standard retail pricing through our bulk procurement programme, depending on product and volume." },
      { q: "Can you hold bulk stock for scheduled release?", a: "Yes, we offer warehousing and scheduled release programmes where we hold your bulk inventory and deliver as needed." },
    ],
    process: [
      { step: "01", title: "Volume Assessment", text: "We analyse your annual consumption, procurement patterns, and storage capacity to design an optimal bulk supply programme." },
      { step: "02", title: "Sourcing & Negotiation", text: "Leveraging our supplier relationships to secure the best pricing and terms for your volume requirements." },
      { step: "03", title: "Delivery & Inventory Management", text: "Scheduled bulk deliveries or warehousing with just-in-time release to your production facility." },
    ],
    benefits: [
      { title: "Significant Savings", text: "Bulk pricing delivers 15-30% cost reduction on raw materials and chemicals." },
      { title: "Supply Security", text: "Guaranteed material availability through forward purchasing and safety stock." },
      { title: "Simplified Procurement", text: "Single purchase orders covering months of supply reduce administrative overhead." },
      { title: "Flexible Delivery", text: "Options for bulk delivery or scheduled release to match your production needs." },
    ],
    images: { main: "/assets/img/sections/bulk-procurement-services.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },

  "product-formulation": {
    slug: "product-formulation",
    title: "Product Formulation & Blending",
    subtitle: "Custom Chemical Blending Tailored to Your Production Needs",
    intro: [
      "Our product formulation and blending service helps manufacturers develop and produce custom chemical blends, paint formulations, and industrial compounds. Whether you need a specific paint recipe, a custom cleaning chemical blend, or an industrial compound, our technical team can formulate and supply it.",
      "We combine formulation expertise with our extensive raw material inventory to offer a complete development-to-production service that accelerates your time to market.",
    ],
    whatWeDeliver: {
      description:
        "Our formulation and blending services cover the complete product development cycle from concept to production supply.",
      list: [
        { category: "Formulation Development", items: "Paint and coating formulations (emulsion, textured, specialty), cleaning chemical blends, industrial compound development" },
        { category: "Custom Blending", items: "Precision weighing and mixing, colour matching and tinting, viscosity and property adjustment" },
        { category: "Scale-Up Support", items: "Lab-to-production scale-up, process documentation, quality specification development" },
      ],
    },
    faqs: [
      { q: "Can you develop a custom paint formulation for my brand?", a: "Yes, our technical team can develop custom paint and coating formulations matched to your quality and cost targets." },
      { q: "What is the minimum batch size for custom blending?", a: "Minimum batch sizes vary by product type. We can typically accommodate orders from 100 litres/kg upwards. Contact us to discuss your requirements." },
      { q: "Do you sign NDAs for custom formulations?", a: "Absolutely. We respect client confidentiality and are happy to sign non-disclosure agreements for custom formulation projects." },
    ],
    process: [
      { step: "01", title: "Brief & Feasibility", text: "We review your product requirements, target specifications, budget, and timeline to assess feasibility." },
      { step: "02", title: "Formulation Development", text: "Our technical team develops and tests formulations, providing samples for your evaluation and feedback." },
      { step: "03", title: "Production & Supply", text: "Once approved, we scale up and supply your custom formulation with consistent quality and documentation." },
    ],
    benefits: [
      { title: "Faster Time-to-Market", text: "Skip the R&D investment — leverage our formulation expertise for quicker product launches." },
      { title: "Quality Consistency", text: "Every batch blended to your exact specifications with documented quality control." },
      { title: "Cost Efficiency", text: "Avoid capital investment in blending equipment and technical staff." },
      { title: "IP Protection", text: "Your formulations remain your intellectual property with full confidentiality." },
    ],
    images: { main: "/assets/img/sections/product-formulation.webp", thumb: "/assets/img/sections/Below-WHAT-WE-DELIVER.webp" },
  },
}

export default serviceDetails
