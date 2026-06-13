export type Locale = "en" | "fr" | "ha" | "yo" | "ig";

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ha", label: "Hausa", flag: "🇳🇬" },
  { code: "yo", label: "Yorùbá", flag: "🇳🇬" },
  { code: "ig", label: "Igbo", flag: "🇳🇬" },
];

type TranslationMap = Record<Locale, string>;

const translations: Record<string, TranslationMap> = {
  // ── Navigation ──
  home:       { en: "Home",         fr: "Accueil",           ha: "Gida",               yo: "Ilé",                ig: "Ụlọ" },
  products:   { en: "Products",     fr: "Produits",          ha: "Kayayyaki",          yo: "Àwọn Ọjà",          ig: "Ngwaahịa" },
  services:   { en: "Services",     fr: "Services",          ha: "Ayyuka",             yo: "Àwọn Iṣẹ́",          ig: "Ọrụ" },
  about:      { en: "About",        fr: "À propos",          ha: "Game da",            yo: "Nípa",               ig: "Maka" },
  contactUs:  { en: "Contact Us",   fr: "Contactez-nous",    ha: "Tuntuɓe Mu",         yo: "Kàn sí Wa",          ig: "Kpọtụrụ Anyị" },
  callUs:     { en: "Call Us",      fr: "Appelez-nous",      ha: "Kira Mu",            yo: "Pè Wá",              ig: "Kpọọ Anyị" },
  getInTouch: { en: "Get In Touch", fr: "Contactez-nous",    ha: "Sadu",               yo: "Kàn sí Wa",          ig: "Kpọtụrụ" },
  anyQuestion:{ en: "Any Question?",fr: "Une question ?",    ha: "Ko wata Tambaya?",   yo: "Ìbéèrè Kankan?",     ig: "Ajụjụ Ọbụla?" },

  // ── Hero / CTA ──
  exploreProducts:   { en: "Explore Products",    fr: "Découvrir les produits",  ha: "Bincika Kayayyaki",       yo: "Ṣàwárí Àwọn Ọjà",      ig: "Nyochaa Ngwaahịa" },
  contactUsNow:      { en: "Contact Us Now",      fr: "Contactez-nous",          ha: "Tuntuɓe Mu Yanzu",        yo: "Kàn sí Wa Báyìí",         ig: "Kpọtụrụ Anyị Ugbu a" },
  startAProject:     { en: "Start A Project",     fr: "Lancez un projet",        ha: "Fara Aiki",                yo: "Bẹ̀rẹ̀ Iṣẹ́ Kan",         ig: "Bido Ọrụ" },
  letsDiscuss:       { en: "Let's Discuss",       fr: "Discutons",               ha: "Mu Tattauna",              yo: "Ẹ Jẹ́ Ká Jíròrò",        ig: "Ka Anyị Tụlee" },
  learnMore:         { en: "Learn More",          fr: "En savoir plus",          ha: "Ƙara Koyo",                yo: "Kọ́ Siwájú",               ig: "Mụtakwuo" },
  readMore:          { en: "Read More",           fr: "Lire la suite",           ha: "Ƙara Karatu",              yo: "Kà Siwájú",                ig: "Gụọkwuo" },
  viewAll:           { en: "View All",            fr: "Voir tout",               ha: "Duba Duka",                yo: "Wo Gbogbo",                ig: "Le Anyị niile" },
  viewAllProducts:   { en: "View All Products",   fr: "Voir tous les produits",  ha: "Duba Duk Kayayyaki",       yo: "Wo Gbogbo Ọjà",           ig: "Le Ngwaahịa niile" },
  viewAllServices:   { en: "View All Services",   fr: "Voir tous les services",  ha: "Duba Duk Ayyuka",          yo: "Wo Gbogbo Iṣẹ́",          ig: "Le Ọrụ niile" },

  // ── About Section ──
  aboutAGRL:    { en: "About AGRL",         fr: "À propos d'AGRL",          ha: "Game da AGRL",             yo: "Nípa AGRL",                  ig: "Maka AGRL" },
  over25Years:  { en: "Over 25 Years of Industrial Supply Excellence", fr: "Plus de 25 ans d'excellence en approvisionnement industriel", ha: "Sama da Shekaru 25 na Kyakkyawan Samar da Kayan Masana'antu", yo: "Lékè Ọdún 25 ti Ìpèsè Ilé-iṣẹ́ Àtàtà", ig: "Karịrị Afọ 25 nke Ịdị Mma N'innyefe Ụlọ Ọrụ" },
  ourMission:    { en: "Our Mission",        fr: "Notre mission",           ha: "Manufarmu",                yo: "Ìfojúsùn Wa",                ig: "Ebumnuche Anyị" },
  whoWeAre:      { en: "Who We Are",         fr: "Qui nous sommes",         ha: "Wanda Muke",               yo: "Ẹni Tí A Jẹ́",              ig: "Onye Anyị Bụ" },
  aboutUsMore:   { en: "About Us More",      fr: "En savoir plus sur nous", ha: "Ƙarin Bayani Game da Mu",  yo: "Nípa Wa Siwájú",             ig: "Maka Anyị ọzọ" },
  foundedText:   { en: "Founded in 2000",    fr: "Fondée en 2000",          ha: "An Kafa a 2000",           yo: "Dásílẹ̀ Lọ́dún 2000",       ig: "Tọrọ ntọala na 2000" },
  ourStory:      { en: "Our Story",          fr: "Notre histoire",          ha: "Labarinmu",                yo: "Ìtàn Wa",                    ig: "Akụkọ Anyị" },

  // ── Services / Product Categories ──
  ourProductCategories:             { en: "Our Product Categories",         fr: "Nos catégories de produits",          ha: "Rukunin Kayayyakinmu",            yo: "Ẹ̀ka Àwọn Ọjà Wa",              ig: "Ụdị Ngwaahịa Anyị" },
  comprehensiveIndustrialSolutions: { en: "Comprehensive Industrial Solutions", fr: "Solutions industrielles complètes", ha: "Cikakkun Maganin Masana'antu",    yo: "Ojútùú Ilé-iṣẹ́ Tó Péré",       ig: "Ngwọta Ụlọ Ọrụ Zuru Oke" },
  rawMaterials:                     { en: "Raw Materials",                   fr: "Matières premières",                  ha: "Danyen Kaya",                      yo: "Àwọn Ohun Èlò Ìpìlẹ̀",          ig: "Akụrụngwa" },
  industrialChemicals:              { en: "Industrial Chemicals",            fr: "Produits chimiques industriels",      ha: "Sinadaran Masana'antu",            yo: "Kẹ́míkà Ilé-iṣẹ́",              ig: "Chemical Ụlọ Ọrụ" },
  inksAndPigments:                  { en: "Inks & Pigments",                 fr: "Encres & pigments",                   ha: "Tawada & Launuka",                 yo: "Yíǹkì & Àwọ̀",                   ig: "Ink & Agba" },
  coatingsAndPaints:                { en: "Coatings & Paints",               fr: "Revêtements & peintures",             ha: "Rufi & Fenti",                     yo: "Ìbòjú & Ọ̀dà",                   ig: "Mkpuchi & Agba" },
  plasticsAndPolymers:              { en: "Plastics & Polymers",             fr: "Plastiques & polymères",              ha: "Robobi & Polymers",                yo: "Ṣiṣẹ & Polymers",                 ig: "Plastik & Polymers" },

  // ── Feature / Quality Section ──
  materialQuality:                 { en: "Material Quality",                fr: "Qualité des matériaux",                       ha: "Ingancin Kaya",                          yo: "Dídára Ohun Èlò",                          ig: "Ogo Akụrụngwa" },
  materialProduct:                 { en: "Material Product",                fr: "Produits matériels",                          ha: "Kayayyakin Kaya",                         yo: "Ọjà Ohun Èlò",                              ig: "Ngwaahịa Akụrụngwa" },
  premiumQualityRawMaterials:      { en: "Premium Quality Raw Materials",   fr: "Matières premières de qualité supérieure",    ha: "Danyen Kaya Masu Inganci",                yo: "Ohun Èlò Ìpìlẹ̀ Onídàbí",                 ig: "Akụrụngwa Dị Ogo" },
  strictQualityInspection:         { en: "Strict Quality Inspection",       fr: "Inspection qualité stricte",                  ha: "Tsanannen Duban Inganci",                 yo: "Ìṣàyẹ̀wò Dídára Tó Múná",               ig: "Nnyocha Ogo Siri Ike" },
  bulkSupplyAndTimelyDelivery:     { en: "Bulk Supply & Timely Delivery",   fr: "Fourniture en vrac & livraison ponctuelle",   ha: "Isar da Kaya Cikin Lokaci",               yo: "Ìpèsè Nlá & Ìfijiṣẹ́ Lákòókò",          ig: "Nnyefe N'oge" },
  safeHandlingAndStorage:          { en: "Safe Handling & Storage",         fr: "Manutention et stockage sécurisés",           ha: "Adanawa da Kula da Lafiya",               yo: "Ìmú Láìséwu & Ìpamọ́",                  ig: "Njikwa & Nchekwa Na-enweghị Nsogbu" },
  expertTechnicalConsultation:     { en: "Expert Technical Consultation",   fr: "Consultation technique experte",              ha: "Shawarar Kwararrun Fasaha",               yo: "Ìmọ̀ràn Ẹ̀rọ Láti ọwọ́ Ògbógi",        ig: "Ndụmọdụ Ọkachamara" },
  competitivePricingAndValue:      { en: "Competitive Pricing & Value",     fr: "Prix compétitifs et valeur",                  ha: "Farashi Mai Gasa da Ƙima",                yo: "Iye Owó Ìdíje & Ìníyelórí",              ig: "Ọnụahịa Asọmpi & Uru" },

  // ── Product Names (technical terms kept in English with local descriptions) ──
  calciumCarbonate: { en: "Calcium Carbonate (CaCO3)", fr: "Carbonate de calcium (CaCO3)", ha: "Calcium Carbonate (CaCO3)", yo: "Calcium Carbonate (CaCO3)", ig: "Calcium Carbonate (CaCO3)" },
  stoneDust:        { en: "Stone Dust",                 fr: "Poussière de pierre",          ha: "Ƙurar Dutse",                yo: "Eruku Òkúta",              ig: "Uzuzu Nkume" },
  kaolinite:        { en: "Kaolinite",                  fr: "Kaolinite",                     ha: "Kaolinite",                  yo: "Kaolinite",                 ig: "Kaolinite" },
  acrylicPVA:       { en: "Acrylic PVA",                fr: "Acrylique PVA",                 ha: "Acrylic PVA",                yo: "Acrylic PVA",               ig: "Acrylic PVA" },
  titaniumDioxide:  { en: "Titanium Dioxide",           fr: "Dioxyde de titane",             ha: "Titanium Dioxide",           yo: "Titanium Dioxide",          ig: "Titanium Dioxide" },
  hpmc:             { en: "HPMC",                       fr: "HPMC",                          ha: "HPMC",                       yo: "HPMC",                      ig: "HPMC" },
  celluloseEthers:  { en: "Cellulose Ethers",           fr: "Éthers de cellulose",           ha: "Cellulose Ethers",           yo: "Cellulose Ethers",          ig: "Cellulose Ethers" },
  sulphurPowder:    { en: "Sulphur Powder",             fr: "Poudre de soufre",              ha: "Ƙurar Sulfur",               yo: "Eruku Sulfur",              ig: "Uzuzu Sulfur" },
  emulsionPaints:   { en: "Emulsion Paints",            fr: "Peintures émulsion",            ha: "Fenti Emulsion",             yo: "Ọ̀dà Emulsion",             ig: "Agba Emulsion" },
  texCoatPaints:    { en: "Tex Coat Paints",            fr: "Peintures Tex Coat",            ha: "Fenti Tex Coat",             yo: "Ọ̀dà Tex Coat",             ig: "Agba Tex Coat" },
  plasticBuckets:   { en: "Plastic Buckets",            fr: "Seaux en plastique",            ha: "Bokitin Roba",               yo: "Garawa Ṣiṣẹ",               ig: "Ịwụ Plastik" },

  // ── Process / Supply Chain ──
  howWeDeliver:              { en: "How We Deliver",              fr: "Comment nous livrons",                    ha: "Yadda Muke Isarwa",                    yo: "Bí A Ṣe Ń Fi jiṣẹ́",                 ig: "Otu Anyị Si Ebu Ga" },
  ourSupplyChainProcess:     { en: "Our Supply Chain Process",    fr: "Notre chaîne d'approvisionnement",        ha: "Tsarin Samar da Kayayyakinmu",         yo: "Ètò Ẹ̀wọ̀n Ìpèsè Wa",                 ig: "Usoro Nnyefe Anyị" },
  sourcingAndProcurement:    { en: "Sourcing & Procurement",      fr: "Approvisionnement & achats",              ha: "Nemo da Sayen Kaya",                   yo: "Wíwá & Rírà Ọjà",                      ig: "Ịchọta & Ịzụta" },
  qualityAssuranceAndTesting:{ en: "Quality Assurance & Testing", fr: "Assurance qualité & tests",               ha: "Tabbatar da Inganci da Gwaji",         yo: "Ìfidánilójú Dídára & Ìdánwò",         ig: "Nkwenye Ogo & Nnwale" },
  deliveryAndSupport:        { en: "Delivery & Support",          fr: "Livraison & support",                     ha: "Isarwa da Taimako",                    yo: "Ìfijiṣẹ́ & Àtìlẹ́yìn",               ig: "Nnyefe & Nkwado" },

  // ── Team ──
  ourLeadershipTeam:   { en: "Our Leadership Team",    fr: "Notre équipe dirigeante",                 ha: "Tawagar Shugabanninmu",                  yo: "Ẹgbẹ́ Aṣáájú Wa",                       ig: "Ndị Ọchịchị Anyị" },
  meetOurTeam:         { en: "Meet Our AGRL Team",     fr: "Rencontrez notre équipe AGRL",            ha: "Haɗu da Tawagar AGRL",                    yo: "Pàdé Ẹgbẹ́ AGRL Wa",                     ig: "Zute Ndị Ọrụ AGRL Anyị" },
  managingDirector:    { en: "Managing Director",      fr: "Directeur général",                       ha: "Manajan Darakta",                         yo: "Olùdarí Alákòóso",                       ig: "Onye Isi Nchịkwa" },
  operationsManager:   { en: "Operations Manager",     fr: "Directeur des opérations",                 ha: "Manajan Ayyuka",                          yo: "Olùdarí Ìṣiṣẹ́",                        ig: "Onye Nchịkwa Ọrụ" },
  salesDirector:       { en: "Sales Director",         fr: "Directeur commercial",                     ha: "Daraktan Tallace-tallace",                yo: "Olùdarí Ìtajà",                          ig: "Onye Isi Ịre Ahịa" },
  supplyChainLead:     { en: "Supply Chain Lead",      fr: "Responsable chaîne d'approvisionnement",   ha: "Shugaban Samar da Kaya",                  yo: "Aṣáájú Ẹ̀wọ̀n Ìpèsè",                  ig: "Onye Ndu Nnyefe" },
  qualityControlManager:{ en: "Quality Control Manager",fr: "Responsable contrôle qualité",             ha: "Manajan Kula da Inganci",                 yo: "Olùdarí Ìṣàkóso Dídára",                 ig: "Onye Nchịkwa Ogo" },

  // ── Footer ──
  ourLocation:    { en: "Our Location",    fr: "Nos emplacements",       ha: "Wurarenmu",                yo: "Àwọn Ibì Wa",              ig: "Ebe Anyị nọ" },
  followUs:       { en: "Follow Us",       fr: "Suivez-nous",            ha: "Bi Mu",                    yo: "Tẹ̀lé Wa",                  ig: "Soro Anyị" },
  sayHello:       { en: "Say Hello",       fr: "Dites bonjour",          ha: "Gaisuwa",                  yo: "Kí Wá",                     ig: "Kelee Anyị" },
  copyright:      { en: "Copyright",       fr: "Droits d'auteur",        ha: "Haƙƙin mallaka",          yo: "Ẹ̀tọ́ Àtúnṣe",              ig: "Ikike nwebisiinka" },
  headOfficeAbuja:{ en: "Head Office - Abuja", fr: "Siège social - Abuja", ha: "Babban Ofishin Abuja",   yo: "Ọ́fìsì Àgbà - Abuja",       ig: "Isi Ụlọ Ọrụ - Abuja" },
  branchOffice:   { en: "Branch Office",   fr: "Bureau annexe",          ha: "Ofishin Reshe",            yo: "Ọ́fìsì Ẹ̀ka",              ig: "Ụlọ Ọrụ Alaka" },
  companyLinks:   { en: "Company Links",   fr: "Liens entreprise",       ha: "Hanyoyin Kamfani",         yo: "Àwọn Ìjápọ̀ Ilé-iṣẹ́",     ig: "Njikọ Ụlọ Ọrụ" },
  careerLinks:    { en: "Career Links",    fr: "Liens carrières",        ha: "Hanyoyin Aiki",            yo: "Àwọn Ìjápọ̀ Iṣẹ́",         ig: "Njikọ Ọrụ" },
  newsAndUpdates: { en: "News & Updates",  fr: "Actualités & mises à jour", ha: "Labarai da Sabuntawa",  yo: "Ìròyìn & Ìmúdójúìwọ̀n",    ig: "Ozi & Mmelite" },

  // ── FAQ ──
  frequentlyAskedQuestions: { en: "Frequently Asked Questions", fr: "Questions fréquentes",          ha: "Tambayoyin da Aka Yawaita",    yo: "Àwọn Ìbéèrè Tí A Sábà Ń Béèrè",   ig: "Ajụjụ A Na-ajụkarị" },
  askAQuestion:            { en: "Ask A Question",              fr: "Posez une question",            ha: "Yi Tambaya",                   yo: "Béèrè Ìbéèrè Kan",                  ig: "Jụọ Ajụjụ" },

  // ── Blog ──
  ourBlog:          { en: "Our Blog & Articles",  fr: "Notre blog & articles",     ha: "Shafin Labaranmu",             yo: "Búlọ́ọ̀gù Wa",                     ig: "Blog Anyị" },
  industryInsights: { en: "Industry Insights",     fr: "Aperçus de l'industrie",    ha: "Fahimtar Masana'antu",         yo: "Ìjìnlẹ̀ Òye Ilé-iṣẹ́",            ig: "Nghọta Ụlọ Ọrụ" },
  factoryTrends:    { en: "Factory Trends",        fr: "Tendances d'usine",         ha: "Sabbin Hanyoyin Masana'anta",  yo: "Àṣà Ilé-iṣẹ́",                      ig: "Ihe Ọhụrụ N'ụlọ Ọrụ" },

  // ── Contact Form ──
  sendUsMessage:     { en: "Send Us a Message",     fr: "Envoyez-nous un message",  ha: "Aiko Mana Saƙo",              yo: "Fi Ìfiránṣẹ́ Ránṣẹ́ sí Wa",      ig: "Zitere Anyị Ozi" },
  yourName:          { en: "Your Name",              fr: "Votre nom",                ha: "Sunanka",                      yo: "Orúkọ Rẹ",                          ig: "Aha Gị" },
  yourEmail:         { en: "Your Email",             fr: "Votre email",              ha: "Adireshin Imel ɗinka",        yo: "Àdírẹ́ẹ̀sì Ímeèlì Rẹ",            ig: "Email Gị" },
  yourPhone:         { en: "Your Phone",             fr: "Votre téléphone",          ha: "Lambar Wayar ka",              yo: "Nọ́ńbà Fóònù Rẹ",                  ig: "Nọmba Ekwentị Gị" },
  yourMessage:       { en: "Your Message",           fr: "Votre message",            ha: "Saƙonka",                     yo: "Ìfiránṣẹ́ Rẹ",                      ig: "Ozi Gị" },
  submitNow:         { en: "Submit Now",             fr: "Envoyer",                  ha: "Aika Yanzu",                  yo: "Fì Ránṣẹ́ Báyìí",                  ig: "Ziga Ugbu a" },
  getInTouchWithUs:  { en: "Get In Touch With Us",   fr: "Contactez-nous",           ha: "Sadu da Mu",                  yo: "Kàn sí Wa",                         ig: "Kpọtụrụ Anyị" },

  // ── Map / Locations ──
  ourOfficeLocations:      { en: "Our Office Locations",       fr: "Nos bureaux",                         ha: "Wuraren Ofishinmu",               yo: "Àwọn Ibì Ọ́fìsì Wa",               ig: "Ebe Ụlọ Ọrụ Anyị" },
  contactUsForDirections:  { en: "Contact Us For Directions",  fr: "Contactez-nous pour l'itinéraire",     ha: "Tuntuɓe Mu Don Hanyoyi",          yo: "Kàn sí Wa Fún Ìtọ́sọ́nà",           ig: "Kpọtụrụ Anyị Maka Ntụzịaka" },

  // ── Misc / Business ──
  partnerWithUs:     { en: "Partner With AGRL Today",       fr: "Associez-vous avec AGRL aujourd'hui",     ha: "Yi Huldar Kasuwanci Da Mu Yau",      yo: "Ṣe Àjọṣepọ̀ Pẹ̀lú AGRL Lónìí",     ig: "Soro AGRL Rụọ Ọrụ Taa" },
  trustedPartner:    { en: "Your Trusted Partner in Industrial Chemicals, Paints & Raw Materials", fr: "Votre partenaire de confiance en produits chimiques, peintures et matières premières", ha: "Amintaccen Abokin Kasuwancinku a Sinadaran Masana'antu, Fenti & Danyen Kaya", yo: "Alábàṣepọ̀ Tí A Gbẹ́kẹ̀lé nínú Kẹ́míkà Ilé-iṣẹ́, Ọ̀dà & Ohun Èlò Ìpìlẹ̀", ig: "Onye Mmekọ A Tụkwasịrị Obi na Chemical Ụlọ Ọrụ, Agba & Akụrụngwa" },
  qualityProducts:   { en: "Quality Products",            fr: "Produits de qualité",                     ha: "Kayayyaki Masu Inganci",             yo: "Àwọn Ọjà Onídàbí",                  ig: "Ngwaahịa Dị Ogo" },
  reliableService:   { en: "Reliable Service",           fr: "Service fiable",                           ha: "Ayyuka Masu Dogaro",                 yo: "Iṣẹ́ Tí A Gbẹ́kẹ̀lé",             ig: "Ọrụ A Pụrụ Ịtụkwasị Obi" },
  ourClients:        { en: "Our Clients",                fr: "Nos clients",                              ha: "Abokan Cinikinmu",                   yo: "Àwọn Oníbàárà Wa",                   ig: "Ndị Ahịa Anyị" },
  ourProcess:        { en: "Our Process",                fr: "Notre processus",                          ha: "Tsarinmu",                           yo: "Ìlànà Wa",                            ig: "Usoro Anyị" },
  ourProducts:       { en: "Our Products",               fr: "Nos produits",                             ha: "Kayayyakinmu",                       yo: "Àwọn Ọjà Wa",                         ig: "Ngwaahịa Anyị" },
  generalContracting:{ en: "General Contracting",        fr: "Entreprise générale",                      ha: "Kwangilolin Gabaɗaya",               yo: "Ìkọ́lé Gbogbogbò",                   ig: "Nkwekọrịta Izugbe" },
  imports:           { en: "Imports",                    fr: "Importations",                             ha: "Shigo da Kaya",                      yo: "Àgbékalẹ̀ láti Òkèèrè",              ig: "Mbubata" },
  exports:           { en: "Exports",                    fr: "Exportations",                             ha: "Fitar da Kaya",                      yo: "Ìkójáde sí Òkèèrè",                  ig: "Mbupu" },
  supplyExcellence:  { en: "Supply Excellence",          fr: "Excellence d'approvisionnement",           ha: "Kyakkyawan Samar da Kaya",           yo: "Ìpèsè Àtàtà",                         ig: "Ịdị Mma N'innyefe" },
  motto:             { en: "AD Asperia Per Astra",       fr: "AD Asperia Per Astra",                     ha: "AD Asperia Per Astra",               yo: "AD Asperia Per Astra",                 ig: "AD Asperia Per Astra" },

  // ── Chatbot ──
  chatTitle:        { en: "Chat with AGRL",        fr: "Chat avec AGRL",            ha: "Yi hira da AGRL",               yo: "Ìfọ̀rọ̀wérọ̀ pẹ̀lú AGRL",         ig: "Kparịta ụka na AGRL" },
  chatPlaceholder:  { en: "Type your message...",   fr: "Tapez votre message...",   ha: "Rubuta saƙonka...",              yo: "Tẹ ìfiránṣẹ́ rẹ...",               ig: "Pịnye ozi gị..." },
  chatWelcome:      { en: "Hello! 👋 I'm the AGRL assistant. How can I help you today? Ask me about our products, pricing, or services.",
                      fr: "Bonjour ! 👋 Je suis l'assistant AGRL. Comment puis-je vous aider aujourd'hui ? Demandez-moi nos produits, prix ou services.",
                      ha: "Sannu! 👋 Ni ne mataimakin AGRL. Yaya zan iya taimaka muku a yau? Ku tambaye ni game da kayayyakinmu, farashi, ko ayyukanmu.",
                      yo: "Ẹ káàbọ̀! 👋 Èmi ni olùrànlọ́wọ́ AGRL. Báwo ni mo ṣe lè ràn yín lọ́wọ́ lónìí? Bèèrè lọ́wọ́ mi nípa àwọn ọjà wa, iye owó, tàbí àwọn iṣẹ́ wa.",
                      ig: "Ndewo! 👋 Abụ m onye enyemaka AGRL. Kedu ka m ga-esi nyere gị aka taa? Jụọ m maka ngwaahịa anyị, ọnụahịa, ma ọ bụ ọrụ anyị." },
  chatSending:      { en: "Sending...",             fr: "Envoi...",                  ha: "Ana aikawa...",                 yo: "Nfi ránṣẹ́...",                     ig: "Na-ezipu..." },
  chatError:        { en: "Sorry, something went wrong. Please try again.",
                      fr: "Désolé, une erreur s'est produite. Veuillez réessayer.",
                      ha: "Yi haƙuri, wani abu ya ɓata. Da fatan za ku sake gwadawa.",
                      yo: "Má bínú, ohun kan ti ṣẹlẹ̀. Jọ̀wọ́ gbìyànjú lẹ́ẹ̀kan sí i.",
                      ig: "Ndo, ihe mebiri. Biko nwaa ọzọ." },

  // ── Language Switcher ──
  selectLanguage: { en: "Language", fr: "Langue",  ha: "Harshe",  yo: "Èdè",   ig: "Asụsụ" },
};

export function translate(key: string, locale: Locale): string {
  return translations[key]?.[locale] ?? translations[key]?.en ?? key;
}
