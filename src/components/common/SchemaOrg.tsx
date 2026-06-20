export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://akarakaglobalresources.com/#organization",
        name: "Akaraka Global Resources Limited",
        alternateName: "AGRL",
        description: "Dealers in industrial chemicals, paints, inks, raw materials, coatings, and plastics. Sales, imports, exports and general contractors.",
        url: "https://akarakaglobalresources.com",
        logo: "https://akarakaglobalresources.com/assets/img/akaraka-logo.png",
        image: "https://akarakaglobalresources.com/assets/img/akaraka-logo.png",
        foundingDate: "2000-05-21",
        founder: {
          "@type": "Person",
          name: "Chinebu Longinus Chigozie",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No D1160 Zauda Pazar & S/Gari Layout, Abuja",
          addressLocality: "Abuja",
          addressRegion: "F.C.T.",
          addressCountry: "NG",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+234-816-617-5684",
            contactType: "sales",
            areaServed: "NG",
            availableLanguage: "en",
          },
          {
            "@type": "ContactPoint",
            telephone: "+234-901-598-9177",
            contactType: "customer service",
            areaServed: "NG",
          },
        ],
        email: "akarakaglobalresources@yahoo.com",
        sameAs: [
          "https://facebook.com/akarakaglobalresources",
          "https://linkedin.com/company/akarakaglobalresources",
          "https://twitter.com/akarakaglobal",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://akarakaglobalresources.com/#website",
        url: "https://akarakaglobalresources.com",
        name: "Akaraka Global Resources Limited",
        publisher: { "@id": "https://akarakaglobalresources.com/#organization" },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://akarakaglobalresources.com/#localbusiness",
        name: "Akaraka Global Resources Limited - Head Office",
        description: "Industrial chemical, paint, inks and raw materials supplier in Abuja.",
        image: "https://akarakaglobalresources.com/assets/img/akaraka-logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No D1160 Zauda Pazar & S/Gari Layout, Abuja",
          addressLocality: "Abuja",
          addressRegion: "F.C.T.",
          addressCountry: "NG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.0765,
          longitude: 7.3986,
        },
        telephone: "+234-816-617-5684",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "17:00",
        },
        priceRange: "₦₦",
        parentOrganization: { "@id": "https://akarakaglobalresources.com/#organization" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
